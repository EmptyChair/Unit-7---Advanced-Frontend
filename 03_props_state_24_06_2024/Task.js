const root = ReactDOM.createRoot(document.getElementById("root"));
// purpose: if something changes, the little change must be re-rendered without re-rendering everything
// local state! variable and method which changes it. If it changes, re-renders what is dependent on it and only that
// example: Like on Youtube. Like counter goes up, the page remains the same
const Task = () => {
  // деструктуризация из массива
  // картеж/tuple
  const [isEdit, setIsEdit] = React.useState(false);
  // react hook - все начинаются с use
  //isEdit - local state
  //setIsEdit - метод, за работой которого следит реакт, который изменит локальное состояние

  /*
    console.log("isEdit "+isEdit);
    setIsEdit(true);
    //нельзя менять стейт напрямую, потому что реакт не будет следить за изменениями
    console.log("isEdit after setIsEdit "+isEdit);
    */

  return <>task</>;
};



const TaskState = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  //useState(0) is also Okay
  /*
    console.log("Check3!")
    setIsEdit(false); 
    */
    function changeState() {
        if (isEdit) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
        
        //setIsEdit(isEdit+1);
    }
  if (isEdit) {
    return (
      <div>
        <p>Name</p>
        <button onClick={changeState}>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
  return (
    <div>
      <textarea>Name</textarea>
      <button onClick={changeState}>Save</button>
    </div>
  );
};

root.render(
  <>
    <TaskState />
  </>
);

// передача props возможна только от непосредственного родителя к дочернему компоненту.
// чтобы передавать данные в компонент вниз по цепочке, можно просто передавать от самого родительского родителя вниз по цепочке - дедушка, родитель, дитя
// Но! это не очень удобно, поскольку мы задействуем очень много компонентов

/*
 Режим просмотра:

    <p>Name<p>
    <button>Edit</button>
    <button>Del</button>

    Режим редактирования:

    <textarea>Name</textarea>
    <button>Save</button>


*/
