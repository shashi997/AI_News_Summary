const { GoogleGenerativeAI } = require("@google/generative-ai");

async function summarizeWithAI(scrapedData) {
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({model :"gemini-1.5-flash"}); // Or the appropriate Gemini model name

  const summaries = [];

  for (const article of scrapedData) {
    try {
      const prompt = `Please summarize the following news article in a simple, short and easy-to-understand way, providing key insights for the user:\n\n${article.content}`;

        // ✅ Rate Limiting - Prevents too many requests error
        await delay(1500); 


      const request = {
        contents: [
            {
                role: "user",
                parts: [{ text: prompt }],
            },
        ],
      };

      const response = await model.generateContent(request);

       // ✅ Debugging: Log response structure
       console.log(`AI Response for ${article.url}:`, JSON.stringify(response, null, 2));


       // ✅ Validate API response before accessing `candidates`
       const candidate = response.response?.candidates?.[0];
        const summaryText = candidate?.content?.parts?.[0]?.text;


        if (!summaryText) {
            console.error(`No valid summary returned for ${article.url}`);
            summaries.push({
                url: article.url,
                summary: "AI could not summarize this article.",
            });
            continue;
        }

     
        summaries.push({
            url: article.url,
            summary: summaryText,
        });
    } catch (error) {
      console.error(`Error summarizing ${article.url}:`, error);
      summaries.push({
        url: article.url,
        summary: `Error summarizing: ${error.message}`, // Error message
      });
    }
  }

  return summaries;


}

// ✅ Helper function to prevent rate limits
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = summarizeWithAI