import { model, models, Schema } from "mongoose";

const addSchema = new Schema({

	firstName: {type : String, required : true},
    lastName : {type : String, required : true},
    state : {type : String, required : true},
    city : {type : String, required : true},
    area : {type : String},
    pincode : { type : Number,required : true },
    mobile : { type : Number, required : true },
    flatHouseNumber : { type : String, required : true },
    apartmentAreaLocalityRoad : { type : String, required : true },
    defaultAddress : { type : Boolean},
    addressOf : { 
        type : Schema.Types.ObjectId,
        ref : "user"
    }

})


const Address = models.address || model('address', addSchema)

export default Address;