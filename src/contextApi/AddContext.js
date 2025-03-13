import { createContext, useState } from 'react'

let AddContext= createContext()

export function AddProvider({children}){
    const [lightOn,setLightOn]=useState(false)

    return(
<AddContext.Provider value={{lightOn,setLightOn}}>
{children}
</AddContext.Provider>
    )
}


export default AddContext