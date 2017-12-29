'use strict';

var visibility = false;

var showToggle = function showToggle() {
    visibility = !visibility;
    renderCustom();
};

var renderCustom = function renderCustom() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            React.createElement(
                'p',
                null,
                'Visibility Toggle'
            )
        ),
        React.createElement(
            'button',
            { onClick: showToggle },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            'Detalles habia q escribir algo....'
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderCustom();
