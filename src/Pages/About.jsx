import IMAGE from '../assets/lady.jpg';

const About = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* About Favored Online Section */}
      <section className="bg-white text-black py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-6">About Favored Online</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Favored Online is a private organization dedicated to empowering individuals by showcasing how technology is revolutionizing career trajectories.
          </p>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mt-6">
            Since its inception with initiatives like <em>Career Path in Tech</em> and <em>Grow Your Career in Tech</em> in 2020, Favored Online has positively impacted over 1,000 lives, equipping them with tools to thrive in a tech-driven world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-100 text-[#1b4854] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To inspire, educate, and empower individuals through the annual Favored Online Tech Conference, which features impactful programs, hands-on sessions, job opportunities, and networking.
            </p>
          </div>
          <div className="bg-gray-100 text-[#1b4854] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the leading platform for transformative tech conferences in Africa, bridging the gap between innovation and career advancement while empowering individuals and communities to create meaningful change and drive a digitally inclusive future.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="bg-gradient-to-r from-[#1b4854] via-[#203A43] to-[#2C5364] py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:mx-20">
          <div className="md:w-1/2 lg:w-1/3 shrink-0">
            <img 
              src={IMAGE} 
              alt="Founder of Favored Online Inc." 
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-6">Meet Our Founder</h2>
            <p className="text-lg leading-relaxed">
              Founded by 
              <a 
                href="https://www.opeyemitaiwoadeniran.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white font-bold underline hover:text-[#A18634] transition-colors"
              >  
                Opeyemi T. Adeniran
              </a>, 
              Favored Online was originally established in July 2018 and registered as Favored Online Skills Acquisition Network in March 2020 in Nigeria. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
