// src/features/Education/InteractiveModules.js
import React from 'react';

const InteractiveModules = () => {
  const modules = [
    { title: 'Module 1: Introduction to Finance', progress: 80 },
    { title: 'Module 2: Investment Basics', progress: 50 },
  ];

  return (
    <div className="interactive-modules">
      <h2>Interactive Learning Modules</h2>
      <ul>
        {modules.map((module, index) => (
          <li key={index}>
            <p>{module.title}</p>
            <p>Progress: {module.progress}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveModules;
