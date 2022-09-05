// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// // import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Canvas from "../components/Canvas";
// import {useState} from 'react'
// import { Button, Modal, Box } from "@mui/material";
// // import { flexbox } from "@mui/system";


// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// function test() {
//   console.log("this worked")
// }

// const cards = [1, 2];

// const theme = createTheme();

// export default function Album() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             PXL
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="text.primary"
//               gutterBottom
//             >
//               Create a PXL
//             </Typography>
//             <Typography variant="h5" align="center" color="text.secondary" paragraph>
//               Something short and leading about the collection below—its contents,
//               the creator, etc. Make it short and sweet, but not too short so folks
//               don&apos;t simply skip over it entirely.
//             </Typography>
//             <Stack
//               sx={{ pt: 4 }}
//               direction="row"
//               spacing={2}
//               justifyContent="center"
//             >
//               <Button variant="contained"  onClick={test} >Main call to action</Button>
//               <Button variant="outlined">Secondary action</Button>
//             </Stack>
//           </Container>

//         </Box>

//         <Container sx={{ py: 8 }} >
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random"
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
// }

//drawer------------------------------------------------

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import MailIcon from '@mui/icons-material/Mail';

// export default function Create() {
// //   const [state, setState] = React.useState({
// //     top: false,
// //     left: true,
// //     bottom: false,
// //     right: false,
// //   });
// const [draw_open, setOpen] = React.useState(true)

// const toggleDrawer = (state) => (event) => {
//   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//     return;
//   }
// setOpen(state)

//   const drawer = (
    // <Box
    //   // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    //   role="presentation"
    //   // onClick={toggleDrawer(false)}
    //   // onKeyDown={toggleDrawer(false)}
    // >
    //   <List>
    //     {['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'].map((text, index) => (
    //       <ListItem key={index} disablePadding>
    //         <ListItemButton>
    //           <ListItemText primary={text} />
    //         </ListItemButton>
    //       </ListItem>
    //     ))}
    //   </List>
    // </Box>
//   );

//   return (
//     <div>
//       <React.Fragment key='left'> 
//         <Button onClick={toggleDrawer(true)}>Open</Button>
//         <Drawer
//           anchor={"left"}
//           open={draw_open}
//           onClose={toggleDrawer(false)}
//         >
//           {drawer}
//         </Drawer>
//       </React.Fragment>
//     </div>
//   );
// }
  
//     // return (
//     //   <div>
//     //     {['left', 'right', 'top', 'bottom'].map((anchor) => (
//     //       <React.Fragment key={anchor}>
//     //         <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//     //         <Drawer
//     //           anchor={anchor}
//     //           open={state[anchor]}
//     //           onClose={toggleDrawer(anchor, false)}
//     //         >
//     //           {list(anchor)}
//     //         </Drawer>
//     //       </React.Fragment>
//     //     ))}
//     //   </div>

//--------------------------------------------------------working modal below---------------------

import Canvas from "../components/Canvas";
import {useState} from 'react'
import { Button, Modal, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import * as React from 'react';
// import { flexbox } from "@mui/system";



function Create(props) {
  const [canvasWidth, setCanvasWidth] = useState(20);
  const [canvasHeight, setCanvasHeight] = useState(20);
  const [Color, setColor] = useState('#8733DB')


  function changeColor(color){
    setColor(color)
  }

  // function handleOpen //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id = 'create'>
      <h1>Create New PXL</h1>

      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center"
        }}
      >
        <Box sx={{
          display: "flex",
          width: '90%',
          height: '90%',
          justifyContent: 'center',
          alignItems: "center",

          // backgroundColor: 'primary.dark',
          // '&:hover': {
          // backgroundColor: 'primary.main',
          border: "2px solid black"
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}>
         <Canvas width={canvasWidth} height={canvasHeight} Color={Color} />
 
        </Box>
    </Modal >

  {/* <Box
      sx={{
        width: "100%",
        // height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >

      <Canvas width={canvasWidth} height={canvasHeight} Color={Color}/>

    </Box> */}


    </div >
  )
}

export default Create;

// // ------------------------------------------------------

// // import * as React from 'react';
// // import Box from '@mui/material/Box';

// // export default function BoxSx() {
// //   return (
// //     <Box
// //       sx={{
// //         width: 300,
// //         height: 300,
// //         backgroundColor: 'primary.dark',
// //         '&:hover': {
// //           backgroundColor: 'primary.main',
// //           opacity: [0.9, 0.8, 0.7],
// //         },
// //       }}
// //     />
// //   );
// // }


// import Canvas from "../components/Canvas";
// import {useState} from 'react'
// import { Button, Modal, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
// import * as React from 'react';
// // import { flexbox } from "@mui/system";



// function Create(props) {
//   const [canvasWidth, setCanvasWidth] = useState(20);
//   const [canvasHeight, setCanvasHeight] = useState(20);
//   const [Color, setColor] = useState('#8733DB')


//   function changeColor(color){
//     setColor(color)
//   }

//   // function handleOpen //
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div id = 'create'>
//       <h1>Create New PXL</h1>

//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           // alignItems: "center"
//         }}
//       >
//         <Box sx={{
//           display: "flex",
//           width: '90%',
//           height: '90%',
//           justifyContent: 'center',
//           alignItems: "center",
//           border: "2px solid black"
//         }}>
// {/* //       <React.Fragment key='left'> */}
//             {/* //         <Button onClick={toggleDrawer(true)}>Open</Button> */}
//           <Drawer
//               open={true}
//             // onClose={toggleDrawer(false)}
//             >
//               <Box
//                 // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//                 role="presentation"
//               // onClick={toggleDrawer(false)}
//               // onKeyDown={toggleDrawer(false)}
//               >
//                 <List>
//                   {['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'].map((text, index) => (
//                     <ListItem key={index} disablePadding>
//                       <ListItemButton>
//                         <ListItemText primary={text} />
//                       </ListItemButton>
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>
//             </Drawer>
//             <Canvas width={canvasWidth} height={canvasHeight} Color={Color} />
//           {/* </React.Fragment>d */}
//         </Box>
//       </Modal>

//       {/* <Box
//       sx={{
//         width: "100%",
//         // height: 300,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     >

//       <Canvas width={canvasWidth} height={canvasHeight} Color={Color}/>

//     </Box> */}


//     </div>
//   )
// }

// export default Create;