import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Videos = () => {
  /*const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = 'API_KEY';
      const CHANNEL_ID = 'CHANNEL_ID';
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`
        );
        console.log(response.data);
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    };

    fetchVideos();
  }, []);*/

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 1000); // Adjust the delay between each video's display
  }, []);

  const videoUrls = [
    "https://www.youtube.com/embed/iAjfb8GxYG8?si=fDFU_gjBI2OPiobp",
    "https://www.youtube.com/embed/Wj5Oa7VNfXE?si=vXC4CBggPPuGYu6W",
    "https://www.youtube.com/embed/opWlPpZaMsM?si=Xpn6EEdN7c4NDc11",
    "https://www.youtube.com/embed/2_UkVeLjYUk?si=dsIAnvPrkF6s3HnL",
    "https://www.youtube.com/embed/TRGs0UIJKlA?si=1WwJ2tCJHZiKIXCd",
    "https://www.youtube.com/embed/sN46M-__N5Y?si=GXuJvAQ4FzBih_3t",
    "https://www.youtube.com/embed/PkpWdmtLGhI?si=D_uCUGq8HHEq35Gk",
    "https://www.youtube.com/embed/yWLv2z-_QYc?si=nw8vJpc24wblDkzv",
    "https://www.youtube.com/embed/l6N7I_GLfz4?si=6mLezIGiEtSyChyp",
    "https://www.youtube.com/embed/C0h9PjtcieM?si=YycArkxqDKNto-4F",
    "https://www.youtube.com/embed/lCnAa9Hpf9A?si=vdgTffIUTuTTtfXd",
    "https://www.youtube.com/embed/olUMsWHkw_M?si=jSQ70eVaq_0M8D8j",
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        height: '80vh',
        paddingLeft: '12px',
      }}
      className='container-with-scrollbar'
    >
      {videoUrls.map((url, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, x:50 }}
          animate={!loading ? { opacity: 1, x:0 } : {}}
          transition={{ duration: 2, delay: index * 0.1 }}
          style={{ width: '23%', padding: '10px', marginBottom: index > 7 ? '50px' : '0', maxHeight: '300px', overflow: 'hidden', display: 'flex', flexDirection: 'column',
          }}
        >
          <iframe
            title={'Video'}
            width="100%"
            height="200"
            src={url}
            frameBorder="0"
            allowFullScreen
            style={{ marginBottom: '10px' }}
          ></iframe>
          
        </motion.div>
      ))}
    </div>
  );
};

export default Videos;