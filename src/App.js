import "./App.css";
import { useEffect, useState } from "react";
import api from "./hooks/useApi";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  const fetchData = async () => {
    const data = await api.get("");
    setData(data.data);
  };

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <Card
            icon={item.logo}
            name={item.name}
            facultyName={item.faculty.name}
            university={item.faculty.university.name}
            roundSeat={item.roundSeats}
            score={item.score}
          />
        );
      })}
    </div>
  );
};

export default App;
