const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/agg1', { useNewUrlParser: true, useUnifiedTopology: true })

let url = 'mongodb://localhost:27017/agg1'
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to database!');
}).catch((error) => {
    console.log(error);
    console.log('Connection failed!');
});
// 1-----------------------------------------------------
// const sellerProduct = require('./model/sellerProduct');
// const product = require('./model/product');
// const category = require('./model/category');
// const sellers = require('./model/sellers');

// app.get('/', async (req, res) => {

//     var start = new Date();
//     var id = mongoose.Types.ObjectId('61b18e41c5aed278ca11c069');
//     // const resdata = await category.aggregate([
//     //     { "$match": { "_id": id } },
//     //     // { "$addFields": { "_id": { "$toObjectId": id } } },
//     //     // { "$addFields": { "_id": { "$toString": "$_id" } } },
//     //     {
//     //         "$lookup": {
//     //             "from": "sellerproducts",
//     //             "localField": "_id",
//     //             "foreignField": "categoryId",
//     //             "pipeline": [
//     //                 {
//     //                     "$lookup": {
//     //                         "from": "products",
//     //                         "localField": "productId",
//     //                         "foreignField": "_id",
//     //                         "as": "resultallproductArray"
//     //                     }
//     //                 }

//     //                 // { "$project": { title: 1, price: 1, description: 1, image: 1, rating: 1, id: 1 } }
//     //             ],
//     //             "as": "resultsellersproductArray"
//     //         }
//     //     },
//     // ]);

//     const resdata = await category.aggregate([
//         { "$match": { "_id": id } },
//         {
//             "$lookup": {
//                 "from": "sellerproducts",
//                 "localField": "_id",
//                 "foreignField": "categoryId",
//                 "as": "resultsellersproductArray"
//             }
//         },
//         { "$unwind": "$resultsellersproductArray" },
//         { "$addFields": { "custom_productId": "$resultsellersproductArray.productId" } },
//         // { "$addFields": { "custom_pro_Id_c": { "$toObjectId": "$custom_productId" } } },
//         {
//             "$lookup": {
//                 "from": "products",
//                 "localField": "custom_productId",
//                 "foreignField": "_id",
//                 "as": "resultallproductArray"
//             }
//         },
//         { "$unwind": "$resultallproductArray" },
//         {
//             $project: {
//                 _id: 1,
//                 parent: 1,
//                 images: 1,
//                 offertext: 1,
//                 seo_data: "$seo", // object name change ------------------
//                 sellersproduct: {
//                     // resultsellersproductArray: "$resultsellersproductArray"
//                     salePrice: "$resultsellersproductArray.salePrice",
//                     minSellPrice: "$resultsellersproductArray.minSellPrice",
//                     membershipPrice: "$resultsellersproductArray.membershipPrice",
//                     sellPrice: "$resultsellersproductArray.sellPrice",
//                     price: "$resultsellersproductArray.price",
//                     quantity: "$resultsellersproductArray.quantity",

//                 },
//                 product: "$resultallproductArray"
//             }
//         }
//     ]);

//     res.status(200).json({
//         time: new Date() - start + ' ' + 'ms',
//         length: resdata.length,
//         data: resdata,
//     })
// })

// mongoose.set('debug', true);
// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
// 1-----------------------------------------------------
/*
 next
*/
//2 -------------------------------------------------------
// const Order = require('./model/model_agg2/order');
// app.get('/', async (req, res) => {
//     // res.send('Hello World!')
//     // Order.insertMany([
//     //     { productName: "Steel beam", status: "new", quantity: 10 },
//     //     { productName: "Steel beam", status: "urgent", quantity: 20 },
//     //     { productName: "Steel beam", status: "urgent", quantity: 30 },
//     //     { productName: "Iron rod", status: "new", quantity: 15 },
//     //     { productName: "Iron rod", status: "urgent", quantity: 50 },
//     //     { productName: "Iron rod", status: "urgent", quantity: 10 }
//     // ])
//     // res.status(200).json({
//     //     status: 1
//     // })
//     //---------------
//     const datares = await Order.aggregate([
//         { $match: { status: "urgent" } },
//         { $group: { _id: "$productName", sumQty: { $sum: "$quantity" } } }
//     ])
//     res.status(200).json({
//         data: datares
//     })
// })

/*
next
*/
//3----------------------------------------
// const category_agg3 = require('./model/model_agg3/category')
// const product_agg3 = require('./model/model_agg3/product')
// app.get('/', async (req, res) => {
//     var start = new Date();
// category_agg3.insertMany([
//     { categoryName: "Mobiles, Tablets & More", status: true, img: '../../img/ajay.jpg' },
//     { categoryName: "Echo & Alexa", status: true, img: '../../img/ajay.jpg' },
//     { categoryName: "Kindle E-Readers", status: true, img: '../../img/ajay.jpg' },
//     { categoryName: "Amazon Prime Video", status: true, img: '../../img/ajay.jpg' },
// ]);
// -------------

/*
 * dummy category
    61e8fcfa105c23b8e84c2f14
    61e8fcfa105c23b8e84c2f15
    61e8fcfa105c23b8e84c2f16
    61e8fcfa105c23b8e84c2f17
 */


//     const category_agg3 = require('./model/model_agg3/category')
// const product_agg3 = require('./model/model_agg3/product')



// const resdata = await category_agg3.aggregate([
//     { "$match": { "status": true } },
//     { "$addFields": { "_id": { "$toString": "$_id" } } },
//     {
//         "$lookup": {
//             "from": "product_agg3",
//             "localField": "_id",
//             "foreignField": "category",
//             "pipeline": [
//                 // { "$match": { "status": true } },
//                 { "$project": { title: 1, price: 1, description: 1, image: 1, rating: 1, id: 1 } }
//             ],
//             "as": "resultingProductArray"
//         }
//     },
// ]);


// res.status(200).json({
//     time: new Date() - start + ' ' + 'ms',
//     length: resdata.length,
//     data: resdata,

// })
// });
/**
 * next
 */
// 4-------------------------------------
/**
 * ye aggereatilon livecasino ka hai is me hum teen table ko join karenge
 * 
 */
const clientProfileBean = require('./model/casinolivemodel/clientProfileBean');
const companyBean = require('./model/casinolivemodel/CompanyBean');
const gamesBean = require('./model/casinolivemodel/gamesbean');

app.get('/', async (req, res) => {
    var start = new Date();

    let partnerId = 'wolfs99'
    let userid = 'tempajay'
    let gameCode = 'dia_andarbahar'

    // let getpartneridf = await clientProfileBean.findOne({ websiteName: partnerId, isactive: true, scheduledBlock: false }).lean().select({ _id: 1, clientRequestAddress: 1, ownPrivateKey: 1 });
    // // if (getpartneridf) {
    // let getpartnerid = getpartneridf
    // // } else {
    // //     getpartnerid = 0
    // // }
    // // console.log(getpartnerid);

    // let getGamesBeanf = await gamesBean.findOne({ gameCode: gameCode, isActive: true, clientId: getpartnerid._id }).lean().select({ minStake: 1, company: 1, maxStake: 1, maxProfitLoss: 1 });
    // // if (getGamesBeanf) {
    // let getGamesBean = getGamesBeanf
    // // } else {
    // //     getGamesBean = 0
    // // }
    // // console.log(getGamesBean);
    // let getCompanyBeanf = await companyBean.findOne({ isActive: true, clientId: getpartnerid._id, companyCode: getGamesBean.company }).lean().select({ _id: 1 });
    // // if (getCompanyBeanf) {
    // let getCompanyBean = getCompanyBeanf
    // // } else {
    // //     getCompanyBean = 0
    // // }
    // let resdata = {
    //     getpartnerid: getpartnerid,
    //     getGamesBean: getGamesBean,
    //     getCompanyBean: getCompanyBean
    // }


    // return
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

    res.status(200).json({
        time: new Date() - start + ' ' + 'ms',
        length: resdata.length,
        data: resdata,
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
