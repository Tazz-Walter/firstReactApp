'use strict';

console.log('App.js is running');

var app = {
    title: 'this is jsx !!',
    subtitle: 'Awesome ReactJs',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h1',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
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
var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            ' +1 '
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            ' -1 '
        ),
        React.createElement(
            'button',
            { onClick: reset },
            ' reset '
        )
    );
    ReactDOM.render([template, template2], appRoot);
};
renderCounterApp();
