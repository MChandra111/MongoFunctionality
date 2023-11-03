import React from "react";
import GitRepos from '../gitRepos';
import GTLogo from "../assets/images/GTLogo.png";

function Home() {
  return (
    <div className="HomePage">
      <h2>My Github Repositories</h2>
      <p> 
        <img
          className="GTLogo"
          src={GTLogo}
          alt="logo"
          style={{
            width: 80,
            height: 70

          }}
        />
        <a href= "https://github.com/MChandra111" target="_blank" rel="noopener noreferrer">
          <span className='GitLink'>MChandra111</span>
        </a>
      </p>
      <GitRepos />
    </div>
  );
};

export default Home;