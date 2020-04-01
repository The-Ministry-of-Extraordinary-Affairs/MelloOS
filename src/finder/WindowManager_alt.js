import { Component } from "preact";

import Alert from '../components/Alert/Alert';
import Window from '../components/Window/Window';

class WindowManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windows: [
                {title: 'haj', id:1000, content:"bakkes"},
                {title: 'dikke', id:2000},
                {title: 'papzak', id:3000},
            ]
        }
    }

    componentDidMount() {
        this.openWindow();
    }

    openWindow = (title) => {
        let window = { title }
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
                id={window.id}
                title={window.title}
                titleBar
                statusBar
                scrollBars
                closeHandler={this.closeWindow}
                {...props}
            >{ window.content && window.content }</Window>) }
            </>
        )
    }
}

export default WindowManager