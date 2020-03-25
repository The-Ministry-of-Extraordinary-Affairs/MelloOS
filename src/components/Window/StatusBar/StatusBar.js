import styled from 'styled-components';

const StyledStatusBar = styled.div`
    height: 28px;
    width: 100%;
    border-bottom: 6px double ${ props => props.theme.colours.foreground };
`

const StatusBar = () => {
    return <StyledStatusBar />
}

export default StatusBar