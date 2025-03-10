const url =  'https://newsapi.org/v2/everything?' +
'q=tesla&' +
'from=2025-02-10&' +
'sortBy=popularity&' +
'apiKey=64d0dbb6d0d04e13bb8690aa714652eb';


const options = {method: 'GET', headers: {accept: 'application/json'}};

const getNews = async (req, res) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json()
        // console.log(data);
        res.status(200).json(data);
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            message : "Failed to Fetch the data From News API.."
        })
    }
}


module.exports = getNews