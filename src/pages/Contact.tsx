import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  IconButton,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundSVG from '../components/BackgroundSVG';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented here
    console.log('Form data:', formData);
  };

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/emirdoogan', name: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/emir-doğan-66a908154/', name: 'LinkedIn' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundSVG />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  background: 'linear-gradient(45deg, #FF1A1A, #B30000)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 4
                }}
              >
                Get in Touch
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  href="mailto:doganemir01@gmail.com"
                  sx={{
                    backgroundColor: '#FF1A1A',
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: '#B30000',
                      boxShadow: '0 0 15px #FF1A1A'
                    }
                  }}
                >
                  Send me an email
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  background: 'rgba(255, 26, 26, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 26, 26, 0.1)',
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: '#FF1A1A' }}>
                  Connect With Me
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                  You can also find me on these platforms:
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    component="a"
                    href="https://github.com/emirdoogan"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#FF1A1A',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 26, 26, 0.1)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: { xs: 30, md: 40 } }} />
                  </IconButton>
                  
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/emir-doğan-66a908154/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#FF1A1A',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 26, 26, 0.1)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: { xs: 30, md: 40 } }} />
                  </IconButton>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Contact; 