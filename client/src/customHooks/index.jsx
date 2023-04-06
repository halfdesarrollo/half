import { useState } from "react"

export const useBoolean = () => {
  const [ boolean, setBoolean ] = useState(false)

  const changeOpposite = () => setBoolean(!boolean)

  return{
    boolean,
    changeOpposite
  }
}
