const validation=(email,password)=>{
    const valideemail=/^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const validepassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!valideemail){
        return "Email is Invalide";
    }
    else if(!validepassword){
        return "Password is Invalide,(Atleast 1 capital letter, symbol and number) ";
    }
    else{
        return null;
    }
}
export default validation;