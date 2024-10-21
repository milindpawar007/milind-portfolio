import React from "react";

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        You can download my resume{" "}
        <a href="MilindResume.pdf" target="_blank">
          here
        </a>
        .
      </p>
      <iframe
        src="MilindResume.pdf"
        width="100%"
        height="500px"
        title="Milind's Resume"
      ></iframe>
    </section>
  );
};

export default Resume;
