import styled, { css } from 'styled-components'

/*

    The box is the primitive object on which most other objects in NautilOS are built.
    It is a marginless flexbox with border-box styling.

    It accepts a couple of properties:
    - vertical: true/false sets the flex-direction to column (for veritcal layouts)
    - floating: true/false absolute styling and special shadow
    - border: "style"           sets all borders to theme.borders["style"], border: true sets all borders to theme.borders.default

        You can choose to set a single border using [t, r, b, l] like so:
        border.t: "style"       sets only top border to theme.borders["style"], and the rest to clear (true sets the border to default)

        Or combine any of those as follows:
        border.trbl: "style"    sets top, right, bottom, left border to "style", and the rest to clear (true sets the border to default)

*/

function returnBorder(border, pattern) {
    if(!border) return "none"
    if(border == true) return "default"
    if(typeof(border) === "string") return border
    let matchingKeys = Object.keys(border).filter(key => pattern.test(key));
    if(border[matchingKeys[0]] == true) return "default"
    if(border[matchingKeys[0]]) return border[matchingKeys[0]]
    return "none";
}


export const Box = styled.div`
    display: flex;
    flex-direction: ${props => props.vertical ? "column" : "row"};

    margin: 0;
    min-width: 0;

    color: ${ props => props.theme.colours.foreground };
    background-color: ${ props => props.theme.colours.background };

    border-top: ${ props => props.theme.borders[returnBorder(props.border, /t/)]};
    border-left: ${ props => props.theme.borders[returnBorder(props.border, /l/)]};
    border-bottom: ${ props => props.theme.borders[returnBorder(props.border, /b/)]};
    border-right: ${ props => props.theme.borders[returnBorder(props.border, /r/)]};

    box-shadow: ${ props => props.theme.shadows.default };
    ${props => props.floating && css`
        position: absolute;
        box-shadow: ${ props => props.theme.shadows.floating };
    `}
`

export default Box