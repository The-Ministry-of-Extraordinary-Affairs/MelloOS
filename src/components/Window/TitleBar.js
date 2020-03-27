import styled from "styled-components";
import { Box } from "../helpers";

const StyledTitleBar = styled(Box)`
    display: grid;
    grid-area: titlebar
`

const TitleBar = () => {
    return <StyledTitleBar />
}

export default TitleBar