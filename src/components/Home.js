import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1.5 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0 0 8px #fff',
            boxShadow: '0 0 8px #fff'
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;