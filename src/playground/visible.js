
const showDetail = () => {
    console.log('puto');
    details.hidden=false;
    hide.hidden = false;
    show.hidden = true;
}
const hideDetail = () => {
    console.log('huevo');
    details.hidden = true;
    hide.hidden = true;
    show.hidden = false;
}
const renderCustom = () => {
    const template = (
        <div>
            <h1><p>Visibility Toggle</p></h1>                    
            <button id="show" hidden={false} onClick={showDetail}>Show Details</button>
            <button id="hide" hidden={true} onClick={hideDetail}>Hide Details</button>
            <div hidden={true} id="details"><p>Detalles habia q escribir algo....</p></div>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderCustom();