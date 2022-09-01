import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
import Container from '@material-ui/core/Container';

// export default function BoxSx() {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }




function About(props) {
    return (
      <div>
        <Container maxWidth="lg">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          About Page
         </h1>
      </Container>
        {/* <h1>About Page</h1> */}





        <footer>
          
        <Avatar alt="Fartuun Ali" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Lee Boettcher" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Bradley Schill" src="/static/images/avatar/3.jpg" />  
        </footer>
      </div>
    )
  }
  
  export default About;