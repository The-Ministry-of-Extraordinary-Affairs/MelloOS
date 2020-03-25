import Window from '../../components/Window/Window';
import { Component } from 'preact';

class TextReader extends Component {
    nope = () => { return}

    render(props) {
        return ( <Window scrollBars titleBar statusBar close={ props.close } id={ props.id }> Window with id: { props.id } </Window> )
    }
}

export default TextReader;