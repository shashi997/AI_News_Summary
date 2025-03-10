const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeArticles(urls) {
    const articles = [];
  
    for (const url of urls) {
      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
  
        const selectors = [
          'article',
          '.article-content',
          '#article-body',
          '.story-content',
          'main',
          'p',
          'div[itemprop="articleBody"]'
        ];
  
        let textContent = '';
  
        // Iterate through selectors and accumulate content
        for (const selector of selectors) {
          const elements = $(selector); // Use Cheerio's $(selector)
  
          if (elements.length > 0) {
            elements.each((i, el) => { // Use Cheerio's .each()
              // Remove links from the element before getting the text:
              $(el).find('a').remove(); // Remove <a> tags (links)
              textContent += $(el).text().trim() + ' ';
            });
          }
        }
  
         // Remove extra whitespace and newlines:
         textContent = textContent.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with single space
  
        articles.push({ url, content: textContent.trim() });
      } catch (error) {
        console.error(`Error scraping ${url}:`, error);
        articles.push({ url, content: `Error scraping: ${error.message}` });
      }
    }
  
    return articles;
  }
  
  
module.exports = scrapeArticles