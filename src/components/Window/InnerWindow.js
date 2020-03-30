import styled from "styled-components";
import { Base, borderBuilder, flexBuilder } from "../helpers";

const StyledInnerWindow = styled(Base)`
    display: block;
    grid-area: innerwindow;
`

const StyledInset = styled(Base)`
    margin: 2px;
    height: calc(100% - 4px);
    ${ borderBuilder("all", "heavy") }
`

const InnerWindow = ({
    children,
    inset,
    ...props
}) => {
    return(
        <StyledInnerWindow {...props }>
            { inset ? <StyledInset> { children } </StyledInset> : <> { children } </> }
        </StyledInnerWindow>
    )
}

export default InnerWindow