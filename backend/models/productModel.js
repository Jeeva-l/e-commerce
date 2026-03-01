const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true,
        maxLength:[100,"Product name cannot exceed 100 character"]
    },
    price:{
        type:Number,
        default:0.0
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            image:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter product category"],
        enum:{
            values:[
                'Electronics',
                'mobile Phones',
                'Laptops',
                'Accesories',
                'Headphones',
                'Food',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message : "please select correct category"
        }
    },
    seller:{
        type:String,
        required:[true,"Please enter product seller"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxLength:[20,'product stock canot exceed 20']
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

let schema=mongoose.model('product',productSchema)

module.exports =schema;