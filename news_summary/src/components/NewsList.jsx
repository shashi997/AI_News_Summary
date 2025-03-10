// src/components/NewsList.jsx
import { useEffect, useState } from "react";
import { useSummarizedNews } from "../contexts/SummarizedNewsContext";



export default function NewsList() {
  const [articles, setArticles] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const { setSummaries } = useSummarizedNews(); // Get the setter function from context
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  // Fetch articles from the backend
  useEffect(() => {
    fetch("http://localhost:8080/news")
      .then((res) => res.json())
      .then((data) => {
        console.log("Articles fetched from backend:", data.articles); // Debug: Check fetched articles
        setArticles(data.articles)
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);


  // Set default selection: first 1 article by their URL
  useEffect(() => {
    if (articles.length > 0 && selectedArticles.length === 0) {
      const defaultSelected = articles.slice(0, 1).map((article) => article.url);
      setSelectedArticles(defaultSelected);
    }
  }, [articles, selectedArticles]);

  // Toggle selection when checkbox is changed
  const handleCheckboxChange = (url) => {
    if (selectedArticles.includes(url)) {
      setSelectedArticles(selectedArticles.filter((item) => item !== url));
    } else {
      setSelectedArticles([...selectedArticles, url]);
    }
  };


  //  When "Summarize Selected" is clicked, send the selected links to the backend
  const handleSummarize = async () => {
    if (selectedArticles.length === 0) {
      alert("Please select at least one article to summarize.");
      return;
    }
    try {
      console.log(selectedArticles);
      
      const response = await fetch("http://localhost:8080/news/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articles: selectedArticles }),
      });
      const data = await response.json();
  
      setSummaries(data.News_Summaries); // Update summaries using the context setter


      console.log("Summarization result:", data);
      // Handle the AI-generated summary response here

    } catch (error) {
      console.error("Error summarizing:", error);
    }
  }


 


  // Pagination Logic - Recalculate currentArticles whenever currentPage or articles changes
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="p-4 bg-white shadow-md rounded-lg">

      {/* Display total count */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Total Articles: {articles.length}</h2>

        <button
          onClick={() => handleSummarize(selectedArticles, setSummaries)} // ✅ Call function from SummarizedNews.jsx
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Summarize
        </button>
      </div>
        
      {/* {console.log(currentArticles)} */} 

      {/* Article List with checkboxes */}
      {currentArticles.map((article, index) => (
        <div key={index} className="border-b py-3 flex items-center">

          <input
            type="checkbox"
            className="mr-2"
            checked={selectedArticles.includes(article.url)}
            onChange={() => handleCheckboxChange(article.url)}
          />

          <div className="flex-1">
            <h3 className="font-bold">{article.title}</h3>
            <p className="italic text-sm">{article.author}</p>
            <p className="text-sm">{article.description}</p>
            <a 
              href={article.url}
              target="_blank"
              className="text-blue-600 underline">
              Read more
            </a>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>



      {/* Summarize Button */}
      <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSummarize(selectedArticles, setSummaries)} // ✅ Call function from SummarizedNews.jsx
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Summarize
          </button>
      </div>
      News List

    </div>
  );
}
