import React, { useState } from "react";
import devpostW1 from "../../public/devpostW1.png"

// Fake data for hackathon wins
const hackathons = [
  {
    id: 1,
    name: "Devpost Hackathon",
    date: "March 2025",
    description:
      "Won the hackathon by creating a responsive, interactive AI Chat box using Next.js.",
    projectName: "Build Your Own AI Chat Bot",
    projectLink: "https://devpost.com/software/ai-chat-xn69tl",
    imageUrl: devpostW1,
  },
];

const HackathonDetails = () => {
  const [showImage, setShowImage] = useState(null);

  const toggleImage = (id) => {
    if (showImage === id) {
      setShowImage(null); // Close the image if it's already open
    } else {
      setShowImage(id); // Open the clicked image
    }
  };

  const closeImage = () => {
    setShowImage(null);
  };

  return (
    <div className="w-full border-[3px] mx-auto relative mt-8 lg:mt-20">
      <div className="uppercase text-lg lg:text-2xl font-semibold bg-white absolute -top-6 lg:-top-8 left-5 lg:left-12">
        <h3 className="bg-black/15 px-4 lg:px-6 py-1 lg:py-2">Hackathon</h3>
      </div>

      {hackathons.map((hackathon) => (
        <div key={hackathon.id} className="py-8 lg:py-16 px-6 lg:px-12 text-gray-600">
          <h2 className="text-lg lg:text-xl font-semibold text-black mt-4">
            Hackathon Winner - {hackathon.name}
          </h2>

          <h4 className="text-sm lg:text-md font-medium text-gray-500 mt-1">
            Date: {hackathon.date}
          </h4>

          <p className="text-lg lg:text-xl font-medium mt-3">
            {hackathon.description}
          </p>

          <div className="mt-6">
            <p className="text-md lg:text-lg font-semibold text-black">Winning Project:</p>
            <p className="text-lg lg:text-xl font-medium mt-2">
              <a
                href={hackathon.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Project Name: {hackathon.projectName}
              </a>
            </p>
          </div>

          <div className="mt-6 relative">
            <button
              onClick={() => toggleImage(hackathon.id)}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              {showImage === hackathon.id ? "Hide Winning Image" : "Show Winning Image"}
            </button>

            {showImage === hackathon.id && (
              <div className="top-0 left-0 right-0 bottom-0 w-full h-full bg-black/40 flex items-center justify-center relative">
                <button
                  onClick={closeImage}
                  className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/60 rounded-full hover:bg-black/80"
                >
                  X
                </button>
                <img
                  src={hackathon.imageUrl}
                  alt={`Winning image for ${hackathon.name}`}
                  className="w-[80%] lg:w-[60%] h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HackathonDetails;
