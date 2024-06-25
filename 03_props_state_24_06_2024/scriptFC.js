// REACT - FUNCTIONAL component

const root = ReactDOM.createRoot(document.getElementById("root"));
//functional component script
//get a reference to the only page element

//this function will show this
//{ {} } means an object in java Script

const Cohort40FS_0 = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cohort40FS</h1>
      <h1 className="text-center">Cohort40FS</h1>
    </div>
  );
};

// HOMEWORK
/*
- if-else
- ternary
- one return
*/

//IF-ELSE VERSION
const Cohort40FS_1 = () => {
  // четные - текст направо, нечётные - текст налево
  // det%2 === 0 также false, поэтому сравнение можно сократить
  const det = 1;  
  if (det % 2) {
    return (
      <div>
        <h1 style={{ textAlign: "right" }}>Cohort40FS</h1>
        <h1 className="text-end" style={{ textAlign: "right" }}>
          Cohort40FS IF/ELSE
        </h1>
      </div>
    );
  } 
  //ELSE NOT NEEDED! CLEAN CODE PRACTICE
  return (
    <div>
      <h1 style={{ textAlign: "left" }}>Cohort40FS</h1>
      <h1 className="text-right" style={{ textAlign: "left" }}>
        Cohort40FS IF/ELSE
      </h1>
    </div>
  );  
};

//TERNARY VERSION
// четные - текст направо, нечётные - текст налево

const Cohort40FS_2 = () => {
  const det2 = 1;
  return (
    <div>
      { (det2 % 2) ? (
        <div style={{ textAlign: "right" }}>
          <h1>Cohort40FS</h1>
          <h1 className="text-end">Cohort40FS</h1>
        </div>
      ) : (
        <div style={{ textAlign: "left" }}>
          <h1>Cohort40FS</h1>
          <h1 className="text-right">Cohort40FS</h1>
        </div>
      )}
    </div>
  );
};

// ADVANCED
const Cohort40FS_3 = () => {
  const num = 2;
  return (  
  <div style={ { textAlign: num%2 ? "right" : "left"} }>
    <h1>Cohort40FS</h1>
    <h1 className="text-right">Cohort40FS</h1>
  </div>  

  );

}

//render the function
root.render(
  <>
    <Cohort40FS_3 />
    <Cohort40FS_3 />
    <Cohort40FS_3 />
  </>
);
