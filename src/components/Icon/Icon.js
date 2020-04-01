import styled from "styled-components";
import { Base, fontBuilder, flexBuilder } from "../helpers";
import { Component } from "preact";

const StyledIcon = styled(Base).attrs(({position}) => ({
    style: {
        top: `${position.top}px`,
        left: `${position.left}px`,
    }
}))`
    ${ flexBuilder("column") }
    background-color: transparent;
    position: absolute;
    align-items: center;
    top: 50px;
    left: ${ window.innerWidth - 80 }px;
    width: ${({theme}) => theme.sizes.icon};
    overflow-x: visible;
`

const StyledImage = styled.img`
    width: ${({theme}) => theme.sizes.icon};
    height: ${({theme}) => theme.sizes.icon};
`

const StyledLabel = styled(Base)`
    text-align: center;
    ${fontBuilder("secondary", 3)}
`

class Icon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dragging: false,
            position: {
                left: props.left || window.innerWidth - 80,
                top: props.top || 50,
            },
            dragStart: null
        }
        this.actionHandler = props.actionHandler
    }

    componentDidUpdate = (props, state) => {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.drag)
            document.addEventListener('touchmove', this.drag)
            document.addEventListener('mouseup', this.endDrag)
            document.addEventListener('touchend', this.endDrag)
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.drag)
            document.removeEventListener('touchmove', this.drag)
            document.removeEventListener('mouseup', this.endDrag)
            document.removeEventListener('touchend', this.endDrag)
        }
    }

    startDrag = (e) => {
        this.setState({
            dragging: true,
            offset: {
                x: e.pageX - this.state.position.left,
                y: e.pageY - this.state.position.top
            },
            dragStart: Date.now()
        })
        e.stopPropagation()
        e.preventDefault()
    }

    drag = (e) => {
        this.setState({
            position: {
                left: e.pageX - this.state.offset.x,
                top: e.pageY - this.state.offset.y,
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    endDrag = (e) => {
        this.setState({ dragging: false })

        console.log(Date.now() - this.state.dragStart)

        if (Date.now() - this.state.dragStart < 200) { this.actionHandler() }
        e.stopPropagation()
        e.preventDefault()
    }

    render({
        label,
        src,
        actionHandler,
        children,
        ...props
    }) {
        const { position } = this.state;
        return(
            <StyledIcon
                position = {position}
                {...props }
                >
                <StyledImage
                    onMouseDown={this.startDrag}
                    onTouchStart={this.startDrag}
                    src={src}
                />
                { label && <StyledLabel contentEditable>{label}</StyledLabel>}
            </StyledIcon>
        )
    }
}

export default Icon