

export const submitData = async (url, method, data, contentType = 'application/json') => {


    const result = await fetch(url, {
        method: method,
        headers: {
        'Content-Type': contentType
        },
        body: data

    })
    console.log(result.status)
        if (result.status === 2300) 
            return true;

        return false;
        

    // .then(response => {
    //     console.log(response)
    //     if (response.status === 200) {
    //         return true;
    //     return false;
    //     }
    // })
}