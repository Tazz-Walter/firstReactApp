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

const user = {
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
);

const appRoot = document.getElementById('app');

ReactDOM.render([template, template2], appRoot);