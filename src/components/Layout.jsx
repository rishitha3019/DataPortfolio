import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;
