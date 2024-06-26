// REACT - FUNCTIONAL component

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Functionality test!");

//Деструктуризация!
const Student = ({name : studentName, age: studentAge}) => {
  //console.log(props);
  //const { name, age } = props;
  // NOTE! due to functional nature of this script, "this." is no longer applicable
  return (    
    <>
      <h1>Name: {studentName}</h1>
      <h1>Age: {studentAge}</h1>
    </>
  );
};

// {}  - выход в javascript из JSX

//JSX doesn't accept numbers, hence age as string

root.render(
  <>
  { /*1. передача props */ }
    <Student name="Tigran" age={50} />
    <Student name="Jim" age={25} />
    <Student name="Evan" age={37 - 6} />
    <Student name="Niles" age={18} />
    <Student name="Killigan" age={25} />
  </>
);
