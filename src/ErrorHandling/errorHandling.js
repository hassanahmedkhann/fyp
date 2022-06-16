async function ErrorHandling(result) {

    try {
        if (result.status === 200) {
            result = await result.json()
            if (!result) {
                throw new Error("No stats record found ")
            }
            return {
                success: true,
                message: result,
            }
        }
        else {
            result = await result.json()
            return {
                success: false,
                data: result,
            }
        }

    } catch (error) {
        // console.log(error)
        return {
            success: false,
            data: "Server error! Please contact support."
        }
    }

}

export default ErrorHandling