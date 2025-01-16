import React from 'react';

function About() {
  return (
    <section className="bg-indigo-900 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-5">About Me</h1>
        <p className="text-lg mb-5">
          I am <span className="font-semibold">Om Gupta</span>, a Bachelor of Technology (B.Tech) student at the 
          <span className="font-semibold"> National Institute of Technology (NIT) Srinagar</span>, 
          pursuing a degree in <span className="font-semibold">Information Technology</span>. 
          Currently, I am in my 5th semester with a <span className="font-semibold">CGPA of 7.97</span>.
        </p>
        <h2 className="text-2xl font-semibold mt-8">Interests and Expertise</h2>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li><strong>Web Development:</strong> Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) with a passion for building scalable and user-friendly web applications.</li>
          <li><strong>Data Structures and Algorithms:</strong> Solid foundation with consistent application of knowledge to solve complex coding problems.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8">Problem-Solving Achievements</h2>
        <p className="mt-5">
          I actively solve programming challenges on multiple competitive coding platforms:
        </p>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li>LeetCode</li>
          <li>GeeksforGeeks</li>
          <li>CodeStudio</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8">Professional Experience</h2>
        <p className="mt-5">
          I completed a <strong>Frontend Development Internship</strong> at <span className="font-semibold">Orinson Technologies</span>, where I contributed to projects and enhanced my skills in building responsive and intuitive user interfaces.
        </p>
      </div>
    </section>
  );
}

export default About;

