import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useRef } from "react"
import { useSnapshot } from "valtio"

import state from "../store"

const CameraRig = ({ children}) => {
  const group = useRef(null)
  const snap = useSnapshot(state)

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )

  })


  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig