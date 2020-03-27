import styled, { css } from 'styled-components';

/*
    This file contains primitive elements and helpers fucntions that produce reproducible UI css based on the current theme.
    Think of flexboxes, borders and shadow effects.

    These primitives and functions make the creation of new components easy and help in creating a uniform visual style (in conjunction with the theme variables).
*/

// Because of the b/w nature of the OS1-7 styling, (nearly) all of our layout elements contain borders.
// The base element is a primitive element which sets some basic rules, on which our other components are based.
// The base styling is extracted into a baseBuilder in order to aid in styling other DOM elements (e.g. Buttons) as base elements without having to resort to using styled-components' "as".
export const baseBuilder = () => css`
    display: block;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colours.background };
    color: ${({theme}) => theme.colours.foreground };
    user-select: none;
`

export const Base = styled.div`
    ${ baseBuilder };
`

// Adds flex styles to Base primitive.
export const flexBuilder = (dir="row", grow=0, shrink=1) => css`
    display: flex;
    flex-direction: ${() => dir};
    flex-grow: ${() => grow};
    flex-shrink: ${() => shrink };
`

// Adds CSS grid styles to Base primitive.
export const gridBuilder = () => css``

// Adds floating effect to Base primitive.
export const floatBuilder = () => css`
    position: absolute;
    box-shadow: ${({theme}) => theme.shadows.floating };
`

// The borderBuilder generates borders on one or more sides, in any style defined in the theme file.
export const borderBuilder = (borders="all", style="default") => css`
    border-top: ${({theme}) => (borders==="all" || /t/.test(borders)) && theme.borders[style]};
    border-right: ${({theme}) => (borders==="all" || /r/.test(borders)) && theme.borders[style]};
    border-bottom: ${({theme}) => (borders==="all" || /b/.test(borders)) && theme.borders[style]};
    border-left: ${({theme}) => (borders==="all" || /l/.test(borders)) && theme.borders[style]};
`

// The fontBuilder generates text styles
export const fontBuilder = (font="primary", size=3) => css`
    font-family: ${({theme}) => (theme.fonts[font])};
    font-size: ${({theme}) => (theme.fontSizes[size])};
`

// The interactionBuilder generates event styles for interactive elements.
const hoverCSS = css`
    :hover {
        background-color: ${({theme}) => theme.colours.foreground };
        color: ${({theme}) => theme.colours.background };
    }
`
const activeCSS = css`
    :active {
        background-color: ${({theme}) => theme.colours.foreground };
        color: ${({theme}) => theme.colours.background };
    }
`
export const interactionBuilder = (hover=true, active=true) => css`
    ${() => hover && hoverCSS }
    ${() => active && activeCSS }
`