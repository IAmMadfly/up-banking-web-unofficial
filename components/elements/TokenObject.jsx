
class TokenHolder {
    constructor() {
        this.token = "";
        console.log("\n--- Constructing TokenHolder ---\n");
    }

    getToken() {
        return this.token;
    }

    setToken(newStr) {
        this.token = newStr;
    }
}

var tokenController = new TokenHolder();

export default tokenController;