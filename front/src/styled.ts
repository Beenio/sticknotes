import styled from 'styled-components'

const StyledDragContainer = styled.div`
    max-width: 250px;
    max-height: 400px;
    width: 250px;
    height: 400px;
    position: absolute;
`

const StyledContent = styled.div`
    max-width: 250px;
    max-height: 400px;
    width: 250px;
    height: 400px;
    position: absolute;

    .w-md-editor {
        background-color: #FEDE00;
        color: black;
        border-radius: 0px;
    }
`

const HeaderNote = styled.div`
    width: 100%;
    height: 20px;
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
`

export {
    StyledDragContainer,
    StyledContent,
    HeaderNote
}