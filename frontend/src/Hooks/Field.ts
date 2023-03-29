export const checkInputValue = async (id:string) => {
    const element = document.getElementById(id) as HTMLInputElement
    if(element.value === undefined || element.value === null || element.value === ""){
        return false
    }
    return true
}

export const checkInputArrayValue = async (inputArray: string) => {
    const element = Array.from(document.getElementsByClassName(inputArray) as HTMLCollectionOf<HTMLInputElement>)
    let isNull = true
    let message = ""
    if(element.length === 0) return {status: isNull = false, message: message = "At least one variation is required!"}
    element.forEach(data => {
        const dataContents = data.value.split(":")
        if(dataContents[0] === "" || dataContents[0] === undefined || dataContents[1] === "" ||  dataContents[1] === undefined){
            isNull = false
            message = "Invalid Variation Value!"
        }
    })
    return {status: isNull, message: message}
}

export const checkStringArrayState = async (array: Array<Blob> | undefined) => {
    let isNull = true
    let message = ""
    if(array === undefined) return {status:isNull = false, message: message = "At least one item image is required!"}
    if(array.length === 0) return {status:isNull = false, message: message = "At least one item image is required!"}

    array.forEach(data => {
        if(data === null || data === undefined){
            isNull = false
            message = "Invalid item image error"
        }
    })
    
    return {status:isNull, message:message}
}