import server from "./server";
export default {
    products(param) {
        return server(`${param}`, "get");
    },
    productId(param) {
        return server(`${param}`, "get");
    },
    product_create(data) {
        return server(`product_create`, "put", data);
    }
}