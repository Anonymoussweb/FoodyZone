// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

export var URL_ADD = "http://localhost:9000"

function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL_ADD);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);
  console.log(search);
  // Filter data based on search input
  const filteredData = data ? data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <div>
      <Header setSearch={setSearch} />
      <Body data={filteredData} />
    </div>
  );
}

export default App;
