//configurations for endpoint for api
const endpointConfigFun = () => {
    if (process.env.NODE_ENV === "production") {
        return {
            rootLayout: `http://${process.env.SERVERHOST}/api/rootLayout`,
            productRoute: `http://${process.env.SERVERHOST}/api/productroute`,
        };
    } else {
        return {
            rootLayout: "http://127.0.0.1:3000/api/rootLayout",
            productRoute: "http://127.0.0.1:3000/api/productroute",
        };
    }
};

export const endpointConfig = endpointConfigFun();
