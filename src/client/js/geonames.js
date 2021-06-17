const baseURL = "http://api.geonames.org/searchJSON?q="

const geoNamesData = async (place, username) => {
    const url = `${baseURL}${place}&maxRows=10&username=${username}`
    const response = await fetch(url);
    try {
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("ERROR in fetching data ", error)
    }
}

export { geoNamesData }