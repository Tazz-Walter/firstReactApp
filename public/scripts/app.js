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

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var optionSelected = app.options[randomNum];
    alert(optionSelected);
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
            'ol',
            null,
            app.options.map(function (x) {
                return React.createElement(
                    'li',
                    { key: x },
                    'Item ',
                    x
                );
            })
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
        ),
        React.createElement(
            'button',
            { disabled: app.options.length < 1, onClick: makeDecision },
            'what should I do?'
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderCustom();
