import React, { useState, useEffect } from 'react';

const DisplayEntries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mongo-functionality-server.vercel.app/api/items');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const displayDataByYear = data.reduce((acc, entry) => {
    const { Year, Name } = entry;
    if (!acc[Year]) {
      acc[Year] = [];
    }
    acc[Year].push(entry);
    acc[Year].sort((a, b) => a.Name.localeCompare(b.Name));
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(displayDataByYear).map(year => (
        <div key={year}>
          <h2>{year}</h2>
          {displayDataByYear[year].map(entry => (
            <div key={entry._id}>
              <p>Name: {entry.Name}</p>
              <p>Title: {entry.Title}</p>
              {/* Add other entry properties here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DisplayEntries;