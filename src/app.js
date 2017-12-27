console.log('App.js is running');

const app = {
    title: 'this is jsx !!',
    subtitle: 'Awesome ReactJs',
    options: ['One', 'Two']
};

const template = (
    <div> 
        <p>{app.title}</p> 
        {app.subtitle && <h1>{app.subtitle}</h1>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        
    </div>
);

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
    count = count + 1;
    console.log(count);    
};
const minusOne = () => {
    count = count - 1;
    console.log(count);
};
const reset = () => {
    count = 0;
    console.log(count);
};
const template2 = (
    <div>
        <h1>count: {count}</h1>
        <button onClick={addOne}> +1 </button>
        <button onClick={minusOne}> -1 </button>
        <button onClick={reset}> reset </button>
    </div>  
);



const appRoot = document.getElementById('app');

ReactDOM.render([template,template2], appRoot);