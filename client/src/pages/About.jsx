import React from 'react';
import DisplayEntries from '../database';

function About() {
  return (
    <div className='ResumeHeading'>
      <h2>Under Development</h2>
      <p>This is where the MongoDB part will sit....</p>
      <DisplayEntries />
    </div>
  );
};

export default About;