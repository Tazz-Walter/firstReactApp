class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);        
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {              
        this.setState((prevState) => {           
            return {                
             visibility: !prevState.visibility
            };            
        });        
    }
    render() {
        return(
        <div>
            <h1><p>Visibility Toggle</p></h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button>

            {this.state.visibility && (<div>Detalles habia q escribir algo....</div>)}
        </div>
        )
    };
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);


//old code
// let visibility = false;

// const showToggle = () => {
//     visibility = !visibility
//     renderCustom();
// }

// const renderCustom = () => {
//     const template = (
//         <div>
//             <h1><p>Visibility Toggle</p></h1>
//             <button onClick={showToggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>

//             {visibility && (<div>Detalles habia q escribir algo....</div>)}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// renderCustom();
