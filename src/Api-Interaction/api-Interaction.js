import ErrorHandling from "../ErrorHandling/errorHandling";

const baseURL = "http://127.0.0.1:8000/api/data"

// Get Assignments API
export async function getCustomerData() {

    let result = await fetch(`http://127.0.0.1:8000/api/data`,
        {
            method: 'GET',
        });

    return await ErrorHandling(result)

};