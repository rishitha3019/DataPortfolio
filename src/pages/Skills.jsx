import skills from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-20 py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10">🛠 Skills & Tools</h2>

      <div className="space-y-10">
        {skills.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 px-4 py-3 text-sm rounded-lg shadow hover:shadow-lg transition text-center"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
