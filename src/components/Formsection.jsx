import { useState } from "react";

function Formsection(){
    const [title, changeTitle] = useState("Hello")

    return(
        //designing a section to contain the form which takes info about a to-do task
        <div className="form">
            {/* label for the form */}
            {/* {title} */}
            <div className="label">
                TO DO
            </div>

            {/* the main form */}
            <form>
                <input onChange={e => changeTitle(e.target.value)} type="text" className="formbar"></input>
                <label>Title</label>
                    
                <input type="text" className="formbar"></input>
                <label>Task</label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Formsection