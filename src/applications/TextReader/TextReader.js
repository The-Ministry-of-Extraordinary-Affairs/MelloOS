import Window from '../../components/Window/Window';
import { Component } from 'preact';

class TextReader extends Component {
    nope = () => { return}

    render(props) {
        return ( <Window scrollBars titleBar statusBar> This is a text </Window> )
    }
}

export default TextReader;