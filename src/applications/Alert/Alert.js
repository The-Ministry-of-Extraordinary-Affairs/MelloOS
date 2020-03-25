import Window from '../../components/Window/Window';
import { Component } from 'preact';
import styled from 'styled-components';

const Inner = styled.div`
    width: calc(100% -  16px);
    height: calc(100% - 16px);
    border: 4px solid black;
    display: flex;
    vertical-align: middle;
    text-align: center;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

class Alert extends Component {
    nope = () => { return }

    render(props) {
        console.log(props)
        return ( <Window close={ props.close } id={ props.id }> <Inner>{ props.options.content } </Inner> </Window> )
    }
}

export default Alert;