import styled from "styled-components";
import { Base } from "../helpers";

const StyledDesktop = styled(Base)`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: darkgray;
`

const Desktop = ({
    children,
    ...props
}) => {
    return(
        <StyledDesktop {...props }>
            { children }
        </StyledDesktop>
    )
}

export default Desktop