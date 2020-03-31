import styled from "styled-components";
import { Base } from "../helpers";
import Window from "../Window/Window"
import Button from "../Button/Button";
import Select from "../Select/Select";
import CheckBox from "../CheckBox/CheckBox";

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
            height={200}
            width={200}
            top={200}
            left={0}
            inset={true}
            { ...props }
        >
            <StyledAlert
                { ...props }
            >
                { children }
                <Button onClick={close} >Cancel</Button> <Button onClick={close} primary>Okay</Button>
                <Select>
                    <option>Hello</option>
                    <option>Thank you</option>
                    <option>NautilOS</option>
                    <option>this is a really long select option in order to see how it goes.</option>
                </Select>
                <CheckBox />
            </StyledAlert>
        </Window>
    )
}

export default Alert