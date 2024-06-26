// REACT - CLASS component

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Functionality test!");

//JSX doesn't accept numbers, hence age as string

class Student extends React.Component {
  render() {
    //const name = this.props.name;
    //const age = this.props.age;
    // ALTERNATIVE:
    const { name, age } = this.props;
    return (
      <>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
      </>
    );
  }
}

root.render(
  <>
    <Student name="Tigran" age={50} />
    <Student name="Jim" age={25} />
    <Student name="Evan" age={23 - 6} />
    <Student name="Niles" age={18} />
    <Student name="Killigan" age={25} />
  </>
);
