import bcrypt from 'bcrypt';


//creating a encrypted password using bcrypt
const hashPassword = async (password) => {
    const salt =await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}


// comparing both passwords
const isPasswordCorrect = async (password,hash) => {
    return await bcrypt.compare(password,hash);
}

// exporting the functions
export {hashPassword,isPasswordCorrect};