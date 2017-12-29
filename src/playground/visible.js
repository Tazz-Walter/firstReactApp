let visibility = false;

const showToggle = () => {    
    visibility = !visibility    
    renderCustom();
}

const renderCustom = () => {
    const template = (
        <div>
            <h1><p>Visibility Toggle</p></h1>                    
            <button onClick={showToggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>

            {visibility && (<div>Detalles habia q escribir algo....</div>)}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderCustom();