import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Torus, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} position={[2, 0, 0]}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[0.8, 0.3, 32, 64]} position={[-2.5, 1, -1]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </Float>
  );
};

const AnimatedIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[0.7]} position={[-1.5, -1.5, 0]}>
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.6}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const FloatingRings = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current && ring2Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ring2Ref.current.rotation.x = -state.clock.elapsedTime * 0.2;
      ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <group position={[3, -1, -2]}>
      <Torus ref={ring1Ref} args={[1, 0.05, 16, 64]}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </Torus>
      <Torus ref={ring2Ref} args={[1.3, 0.03, 16, 64]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </Torus>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00ffff" />
          <pointLight position={[10, -10, 5]} intensity={0.3} color="#a855f7" />
          
          <AnimatedSphere />
          <AnimatedTorus />
          <AnimatedIcosahedron />
          <FloatingRings />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
