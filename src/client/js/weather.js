const baseURL = "https://api.weatherbit.io/v2.0/forecast/daily?"

const getWeatherCondition = async (geoNameData,lattitude, longitude, apiKey) => {
    const url = `${baseURL}lat=${lattitude}&lon=${longitude}&key=${apiKey}`;
    const response = await fetch(url);
    try {
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("ERROR in fetching data ", error)
    }
}


export { getWeatherCondition }