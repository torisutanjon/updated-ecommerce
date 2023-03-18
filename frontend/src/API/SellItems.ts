import axios from 'axios'

export const sellItemsAPI = async (id:string |undefined, productName:string | null, productQuantity: string, productPrice:string, productVariations:Array<string>, productImages:Array<string> | undefined) => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            method: "POST",
            url: "/sell-items",
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