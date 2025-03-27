import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BackgroundSVG from '../components/BackgroundSVG';
import redbullCover from '../assets/images/redbullhearthcangecover.png';
import breastCancerCover from '../assets/images/breastcancercover.png';
import meniscalCover from '../assets/images/meniscalinjurycover.jpg';
import playstoreCover from '../assets/images/playstorecover.png';

const projects = [
  {
    title: 'Play Store App Analysis',
    description: 'Exploratory data analysis of Play Store applications using MySQL queries. Investigated app categories, pricing strategies, and user ratings to understand market trends and app performance patterns.',
    image: playstoreCover,
    tags: ['MySQL', 'Data Analysis', 'SQL', 'EDA'],
    github: 'https://github.com/emirdoogan/playstore_apps_analysis',
    featured: true,
  },
  {
    title: 'Red Bull Heart Rate Analysis',
    description: 'Analysis of heart rate data during Red Bull consumption, examining the physiological effects and patterns using Python and data visualization techniques.',
    image: redbullCover,
    tags: ['Python', 'Data Analysis', 'Visualization', 'Healthcare'],
    github: 'https://github.com/emirdoogan/redbull_heartrate_analysis',
    featured: true,
  },
  {
    title: 'Breast Cancer Tumor Classification',
    description: 'Machine learning project focused on classifying breast cancer tumors with optimized predictors while maintaining high accuracy. Implemented using Python, scikit-learn, and data visualization tools.',
    image: breastCancerCover,
    tags: ['Python', 'Machine Learning', 'Healthcare', 'Data Science'],
    github: 'https://github.com/emirdoogan/breast_cancer_tumor_classification',
    featured: true,
  },
  {
    title: 'Meniscal Injury Analysis',
    description: 'Analysis of meniscal injuries primarily using Excel for data processing and visualization, with R utilized specifically for performing Fisher\'s exact test on treatment outcomes.',
    image: meniscalCover,
    tags: ['Excel', 'Data Analysis', 'Healthcare', 'R'],
    github: 'https://github.com/emirdoogan/meniscal_injury_analysis',
    featured: true
  }
];

const Projects = () => {
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
          <Box sx={{ maxWidth: '100%' }}>
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
              Projects
            </Typography>
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid 
                  item 
                  xs={12} 
                  key={project.title}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        height: '100%',
                        background: project.featured 
                          ? 'linear-gradient(135deg, rgba(255, 26, 26, 0.1), rgba(179, 0, 0, 0.05))'
                          : 'rgba(26, 26, 26, 0.5)',
                        border: project.featured 
                          ? '1px solid rgba(255, 26, 26, 0.3)'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: project.featured 
                            ? '0 8px 30px rgba(255, 26, 26, 0.2)'
                            : '0 8px 30px rgba(0, 0, 0, 0.3)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: { xs: '100%', md: '300px' },
                          height: { xs: '200px', md: 'auto' },
                          backgroundColor: 'background.paper',
                        }}
                        image={project.image}
                        alt={project.title}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <CardContent sx={{ flex: '1 0 auto', p: 3 }}>
                          <Typography 
                            variant="h5" 
                            gutterBottom
                            sx={{
                              color: project.featured ? '#FF1A1A' : 'text.primary',
                              fontWeight: project.featured ? 700 : 600,
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            color="text.secondary"
                            sx={{ mb: 2 }}
                          >
                            {project.description}
                          </Typography>
                          <Box sx={{ mt: 2 }}>
                            {project.tags.map((tag) => (
                              <Chip
                                key={tag}
                                label={tag}
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  backgroundColor: project.featured 
                                    ? 'rgba(255, 26, 26, 0.1)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                  color: project.featured ? '#FF1A1A' : 'text.secondary',
                                  border: project.featured 
                                    ? '1px solid rgba(255, 26, 26, 0.3)'
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                        <CardActions sx={{ p: 3, pt: 0 }}>
                          {project.github && (
                            <Button
                              startIcon={<GitHubIcon />}
                              href={project.github}
                              target="_blank"
                              sx={{
                                color: project.featured ? '#FF1A1A' : 'text.primary',
                                borderColor: project.featured ? '#FF1A1A' : 'text.primary',
                                '&:hover': {
                                  borderColor: project.featured ? '#B30000' : 'text.primary',
                                  backgroundColor: project.featured 
                                    ? 'rgba(255, 26, 26, 0.1)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                },
                              }}
                            >
                              View on GitHub
                            </Button>
                          )}
                        </CardActions>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects; 