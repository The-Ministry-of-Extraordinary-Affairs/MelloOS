import styled from "styled-components";
import { Base } from "../helpers";

const StyledTitleBar = styled(Base)`
    display: grid;
    grid-area: titlebar
`

const TitleBar = () => {
    return <StyledTitleBar />
}

export default TitleBar