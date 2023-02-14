export const checkRegisterField = async (firstname:string, lastname:string, email:string, username:string,   password:string, confirmPassword:string) => {
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(firstname === "" || lastname === "" || email === "" || username === "" || password === "" || confirmPassword === "")
    return alert("Please fill out all fields.")

    if(!email.match(validRegex)) return alert("Invalid Email")

    if(password !== confirmPassword) return alert("Password does not match")

    return true
}

export const checkLoginField = async (email:string, password:string) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email === "" || password === "") return alert("Please fill all fields!")
    
    if(!email.match(validRegex)) return alert("Invalid Email")

    return true
}

export const checkUpdateField = async (password:string, confirmPassword:string) => {
    if(password === "" || confirmPassword === "") return alert("Please fill all new password and confirm new password fields.")
    if(password === confirmPassword) return true
    return false
}