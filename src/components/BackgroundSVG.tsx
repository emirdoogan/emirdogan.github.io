import { motion } from 'framer-motion';

const BackgroundSVG = () => {
  return (
    <svg
      className="svg-background"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <motion.path
        d="M0,250 Q125,100 250,250 T500,250"
        stroke="#B30000"
        strokeWidth="0.5"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M0,200 Q125,350 250,200 T500,200"
        stroke="#FF1A1A"
        strokeWidth="0.5"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M0,300 Q125,150 250,300 T500,300"
        stroke="#B30000"
        strokeWidth="0.5"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      />
      
      {/* Abstract forest-like lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.line
          key={i}
          x1={50 + i * 45}
          y1={500}
          x2={50 + i * 45}
          y2={300 - Math.random() * 100}
          stroke="#B30000"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}
    </svg>
  );
};

export default BackgroundSVG; 