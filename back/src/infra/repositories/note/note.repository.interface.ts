export interface INoteRepository {
    updateValue(id: string, value: string): Promise<void>
    updatePosition(id: string, x: number, y: number): Promise<void>
}