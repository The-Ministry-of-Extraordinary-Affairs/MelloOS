import styled from "styled-components";
import { Base } from "../helpers";
import Window from "../Window/Window"
import Button from "../Button/Button";
import Select from "../Select/Select";

const StyledAlert = styled(Base)`

`


const Alert = ({
    id,
    closeHandler,
    children,
    ...props
}) => {
    const close = () => closeHandler(id)
    return(
        <Window
            id={id}
            titleBar={false}
            statusBar={false}
            scrollBars={false}
            height={100}
            top={200}
            left={200}
            inset={true}
            { ...props }
        >
            <StyledAlert
                { ...props }
            >
                { children }
                <Button onClick={close} >Cancel</Button> <Button onClick={close} primary>Okay</Button>
                <Select />
            </StyledAlert>
        </Window>
    )
}

export default Alert