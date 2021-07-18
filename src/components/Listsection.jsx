import OneToDo from './OneToDo';


const todos = ["Play music", "Eat Banku", "Braid hair"];


function Listsection(){
    return(
        // designing a section to contain to-do tasks
        <div className="list">
            <div className="to-do">
                {/* section to contain info about a to-do task */}
               {/* <OneToDo/>
               <OneToDo/> */}
               {todos.map((todo) => <OneToDo todo={todo} />)}
            </div>
         {/* //button to load more to-do tasks */}
            <div className="loadBtn">
                Loading
            </div>
        </div>
    )
}
export default Listsection