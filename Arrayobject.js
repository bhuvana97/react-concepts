import React, { useState } from 'react'
const Arrayobject = () => {
    const [first, setfirst] = useState({ username: "", password: "" })
    const [display, setdisplay] = useState(false)
    const handleClick = () => {
        console.log("clicked")
        setfirst({ ...first, password: "admin" })
        console.log(first.password)
        setdisplay(true)

    }

    return (
        <div>
            <h4>Arrayobject</h4>


            <button onClick={handleClick}>Click</button>


            {display ? <div> {first.password}</div> : ""}

           
        </div>
    )
}

export default Arrayobject
