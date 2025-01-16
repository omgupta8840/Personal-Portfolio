import React from 'react';

function Skills() {
  return (
    <section className="bg-indigo-800 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-5">My Skills</h1>
        <p className="text-lg mb-5">
          Below are the technical skills I have developed through my academic and personal projects:
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Programming Languages</h2>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li>C++, C, Python, JavaScript</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Web Development</h2>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li>HTML, CSS, JavaScript</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Backend Development</h2>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li>Node.js, Express.js, Mongoose</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Database Management</h2>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li>MongoDB, MySQL</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Frontend Development</h2>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li>React.js</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Cloud & Deployment Platforms</h2>
        <ul className="list-disc list-inside mt-5 text-left mx-auto max-w-3xl">
          <li>Vercel, Render, Cloudinary</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
