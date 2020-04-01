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
    scrollHandler,
    ...props
}) => {
    return(
        <StyledInnerWindow
            closeHandler={closeHandler}
            onScroll={inset ? undefined : scrollHandler}
            {...props }
        >
            { inset ? <StyledInset closeHandler={closeHandler} onScroll={inset ? scrollHandler : undefined} > { children } </StyledInset> : <> { children } <p>blablblablablablablaablablabalbalablablablablabalbalablablabalbalablablabl</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p><p>blablbla</p> </> }
        </StyledInnerWindow>
    )
}

export default InnerWindow