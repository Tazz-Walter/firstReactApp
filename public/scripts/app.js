'use strict';

var showDetail = function showDetail() {
    console.log('puto');
    details.hidden = false;
    hide.hidden = false;
    show.hidden = true;
};
var hideDetail = function hideDetail() {
    console.log('huevo');
    details.hidden = true;
    hide.hidden = true;
    show.hidden = false;
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
            { id: 'show', hidden: false, onClick: showDetail },
            'Show Details'
        ),
        React.createElement(
            'button',
            { id: 'hide', hidden: true, onClick: hideDetail },
            'Hide Details'
        ),
        React.createElement(
            'div',
            { hidden: true, id: 'details' },
            React.createElement(
                'p',
                null,
                'Detalles habia q escribir algo....'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderCustom();
