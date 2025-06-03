import projects from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold mb-8">🚀 Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="border border-gray-300 dark:border-gray-700 p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-900 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.description}</p>
            <div className="flex space-x-4">
              <a href={proj.demoLink} target="_blank" className="underline text-blue-600 hover:text-blue-400">
                🔗 Live Demo
              </a>
              <a href={proj.githubLink} target="_blank" className="underline text-gray-800 dark:text-gray-200 hover:text-gray-500">
                📂 GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
