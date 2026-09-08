import React from 'react';
import { Canvas } from '@react-three/fiber';
import AMark from './AMark';

interface SceneProps {
  progressRef: React.RefObject<number>;
  /** When false the render loop is parked — the mark is off screen. */
  active: boolean;
}

const Scene: React.FC<SceneProps> = ({ progressRef, active }) => (
  <Canvas
    frameloop={active ? 'always' : 'never'}
    camera={{ position: [0, 0, 6.4], fov: 42 }}
    // Cap the pixel ratio: retina phones otherwise render 3x the pixels for no visible gain.
    dpr={[1, 1.75]}
    gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
  >
    <ambientLight intensity={0.85} />
    <directionalLight position={[4, 6, 5]} intensity={1.5} />
    <directionalLight position={[-5, -2, 2]} intensity={0.5} color="#1A91DA" />
    <pointLight position={[2, -3, 4]} intensity={28} color="#FF9E1B" distance={12} />
    <AMark progressRef={progressRef} />
  </Canvas>
);

export default Scene;
