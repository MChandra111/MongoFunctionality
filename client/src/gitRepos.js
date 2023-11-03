import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function formatPushedAtDate(pushedAtTimestamp) {
  const pushedAtDate = new Date(pushedAtTimestamp);
  return pushedAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

const GitRepos = () => {
  const [repos, setRepos] = useState([]);
  const [expandedRepo, setExpandedRepo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/MChandra111/repos?sort=pushed&direction=desc');
        setRepos(response.data);
      } catch (error) {
        console.error('It seems I have been slacking off', error);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = repoId => {
    setExpandedRepo(expandedRepo === repoId ? null : repoId);
  };

  return (
    <div className="grid-container">
      {repos.map(repo => (
        <motion.div
          key={repo.id}
          className="repo-box"
          onClick={() => toggleExpand(repo.id)}
          initial={{ maxHeight: 100 }}
          animate={{ maxHeight: expandedRepo === repo.id ? 150 : 70 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h3 className='repo_id'>
            {repo.name}
            <span className="pushed-at-date">{formatPushedAtDate(repo.pushed_at)}</span>
          </h3>
          {expandedRepo === repo.id && (
            <>
              <p className='repo_description'>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <span className='repo_link'>View on GitHub</span>
              </a>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GitRepos;