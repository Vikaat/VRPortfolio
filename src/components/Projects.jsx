import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.github.com/users/Vikaat/repos?sort=updated&per_page=4'
    )
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 4)))
      .catch(console.error);
  }, []);

  const timeAgo = iso =>
    `${Math.floor((Date.now() - new Date(iso)) / 1000 / 60 / 60 / 24)} days ago`;

  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Featured GitHub Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {repos.map(repo => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="p-4 border rounded-lg hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.8 }}
            transition={{ type: 'spring', stiffness: 300 }} 
          >
            <h3 className="font-semibold">{repo.name}</h3>
            <p className="text-sm">{repo.description}</p>
            <div className="text-xs mt-2">
              ⭐ {repo.stargazers_count} &nbsp;•&nbsp; 🕒 last commit {timeAgo(repo.pushed_at)}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
