import React, { useEffect, useMemo } from 'react';

// Add type definition for anime.js to avoid TypeScript errors.
declare const anime: any;

const Hero: React.FC = () => {
  const width = 1920;
  const height = 1080;
  const numNodes = 30;
  const numAiNodes = 5;

  // Generate random node positions
  const nodes = useMemo(() => {
    const generatedNodes = Array.from({ length: numNodes }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 2, // radius 2 to 6
      isAi: false,
    }));
    
    // Designate some as AI nodes
    let aiNodesAssigned = 0;
    while(aiNodesAssigned < numAiNodes) {
        const index = Math.floor(Math.random() * numNodes);
        if (!generatedNodes[index].isAi) {
            generatedNodes[index].isAi = true;
            generatedNodes[index].r = Math.random() * 8 + 8; // larger radius for AI nodes
            aiNodesAssigned++;
        }
    }
    return generatedNodes;
  }, [numNodes, numAiNodes, width, height]);


  const { paths, particles } = useMemo(() => {
    const lineSet = new Set<string>();
    const pathList: { pathData: string; id: string }[] = [];
    const particleList: { id: string }[] = [];

    nodes.forEach((node, i) => {
      let neighbors = nodes
        .map((n, j) => ({ ...n, index: j, dist: Math.hypot(n.x - node.x, n.y - node.y) }))
        .filter((n) => n.index !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 2);

      neighbors.forEach(neighbor => {
        const lineKey = [i, neighbor.index].sort().join('-');
        if (!lineSet.has(lineKey)) {
          lineSet.add(lineKey);
          const id = `${i}-${neighbor.index}`;
          pathList.push({
            id,
            pathData: `M ${node.x} ${node.y} L ${neighbor.x} ${neighbor.y}`
          });
          particleList.push({ id });
        }
      });
    });

    return { paths: pathList, particles: particleList };
  }, [nodes]);

  useEffect(() => {
    // Ensure anime.js is loaded
    if (typeof anime === 'undefined') {
      return;
    }

    // AI Node pulse animation
    anime({
      targets: '.ai-node',
      scale: [1, 1.3],
      filter: [
        'drop-shadow(0 0 2px var(--color-secondary))',
        'drop-shadow(0 0 8px var(--color-secondary))'
      ],
      duration: 2500,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      transformOrigin: '50% 50%',
    });

    // Animate each particle along its corresponding path
    particles.forEach(p => {
      const pathSelector = `#path-${p.id}`;
      const particleSelector = `#particle-${p.id}`;

      // Check if elements exist in the DOM before creating animation
      if (document.querySelector(pathSelector) && document.querySelector(particleSelector)) {
        const motionPath = anime.path(pathSelector);
        anime({
          targets: particleSelector,
          translateX: motionPath('x'),
          translateY: motionPath('y'),
          easing: 'linear',
          duration: Math.random() * 5000 + 5000,
          delay: Math.random() * 5000,
          loop: true,
        });
      }
    });

  }, [paths, particles]);

  return (
    <section id="home" className="relative text-white pt-32 pb-20 overflow-hidden bg-dark">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
        <svg 
          width="100%" 
          height="100%" 
          viewBox={`0 0 ${width} ${height}`} 
          preserveAspectRatio="xMidYMid slice"
          style={{
            '--color-primary-light': '#00BCD4',
            '--color-secondary': '#FF8C00',
            '--color-line': 'rgba(0, 188, 212, 0.2)'
          } as React.CSSProperties}
        >
          <g>
            {paths.map(p => (
              <path 
                key={p.id} 
                id={`path-${p.id}`} 
                d={p.pathData} 
                stroke="var(--color-line)" 
                strokeWidth="1" 
                fill="none" 
              />
            ))}
          </g>

          <g>
            {nodes.map((n, i) => (
              <circle
                key={i}
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="var(--color-primary-light)"
                className={n.isAi ? 'ai-node' : ''}
              />
            ))}
          </g>
          
          <g>
            {particles.map(p => (
                <circle key={p.id} id={`particle-${p.id}`} r="3" fill="var(--color-secondary)" opacity="0.8" />
            ))}
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight">
          WorkflowCracy
        </h1>
        <p className="text-2xl md:text-3xl text-cyan-100 max-w-3xl mx-auto">
          Rule Your Business with <span className="text-secondary font-semibold">Automated</span> Workflows
        </p>
        <p className="text-lg md:text-xl mt-8 mb-8 text-cyan-200 max-w-3xl mx-auto">
          We leverage cutting-edge AI to streamline your operations, boost efficiency, and unlock your business's true potential.
        </p>
        <a
          href="#contact"
          className="bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 inline-block"
        >
          Schedule a Free Demo
        </a>
      </div>
    </section>
  );
};

export default Hero;