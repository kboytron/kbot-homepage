import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

const draco = new DRACOLoader()
draco.setDecoderConfig({ type: 'js' })
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export const loadGLTFModel = (
  scene,
  glbPath,
  { receiveShadow = true, castShadow = true } = {}
) => {

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.setDRACOLoader(draco)
    loader.setMeshoptDecoder(MeshoptDecoder)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'coin'
        obj.position.set(0, 0, 0)
        obj.scale.set(29, 29, 29)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
