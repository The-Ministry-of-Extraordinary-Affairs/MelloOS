import styled from "styled-components";
import { Base } from "../helpers";

const StyledInnerWindow = styled(Base)`
    display: grid;
    grid-area: innerwindow
`

const InnerWindow = ({
    children,
    ...props
}) => {
    return(
        <StyledInnerWindow {...props }>
            { children }
        </StyledInnerWindow>
    )
}

export default InnerWindow