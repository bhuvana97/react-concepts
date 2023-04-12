import React, { useState } from 'react'

const Array = () => {
    const [textarray, settextarray] = useState([])
    const [textinput, settextinput] = useState('')
    const [display, setdisplay] = useState(false)
    const handleChange = (e) => {
        settextinput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        settextarray([...textarray, textinput])  //setextarray([...array declared in usestate,the current value])
        console.log(textarray)
        settextinput("")
        setdisplay(true)

    }
    return (
        <div>
            <h2>form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={textinput} onChange={handleChange} required />
                <button>Submit</button>
            </form>
            <div>
                {display ? <div>{textarray.map((todo) => <div >{todo}</div>)}</div> : ""}

            </div>
        </div>
    )
}

export default Array
