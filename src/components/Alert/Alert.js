import styled from "styled-components";
import { Base, fontBuilder } from "../helpers";
import Window from "../Window/Window"
import Button from "../Button/Button";
import Select from "../Select/Select";
import CheckBox from "../CheckBox/CheckBox";
import Radio from "../Radio/Radio";

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
            height={300}
            width={400}
            top={200}
            left={0}
            inset={true}
            { ...props }
        >
            <StyledAlert
                { ...props }
            >
                { children }
                <Base>Find and select items whose</Base>
                <Base>
                <Select>
                    <option>name</option>
                    <option>size</option>
                    <option>kind</option>
                    <option>label</option>
                </Select>
                <Select>
                    <option>contains</option>
                    <option>starts with</option>
                    <option>ends with</option>
                </Select>
                </Base>
                <hr />
                <Base>
                <CheckBox />all at once
                </Base>
                <hr />
                <Base>
                <Radio name='hi' />on<Radio name='hi' cross />off
                </Base>
                <hr />
                <Base>
                <Button onClick={close} >Cancel</Button><Button onClick={close} primary>Find</Button>
                </Base>
            </StyledAlert>
        </Window>
    )
}

export default Alert