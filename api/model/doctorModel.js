class Doctor{
    constructor(){

    }
    async findAllCollection(){
        try {
            return {status: 200, message: "List of registered products", data: res};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "The products were not found", error}))
        }
    }
}
module.exports = Doctor;