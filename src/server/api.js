import server from "./server";
export default {
    products(param) {
        return server(`${param}`, "get");
    },
    productId(param) {
        return server(`${param}`, "get");
    }
}