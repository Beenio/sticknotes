import Draggable from "react-draggable"
import { FooterNote, HeaderNote, StyledContent } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import MDEditor from "@uiw/react-md-editor"

interface DraggableCompInput {
    id: string
    value: string
    createdAt: string,
    x: number,
    y: number,
    onStop(id: string, x: number, y: number): void,
    onRemove(id: string): void,
    onChange(id: string, value: string | undefined): void,
}

const DraggableComp = ({ id, x, y, value, createdAt, onStop, onRemove, onChange }: DraggableCompInput) => {
    return (
        <Draggable
            defaultPosition={{ x, y }}
            position={{x, y}}
            onStop={(_, data) => onStop(id, data.x, data.y)}
            >
                <StyledContent>
                <HeaderNote>
                    <FontAwesomeIcon icon={faTrash} onClick={() => onRemove(id) } />
                </HeaderNote>

                <MDEditor
                    value={value}
                    visiableDragbar={false}
                    hideToolbar={true}
                    preview="edit"
                    onChange={(value) => onChange(id, value)}
                />

                <FooterNote>
                    <span>{new Date(createdAt).toUTCString()}</span>
                </FooterNote>
                </StyledContent>
        </Draggable>
    )
}

export default DraggableComp