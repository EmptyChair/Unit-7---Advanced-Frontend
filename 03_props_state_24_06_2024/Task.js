const root = ReactDOM.createRoot(document.getElementById("root"));
// purpose: if something changes, the little change must be re-rendered without re-rendering everything
// local state! variable and method which changes it. If it changes, re-renders what is dependent on it and only that
// example: Like on Youtube. Like counter goes up, the page remains the same
const Task = () => {
    // деструктуризация из массива
    // картеж/tuple
    const [isEdit, setIsEdit] = React.useState(false);
    //isEdit - local state
    //setIsEdit - метод, за работой которого следит реакт, который изменит локальное состояние

    /*
    console.log("isEdit "+isEdit);
    setIsEdit(true);
    //нельзя менять стейт напрямую, потому что реакт не будет следить за изменениями
    console.log("isEdit after setIsEdit "+isEdit);
    */

    return <>task</>

}

const TaskState = () => {
    const [isEdit, setIsEdit] = React.useState(false);
    /*
    console.log("Check3!")
    setIsEdit(false); 
    */
    if (isEdit) {
        return (
            <div>
                <p>Name</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );
    } else {
        return (
            <div>
                <textarea>Name</textarea>
                <button>Save</button>
            </div>
        );    
    }  

};

root.render(
    <>
        <TaskState />
    </>
);

/*
 Режим просмотра:

    <p>Name<p>
    <button>Edit</button>
    <button>Del</button>

    Режим редактирования:

    <textarea>Name</textarea>
    <button>Save</button>


*/
