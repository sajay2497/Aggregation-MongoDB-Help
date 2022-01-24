// ==================================================== 1 ============================================ 20/01/2022
/*
do table hai 1. category 2. Product usme hum  || Aggregate || karna sikhenge
niche code hai.
*/

//=========================================== Start -----------------------
const resdata = await category_agg3.aggregate([
    { "$match": { "status": true } },
    { "$addFields": { "_id": { "$toString": "$_id" } } },
    {
        "$lookup": {
            "from": "product_agg3",
            "localField": "_id",
            "foreignField": "category",
            "as": "resultingProductArray"
        }
    },
]);

//================================================== End -------------------

/**
 * { "$match": { "status": true } },
 * is line ka matlab ki category ke table me se jiska STATUS TRUE rahega wo hi get hoga.
 * ya kisi or bhi fild ko check kar sakte hai
 * is line ka matlab (where) hota hai
 */

/**
 * { "$addFields": { "_id": { "$toString": "$_id" } } },
 * is line ka matlab ki category ke table me jo _ID (_id) hai wo |Stringobjectid| hota hai or jo product me  category hai wo id string hai wo stringobjectid se match nhi hota hai uske liye 
 * hum ye  { "$addFields": { "_id": { "$toString": "$_id" } } } add karte hai.
 */

/**
 * isme hum category or product join karenge.
 *  {
        "$lookup": {
            "from": "product_agg3",
            "localField": "_id",
            "foreignField": "category",
            "as": "resultingProductArray"
        }
    }
 * ye $lookup me hum category or product ke table ko join karenge isme category id or prodcut ke table se category ye dono fild same hai.
 *  "from": "product_agg3", => kis table se join karna hai jese ki hame prodcut ke table se join karna hai to table name likhenge.
 * "localField": "_id", => iska matlab ki category ke table mese kis fild ko match karna hai.
 * "foreignField": "category", => iska matbal ki product me kis fild se match karna hai wo aayega.
 * "as": "resultingProductArray" => ye return kis name se aayega wo hai.
 */


//===========================================================================================

const resdata = await category_agg3.aggregate([
    { "$match": { "status": true } },
    { "$addFields": { "_id": { "$toString": "$_id" } } },
    {
        "$lookup": {
            "from": "product_agg3",
            "localField": "_id",
            "foreignField": "category",
            "pipeline": [
                { "$match": { "status": true } },
                { "$project": { title: 1, price: 1, description: 1, image: 1, rating: 1, id: 1 } }
            ],
            "as": "resultingProductArray"
        }
    },
]);

/**
 * "pipeline": [
                { "$match": { "status": true } },
                { "$project": { title: 1, price: 1, description: 1, image: 1, rating: 1, id: 1 } }
            ],
 * is code me humne ek pipeline ka use kiya haijisme humne
 *  { "$match": { "status": true } }, => is code se jab humne product ko get kiya tha tab jis prodcut ka status TRUE hai wo hi aaye is liye hum ise use karte hai.
 *  { "$project": { title: 1, price: 1, description: 1, image: 1, rating: 1, id: 1 } } => $project ka use hum kisi chij ko select karte hai jo hume dikhana ho jaise ki 
 *  hume only name and age dikhana ho or use object me bahut sara data ho to hum ise use karte hai.
 * jaisa ki hum jante hai ki hame jo dikhana hai use hum likhkar uske aage 1 laga dete hai jaisa ki ex. me diya huwa hai.=> Ex.  { "$project": { title: 1, price: 1, description: 1, image: 1, rating: 1, id: 1 } }
 * ager hum $project ka use $lookup ke bahar karte hai to ye category apr apply hoga  lekin hame product ke data ko lana hai is liye hum ise ese use karenge. 
 */

// ======================================================= 2 ============================================================== 21/01/2022

// ---------------------------- start Code --------------------------------

var id = mongoose.Types.ObjectId('61b18e41c5aed278ca11c069');
const resdata = await category.aggregate([
    { "$match": { "_id": id } },
    // { "$addFields": { "_id": { "$toObjectId": id } } },
    // { "$addFields": { "_id": { "$toString": "$_id" } } },
    {
        "$lookup": {
            "from": "sellerproducts",
            "localField": "_id",
            "foreignField": "categoryId",
            "pipeline": [
                {
                    "$lookup": {
                        "from": "products",
                        "localField": "productId",
                        "foreignField": "_id",
                        "as": "resultallproductArray"
                    }
                }

                // { "$project": { title: 1, price: 1, description: 1, image: 1, rating: 1, id: 1 } }
            ],
            "as": "resultsellersproductArray"
        }
    },
]);

// ---------------------- End Code -----------------------------------------------------

/**
 * is code ke bare me
 * Hum is code me three table ko join karenge 1.category, 2.sellerproduct, 3.product.
 * { "$addFields": { "_id": { "$toObjectId": id } } }, => is code ka matlab hai ki jo bhi id hai string me ho use _ObjectId_  me change karna hai. is code me humne static id ka use kiya hai to use _ObjectId_ banane ke liye 
 * is code ka use karte hai.
 * { "$addFields": { "_id": { "$toString": "$_id" } } }, => is code ka matlab hai ki jo bhi id ObjectId me hai use hum _StringId_ me change karne ke liye karte hai.
 * Is code me humne pahle category ke table se id liya hai jo url ya stetic use kiya hai use _SELLEARPRODUCT_ table se join kiya hai jo sellearproduct table me CategoryId se field hai.
 * fir humne usi $lookup me ek pipeline ka use kiya hai.
 * **_____Pipeline ka matab ki usi lookup me koi or lookup ya koi or kam logic lagana ho to iska use karte hai.
 * Is pipeline me humne fir se ek lookup use kiya hai jab hume category ke table se sellerproduct table se data aagya to hum usi data se _productId_ get karke hum _PRODUCTS_
 * table _id ko match karke product data bhi le kar aata hai.
 * ok.
 */


//============================================== 3 ======================================================== 22/01/2022

// ------------------------- Start Code ------------------------------------------

const resdata = await category.aggregate([
    { "$match": { "_id": id } },
    {
        "$lookup": {
            "from": "sellerproducts",
            "localField": "_id",
            "foreignField": "categoryId",
            "as": "resultsellersproductArray"
        }
    },
    { "$unwind": "$resultsellersproductArray" },
    { "$addFields": { "custom_productId": "$resultsellersproductArray.productId" } },
    // { "$addFields": { "custom_pro_Id_c": { "$toObjectId": "$custom_productId" } } },
    {
        "$lookup": {
            "from": "products",
            "localField": "custom_productId",
            "foreignField": "_id",
            "as": "resultallproductArray"
        }
    },
    { "$unwind": "$resultallproductArray" },
    {
        $project: {
            _id: 1,
            parent: 1,
            images: 1,
            offertext: 1,
            seo_data: "$seo", // object name change ------------------
            sellersproduct: {
                // resultsellersproductArray: "$resultsellersproductArray"
                salePrice: "$resultsellersproductArray.salePrice",
                minSellPrice: "$resultsellersproductArray.minSellPrice",
                membershipPrice: "$resultsellersproductArray.membershipPrice",
                sellPrice: "$resultsellersproductArray.sellPrice",
                price: "$resultsellersproductArray.price",
                quantity: "$resultsellersproductArray.quantity",

            },
            product: "$resultallproductArray"
        }
    }
]);

//-------------------------------------- End Code -----------------------------


/**
 * is code me hum three table ko join karenge.
 * Is code me hum kuchh sintex alag use kiya hai jo
 * { "$unwind": "$resultsellersproductArray" } => is code ka matlab ki jab hum category se sellerproduct ko ek alag veriable jo _resultsellersproductArray_ name hai
 * ye ek array me value aata hai use hum object me karte hai yani ki ye array ko alag alag object me kar deta hai jitna array hoga utna object kar deta hai is liye hum iska use karte hai.
 * fir hum us data se product id get karte hai or fir hum $lookup ka use karthe hai jesa ki ye hai
 * {
        "$lookup": {
            "from": "products",
            "localField": "custom_productId",
            "foreignField": "_id",
            "as": "resultallproductArray"
        }
    } .
 * is fild me hame jo data mil rha hai hum direct localfield ka use nhi kar sakte hai jiske liye hme ek variable banana hoga. to variable kese banate hai wo aage hai.
 * { "$addFields": { "custom_productId": "$resultsellersproductArray.productId" } } => is code se hum variable banate hai is me jo uper first wala $lookup hai usme sabhi data _resultsellersproductArray_
 * me aata hai to hum ek variable custom_productId name se banayege or usme  _$resultsellersproductArray.productId_ pass karenge to productId ki value custom_productid me asign ho jaega
 * fir jab hum tisre table se join karenge to fir $lookup me _"localField": "custom_productId"_ pass kardenge to fir ye data array me aa jayega or fir hum
 *  { "$unwind": "$resultallproductArray" } ka use kar ke array me ladenge.
 * to ab hamare pass sabhi data aa chuka hai ab jo dikhana hai wo dikhayege uske liye hum _$project_ ka use karege.
 * $project ka use hum jo dikhaan hai wo object likhenge or hmara aggregation complite ho gya hai
 *
 */


//============================================== 4 ======================================================== 24/01/2022

// ------------------------- Start Code ------------------------------------------

let partnerId = 'wolfs99'
let userid = 'tempajay'
let gameCode = 'dia_andarbahar'

const resdata = await clientProfileBean.aggregate([
    { "$match": { websiteName: partnerId } },
    { "$addFields": { "gameCode": gameCode } },
    { "$addFields": { "String_Id": { "$toString": "$_id" } } },
    {
        "$lookup": {
            "from": "gamesbeans",
            let: {
                clientId: "$clientId",
                gameCode: "$gameCode"
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $and: [
                                {
                                    $eq: [
                                        "$String_Id",
                                        "$$clientId",
                                    ]
                                },
                                {
                                    $eq: [
                                        "$gameCode",
                                        "$$gameCode",
                                    ]
                                },
                            ]
                        }
                    }
                }
            ],
            "as": "gamesbeansdata"
        }
    },
    { "$addFields": { "gamesbeansdata": { $arrayElemAt: ["$gamesbeansdata", 0] } } },
    // third table join
    { "$addFields": { "companyGe": "$gamesbeansdata.company" } },
    {
        "$lookup": {
            "from": "companybeans",
            let: {
                clientId: "$clientId",
                companyCode: "$companyCode"
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $and: [
                                {
                                    $eq: [
                                        "$String_Id",
                                        "$$clientId",
                                    ]
                                },
                                {
                                    $eq: [
                                        "$gameCode",
                                        "$$companyCode",
                                    ]
                                },
                            ]
                        }
                    }
                }
            ],
            "as": "companybeansdata"
        }
    },
    { "$addFields": { "companybeansdata": { $arrayElemAt: ["$companybeansdata", 0] } } },
    // full working
    {
        $project: {
            clientProfileBean: {
                clientSecretkey: "$clientSecretkey",
                isactive: "$isactive",
                clientRequestAddress: "$clientRequestAddress",
                clientPublicKey: "$clientPublicKey",
                profitlossSummary: "$profitlossSummary",
                userBalanceLimit: "$userBalanceLimit",
                minProfitLoss: "$minProfitLoss",
                maxProfitLoss: "$maxProfitLoss",
                scheduledBlock: "$scheduledBlock",
            },
            // single: "$gamesbeansdata"
            // gamesbeansdata: { $arrayElemAt: ["$gamesbeansdata", 0] },
            gamesbeansdata: "$gamesbeansdata",
            companybeansdata: "$companybeansdata"
        }
    }
]);
// ------------------------- End Code ------------------------------------------

/**
 * is code me hum three table ko join karenge.
 * Is code me hum kuchh sintex alag use kiya hai jo
 * is code me sabse pahle { "$match": { websiteName: partnerId } } partnerId se websiteName match karenge isme partnerId static use kar rhe hai.
 * or gamecode jo stetic hai wo  { "$addFields": { "gameCode": gameCode } }, use kar ke new object me add kar lete hai.
 * { "$addFields": { "String_Id": { "$toString": "$_id" } } }, => jo return aaya usme ObjectId the to use hum string me change kiya is code me.
 * fir hum $lookup ka use kar kete hai
 *  let: {
                clientId: "$clientId",
                gameCode: "$gameCode"
            },
 * is code ka use vairble banane me karte hai is code me $clientId hai wo gamesbeans ka fild hai or gamecode jo uper humne add fields use kiya tha wo hai.
 * fir fum pipeline use karte hai is liye ki hame isme multiple condition check karwana hai 
 * fir hum $match ka use karenge fir $expr fir $and ka fir $eq do bar use karke kisi variable me sabhi data aa jata hai.
 *  $and: [
                                {
                                    $eq: [
                                        "$String_Id",
                                        "$$clientId",
                                    ]
                                },
                                {
                                    $eq: [
                                        "$gameCode",
                                        "$$gameCode",
                                    ]
                                },
                            ]
 *  ye jo code hai usme jo $Strign_Id hai wo uper ke data se aa rha hai or do $$ me hai ex. $$clientId variable hai.
 * hamare pass array ke fome me data aa jata hai usme jo sabse pahla data hai wo hamara data hota hai.
 * { "$addFields": { "gamesbeansdata": { $arrayElemAt: ["$gamesbeansdata", 0] } } },=> is code ka use hum multple array me se ek array lane ke liye karte hai.
 *  fir sum ek companGe name ka fields add karenge jo { "$addFields": { "companyGe": "$gamesbeansdata.company" } } is code se hota hai.
 * fir sum same he teesre table se join karenge jesa ki humne uper use kiya tha fir hmare pass multiple array aa jayega fir sum { "$addFields": { "companybeansdata": { $arrayElemAt: ["$companybeansdata", 0] } } }, use karke ek array la lenge.
 * fir hum $project ka use karke data la lenge.       
 */