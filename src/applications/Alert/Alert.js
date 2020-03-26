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

    render({
        id,
        options,
        close,
        type,
        ...otherProps
    }) {
        return (
            <Window
                id={id}
                options={options}
            >
                <Inner>
                    {options.content}
                    {type}
                    <button onClick={ () => close(id) }> Close </button>
                </Inner>
            </Window>
        )
    }
}

Alert.defaultProps = {
    type:"HELLO THERE"
}

export default Alert;