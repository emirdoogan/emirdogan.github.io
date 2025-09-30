import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackgroundSVG from '../components/BackgroundSVG';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const skills = [
  'Proficient in Excel and Google Sheets',
  'Adequate SQL knowledge',
  'Effective work using R and Python',
  'Experience with Tableau visualizations',
];

const education = [
  {
    title: 'Statistics Foundations Professional Certificate — Wolfram Research',
    period: 'SEPTEMBER 2025',
    location: 'Online',
    description: 'I completed the Statistics Foundations Professional Certificate from Wolfram Research on Sep 1, 2025. This comprehensive program covered core statistical reasoning—descriptive statistics, probability, sampling, confidence intervals, and hypothesis testing—along with hands-on data analysis workflows in Microsoft Excel. This credential reflects practical, decision-oriented statistics skills I apply to analytics, experimentation, and reporting.',
  },
  {
    title: 'Google / Data Analytics Professional Certificate',
    period: 'FEBRUARY 2024 - OCTOBER 2024',
    location: 'Online',
    description: 'Completed a six-month training with practical skills in data cleaning, visualization, and project management. Gained proficiency in programming and database management.',
  },
  {
    title: 'Gazi University / Computer Engineering',
    period: 'SEPTEMBER 2021 - SEPTEMBER 2025',
    location: 'Ankara/Turkey',
    description: 'Graduated',
  },
  {
    title: 'TOBB ETU / Industrial Engineering',
    period: 'SEPTEMBER 2016 - SEPTEMBER 2021',
    location: 'Ankara/Turkey',
    description: 'Changed my major before finishing the industrial engineering degree.',
  },
];

const awards = [
  {
    title: 'Graduation Project — 3rd Place Award',
    period: '2024-2025 Spring Term',
    location: 'Gazi University',
    description: 'Achieved 3rd place among all graduation projects presented at Gazi University (2024-2025 Spring Term). Collaborated with a teammate on an AI-based medical imaging project supporting academic research.',
  },
];

const experience = [
  {
    title: 'Belsis, Ankara — Intern',
    period: 'JULY 2025 - JULY 2025',
    location: 'Ankara/Turkey',
    description: 'Contributed as a Full-Stack Developer to an Odoo ERP project, participating in both backend and frontend development, customizing modules, integrating features, and optimizing system performance.',
  },
  {
    title: 'Destek etc. / Intern Computer Engineer',
    period: 'JULY 2024 - AUGUST 2024',
    location: 'Ankara/Turkey',
    description: 'Assisted in hardware repairs, followed up on case numbers, reported to supervisors, collaborated on computer monitor repairs, updated BIOS, and gained hands-on troubleshooting experience. Enhanced communication skills with team members.',
  },
  {
    title: 'Turkish Standards Institution / Intern Industrial Engineer',
    period: 'JUNE 2021 - SEPTEMBER 2021',
    location: 'Ankara/Turkey',
    description: "Applied experiments based on TSE's standards in the laboratory and provided output data of experiments.",
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
              variant="h3"
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #FF1A1A, #B30000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              Versatile Data Scientist/Analyst with a strong foundation in both data analysis and machine learning. 
              Experienced in developing predictive models and extracting insights using Python, R, and SQL. 
              Proficient in various data analysis platforms including Excel, Sheets, and Tableau. 
              Combines technical expertise with strong communication and organizational abilities to 
              deliver impactful analytical solutions. Fluent in both English and Turkish.
            </Typography>

            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                mt: 2, 
                mb: 3,
                background: 'linear-gradient(135deg, rgba(255, 26, 26, 0.1), rgba(179, 0, 0, 0.05))',
                border: '1px solid rgba(255, 26, 26, 0.1)',
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: '#FF1A1A',
                  fontWeight: 600,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <EmojiEventsIcon /> Awards
              </Typography>
              {awards.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FF1A1A', mb: 1 }}>
                    {item.period} | {item.location}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Paper>

            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                mt: 3, 
                background: 'linear-gradient(135deg, rgba(255, 26, 26, 0.1), rgba(179, 0, 0, 0.05))',
                border: '1px solid rgba(255, 26, 26, 0.1)',
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: '#FF1A1A',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Skills & Expertise
              </Typography>
              <List sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                {skills.map((skill) => (
                  <ListItem 
                    key={skill}
                    sx={{
                      border: '1px solid rgba(255, 26, 26, 0.2)',
                      mb: 1,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 26, 26, 0.1)',
                        transform: 'translateX(10px)',
                      },
                    }}
                  >
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: '#FF1A1A' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={skill}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 500,
                          color: 'text.primary',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
            </Box>
        </motion.div>

        <motion.div
          className="content-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255, 26, 26, 0.1), rgba(179, 0, 0, 0.05))',
              border: '1px solid rgba(255, 26, 26, 0.1)',
              overflowY: 'auto',
            }}
          >
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: '#FF1A1A',
                  fontWeight: 600,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <SchoolIcon /> Education
              </Typography>
              {education.map((item, index) => (
                <Box 
                  key={item.title} 
                  sx={{ 
                    mb: 4,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -16,
                      top: 12,
                      width: 8,
                      height: 8,
                      backgroundColor: '#FF1A1A',
                      transform: 'translateY(-50%)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FF1A1A', mb: 1 }}>
                    {item.period} | {item.location}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </motion.div>

        <motion.div
          className="content-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255, 26, 26, 0.1), rgba(179, 0, 0, 0.05))',
              border: '1px solid rgba(255, 26, 26, 0.1)',
              overflowY: 'auto',
            }}
          >
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: '#FF1A1A',
                  fontWeight: 600,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <WorkIcon /> Experience
              </Typography>
              {experience.map((item, index) => (
                <Box 
                  key={item.title} 
                  sx={{ 
                    mb: 4,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -16,
                      top: 12,
                      width: 8,
                      height: 8,
                      backgroundColor: '#FF1A1A',
                      transform: 'translateY(-50%)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FF1A1A', mb: 1 }}>
                    {item.period} | {item.location}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box>
              {/* İkinci Experience bölümü kaldırıldı */}
            </Box>
          </Paper>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;