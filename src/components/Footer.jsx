const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-6 bg-[#1a1a1a] text-white text-sm mt-6">
      &copy; {currentYear} All rights reserved
    </footer>
  );
};

export default Footer;
