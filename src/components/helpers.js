import styled, { css } from 'styled-components';

/*
    This file contains primitive elements and helpers fucntions that produce reproducible UI css based on the current theme.
    Think of flexboxes, borders and shadow effects.

    These primitives and functions make the creation of new components easy and help in creating a uniform visual style (in conjunction with the theme variables).
*/

// Because of the b/w nature of the OS1-7 styling, (nearly) all of our layout elements contain borders.
// The box element is a primitive element which sets some basic rules, on which our other components are based.
export const Box = styled.div`
    display: block;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colours.background };
    color: ${({theme}) => theme.colours.foreground };
`

// Adds flex styles to Box primitive.
export const flexBuilder = (dir="row", grow=0, shrink=1) => css`
    display: flex;
    flex-direction: ${() => dir};
    flex-grow: ${() => grow};
    flex-shrink: ${() => shrink };
`

// Adds CSS grid styles to Box primitive
export const gridBuilder = () => css``

// Adds floating effect to Box primitive.
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