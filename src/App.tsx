import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./views/pages/HomePage";
import LoadingPage from "./views/pages/LoadingPage";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="modal"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-black"
          >
            <LoadingPage />
          </motion.div>
        )}

        {!loading && (
          <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.3}}
          >
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
