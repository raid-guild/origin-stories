const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-16 p-12 bg-gradient-to-r from-dark opacity-80">
      <p>Made with ⚔️ for our fellow raiders</p>
      <p className="text-sm pt-2 text-opacity-50">
        &copy; {new Date().getFullYear()} Raid Guild. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
