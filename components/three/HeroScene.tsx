"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Minimal ambient WebGL — soft animated gradient mesh.
 * No particles, no spheres. Just subtle depth and light movement.
 * Makes the dashboard feel alive without drawing attention.
 */
function GradientMesh({ mouseX = 0, mouseY = 0 }: { mouseX: number; mouseY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    // Very subtle rotation driven by time + mouse
    meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.03;
    meshRef.current.rotation.x = Math.cos(t * 0.08) * 0.02 + mouseY * 0.02;
    meshRef.current.rotation.y = Math.sin(t * 0.06) * 0.02 + mouseX * 0.02;
    // Subtle scale breathing
    const s = 1 + Math.sin(t * 0.15) * 0.02;
    meshRef.current.scale.set(s, s, 1);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <planeGeometry args={[12, 12, 1, 1]} />
      <meshBasicMaterial
        ref={materialRef}
        transparent
        opacity={0.12}
        color="#93c5fd"
      />
    </mesh>
  );
}

function AmbientLight({ mouseX = 0, mouseY = 0 }: { mouseX: number; mouseY: number }) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    const t = clock.getElapsedTime();
    // Light slowly drifts + follows cursor gently
    lightRef.current.position.x = Math.sin(t * 0.2) * 2 + mouseX * 1.5;
    lightRef.current.position.y = Math.cos(t * 0.15) * 1.5 + mouseY * 1;
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight ref={lightRef} position={[0, 0, 3]} intensity={0.4} color="#bfdbfe" distance={12} />
    </>
  );
}

interface HeroSceneProps {
  mouseX?: number;
  mouseY?: number;
  className?: string;
}

export default function HeroScene({ mouseX = 0, mouseY = 0, className }: HeroSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <AmbientLight mouseX={mouseX} mouseY={mouseY} />
        <GradientMesh mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
