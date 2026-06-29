"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles({ count = 150 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.4} sizeAttenuation={true} />
    </points>
  );
}

function WireframeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    
    if (groupRef.current) {
      const targetX = (mouse.x * Math.PI) / 8;
      const targetY = (mouse.y * Math.PI) / 8;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Center>
          <mesh ref={meshRef}>
            <icosahedronGeometry args={[2, 2]} />
            <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.3} />
          </mesh>
        </Center>
      </Float>
    </group>
  );
}

export function WireframeHead() {
  return (
    <div className="h-[50vh] md:h-[70vh] w-full flex items-center justify-center pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Particles count={150} />
        <WireframeMesh />
      </Canvas>
    </div>
  );
}
