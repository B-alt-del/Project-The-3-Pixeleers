import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
// import Container from '@mui/material/Container';






function About(props) {
    return (
      <div>
        <Box sx={{ display: 'flex', justifyContent:'center'}}>
          <Typography style={{color:'rgb(68, 68, 68)'}}variant="h1" gutterBottom>
          Welcome to the About Page
          </Typography>
        </Box>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center'}}> */}
            {/* <Typography>Vertical Align Center</Typography> */}
          {/* </Box> */}
          <Box sx={{ display: 'flex', justifyContent:'center'}}>
            <Typography variant="h4" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
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
