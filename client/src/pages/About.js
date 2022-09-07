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
          <Box sx={{ display: 'flex', justifyContent:'center', color:'antiquewhite', background:'#2E3B55', position:'relative', paddingLeft:30, paddingRight:30, borderRadius:20, width:'auto'}}>
            <Typography variant="h4" gutterBottom>
            We are developers that have been assigned multiple projects that need to be drawn out but not in the way you think. We have certain requirements that make us need to use pixelated NFTs to draw out our designs. We just could not find the right one so we thought our ourselves, why not make our own pixelated website that allows us to to use a grid with a multiple color selection and lets us fill in each square with the color of choice. Along with saving each project that is worked on with an account that is made.
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
