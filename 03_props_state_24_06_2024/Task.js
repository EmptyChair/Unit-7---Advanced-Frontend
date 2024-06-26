const root = ReactDOM.createRoot(document.getElementById("root"));
// purpose: if something changes, the little change must be re-rendered without re-rendering everything
// local state! variable and method which changes it. If it changes, re-renders what is dependent on it and only that
// example: Like on Youtube. Like counter goes up, the page remains the same

/////////////////////
//ORIGINAL
/////////////////////

const Task1 = () => {
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

/////////////////////
//HOMEWORK
/////////////////////

const Task2 = () => {
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
        <button onClick={changeState}>Edit </button>
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

/////////////////////
//TEACHER SOLUTION
/////////////////////
// JSX parts (HTML) hidden inside JS

const Task3 = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  // Все React инструменты (hook) начинаются с приставки use

  const handleClickSave = () => {
    // при клике перерисовывается всё, что зависит от isEdit
    setIsEdit(false);
  };

  const handleClickEdit = () => {
    // при клике перерисовывается всё, что зависит от isEdit
    setIsEdit(true);
  };

  return isEdit ? (
    <>
      <div>
        <textarea defaultValue="Name"></textarea>
        <button onClick={handleClickSave}>Save</button>
      </div>
    </>
  ) : (
    <>
      <div>
        <p>Name</p>
        <button onClick={handleClickEdit}>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
};

/////////////////////
//IMPROVED TEACHER SOLUTION
/////////////////////
// JSX parts (HTML) hidden inside JS

const Task4 = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  // Все React инструменты (hook) начинаются с приставки use

  return isEdit ? (
    <>
      <div>
        <textarea defaultValue="Name"></textarea>
        <button onClick={() => setIsEdit(false)}>Save</button>
      </div>
    </>
  ) : (
    <>
      <div>
        <p>Name</p>
        {/* () => setIsEdit(true) - RIGHT! It's a function which starts setIsEdit with following parameter   */}
        {/* setIsEdit(true) - WRONG! This is NOT a function, but a result of such function! Since the return is undefined, it'll fail!!!  */}
        {/* setIsEdit  - WRONG! Method requires parameters and won't work   */}
        { /* in JS onclick requires a function to be executed when clicked */}
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
};

//RENDER

root.render(
  <>
    <Task4 />
  </>
);

// (!) передача props возможна только от непосредственного родителя к дочернему компоненту.
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
