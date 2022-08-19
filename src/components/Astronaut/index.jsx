import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/astronaut/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <pointLight color="white" position={[50, 0, 50]} intensity={1} />
        <group rotation={[Math.PI / 2, -1.5, 0]} scale={0.0095} position={[0, -0.5, 0.9]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <pointLight color="orange" position={[200, 0, 50]} intensity={1} />
            <mesh geometry={nodes.mtl_us_space_glove_c_mtl_us_space_glove_c_0.geometry} material={materials.mtl_us_space_glove_c} />
            <mesh geometry={nodes.mtl_us_space_glove_c_1_mtl_us_space_glove_c_0.geometry} material={materials.mtl_us_space_glove_c} />
            <mesh geometry={nodes.mtl_us_space_glove_c_2_mtl_us_space_glove_c_0.geometry} material={materials.mtl_us_space_glove_c} />
            <mesh geometry={nodes.mtl_us_space_headgear_g_mtl_us_space_headgear_g_0.geometry} material={materials.mtl_us_space_headgear_g} />
            <mesh geometry={nodes.mtl_us_space_headgear_g_1_mtl_us_space_headgear_g_0.geometry} material={materials.mtl_us_space_headgear_g} />
            <mesh geometry={nodes.mtl_us_space_headgear_b_mtl_us_space_headgear_b_0.geometry} material={materials.mtl_us_space_headgear_b} />
            <mesh geometry={nodes.mtl_us_space_headgear_b_1_mtl_us_space_headgear_b_0.geometry} material={materials.mtl_us_space_headgear_b} />
            <mesh geometry={nodes.mtl_us_space_headgear_b_2_mtl_us_space_headgear_b_0.geometry} material={materials.mtl_us_space_headgear_b} />
            <mesh geometry={nodes.mtl_us_space_upperbody_g_mtl_us_space_upperbody_g_0.geometry} material={materials.mtl_us_space_upperbody_g} />
            <mesh geometry={nodes.mtl_us_space_boot_c_mtl_us_space_boot_c_0.geometry} material={materials.mtl_us_space_boot_c} />
            <mesh geometry={nodes.mtl_us_space_alpha_a_mtl_us_space_alpha_a_0.geometry} material={materials.mtl_us_space_alpha_a} />
            <mesh geometry={nodes.mtl_us_space_lowerbody_g_mtl_us_space_lowerbody_g_0.geometry} material={materials.mtl_us_space_lowerbody_g} />
            <mesh geometry={nodes.mtl_us_space_lowerbody_g_1_mtl_us_space_lowerbody_g_0.geometry} material={materials.mtl_us_space_lowerbody_g} />
            <mesh geometry={nodes.mtl_us_space_lowerbody_g_2_mtl_us_space_lowerbody_g_0.geometry} material={materials.mtl_us_space_lowerbody_g} />
            <mesh geometry={nodes.mtl_us_space_loadout_d_mtl_us_space_loadout_d_0.geometry} material={materials.mtl_us_space_loadout_d} />
            <mesh geometry={nodes.mtl_us_space_loadout_d_1_mtl_us_space_loadout_d_0.geometry} material={materials.mtl_us_space_loadout_d} />
            <mesh geometry={nodes.mtl_us_space_loadout_d_2_mtl_us_space_loadout_d_0.geometry} material={materials.mtl_us_space_loadout_d} />
            <mesh geometry={nodes.mtl_us_space_loadout_c_mtl_us_space_loadout_c_0.geometry} material={materials.mtl_us_space_loadout_c} />
            <mesh geometry={nodes.mtl_us_space_loadout_c_1_mtl_us_space_loadout_c_0.geometry} material={materials.mtl_us_space_loadout_c} />
            <mesh geometry={nodes.mtl_us_space_alpha_aa_mtl_us_space_alpha_aa_0.geometry} material={materials.mtl_us_space_alpha_aa} />
            <mesh geometry={nodes.mtl_us_space_loadout_b_mtl_mtl_us_space_loadout_b_mtl_0.geometry} material={materials.mtl_us_space_loadout_b_mtl} />
            <mesh geometry={nodes.mtl_us_space_loadout_b_mtl_1_mtl_us_space_loadout_b_mtl_0.geometry} material={materials.mtl_us_space_loadout_b_mtl} />
            <mesh geometry={nodes.mtl_us_space_headgear_b_3_mtl_us_space_headgear_b_0.geometry} material={materials.mtl_us_space_headgear_b} />
            <mesh geometry={nodes.mtl_us_space_headgear_b_4_mtl_us_space_headgear_b_0.geometry} material={materials.mtl_us_space_headgear_b} />
            <mesh geometry={nodes.mtl_us_space_headgear_g_2_mtl_us_space_headgear_g_0.geometry} material={materials.mtl_us_space_headgear_g} />
            <mesh geometry={nodes.mtl_us_space_headgear_g_3_mtl_us_space_headgear_g_0.geometry} material={materials.mtl_us_space_headgear_g} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
