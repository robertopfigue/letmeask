import { useState } from "react";

type ButtonProps = {
    children: string;
}

export function Button(props: ButtonProps){
    //let counter = 0;
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={increment}>{props.children}</button>
            <br />
            <p>{counter}</p>
        </div>
    )
}