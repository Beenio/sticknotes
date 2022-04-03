export interface IBaseRepository<T> {
    saveOne(value: T): Promise<T>
    find(where: Partial<T>): Promise<T[]>
    findOne(where: Partial<T>): Promise<T>
    findById(id: string): Promise<T>
    removeById(id: string): Promise<void>
}