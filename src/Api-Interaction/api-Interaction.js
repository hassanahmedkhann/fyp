import ErrorHandling from "../ErrorHandling/errorHandling";

const baseURL = "http://127.0.0.1:8000/api"
let token = JSON.parse(localStorage.getItem('token'))



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


// Get Profit Data
export async function getProfit() {

    let result = await fetch(`${baseURL}/dashboard`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
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
                'Authorization': token
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
                'Authorization': token
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
                'Authorization': token
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
                'Authorization': JSON.parse(localStorage.getItem('token'))
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
                'Authorization': JSON.parse(localStorage.getItem('token'))
            },
        });

    return await ErrorHandling(result)

};