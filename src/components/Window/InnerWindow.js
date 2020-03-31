import styled from "styled-components";
import { Base, borderBuilder } from "../helpers";

const StyledInnerWindow = styled(Base)`
    display: block;
    grid-area: innerwindow;
    overflow: scroll;
`

const StyledInset = styled(Base)`
    margin: 2px;
    height: calc(100% - 4px);
    ${ borderBuilder("all", "heavy") }
    overflow: scroll;
`

const InnerWindow = ({
    children,
    inset,
    closeHandler,
    ...props
}) => {
    return(
        <StyledInnerWindow closeHandler={closeHandler} {...props }>
            { inset ? <StyledInset closeHandler={closeHandler} > { children } </StyledInset> : <> { children } </> }
        </StyledInnerWindow>
    )
}

export default InnerWindow