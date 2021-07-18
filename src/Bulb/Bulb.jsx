import { useState } from "react";

function Bulb() {
    const [on, setOn] = useState(false);
    return (
        <div>
            <button onClick={() => setOn(true)}>Click me to tuurn on light</button>
            <button onClick={() => setOn(false)}>Click me to tuurn off light</button>
            {on ? <div style={{ backgroundColor: "green", height: 50, width: 50 }}></div> : null}


            <Circle height={200} width={200} />
            {/* <Circle height={150} width={150} />
            <Circle height={200} width={200} />
            <Circle height={200} width={200} />
            <Circle height={200} width={200} />
            <Circle height={200} width={200} /> */}
            <Button width={120} title="Pres me" />
            <Button width={80} size={40} title="Pres me" />
            <Button width={120} title="Pres me" />
            <Button width={120} title="Pres me" />
            <Button width={120} title="Pres me" />
        </div>
    )
}

export default Bulb;



const Circle = (props) => {
    return (
        <div style={{ height: props.height, width: props.width, backgroundColor: "gray", borderRadius: props.height / 2 }}></div>
    )
}

const Button = (props) => {
    const styles = {
        backgroundColor: props.color ? props.color : "darkblue",
        color: "white",
        height: props.size ? props.size : 30,
        width: props.width ? props.width : 30,
    }
    return (
        <button style={styles}>{props.title}</button>
    )
}