import styled from 'styled-components';
import DropDownItem from './DropDownItem';

const StyledDropDown = styled.nav`
    display: block;
    position: absolute;
    top: 32px;
    padding: 8px 0 8px 0;
    margin-left: -8px;

    border: 2px solid black;

    background-color: ${ props => props.theme.colours.background };
`
const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`

const DropDown = props => {
    return(
        <StyledDropDown>
            <StyledUl>
                { props.items.map(item => (
                    <DropDownItem name={ item.name } app={ item.app } options={ item.options } action={ props.action } />
                )) }
            </StyledUl>
        </StyledDropDown>
    )
}

export default DropDown;