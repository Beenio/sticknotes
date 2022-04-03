import ValueTypeProperty from "./properties/value.property"
import XProperty from "./properties/x.property"
import YProperty from "./properties/y.property"
import IdProperty from "./properties/id.property"
import BaseClass from "../../base/base.class"

export default class Note extends BaseClass {

    public id: IdProperty
    public value: ValueTypeProperty
    public x: XProperty
    public y: YProperty


    constructor(id: string, value: string, x: number, y: number) {
        super()
        
        try {
            this.id = new IdProperty(id)
            this.value = new ValueTypeProperty(value)
            this.x = new XProperty(x)
            this.y = new YProperty(y)
        }catch( exception: any ) {
            console.log(exception)
            throw exception
        }
    }
}