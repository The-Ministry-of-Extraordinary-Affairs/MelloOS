import styled from 'styled-components';

const StyledHorizontalScrollBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    align-self: flex-end;
    `

const StyledVerticalScrollBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 30px;
    height: auto;
    `

const LeftArrow = styled.div`
    width: 30px;
    height: 30px;
    border-top: 2px solid ${ props => props.theme.colours.foreground };
    `

const RightArrow = styled.div`
    width: 30px;
    height: 30px;
    border-top: 2px solid ${ props => props.theme.colours.foreground };
    `

const UpArrow = styled.div`
    width: 30px;
    height: 30px;
    border-left: 2px solid ${ props => props.theme.colours.foreground };
    `

const DownArrow = styled.div`
    width: 30px;
    height: 30px;
    border-left: 2px solid ${ props => props.theme.colours.foreground };
    `

const ResizeBox = styled.div`
    width: 28px;
    height: 30px;
    position: relative;
    border-top: 2px solid ${ props => props.theme.colours.foreground };
    border-left: 2px solid ${ props => props.theme.colours.foreground };
    cursor: move;
    `

const ResizeBigIcon = styled.div`
    width: 14px;
    height: 14px;
    position: absolute;
    left: 8px;
    top: 8px;
    background-color: ${ props => props.theme.colours.background };
    border: 2px solid ${ props => props.theme.colours.foreground };
`

const ResizeSmallIcon = styled.div`
    width: 10px;
    height: 10px;
    position: absolute;
    left: 4px;
    top: 4px;
    background-color: ${ props => props.theme.colours.background };
    border: 2px solid ${ props => props.theme.colours.foreground };
`

const HorizontalBar = styled.div`
    flex-grow: 1;
    height: 100%;
    border-top: 2px solid ${ props => props.theme.colours.foreground };
    border-left: 2px solid ${ props => props.theme.colours.foreground };
    border-right: 2px solid ${ props => props.theme.colours.foreground };
`

const VerticalBar = styled.div`
    flex-grow: 2;
    width: 100%;
    border-top: 2px solid ${ props => props.theme.colours.foreground };
    border-left: 2px solid ${ props => props.theme.colours.foreground };
    border-bottom: 2px solid ${ props => props.theme.colours.foreground };
`


export const HorizontalScrollBar = props => {
    return(
        <StyledHorizontalScrollBar>
            <LeftArrow />
            <HorizontalBar />
            <RightArrow />
            <ResizeBox onMouseDown={ props.resizeHandle } onTouchStart={ props.resizeHandle }><ResizeBigIcon /><ResizeSmallIcon /></ResizeBox>
        </StyledHorizontalScrollBar>
    )
}

export const VerticalScrollBar = props => {
    return(
        <StyledVerticalScrollBar>
            <UpArrow />
            <VerticalBar />
            <DownArrow />
        </StyledVerticalScrollBar>
    )
}