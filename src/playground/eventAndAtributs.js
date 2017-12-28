
/* const user = {
    name: 'Walter',
    age: 18,
    location: 'Argentina'
};

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    }
}

const template2 = (
    <div> 
    <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1> 
    {(user.age && user.age >= 18) && <p> Age: {user.age}</p>} 
    {getLocation(user.location)}
    </div>
); */

//EVENTS AND ATTRIBUTES
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {

    const template2 = (
        <div>
            <h1>count: {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> reset </button>
        </div>
    );
    ReactDOM.render([template, template2], appRoot);
}
renderCounterApp();