import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 bg-gray-950 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hey, I'm Rishitha 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-300 max-w-xl"
      >
        A data engineer who turns caffeine into ETL pipelines and dashboards that (actually) make sense.
        Currently building quirky, smart things in React and Python.
      </motion.p>
    </section>
  );
};

export default Home;

