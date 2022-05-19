import mongoose, { Document, model, Model, Schema } from "mongoose"

export interface IItem extends Document {
    name: string,
    type: string,
    rarity: string,
    attunement: string,
    release_date: string,
    item_text: string,
    equipped: boolean, 
    source: string
}

const ItemSchema: Schema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    rarity: {
        type: String
    },
    attunement: {
        type: String
    },
    release_date: {
        type: String
    },
    item_text: {
        type: String
    },
    equipped: {
        type: Boolean
    }, 
    source: {
        type: String
    }
})


export const Post: Model<IItem> = mongoose.models.Post || model("Item", ItemSchema)