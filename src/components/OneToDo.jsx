function OneToDo(props){
    return(
        <div className="one-to-do">
        <div className="bar">
            {props.todo}
        </div>
        <div className="tick">
        <i class='bx bx-check icon'></i>
        </div>
        <div className="bin">
        <i class='bx bx-trash-alt icon' ></i>
        </div>
    </div>
    )
}
export default OneToDo