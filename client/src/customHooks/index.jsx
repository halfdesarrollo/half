import { useState } from "react"

export const useToggle = () => {
  const [ toggle, setToggle ] = useState(false)

  const changeOpposite = () => setToggle(!toggle)

  return{
    toggle,
    changeOpposite
  }
}


