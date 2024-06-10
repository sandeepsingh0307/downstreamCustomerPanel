import { endpointConfig } from "../lib/endpointConfig";
export const revalidateTime = 24 * 3600;

const fetchAPI = async (endpoint: string) => {
    try {
        let res = await fetch(`${endpoint}`, {
            method: "GET",
            // cache: "no-cache",
            // Revalidate every 60 seconds
            next: { revalidate: revalidateTime },
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            // mode: 'cors',
            credentials: "same-origin",
        });
        return res.json();
    } catch (err) {
        console.error(err + "Failed to fetch data");
    }
};

// export const getRootLayoutAPI = async () => {
//     const data = await fetchAPI(endpointConfig.rootLayout);
//     return data.rootLayoutData;
// };

export const getproductdataAPI = async () => {
    const data = await fetchAPI(endpointConfig.productRoute);
    return data.productData;
};