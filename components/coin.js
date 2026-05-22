import { useState, useEffect, useRef, useCallback } from 'react'
import {
  WebGLRenderer,
  SRGBColorSpace,
  Scene,
  Vector3,
  DirectionalLight,
  OrthographicCamera,
  AmbientLight,
  Box3
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { CoinSpinner, CoinContainer } from './coin-loader'

const easeOutCirc = x => Math.sqrt(1 - Math.pow(x - 1, 4))

const Coin = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const urlCoinGLB = process.env.NODE_ENV === 'production' 
    ? 'https://d3hndibbbri2s5.cloudfront.net/coin.glb' 
    : '/coin.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(globalThis.window?.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputColorSpace = SRGBColorSpace
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer

      const scene = new Scene()

      const target = new Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      const directionalLight = new DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(0, 20, 10)
      scene.add(directionalLight)

      const scale = scH * 0.005 + 4.8
      const camera = new OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new AmbientLight(0xcccccc, Math.PI)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, urlCoinGLB, {
        receiveShadow: false,
        castShadow: false
      }).then(obj => {
        const box = new Box3().setFromObject(obj)
        const center = box.getCenter(new Vector3())
        controls.target.set(center.x, center.y, center.z)
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.autoRotateSpeed = (frame / 120) * 5
          controls.update()
        }

        renderer.render(scene, camera)
      }

      animate()

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [urlCoinGLB])

  useEffect(() => {
    globalThis.window?.addEventListener('resize', handleWindowResize, false)
    return () => {
      globalThis.window?.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <CoinContainer ref={refContainer}>
      {loading && <CoinSpinner />}
    </CoinContainer>
  )
}

export default Coin
