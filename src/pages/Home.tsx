import { Box, Typography, Button, Stack } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import BackgroundSVG from '../components/BackgroundSVG';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.1,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      transition: { duration: 0.3 },
    });
  };

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: { duration: 0.3 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key="home-page"
    >
      <BackgroundSVG />
      <div className="page-container">
        <motion.div
          className="content-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Box sx={{ maxWidth: '600px' }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #FF1A1A, #B30000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Emir Dogan
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: 'text.secondary',
                mb: 4,
              }}
            >
              Data Scientist / Analyst
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              Hello, I am Emir Dogan, a final-year computer engineering student passionate about 
              data science and analytics. With a particular interest in healthcare data analysis, 
              I enjoy working with data across various domains to uncover insights and create 
              value through analytical approaches.
            </Typography>

            <Stack spacing={2} sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#FF1A1A' }} />
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  Ankara, Turkey
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon sx={{ color: '#FF1A1A' }} />
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  +90 (538) 843 31 91
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon sx={{ color: '#FF1A1A' }} />
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  doganemir01@gmail.com
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/projects"
                sx={{
                  backgroundColor: '#FF1A1A',
                  '&:hover': {
                    backgroundColor: '#B30000',
                    boxShadow: '0 0 15px #FF1A1A',
                  },
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/contact"
                sx={{
                  borderColor: '#FF1A1A',
                  color: '#FF1A1A',
                  '&:hover': {
                    borderColor: '#B30000',
                    color: '#B30000',
                    boxShadow: '0 0 15px #FF1A1A',
                  },
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </motion.div>
        <motion.div
          className="content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverEnd}
          style={{ cursor: 'pointer' }}
        >
          <motion.svg
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: '100%' }}
            animate={controls}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isHovered ? '#FF0000' : '#FF1A1A'} stopOpacity="0.2" />
                <stop offset="100%" stopColor={isHovered ? '#800000' : '#B30000'} stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation={isHovered ? "4" : "2"} result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            <motion.circle
              cx="250"
              cy="250"
              r="150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth={isHovered ? "2" : "1"}
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                rotate: isHovered ? 360 : 0 
              }}
              transition={{ 
                duration: isHovered ? 8 : 2, 
                ease: "linear",
                rotate: {
                  repeat: Infinity,
                  duration: isHovered ? 8 : 20,
                  ease: "linear"
                }
              }}
            />
            
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 12;
              const x = 250 + Math.cos(angle) * 150;
              const y = 250 + Math.sin(angle) * 150;
              
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={isHovered ? "6" : "4"}
                  fill={isHovered ? '#FF0000' : '#FF1A1A'}
                  filter="url(#glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isHovered ? [1, 1.2, 1] : 1,
                    opacity: 1 
                  }}
                  transition={{ 
                    delay: i * 0.1,
                    duration: 0.5,
                    scale: {
                      repeat: isHovered ? Infinity : 0,
                      duration: 1
                    }
                  }}
                />
              );
            })}
            
            {Array.from({ length: 12 }).map((_, i) => {
              const angle1 = (i * Math.PI * 2) / 12;
              const angle2 = ((i + 1) * Math.PI * 2) / 12;
              const x1 = 250 + Math.cos(angle1) * 150;
              const y1 = 250 + Math.sin(angle1) * 150;
              const x2 = 250 + Math.cos(angle2) * 150;
              const y2 = 250 + Math.sin(angle2) * 150;
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isHovered ? '#FF0000' : '#B30000'}
                  strokeWidth={isHovered ? "1" : "0.5"}
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: isHovered ? 0.8 : 0.5,
                  }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: isHovered ? 0.3 : 1
                  }}
                />
              );
            })}
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 