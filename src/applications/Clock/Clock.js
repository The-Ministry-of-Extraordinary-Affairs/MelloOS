import { Component } from "preact";
import DropDown from "../../components/MenuBar/DropDown";

// import windowmanager ??

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: Date.now(),
            open: false
        }
    }

    open = () => {
        this.setState({open:true})
        window.addEventListener('mouseup', this.close)
    }

    close = () => {
        this.setState({open:false})
        window.removeEventListener('mouseup', this.close)
    }

    action = () => {
        // windowmanager.open(alert, body) ??
        alert(new Date(this.state.time).toISOString())
    }

    componentDidMount() {
        this.timer = setInterval(() => {
          this.setState({ time: Date.now() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let time = new Date(this.state.time).toLocaleTimeString();
        let date = new Date(this.state.time).toLocaleDateString();
        return(
            <>
            <span onMouseDown={this.open}>{ time }</span>
            { this.state.open && <DropDown actionHandler={this.action} > {[{name:date}]} </DropDown>}
            </>
        )
    }
}

export default Clock;