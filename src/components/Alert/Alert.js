import styled from "styled-components";
import { Base, fontBuilder } from "../helpers";
import Window from "../Window/Window"
import Button from "../Button/Button";
import Select from "../Select/Select";
import CheckBox from "../CheckBox/CheckBox";
import Radio from "../Radio/Radio";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextInput/TextArea";
import Line from "../Line/Line";

const StyledAlert = styled(Base)`
    ${fontBuilder("primary", 4)}
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
            height={350}
            width={400}
            top={200}
            left={50}
            inset={true}
            { ...props }
        >
            <StyledAlert
                { ...props }
            >
                { children }
            </StyledAlert>
        </Window>
    )
}

export default Alert