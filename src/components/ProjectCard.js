import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({title, tech, children}){
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p><strong>Tech:</strong> {tech}</p>
      <div>{children}</div>
    </div>
  );
}
