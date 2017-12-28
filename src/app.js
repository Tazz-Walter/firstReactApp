console.log('App.js is running');

const app = {
    title: 'this is jsx !!',
    subtitle: 'Awesome ReactJs',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();//stop page refresh
    console.log('form submited');
    const option = e.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        e.target.elements.option.value="";
        renderCustom();
    }
    
};
const removeAll = () => {
    app.options = [];    
    renderCustom();
}
const renderCustom = () => {
    const template = (
        <div> 
            <p>{app.title}</p> 
            {app.subtitle && <h1>{app.subtitle}</h1>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
            <p>{app.options.length}</p>                
            <ol>{ 
                    app.options.map((x) => <li key={x}>Item {x}</li>) 
                }                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>                
            </form>
            <button onClick={removeAll}>Remove All</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderCustom();