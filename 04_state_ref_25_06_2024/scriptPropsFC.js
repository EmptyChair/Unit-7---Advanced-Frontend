// REACT - FUNCTIONAL component

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Functionality test!");

const Student = (props) => {
  console.log(props);
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
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
