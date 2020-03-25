import styled from 'styled-components';
import MenuItem from './MenuItem';

const StyledMenu = styled.nav`
    margin: ${ props => props.right ? "0 0 0 auto" : "0" };
    padding: 0;
    display: inline-flex;
`
const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    display: inline-flex;
`

const Menu = props => {
    return(
        <StyledMenu right={ props.right }>
            <StyledUl>
                { props.items.map(item => (
                    <MenuItem name={ item.name } items={ item.items } action={ props.action } />
                )) }
            </StyledUl>
        </StyledMenu>
    )
}

export default Menu