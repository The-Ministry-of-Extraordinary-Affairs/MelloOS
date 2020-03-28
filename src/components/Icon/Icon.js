import styled from "styled-components";
import { Base } from "../helpers";

const StyledIcon = styled(Base)`

`

const Icon = ({
    children,
    ...props
}) => {
    return(
        <StyledIcon {...props }>
            Icon here
            { children }
        </StyledIcon>
    )
}

export default Icon