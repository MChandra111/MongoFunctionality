import React, { useState } from 'react';
import { motion } from "framer-motion";
import './App.css';

const AddEntryButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newEntryData, setNewEntryData] = useState({
    Entity: '',
    Name: '',
    Classification: '',
    Title: '',
    Description: '',
    Month: '',
    Year: '',
    Link: '',
  });
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntryData({ ...newEntryData, [name]: value });
  };

  const addEntry = async () => {
    try {
      const response = await fetch('https://mongo-functionality-server.vercel.app/api/items/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntryData),
      });

      if (response.ok) {
        console.log('New entry added successfully');
      } else {
        console.error('Failed to add entry');
      }
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  }

  const validatePassword = () => {
    if (password === '123') {
      setPasswordIsValid(true);
      setShowPasswordInput(false);
    } else {
      setPasswordIsValid(false);
      setShowPasswordInput(true);
    }
  };

  return (
    <div>
      <button onClick={toggleForm} className="AddEntry">
        Add New Entry
      </button>
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{
              padding: '20px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <p style={{ textAlign: "center" }}>Add New Entry</p>
            <form>
              {showPasswordInput && (
                <div>
                  <p style={{ textAlign: "center" }}>
                    Enter Password:
                  </p>
                  <div style={{textAlign: "center"}}>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className='PassInput'
                  />
                  </div>
                  <div style={{textAlign: "center"}}>
                  <button onClick={validatePassword} className='AddEntry'>Enter</button>
                  </div>
                </div>
              )}
              {!showPasswordInput && (
                <div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Entity:
                    <input
                        type="text"
                        name="Entity"
                        value={newEntryData.Entity}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. University"
                    />
                  </label>
                  </div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Name:
                    <input
                        type="text"
                        name="Name"
                        value={newEntryData.Name}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. Texas A&M University"
                    />
                  </label>
                  </div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Class:
                    <input
                        type="text"
                        name="Classification"
                        value={newEntryData.Classification}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. Class/Job"
                    />
                  </label>
                  </div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Title:
                    <input
                        type="text"
                        name="Title"
                        value={newEntryData.Title}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. Class Name"
                    />
                  </label>
                  </div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Desc:
                    <input
                        type="text"
                        name="Description"
                        value={newEntryData.Description}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. Description of Class"
                    />
                  </label>
                  </div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Month:
                    <input
                        type="number"
                        name="Month"
                        value={newEntryData.Month}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. 1"
                    />
                  </label>
                  </div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Year:
                    <input
                        type="number"
                        name="Year"
                        value={newEntryData.Year}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. 2023"
                    />
                  </label>
                  </div>
                  <div>
                  <label style={{fontSize: "30px", textAlign: "left"}}>
                    Link:
                    <input
                        type="text"
                        name="Link"
                        value={newEntryData.link}
                        onChange={handleChange}
                        className='FormEntry'
                        placeholder="Eg. https://cybr.club"
                    />
                  </label>
                  </div>
                  <div>
                  <button
                    type="button"
                    onClick={addEntry}
                    className="AddEntry"
                    style={{ marginRight: '10px' }}
                  >
                    Add Entry
                  </button>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="AddEntry"
                  >
                    Close
                  </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};


export default AddEntryButton;