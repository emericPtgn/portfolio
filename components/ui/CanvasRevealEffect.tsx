"use client";
import { cn } from "@/utils/cn";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  /**
   * 0.1 - slower
   * 1.0 - faster
   */
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
            opacity *= step(intro_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          `}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  const uniforms = useMemo<THREE.ShaderMaterialParameters["uniforms"]>(() => {
    let colorsArray = [
      colors[0],
      colors[0],
      colors[0],
      colors[0],
      colors[0],
      colors[0],
    ];
    if (colors.length === 2) {
      colorsArray = [
        colors[0],
        colors[0],
        colors[0],
        colors[1],
        colors[1],
        colors[1],
      ];
    } else if (colors.length === 3) {
      colorsArray = [
        colors[0],
        colors[0],
        colors[1],
        colors[1],
        colors[2],
        colors[2],
      ];
    }

    return {
      u_colors: {
        value: colorsArray.map((color) => new THREE.Color(color[0] / 255, color[1] / 255, color[2] / 255)),
      },
      u_opacities: {
        value: opacities,
      },
      u_total_size: {
        value: totalSize,
      },
      u_dot_size: {
        value: dotSize,
      },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <Shader
      colors={colors}
      opacities={opacities}
      shader={shader}
      uniforms={uniforms}
      center={center}
    />
  );
};

type Uniforms = {
  [key: string]: {
    value: number[] | number[][] | number;
  };
};

interface ShaderMaterialProps {
  source: string;
  uniforms?: Uniforms;
  maxFps?: number;
}

const ShaderMaterialComponent: React.FC<ShaderMaterialProps> = ({
  source,
  uniforms,
  maxFps = 60,
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);
  const lastFrameTime = useRef(0);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime.current < 1 / maxFps) {
      return;
    }
    lastFrameTime.current = timestamp;

    const material = ref.current.material as THREE.ShaderMaterial;
    if (material.uniforms.u_time) {
      material.uniforms.u_time.value = timestamp;
    }
  });

  const getUniforms = useMemo(() => {
    const preparedUniforms: THREE.ShaderMaterialParameters["uniforms"] = {
      ...uniforms,
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(size.width * 2, size.height * 2) },
    };
  
    return preparedUniforms;
  }, [uniforms, size.width, size.height]);
  

  // Shader material
  const material = useMemo<THREE.ShaderMaterial>(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 position;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main(){
          vec2 pos = position;
          gl_Position = vec4(pos, 0.0, 1.0);
          fragCoord = (pos + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: uniforms ?? getUniforms(),
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [getUniforms, source, uniforms]);

  useEffect(() => {
    // Update resolution on resize
    if (material.uniforms.u_resolution) {
      material.uniforms.u_resolution.value.set(size.width * 2, size.height * 2);
    }
  }, [size.width, size.height, material.uniforms]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader: React.FC<{
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}> = ({ source, uniforms, maxFps = 60 }) => {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterialComponent source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
};
