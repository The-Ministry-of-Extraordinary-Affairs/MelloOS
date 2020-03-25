import Window from '../../components/Window/Window';
import { Component } from 'preact';
import styled from 'styled-components';

const Inner = styled.div`
    width: calc(100% -  16px);
    height: calc(100% - 16px);
    border: 4px solid black;
    display: block;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
`

class Alert extends Component {
    nope = () => { return }

    render(props) {
        console.log(props)
        return ( <Window id={ props.id }> <Inner>{ props.options.content } <button onClick={ () => props.close(props.id) }> Close </button> </Inner> </Window> )
    }
}

export default Alert;