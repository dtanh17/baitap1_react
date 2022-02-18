import { useState } from "react";

function Plus(){

    const [counter, setCounter] = useState(1)

    const handelPlus = ()=>{
        setCounter(counter+1)
    }

    const handelSub = ()=>{
        if(counter>0)
            setCounter(counter - 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handelPlus}>Plus</button>
            <button onClick={handelSub}>Sub</button>
        </div>
    )
}

export default Plus