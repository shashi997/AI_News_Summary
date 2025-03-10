import { useSummarizedNews } from "../contexts/SummarizedNewsContext";
import { useEffect } from 'react';

// src/components/SummarizedNews.jsx
export default function SummarizedNews() {
    // const summaries = [
    //   { title: "AI Breakthrough", summary: "OpenAI releases a new GPT model..." },
    //   { title: "Tech Stocks Rise", summary: "Tech companies saw an increase..." },
    // ];
  
    const {summaries} = useSummarizedNews(); // Access summaries from context
    console.log("Summaries in SummarizedNews:", summaries); // Check if summaries are defined
    
    useEffect(() => {
      console.log("Summaries updated:", summaries); // Log to see if this effect runs
    }, [summaries]); // Add summaries as a dependency


    return (
    
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Summarized News</h2>
      {!summaries || summaries.length === 0 ? (
        <p className="text-gray-600">No summaries yet. Select articles and click "Summarize Selected".</p>
      ) : (
        summaries.map((news, index) => (
          <div key={index} className="border-b p-3">
            <h3 className="font-bold">Article {index + 1}</h3>
            <p>{news.summary}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a> {/* Add rel for security */}
          </div>
        ))
      )}
    </div>

 
    );
  }
  
