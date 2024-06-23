const root = ReactDOM.createRoot(document.getElementById("root"));

//class component script

class Cohort40FS extends React.Component {
    //obligatory render method
    render() {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Cohort40FS</h1>
          <h1 className="text-center">Cohort40FS</h1>
        </div>
      );
    }
  }

root.render(<Cohort40FS />);
