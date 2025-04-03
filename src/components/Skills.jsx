import React from 'react';

const Skills = () => {
  return (
    <div className="w-full border-[3px] mx-auto relative mt-8 lg:mt-20">
      {/* Section Title */}
      <div className="uppercase text-lg lg:text-2xl font-semibold bg-white absolute -top-6 lg:-top-8 left-5 lg:left-12">
        <h3 className="bg-black/15 px-4 lg:px-6 py-1 lg:py-2">Technical Skills</h3>
      </div>

      {/* Skills Content */}
      <div className="py-8 lg:py-16 px-6 lg:px-12 text-gray-600 space-y-4">
        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">Frontend: </span> 
          React.js, Next.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, SCSS, CSS3, HTML5
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">State Management: </span> 
          React Hooks, React Redux, Context API
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">Routing: </span> 
          React Router DOM, Next.js Routing
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">Backend: </span> 
          Node.js, Express.js, MongoDB, Mongoose, Firebase
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">API & Database: </span> 
          RESTful APIs, GraphQL, MySQL
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">Authentication: </span> 
          Firebase Auth, NextAuth.js, JWT (JSON Web Tokens), OAuth
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">Testing Tools: </span> 
          Postman, Thunder Client, Jest
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">UI/UX Components: </span> 
          Reusable Components, Dark/Light Mode Toggle, Notification Design, Framer Motion, React Slick (Carousel)
        </p>

        <p className="text-lg lg:text-xl font-medium">
          <span className="font-semibold text-black">DevOps & Tools: </span> 
          Git, GitHub, Docker, Vercel, Netlify, Firebase Hosting
        </p>
      </div>
    </div>
  );
};

export default Skills;
