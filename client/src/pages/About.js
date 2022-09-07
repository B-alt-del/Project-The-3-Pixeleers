import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import image from '../assets/about-background/blue-gradient.png';
import { ImageList } from '@mui/material';
// import Container from '@mui/material/Container';




const images = [image]


function About(props) {
    return (
      <div style={{
        backgroundImage: `url(${images})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100vh'
        }}>
        <Box sx={{ display: 'flex', justifyContent:'center'}}>
          <Typography style={{color:'antiquewhite'}}variant="h1" gutterBottom>
          Welcome to the About Page
          </Typography>
        </Box>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center'}}> */}
            {/* <Typography>Vertical Align Center</Typography> */}
          {/* </Box> */}
          <Box sx={{ display: 'flex', justifyContent:'center'}}>
            <Typography variant="h4" gutterBottom>
            Set the stage: Describe the industry problem that caused you to act.

            Tackle the obstacle: Convey how you set out to address the issue and the challenges you faced along the way.
            Introduce the solution: Mention how your company is pursuing its objectives and the pain points you intend to address.
            Share the bigger picture: Share details of your future objectives or state your aims and mission.
            </Typography>
          </Box>
        
          {/* <Container style={{minHeight: 'calc(100vh-34px', position:'relative', left:'0', bottom:'0'}}> */}
            <Footer>
            </Footer>
          {/* </Container> */}
      </div>
      
    )
  }
  
  
  export default About;
