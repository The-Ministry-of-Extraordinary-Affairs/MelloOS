import styled from 'styled-components';

const StyledDesktop = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
    background-color: ${ props => props.theme.colours.desktop };
`

const Desktop = props => {
    return (
        <StyledDesktop>
            <button style='margin-top:50px' onClick={ e => props.action("textreader") }>OPEN</button>
        </StyledDesktop>
    );
}

export default Desktop