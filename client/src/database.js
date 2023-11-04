import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import './Database.css';
import AddEntryButton from './AddEntryForm';

const DisplayEntries = () => {
  const [data, setData] = useState([]);
  const [expandedYears, setExpandedYears] = useState({});
  const [expandedNames, setExpandedNames] = useState({});

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

  const sortedData = data.reduce((acc, entry) => {
    const { Year, Name, Classification } = entry;
    if (!acc[Year]) {
      acc[Year] = {};
    }
    if (!acc[Year][Name]) {
      acc[Year][Name] = {};
    }
    if (!acc[Year][Name][Classification]) {
      acc[Year][Name][Classification] = [];
    }
    acc[Year][Name][Classification].push(entry);
    acc[Year][Name][Classification].sort((a, b) => a.Title.localeCompare(b.Title));
    return acc;
  }, {});

  const toggleExpanded = (type, key) => {
    if (type === 'year') {
      setExpandedYears({ ...expandedYears, [key]: !expandedYears[key] });
    } else if (type === 'name') {
      setExpandedNames({ ...expandedNames, [key]: !expandedNames[key] });
    }
  };

  return (
    <div style={{ overflowY: 'auto', height: '80vh', textAlign: 'left', marginLeft: '35px', fontSize: '20px' }} className='Resume'>
      <h1 style={{textAlign: 'center', fontSize: '35px'}}>
        Resume
        <span style={{ textAlign: 'right'}}>
          <AddEntryButton />
        </span>
      </h1>
      {Object.keys(sortedData).map((year) => (
        <motion.div key={year}>
          <h2 onClick={() => toggleExpanded('year', year)}>
            {year} {expandedYears[year] ? '▼' : '▶'}
          </h2>
          {expandedYears[year] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              style={{ paddingLeft: '20px' }}
            >
              {Object.keys(sortedData[year]).map((name) => (
                <motion.div key={name}>
                  <h3 onClick={() => toggleExpanded('name', name)}>
                    {name} {expandedNames[name] ? '▼' : '▶'}
                  </h3>
                  {expandedNames[name] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      style={{ paddingLeft: '40px' }}
                    >
                      {Object.keys(sortedData[year][name]).map((classification) => (
                        <motion.div key={classification}>
                          <h4>{classification}</h4>
                          {sortedData[year][name][classification].map((entry) => (
                            <div key={entry._id}>
                              <p>
                                <a href={entry.link} target="_blank" rel="noopener noreferrer">
                                  {entry.Title}
                                </a>
                              </p>
                              {/* Add other entry properties here */}
                            </div>
                          ))}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default DisplayEntries;