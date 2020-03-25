import styled from 'styled-components';

const StyledTitleBar = styled.div`
    height: 32px;
    border-bottom: 2px solid ${ props => props.theme.colours.foreground };
    display: flex;
    flex-direction: row;
    cursor: grab;

    :active {
        cursor: grabbing;
    }
`

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

const Button = styled.div`
    width: 18px;
    min-width: 18px;
    height: 18px;
    margin: 4px 0;
    border: 2px solid ${ props => props.theme.colours.foreground };
    cursor: pointer;
`

const ResizeButton = styled.div`
    width: 8px;
    height: 8px;
    border-right: 2px solid ${ props => props.theme.colours.foreground };
    border-bottom: 2px solid ${ props => props.theme.colours.foreground };
`

const TitleBar = props => {
    return(
        <StyledTitleBar onMouseDown={ props.moveHandle } onTouchStart={ props.moveHandle } onDoubleClick={ props.maximise } >
            <SideFiller>
                <Line /><Line /><Line /><Line /><Line /><Line />
            </SideFiller>
            <Button onClick={ props.close } onTouchStart={ props.close } />
            <TitleFiller>
                <Line /><Line /><Line /><Line /><Line /><Line />
            </TitleFiller>
            <Title onDoubleClick={ props.maximise }>
                { props.name }
            </Title>
            <TitleFiller>
                <Line /><Line /><Line /><Line /><Line /><Line />
            </TitleFiller>
            <Button onClick={ props.maximise } onTouchStart={ props.maximise }><ResizeButton /></Button>
            <SideFiller>
                <Line /><Line /><Line /><Line /><Line /><Line />
            </SideFiller>
        </StyledTitleBar>
    )
}

export default TitleBar