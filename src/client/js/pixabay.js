const baseURL = "https://pixabay.com/api/?key="

const getPicture = async (place, key) => {
    const url = `${baseURL}${key}&q=${place}&image_type=photo&pretty=true`
    const response = await fetch(url);
    try {
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("ERROR in fetching data ", error)
    }
}

export { getPicture }