import React from 'react';
import { motion } from "framer-motion";
import Videos from '../Videos.js';
import YTLogo from '../assets/images/YTLogo.png';

function Music() {

  return (
    <div>
      <motion.div
        initial={{ 
          opacity:0,
          x: 50,
        }}
        animate={{ 
          opacity:1,
          x: 0, 
        }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <img
          className="YTLogo"
          src={YTLogo}
          alt="logo"
          style={{
            width: 150,
            height: 106
          }}
        />
        <span className="ChannelName">
          <a href="https://www.youtube.com/@DiosMusicDump" target="_blank" rel="noopener noreferrer">Dio's Music Dump</a>
        </span>
        
        <Videos />

      </motion.div>
    </div>
  );
};

export default Music;