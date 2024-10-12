class Cuenta{
    constructor(){

    }
    async guardar(){
        try {
            return { status: 200, message: "Ok", data: res};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: ":(", error}));
        }
    }
}
module.exports = Cuenta;