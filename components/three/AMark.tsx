import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BRAND_BLUE = '#1A91DA';
const BRAND_DEEP = '#0E4A82';
const BRAND_ORANGE = '#F06525';
const BRAND_GOLD = '#FF9E1B';

const EXTRUDE = {
  depth: 0.32,
  bevelEnabled: true,
  bevelThickness: 0.05,
  bevelSize: 0.05,
  bevelSegments: 4,
} as const;

/** Builds a closed shape from a list of 2D points. */
function shapeFrom(points: [number, number][]): THREE.Shape {
  const shape = new THREE.Shape();
  points.forEach(([x, y], i) => (i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)));
  shape.closePath();
  return shape;
}

// The two strokes of the "A" in the logo mark, plus its crossbar.
const LEFT_STROKE: [number, number][] = [
  [-1.05, -1.35],
  [-0.48, -1.35],
  [0.12, 1.35],
  [-0.16, 1.35],
];
const RIGHT_STROKE: [number, number][] = [
  [0.48, -1.35],
  [1.05, -1.35],
  [0.16, 1.35],
  [-0.12, 1.35],
];
const CROSSBAR: [number, number][] = [
  [-0.62, -0.42],
  [0.62, -0.42],
  [0.62, -0.14],
  [-0.62, -0.14],
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

interface AMarkProps {
  progressRef: React.RefObject<number>;
}

/**
 * The scroll-driven logo mark.
 *
 * Scroll position drives every transform here; nothing is held in React state,
 * so scrolling never triggers a re-render.
 */
const AMark: React.FC<AMarkProps> = ({ progressRef }) => {
  const group = useRef<THREE.Group>(null);
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);
  const barRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const dotRef = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const { camera } = useThree();

  const geometries = useMemo(
    () => ({
      left: new THREE.ExtrudeGeometry(shapeFrom(LEFT_STROKE), EXTRUDE),
      right: new THREE.ExtrudeGeometry(shapeFrom(RIGHT_STROKE), EXTRUDE),
      bar: new THREE.ExtrudeGeometry(shapeFrom(CROSSBAR), EXTRUDE),
    }),
    []
  );

  // Extruded geometries are built once; release the GPU buffers on unmount.
  React.useEffect(() => {
    return () => Object.values(geometries).forEach((g) => g.dispose());
  }, [geometries]);

  useFrame((state, delta) => {
    const p = progressRef.current ?? 0;
    const eased = easeOut(p);

    // Follow the pointer very gently — enough to feel alive, not enough to distract.
    pointer.current.x += (state.pointer.x - pointer.current.x) * Math.min(1, delta * 3);
    pointer.current.y += (state.pointer.y - pointer.current.y) * Math.min(1, delta * 3);

    if (group.current) {
      group.current.rotation.y = -0.5 + eased * Math.PI * 1.15 + pointer.current.x * 0.25;
      group.current.rotation.x = -pointer.current.y * 0.15 + eased * 0.12;
      group.current.position.y = eased * 0.25;
    }

    // The mark opens as you scroll, then settles back together.
    const spread = Math.sin(eased * Math.PI) * 0.42;
    if (leftRef.current) leftRef.current.position.x = -spread;
    if (rightRef.current) rightRef.current.position.x = spread;

    // Crossbar draws itself in once the strokes have parted.
    if (barRef.current) {
      const draw = Math.min(1, Math.max(0, (p - 0.18) / 0.42));
      barRef.current.scale.x = 0.001 + easeOut(draw) * 0.999;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.28;
      ringRef.current.rotation.x = 0.9 + eased * 0.5;
      const s = 1 + eased * 0.28;
      ringRef.current.scale.setScalar(s);
    }

    if (dotRef.current) {
      const angle = eased * Math.PI * 2;
      dotRef.current.position.set(Math.cos(angle) * 1.85, Math.sin(angle) * 0.7 - 0.5, 0.5);
    }

    // Moving the camera in place IS the three.js API: the renderer reads this
    // object every frame and React never re-renders because of it. The lint
    // rule cannot tell that apart from mutating React-owned state.
    /* eslint-disable-next-line react-hooks/immutability */
    camera.position.z = 6.4 - eased * 1.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group} scale={1.05}>
      <mesh ref={leftRef} geometry={geometries.left} castShadow>
        <meshStandardMaterial color={BRAND_BLUE} metalness={0.35} roughness={0.28} />
      </mesh>

      <mesh ref={rightRef} geometry={geometries.right} castShadow>
        <meshStandardMaterial color={BRAND_ORANGE} metalness={0.35} roughness={0.28} />
      </mesh>

      <mesh ref={barRef} geometry={geometries.bar}>
        <meshStandardMaterial color={BRAND_DEEP} metalness={0.4} roughness={0.35} />
      </mesh>

      {/* The thin arc that orbits the mark in the logo. */}
      <mesh ref={ringRef} position={[0, -0.1, -0.6]}>
        <torusGeometry args={[2.15, 0.018, 12, 128]} />
        <meshStandardMaterial
          color={BRAND_GOLD}
          emissive={BRAND_GOLD}
          emissiveIntensity={0.4}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* The dot. */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial
          color={BRAND_ORANGE}
          emissive={BRAND_ORANGE}
          emissiveIntensity={0.55}
        />
      </mesh>
    </group>
  );
};

export default AMark;
