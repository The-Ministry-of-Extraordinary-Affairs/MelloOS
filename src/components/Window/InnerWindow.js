import styled from "styled-components";
import { Box } from "../helpers";

const StyledInnerWindow = styled(Box)`
    display: grid;
    grid-area: innerwindow
`

const InnerWindow = () => {
    return <StyledInnerWindow />
}

export default InnerWindow