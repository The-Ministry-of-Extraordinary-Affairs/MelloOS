import styled from 'styled-components';
import Box from '../../Primitives/Box';

const ResizeBox = styled(Box)`
    position: relative;
`

const ResizeBigIcon = styled(Box)`
    position: absolute;
    left: 8px;
    top: 8px;
`

const ResizeSmallIcon = styled(Box)`
    position: absolute;
    left: 4px;
    top: 4px;
`

export const HorizontalScrollBar = props => {
    return(
        <Box height="30px">
            <Box width="30px" height="30px" border-t />
            <Box border-trl grow />
            <Box width="30px" height="30px" border-t />
            <ResizeBox
                onMouseDown={ props.resizeHandle }
                onTouchStart={ props.resizeHandle }
                width="28px" height="30px"
                border-tl button
            ><ResizeBigIcon border width="14px" height="14px" /><ResizeSmallIcon border width="10px" height="10px" /></ResizeBox>
        </Box>
    )
}

export const VerticalScrollBar = props => {
    return(
        <Box vertical width="30px">
            <Box width="28px" height="30px" border-l />
            <Box border-tlb grow width="28px" />
            <Box width="28px" height="30px" border-l />
        </Box>
    )
}