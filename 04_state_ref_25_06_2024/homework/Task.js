const root = ReactDOM.createRoot(document.getElementById("root"));
// purpose: if something changes, the little change must be re-rendered without re-rendering everything
// local state! variable and method which changes it. If it changes, re-renders what is dependent on it and only that
// example: Like on Youtube. Like counter goes up, the page remains the same

/////////////////////
//ULTIMATE IMPROVED TEACHER SOLUTION
/////////////////////
// JSX parts (HTML) hidden inside JS

const Champion = (props) => {
  return (
    <>
      <h3>Name: {props.name}</h3>
      <h3>Inaugurated: {props.start}</h3>
      <h3>Deposed: {props.finish}</h3>
    </>
  );
};

//RENDER

root.render(
  <>
    <h1>WORLD CHESS CHAMPIONS</h1>
    <>--------------</>
    <Champion name="Wilhelm Steinitz " start={1886} finish={1894} />
    <>--------------</>
    <Champion name="Emanuel Lasker " start={1894} finish={1921} />
    <>--------------</>
    <Champion name="José Raúl Capablanca " start={1921} finish={1927} />
    <>--------------</>
    <Champion name="Alexander Alekhine " start={1927} finish={1935} />
    <>--------------</>
    <Champion name="Max Euwe " start={1935} finish={1937} />
    <>--------------</>
    <Champion name="Alexander Alekhine " start={1937} finish={1946} />
    <>--------------</>
    <Champion name="Mikhail Botvinnik " start={1948} finish={1957} />
    <>--------------</>
    <Champion name="Mikhail Botvinnik " start={1948} finish={1957} />
    <>--------------</>
    <Champion name="Vasily Smyslov " start={1957} finish={1958} />
    <>--------------</>
    <Champion name="Mikhail Tal " start={1960} finish={1961} />
    <>--------------</>
    <Champion name="Tigran Petrosian " start={1963} finish={1969} />
    <>--------------</>
    <Champion name="Boris Spassky " start={1969} finish={1972} />
    <>--------------</>
    <Champion name="Robert J. Fischer " start={1972} finish={1975} />
    <>--------------</>
    <Champion name="Anatoly Karpov " start={1975} finish={1985} />
    <>--------------</>
    <Champion name="Garry Kasparov " start={1985} finish={1993} />
    <>--------------</>
  </>
);
