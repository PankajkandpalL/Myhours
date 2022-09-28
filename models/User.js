import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    mobile : { type : String },
    email : { type : String },
    password : { type : String },
    username : { type : String },
    wishlist : [
        {
            type : Schema.Types.ObjectId,
            ref : "wishlist"
        }
    ],
    cartData : [
        {
            type : Schema.Types.ObjectId,
            ref : "cart"
        }
    ],
    addresses : [
        {
            type : Schema.Types.ObjectId,
            ref : "address"
        }
    ]
})

const User = models.user || model('user', userSchema)

export default User