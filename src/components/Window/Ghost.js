import styled from "styled-components";
import { Base, borderBuilder } from "../helpers";

const StyledGhost = styled(Base)`
    background-color: transparent;
    ${borderBuilder("all", "light")}
`

const Ghost = ({
    children,
    ...props
}) => {
    return(
        <StyledGhost {...props }>
            { children }
        </StyledGhost>
    )
}

export default Ghost