"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── Floating Particles ─────────────────────────────────────────────────────────
function Particles({ count = 80 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.sin(i * 1.7) * 2 + Math.cos(i * 0.3)) * 2.5,
        (Math.cos(i * 2.3) * 2 + Math.sin(i * 0.7)) * 2,
        (Math.sin(i * 0.9) * 1.5) - 1,
      ] as [number, number, number],
      speed: 0.2 + (i % 10) * 0.05,
      offset: i * 0.5,
      scale: 0.015 + (i % 5) * 0.008,
    }));
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset) * 0.3,
        p.position[1] + Math.cos(t * p.speed * 0.7 + p.offset) * 0.4,
        p.position[2] + Math.sin(t * 0.3 + p.offset) * 0.2
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#a5b4fc" transparent opacity={0.4} />
    </instancedMesh>
  );
}

// ─── Ambient Gradient Sphere ────────────────────────────────────────────────────
function GradientSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={ref} position={[0, 0, -2]} scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.02}
          transmission={0.95}
          roughness={0.1}
          color="#e0e7ff"
        />
      </mesh>
    </Float>
  );
}

// ─── Soft Light Rays ────────────────────────────────────────────────────────────
function LightRays() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} color="#c7d2fe" />
      <directionalLight position={[-3, 2, 4]} intensity={0.2} color="#ddd6fe" />
      <pointLight position={[0, 3, 2]} intensity={0.3} color="#818cf8" distance={10} />
    </>
  );
}

// ─── Main Scene ─────────────────────────────────────────────────────────────────
function Scene({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    // Smooth mouse-driven rotation (max 6 degrees)
    const targetRotY = mouseX * 0.1;
    const targetRotX = -mouseY * 0.06;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <LightRays />
      <GradientSphere />
      <Particles count={60} />
    </group>
  );
}

// ─── Exported Canvas Wrapper ────────────────────────────────────────────────────
interface HeroSceneProps {
  mouseX?: number;
  mouseY?: number;
  className?: string;
}

export default function HeroScene({ mouseX = 0, mouseY = 0, className }: HeroSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Scene mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
