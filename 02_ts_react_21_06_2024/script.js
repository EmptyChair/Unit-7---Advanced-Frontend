//document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
//this is not HTML, but JS
//JSX syntax
root.render(
    //wrap both elements into one div because JSX expression must have ONE parent element
    //<React.Fragment>
    <>
        <h1>Hello World!</h1>
        <p>Hello from the Other Side!</p>
    </>
    //</React.Fragment>
    
);