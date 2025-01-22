import { useState } from 'react';
import LOGO from '../assets/ttc.png'; // Using logo for all placeholders
import SPONSORS from '../assets/logo.png'; // Using logo for all placeholders

const Summit = () => {
  const [activeTab, setActiveTab] = useState('techtalents');

  return (
    <div className="mx-auto px-6 sm:px-8 lg:px-10 mb-10">
     
{/* Hero Section */}
<section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 px-8">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Favored Online Tech Conference</h1>
      <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto md:mx-0">
  A transformative event dedicated to inspiring, empowering, and educating Africans through technology. Discover diverse sessions, real-world projects, networking opportunities, and more.
      </p>
      <div className="mt-8">
        <a
          href="#register"
          className="inline-block bg-white text-[#0F2027] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Register for the Conference
        </a>
      </div>
    </div>
    <div className="flex justify-center">
      <img
        src={LOGO}
        alt="Summit Logo"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>
  </div>

{/* Theme for 2025 Section */}
<div className="mt-16 text-center">
  <h2 className="text-4xl font-extrabold mb-6">Theme for 2025</h2>
  <p className="text-lg leading-relaxed max-w-3xl mx-auto">
    <span className="italic font-semibold">"Leading with Innovation: Building a Collaborative Future"</span>. This year’s theme emphasizes creativity, collaboration, and empowering talent from novice to expert within the tech ecosystem.
  </p>
</div>
</section>

{/* Event Details Section */}
<section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-6">Event Details</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
      <div className="p-6 bg-white text-[#0F2027] rounded-xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Date</h3>
        <p className="text-lg">Coming Soon</p>
      </div>
      <div className="p-6 bg-white text-[#0F2027] rounded-xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Time</h3>
        <p className="text-lg">Coming Soon</p>
      </div>
      <div className="p-6 bg-white text-[#0F2027] rounded-xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Venue</h3>
        <p className="text-lg">Coming Soon</p>
      </div>
    </div>
    <div className="mt-10">
      <a
        href="/event-schedule.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-[#0F2027] font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition-transform"
      >
        Download Event Schedule
      </a>
    </div>
  </div>
</section>

      
{/* Conference Details Section */}
<section className="bg-white text-black py-20 px-8">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-6">About the Tech Conference</h2>
    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
      The yearly <span className="font-semibold">Tech Conference</span> The yearly Tech Conference offers a comprehensive experience through diverse sessions and opportunities, including:
    </p>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Career Path in Tech Session</h3>
      <p>Guiding attendees through various opportunities within the tech industry, helping them explore pathways to success.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Grow Your Career in Tech Session</h3>
      <p>Delivering actionable insights, strategies, and workshops to support attendees' professional development and career growth.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Women in Tech Leadership Session</h3>
      <p>Highlighting and celebrating the contributions of women leaders, fostering inclusion, inspiration, and empowerment.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Real-World Project Showcases</h3>
      <p>Providing a platform for tech enthusiasts and professionals to present innovative projects and practical solutions.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Awards</h3>
      <p>Recognizing excellence by celebrating outstanding projects and research while honoring exceptional innovators in the tech industry.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Networking Opportunities</h3>
      <p>Creating avenues for meaningful connections among industry professionals, innovators, and aspiring technologists.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Job Opportunities</h3>
      <p>Bridging the gap between talent and recruiters through career fairs, hiring events, and direct engagement with employers.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Tech Insights</h3>
      <p>Showcasing and discussing the latest trends and advancements in technology, keeping participants informed and ahead of the curve.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4">Research Symposium</h3>
      <p>Providing a platform for researchers to share cutting-edge findings, foster collaboration, and explore solutions to real-world challenges in technology.</p>
    </div>
  </div>
</section>

{/* Project Upload Section */}
<section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-6">Submit Your Research or Project</h2>
    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
      Share your innovative research or projects and get recognized at the conference! 
      <span className="font-semibold">Only those who register for the conference can upload submissions.</span> Make sure to register to participate.
    </p>
    <div className="mt-6">
      <p className="text-lg">
        Download the judging criteria for:
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="/judging-criteria-projects.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#0F2027] font-bold py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Project Criteria
        </a>
        <a
          href="/judging-criteria-research.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#0F2027] font-bold py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Research Criteria
        </a>
      </div>
    </div>
  </div>
  <div className="bg-white text-[#0F2027] p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-4 text-center">Submission Guidelines</h3>
    <ul className="text-lg list-disc list-inside mb-6">
      <li>
        <span className="font-semibold">Front page requirements:</span>
        <ul className="list-disc ml-6">
          <li>Your name(s) and group name (if applicable).</li>
          <li>The research or project topic.</li>
          <li>Contact information (location, email, and phone number).</li>
        </ul>
      </li>
      <li>Maximum of 5 pages, including content, images, and links.</li>
      <li>Accepted formats: PDF or Word document only.</li>
    </ul>
    <div className="text-center">
      <a
        href="#upload"
        className="inline-block bg-[#0F2027] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#203A43] hover:scale-105 transition-transform"
      >
        Upload Your Submission
      </a>
    </div>
  </div>
</section>

      {/* TechTalents Awards and Women in Tech Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold mb-6">Empowering Innovation and Leadership</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Discover how we celebrate innovation and empower tech talent through recognition, mentorship, and collaboration.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <button
            className={`px-6 py-3 text-lg font-bold rounded-full ${
              activeTab === 'techtalents'
                ? 'bg-white text-[#0F2027]'
                : 'bg-[#0F2027] text-white'
            } transition`}
            onClick={() => setActiveTab('techtalents')}
          >
            TechTalents Awards
          </button>
          <button
            className={`px-6 py-3 text-lg font-bold rounded-full ${
              activeTab === 'womenintech'
                ? 'bg-white text-[#0F2027]'
                : 'bg-[#0F2027] text-white'
            } transition ml-4`}
            onClick={() => setActiveTab('womenintech')}
          >
            Women in Tech
          </button>
        </div>
        {activeTab === 'techtalents' && (
          <div className="text-center">
            <h3 className="text-3xl font-extrabold mb-4">TechTalents Awards for Innovation</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
         Celebrate groundbreaking projects and research by honoring exceptional achievements and recognizing innovative minds. Support brilliant ideas that shape the future of technology by empowering innovators to bring their visions to life.
         </p>
        </div>
        )}
        {activeTab === 'womenintech' && (
          <div className="text-center">
            <h3 className="text-3xl font-extrabold mb-4">Women in Tech: Thriving and Leading</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Empowering women in technology through leadership sessions, networking opportunities, and mentorship programs. Learn how to excel in tech leadership roles and shape the future of innovation.
            </p>
          </div>
        )}
      </section>

      {/* Speakers Section */}
     <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Meet Our Speakers</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Be inspired by leading industry experts and innovators sharing their insights and experiences.
          </p>
        </div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <div className="inline-flex space-x-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center min-w-[250px]">
                <img
                  src={LOGO}
                  alt={`Speaker ${index + 1}`}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Speaker {index + 1}</h3>
                <p className="text-gray-600">Expert in Innovation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Networking and Sponsors</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Meet with hiring companies, industry leaders, and sponsors. Participate in our job fair and networking sessions, opening doors to new career opportunities while connecting with tech enthusiasts.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
            {[...Array(12)].map((_, index) => (
              <img
                key={index}
                src={SPONSORS}
                alt={`Sponsor Logo ${index + 1}`}
                className="w-32 h-auto object-contain rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
 <section className="bg-gray-100 py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
   <div className="text-center mb-10">
     <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Gallery</h2>
     <p className="text-lg text-gray-600 max-w-3xl mx-auto">
       Experience the highlights from past events through our exclusive gallery.
     </p>
   </div>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
     {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
       <img
         key={index}
         src={LOGO}
         alt={`Gallery Image ${index + 1}`}
         className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
       />
     ))}
   </div>
   <div className="mt-10 text-center">
     <button 
       className="bg-white text-[#0F2027] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white-700 transition-colors" 
       onClick={() => window.location.href = '/gallery'}>
       View More
     </button>
   </div>
 </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Join Us</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Don’t miss out on this transformative event. Connect with tech leaders, explore career opportunities, and celebrate innovation.
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-[#0F2027] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Summit;

