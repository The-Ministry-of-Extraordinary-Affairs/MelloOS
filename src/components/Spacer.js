import styled from 'styled-components'
import { Base, flexBuilder } from './helpers'

/*

    Spacers can be used to separate items by a specific distance, or create striped fixed or variable fillers.
    Their main application is inside the the iconic window TitleBars.

*/

const StyledSpacer = styled(Base)`
    height: ${({height}) => height ? height : "100%" };
    width: ${({width}) => width ? width : "auto" };
    margin: 0px 2px;
    ${({width}) => flexBuilder("column", width ? 0 : 1 , 1)}
    vertical-align: middle;
`

const Stripe = styled.hr`
    margin: 1px 0;
    padding: 0;
    border: inset;
    border: 1px solid black;
`

const Spacer = ({
        width,
        height,
        striped,
        ...props
    }) => {
    return(
        <StyledSpacer
            width={width}
            height={height}
            striped={striped}
            {...props}
        >
            <Stripe />
            <Stripe />
            <Stripe />
            <Stripe />
            <Stripe />
            <Stripe />
        </StyledSpacer>
    )
}

export default Spacer