import { Component } from "preact";

import Alert from '../components/Alert/Alert';
import Window from '../components/Window/Window';

class WindowManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windows: [
            ]
        }
    }

    componentDidMount() {
        this.openWindow("welcome!")
    }

    openWindow = (title) => {
        let window = { title: title }
        window.id = Math.random().toString(16).substr(2,8)
        this.setState({ windows: [...this.state.windows, window ]})
    }

    closeWindow = (id) => {
        let windows = this.state.windows.filter(window => window.id !== id);
        this.setState({ windows });
    }

    render(props) {
        return (
            <>
            { this.state.windows.map(window => <Window
                title={window.title}
                titleBar
                statusBar
                scrollBars
                closeHandler={this.closeWindow}
            />) }
            </>
        )
    }
}

export default WindowManager