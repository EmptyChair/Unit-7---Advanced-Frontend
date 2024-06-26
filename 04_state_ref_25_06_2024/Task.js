const root = ReactDOM.createRoot(document.getElementById("root"));
// purpose: if something changes, the little change must be re-rendered without re-rendering everything
// local state! variable and method which changes it. If it changes, re-renders what is dependent on it and only that
// example: Like on Youtube. Like counter goes up, the page remains the same

/////////////////////
//ULTIMATE IMPROVED TEACHER SOLUTION
/////////////////////
// JSX parts (HTML) hidden inside JS

const Task5 = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isName, setIsName] = React.useState("Name Unknown...");
  // Все React инструменты (hook) начинаются с приставки use

  const textRef = React.useRef(); 
  // ссылка, которую можно связать с каким-то элементом, JSX-аналог current: document.getElementById() в JS
  // возвра
  //console.log(textRef);

  const handleClickSave = () => {
    //console.log(textRef.current.value);  //comparable with getElementById in JS
    setIsName(textRef.current.value);
    setIsEdit(false)
  }

  return isEdit ? (
    <>
      <div>
        {/* diving into JS using the {} */}
        <textarea ref={textRef} defaultValue={isName}></textarea>
        <button onClick={handleClickSave}>Save</button>
      </div>
    </>
  ) : (
    <>
      <div>
        <p>{isName}</p>
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
    <Task5 />
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
