import styled from "styled-components";
import { Base, borderBuilder } from "../helpers";
import Window from "../Window/Window"
import Button from "../Button/Button";

const StyledAlert = styled(Base)`

`

const Alert = ({
    children,
    ...props
}) => {
    return(
        <Window
            titleBar={false}
            statusBar={false}
            scrollBars={false}
            height="auto"
            top={200}
            left={200}
            inset={true}
            { ...props }
        >
            <StyledAlert
                { ...props }
            >
                { children }
                <Button>Cancel</Button> <Button primary>Okay</Button>
            </StyledAlert>
        </Window>
    )
}

export default Alert