'use strict';

console.log('App.js is running');

var app = {
    title: 'this is jsx !!',
    subtitle: 'Awesome ReactJs',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //stop page refresh
    console.log('form submited');
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderCustom();
    }
};
var removeAll = function removeAll() {
    app.options = [];
    renderCustom();
};
var renderCustom = function renderCustom() {
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
            'p',
            null,
            app.options.length
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderCustom();
