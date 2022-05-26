import ErrorHandling from "../ErrorHandling/errorHandling";

const baseURL = "http://127.0.0.1:8000/api"
let token = JSON.parse(localStorage.getItem('token'))


// Function to extract token!
const getToken = () => {
    return JSON.parse(localStorage.getItem('token'))
}



// Login API 
export async function LoginApi(data) {

    let result = await fetch(`${baseURL}/login`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    return await ErrorHandling(result)

};


// Get Dashboard Infobox Data
export async function getProfit() {

    let result = await fetch(`${baseURL}/dashboard`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });
    return await ErrorHandling(result)
};


// Get Orders List
export async function getOrders() {

    let result = await fetch(`${baseURL}/api/order/list`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)

};


// Update User 
export async function updateUser(data, userID) {

    let result = await fetch(`${baseURL}/user/update/${userID}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify(data),
        });

    return await ErrorHandling(result)

};

// get User data
export async function getUser(userID) {

    let result = await fetch(`${baseURL}/user/${userID}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)
};


// Product List
export async function getProducts() {

    let result = await fetch(`${baseURL}/product/list`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)

};

// Product Top Product
export async function getTopProduct() {

    let result = await fetch(`${baseURL}/product/list/top`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)

};


// Get Dashboard Graph Data
export async function getDashboardGraph(year) {

    let result = await fetch(`${baseURL}/dashboard/graph/${year}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        });

    return await ErrorHandling(result)
};

// Get Overall Product Analytics Data
export async function getOverallProductAnalytics(rating) {

    let result = await fetch(`${baseURL}/overall2/products/${rating}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        });

    return await ErrorHandling(result)
};

// Get Overall Product Growth, ROI and Cost Data
export async function getOverallProductGrowth(rating) {

    let result = await fetch(`${baseURL}/overall2/products/growth/${rating}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        });

    return await ErrorHandling(result)
};

// Get Overall Orders, Average Buy Rate and Average Earning per month
export async function getOverallAverage(year) {

    let result = await fetch(`${baseURL}/overall/customers/${year}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        });

    return await ErrorHandling(result)
};


// Get Individual Product Analysis
export async function getProductAnalysis(id) {

    let result = await fetch(`${baseURL}/overall2/product/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)
};



// Update User 
export async function addNewProduct(data) {

    let result = await fetch(`${baseURL}/product/list/add`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify(data),
        });

    return await ErrorHandling(result)

};

// Update Product
export async function updateProduct(id,data) {

    let result = await fetch(`${baseURL}/product/list/update/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify(data),
        });

    return await ErrorHandling(result)

};

// Delete individual product
export async function deleteProduct(id) {

    let result = await fetch(`${baseURL}/product/list/delete/${id}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)

};

// Get Individual Product 
export async function getProduct(id) {

    let result = await fetch(`${baseURL}/product/list/id/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)
};



export const postRequest = async (essentials) => {

    let result = await fetch(`${baseURL}${essentials.endPoint}`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify(essentials.body)
        });

    return await ErrorHandling(result)

}


export const getRequest = async (essentials) => {

    let result = await fetch(`${baseURL}${essentials.endPoint}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)

}

export const deleteRequest = async (essentials) => {

    let result = await fetch(`${baseURL}${essentials.endPoint}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': getToken()
            },
        });

    return await ErrorHandling(result)

}



