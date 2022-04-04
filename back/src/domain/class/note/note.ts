import ValueTypeProperty from "./properties/value.property"
import XProperty from "./properties/x.property"
import YProperty from "./properties/y.property"
import IdProperty from "./properties/id.property"
import BaseClass from "../../base/base.class"
import CreatedAtProperty from "./properties/createdAt.property"

export default class Note extends BaseClass {

    public id: IdProperty
    public value: ValueTypeProperty
    public x: XProperty
    public y: YProperty
    public createdAt: CreatedAtProperty


    constructor(id: string, value: string, x: number, y: number, createdAt: Date) {
        super()
        
        try {
            this.id = new IdProperty(id)
            this.value = new ValueTypeProperty(value)
            this.x = new XProperty(x)
            this.y = new YProperty(y)
            this.createdAt = new CreatedAtProperty(createdAt)
        }catch( exception: any ) {
            console.log(exception)
            throw exception
        }
    }
}