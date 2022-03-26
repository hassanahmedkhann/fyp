import ErrorHandling from "../ErrorHandling/errorHandling";

const baseURL = "http://127.0.0.1:8000/api"



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

    let result = await fetch(`${baseURL}/profit`,
        {
            method: 'GET',
        });
    return await ErrorHandling(result)
};


// Get Complete Records
export async function getCustomerData() {

    let result = await fetch(`http://127.0.0.1:8000/api/data`,
        {
            method: 'GET',
        });

    return await ErrorHandling(result)

};


// Update User 
export async function updateUser(data, userID) {

    let result = await fetch(`http://127.0.0.1:8000/api/user/update/${userID}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    return await ErrorHandling(result)

};

// get User data
export async function getUser(userID) {

    let result = await fetch(`http://127.0.0.1:8000/api/user/${userID}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
        });

    return await ErrorHandling(result)
};