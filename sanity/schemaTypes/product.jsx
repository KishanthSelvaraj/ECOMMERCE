export default {
    name : "product",
    title : "Product",
    type : "document",
    fields: [
        {
           name: "name",
           title: "Product Name",
           type: "string"
        },
        {
            name: "description",
            title: "Product Description",
            type: "string"
         },
         {
            name: "price",
            title: "Product Price",
            type: "number"
         },
         {
            name: "price_id",
            title: "Stripe Product Price ID",
            type: "string"
         },
         {
            name: "images",
            title: "Product Images",
            type: "array",
            of: [{type: "image"}],
            options : {
               hotspot : "true"
            }
         },
         {
           name : "slug",
           title : "Slug",
           type: "slug",
           options: {
            source : "name",
            maxLength : 90,
           }
         },
         {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{type: "reference", to : {type:"category"}}]
         }
    ]
}