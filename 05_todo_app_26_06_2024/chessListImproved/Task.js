const root = ReactDOM.createRoot(document.getElementById("root"));
// purpose: if something changes, the little change must be re-rendered without re-rendering everything
// local state! variable and method which changes it. If it changes, re-renders what is dependent on it and only that
// example: Like on Youtube. Like counter goes up, the page remains the same

/////////////////////
//ULTIMATE IMPROVED TEACHER SOLUTION
/////////////////////
// JSX parts (HTML) hidden inside JS

const Champion = ({name, years}) => {
  return (
    <>      
      <h3>Name: {name}</h3>
      <h3>Years: {years}</h3>
    </>
  );
};

const ChampionList = [
  { name: "Wilhelm Steinitz", years: "1886-1994" },
  { name: "Emanuel Lasker", years: "1894-1921" },
  { name: "Jose Raul Capablanca", years: "1921-1927" },
  { name: "Alexander Alekhine", years: "1927-1935, 1937-1946" },
  { name: "Max Euwe", years: "1935-1937" },
  { name: "Mikhail Botvinnik", years: "1948-1957, 1958-1960, 1961-1963" },
  { name: "Vasily Smyslov", years: "1957-1958" },
  { name: "Mikhail Tal", years: "1960-1961" },
  { name: "Tigran V. Petrosian", years: "1963-1969" },
  { name: "Boris Spassky", years: "1969-1972" },
  { name: "Bobby Fischer", years: "1972-1975" },
  { name: "Anatoly Karpov", years: "1975-1985" },
  { name: "Garry Kasparov", years: "1985-2000" },
];

// RENDER
// Champion is used to unpack chmapionslist

root.render(
  <>
    {ChampionList.map((e) => (
      <div>
        <Champion key={Math.random()} name={e.name} years={e.years} />
      </div>
    ))}
  </>
);
