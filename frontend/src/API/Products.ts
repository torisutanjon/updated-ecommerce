import axios from 'axios'

export const getSellingItems = async (id:string | undefined) => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            method: "POST",
            url: "/products/get-product-list",
            data:{
                id
            }
        })
        return res?.data?.sellingProducts
    } catch (error) {
        return error
    }
}

export const getProductsInfo = async (id:string | undefined, productIDs:Array<string> | undefined) => {
    try {
        const res = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            url: "/products/get-products-info",
            data:{
                id, productIDs
            }
        })
        return res?.data?.productsInfo
    } catch (error) {
        return error
    }
}

export const sellItemsAPI = async (id:string |undefined, productName:string | null, productQuantity: string, productPrice:string, productVariations:Array<string>, productImages:Array<string> | undefined) => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            method: "POST",
            url: "/products/sell-product",
            data:{
                userID: id,
                productName,
                productVariations,
                productQuantity,
                productPrice,
                productImages
            }
        })
        return res
    } catch (error) {
        return error
    }
}
