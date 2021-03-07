function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Toggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            isToggledOn: true,

        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            state => ({
                isToggledOn: !state.isToggledOn
            })
        );
    }

    render() {
        return (
        <div>
            <button onClick={this.handleClick}>
                { this.state.isToggledOn ? 'ON' : 'OFF'}
            </button>
        </div>
        );
    }
}

ReactDOM.render(
    <Toggle  />,
    document.getElementById('root')
)