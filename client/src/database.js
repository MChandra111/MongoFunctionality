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

  return (
    <div>
      <h2>First 3 Entries from MongoDB:</h2>
      {data.map((entry) => (
        <div key={entry._id}>
          <p>Name: {entry.name}</p>
          <p>Language: {entry.language}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayEntries;