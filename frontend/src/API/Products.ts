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

export const sellItemsAPI = async (userID:string |undefined, productName:string | null, productQuantity: string, productPrice:string, productVariations:Array<string>, productImages:Array<Blob> | undefined) => {
    try {
        
        const formData = new FormData()
        productImages?.forEach(image => {
            formData.append("files", image)
        })

        formData.append("userID",userID!)
        formData.append("productName",productName!)
        formData.append("productQuantity",productQuantity!)
        formData.append("productPrice",productPrice!)
        formData.append("productVariations",JSON.stringify(productVariations))

        const res = await axios({
            headers: {
                "Content-Type" : "multipart/form-data"
            }, 
            method: "POST",
            url: "/products/sell-product",
            data: formData,
        })
        return res
    } catch (error) {
        return error
    }
}