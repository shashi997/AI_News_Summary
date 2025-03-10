const scrapeArticles = require('../utils/scrapeArticles.js')
const summarizeWithAI = require('../utils/summarizeWithAI.js')



const summarizeNews = async (req, res) => {
    try {

        // ✅ Extract selected article URLs from frontend request
        const { articles } = req.body;  

        if (!articles || articles.length === 0) {
            return res.status(400).json({ message: "No articles provided for summarization." });
        }

        console.log("Received articles:", articles); // Debugging log

        // ✅ Scrape article content using cheerio
        const scrapedData = await scrapeArticles(articles);

        
        // console.log(JSON.stringify(scrapedData, null, 2));
        
        // ✅ Send scraped content to AI for summarization
        const aiSummary = await summarizeWithAI(scrapedData);
        
        res.status(200).json({
            News_Summaries: aiSummary
        })

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message : "Failed to get the data From AI..."
        })
    }
}

module.exports = summarizeNews