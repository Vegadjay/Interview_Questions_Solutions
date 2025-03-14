import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiData, setAPiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingValue, setLoadingValue] = useState(0);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setLoadingValue(30);

      try {
        await delay(2000);
        setLoadingValue(50);

        // Add api key here (Recommanded:- MOCK-API)
        const res = await fetch("add_your_api_here");
        const data = await res.json();
        setLoadingValue(70);

        setAPiData(data);
        setLoadingValue(100);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <ProgressBar progressBarWidth={loadingValue} />
      ) : (
        apiData.map((data) => (
          <div key={data.id}>{data.name}</div>
        ))
      )}
    </>
  );
}

function ProgressBar({ progressBarWidth }) {
  const [finalProgress, setFinalProgress] = useState(0);

  useEffect(() => {
    const fullWidth = 50;
    setFinalProgress((progressBarWidth * fullWidth) / 100);
  }, [progressBarWidth]);

  return (
    <div className="w-[50rem] h-14 rounded-3xl border border-2">
      <div
        className="h-full rounded-3xl transition-all border bg-green-500 border-2"
        style={{ width: `${finalProgress}rem` }}
      ></div>
    </div>
  );
}

export default App;
