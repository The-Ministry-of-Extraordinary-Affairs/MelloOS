import styled from 'styled-components';

import Box from '../../Primitives/Box';

const Title = styled.div`
    font-family: ${ props => props.theme.fonts.primary };
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
`

const Filler = styled.div`
    height: 22px;
    margin: 4px 4px;
    min-width: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Line = styled.hr`
    margin: 0;
    padding: 0;
    border: inset;
    border: 1px solid black;
`

const SideFiller = styled(Filler)`
    width: 8px;
`

const TitleFiller = styled(Filler)`
    flex-grow: 1;
`

const Button = styled(Box)`
    min-width: 18px;
    margin: 4px 0;
`

const TitleBar = props => {
    return(
        <Box
            onMouseDown={ props.moveHandle }
            onTouchStart={ props.moveHandle }
            onDoubleClick={ props.maximise }
            handle border-b="special" height="32px"
        >
        <SideFiller><Line /><Line /><Line /><Line /><Line /><Line /></SideFiller>
        <Button
            onClick={ () => props.close(props.id) }
            onTouchStart={ props.close }
            border width="18px" height="18px"
        />
        <TitleFiller><Line /><Line /><Line /><Line /><Line /><Line /></TitleFiller>
        <Title onDoubleClick={ props.maximise }>
            { props.name }
        </Title>
        <TitleFiller><Line /><Line /><Line /><Line /><Line /><Line /></TitleFiller>
        <Button
            onClick={ props.maximise }
            onTouchStart={ props.maximise }
            border width="18px" height="18px"
        ><Box border-rb width="8px" height="8px" /></Button>
        <SideFiller><Line /><Line /><Line /><Line /><Line /><Line /></SideFiller>
        </Box>
    )
}

export default TitleBar