import { useCallback, useEffect, useRef } from "react";

const useAnimationFrame = (enabled: boolean, callback: () => void) => {
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>()

  const animate = useCallback(() => {
    callback()
    requestRef.current = requestAnimationFrame(animate)
  }, [callback])

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate)
      return() => {
        if (requestRef.current) {
          return cancelAnimationFrame(requestRef.current)
        }
      }
    }
  }, [enabled, animate])
}

export default useAnimationFrame
