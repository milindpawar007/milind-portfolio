import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1: React E-commerce Website</h3>
          <p>
            A scalable e-commerce platform built using React, Redux, and
            Node.js. Features real-time product updates and secure payments.
          </p>
          <a href="https://github.com/milind/e-commerce">View on GitHub</a>
        </li>
        <li>
          <h3>Project 2: Task Manager</h3>
          <p>
            A task management web app with drag-and-drop functionality, built
            with React and integrated with Firebase for real-time data sync.
          </p>
          <a href="https://github.com/milind/task-manager">View on GitHub</a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
