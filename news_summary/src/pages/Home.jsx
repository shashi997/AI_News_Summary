// src/pages/Home.jsx
import NewsList from "../components/NewsList";
import SummarizedNews from "../components/SummarizedNews";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
      <div className="bg-[#F8FAFC] min-h-screen">
        <Navbar />
        <div className="flex p-4 space-x-6">
          {/* Left - News Sources */}
          <div className="w-1/2 bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-[#0A66C2] mb-2">Original News</h2>
            <NewsList />
          </div>

          {/* Right - Summarized News */}
          <div className="w-1/2 bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-[#0A66C2] mb-2">AI Summaries</h2>
            <SummarizedNews />
          </div>
        </div>
     </div>
  
  );
}
