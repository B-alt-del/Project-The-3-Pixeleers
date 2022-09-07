
// import Canvas from "../components/createPXL/Canvas";
// import {useState} from 'react'
// import { Button, Modal, Box, Stack, Paper, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
// import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// import { useMutation, useQuery } from '@apollo/client';
// import {ADD_PXL} from '../utilities/mutations'



// function Create(props) {
//   const [pixel_name, setPixel_name] = useState('New PXL');
//   const [pixel_Arr, setPixel_Arr] = useState([]);
//   const [canvasWidth, setCanvasWidth] = useState(6);
//   const [canvasHeight, setCanvasHeight] = useState(3);
//   const [colorPallete, setColorPallete] =useState(['rgb(255, 0, 0)','rgb(255, 165, 0)', 'rgb(255, 255, 0)','rgb(0, 255, 0)','rgb(0, 0, 255','rgb(75, 0, 130)','rgb(148, 0, 211)']);
//   const [Color, setColor] = useState('rgb(0, 255, 0)')
//   const [addPXL] =useMutation(useMutation(ADD_PXL, {variables: {name:pixel_name, colorArr: pixel_Arr}}))
//   // const [PXL, setPXL] = useState([{}])

//   let tempPXL = new Array(props.height);

//   for (var i = 0; i < canvasHeight; i++) {
//     tempPXL[i] = new Array(canvasWidth);
//   }

//   const [PXL, setPXL] = useState([tempPXL])

//   const [PXL_SAVED, setPXL_SAVED] = useState()

//   // function changeColor(color){
//   //   setColor(color)
//   // }

//   // function handleOpen //
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   function savePXL(event){
//     let newPXL = PXL[0]
//     setPXL_SAVED(newPXL)
//     console.log("saved")
//   }

//   function logPXLS(event){
//     console.log("InProgress", PXL[0])
//     console.log("saved", PXL_SAVED)
//   }

//   return (
//     <div id = 'create'>
//       <h1>Create New PXL</h1>
//       <Button onClick={logPXLS}>LOG PXLS</Button>
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
//           // justifyContent: 'space-evenly',
//           // justifyContent: 'space-between',
//           alignItems: "center",
//           // margin: "10%",
//           // padding: "10%",

//           backgroundColor: 'rgba(23,189,211, 75%)',
//           border: "2px solid black",
//         }}>
//           <Box sx={{
//             display: "flex",
//             width: '20%',
//             height: '100%',
//             // justifyContent: 'space-between',
//             alignItems: "center",
//             // margin: "10%",
//             // padding: "10%",

//             backgroundColor: 'rgba(0,135,153)',
//             border: "2px solid black",
//         }}>
//             {/* <List>
//               {colorPallete.map((color,index)=>(
//                 <ListItem sx={{background: {color}}} key={index}>
//                   <ListItemButton sx={{backgroundColor: {color}}} >{color}</ListItemButton>
//                 </ListItem>
//               ))}
//             </List> */}
//             <Box sx={{ width: '100%' }}>
//               <Stack spacing={1}>
//               {colorPallete.map((color,index)=>(
//                 <ListItem sx={{background: {color}}} key={index}>
//                   <ListItemButton sx={{backgroundColor: {color}}} >{color}</ListItemButton>
//                 </ListItem>))}
//               </Stack>
//             </Box>
//           </Box>
//           <div >
//             <Button id="saveBtn" onClick={savePXL} > SAVE PROJECT </Button>
//             <Button id="deleteBtn" > DELETE </Button>
//           </div>
//           <Canvas 
//             width={canvasWidth} 
//             height={canvasHeight} 
//             Color={Color}
//             PXL ={PXL}
//             setPXL = {setPXL} />

//         </Box>
//       </Modal >
//     </div >
//   )
// }

// export default Create;
//---------------------
import Canvas from "../components/createPXL/Canvas";
import { useState } from 'react'
import { Button, Modal, Box, Stack, Paper, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PXL } from '../utilities/mutations'


function Create(props) {
  const [PXLColorA, setPXLColorA] = useState("color")
  const [PXLName, setPXLName] = useState('New PXL title')
  const [canvasWidth, setCanvasWidth] = useState(6);
  const [canvasHeight, setCanvasHeight] = useState(3);
  const [colorPallete, setColorPallete] = useState(['rgb(255, 0, 0)', 'rgb(255, 165, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255', 'rgb(75, 0, 130)', 'rgb(148, 0, 211)']);
  const [Color, setColor] = useState('rgb(0, 255, 0)')
  const [addPXL, { loading, data, error }] = useMutation(ADD_PXL, { variables: { name: PXLName, colorArr: PXLColorA } })
  // const [addPXL, {loading, data, error}] = useMutation()
  // const [PXL, setPXL] = useState([{}])

  React.useEffect(() => {
    console.log('clicked')

  }, [addPXL])

  let tempPXL = new Array(props.height);

  for (var i = 0; i < canvasHeight; i++) {
    tempPXL[i] = new Array(canvasWidth);
  }

  const [PXL, setPXL] = useState([tempPXL])
  const [PXL_SAVED, setPXL_SAVED] = useState()

  function changeColor(color) {
    setColor(color)
  }

  // function handleOpen //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(tempPXL)
      // setPXLColorA(JSON.stringify(tempPXL))
      ;
  }

  const handleClose = () => {
    setOpen(false);
    const { data, error } = addPXL();
  }


  async function savePXL(event) {
    let newPXL = PXL[0]
    setPXL_SAVED(newPXL)
    let newPXLColorA = JSON.stringify(PXL[0])
    console.log('newPXLC', newPXLColorA)
    setPXLColorA(newPXLColorA)
    // console.log("saved")
    // setPixel_array(PXL[0])
    console.log(PXL[0])
    console.log('Title: ', PXLName)
    console.log('Colors: ', PXLColorA)
    // addPXL()
    // const {data,error} = await addPXL();


  }

  function logPXLS(event) {
    console.log("InProgress", PXL[0])
    console.log("saved", PXL_SAVED)
    console.log("PXLColorA: ", PXLColorA)
  }

  return (

    <div id="main" style={{
      display: "flex",
      margin: "15px"
    }}>
      <div id="maincontainer" style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%"
      }}>
        <div id="section1" style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "100%",
          flex: 1
        }}>
          <section id="templateArt">
            Links to pixel art templates
          </section>
        </div>
        <div id="section2" style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "100%",
          flex: 1
        }}>
          <div id='create'>
            <h1>Create New PXL</h1>
            <Button onClick={logPXLS}>LOG PXLS</Button>
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
                // justifyContent: 'space-evenly',
                // justifyContent: 'space-between',
                alignItems: "center",
                // margin: "10%",
                // padding: "10%",

                backgroundColor: 'rgba(23,189,211, 75%)',
                border: "2px solid black",
              }}>
                <Box sx={{
                  display: "flex",
                  width: '20%',
                  height: '100%',
                  // justifyContent: 'space-between',
                  alignItems: "center",
                  // margin: "10%",
                  // padding: "10%",

                  backgroundColor: 'rgba(0,135,153)',
                  border: "2px solid black",
                }}>
                  {/* <List>
              {colorPallete.map((color,index)=>(
                <ListItem sx={{background: {color}}} key={index}>
                  <ListItemButton sx={{backgroundColor: {color}}} >{color}</ListItemButton>
                </ListItem>
              ))}
            </List> */}
                  <Box sx={{ width: '100%' }}>
                    <Stack spacing={1}>
                      {colorPallete.map((color, index) => (
                        <ListItem sx={{ background: { color } }} key={index}>
                          <ListItemButton sx={{ backgroundColor: { color } }} >{color}</ListItemButton>
                        </ListItem>))}
                    </Stack>
                  </Box>
                </Box>
                <div >
                  <Button id="saveBtn" onClick={savePXL} > SAVE PROJECT </Button>
                  <Button id="deleteBtn" > DELETE </Button>
                </div>
                <Canvas
                  width={canvasWidth}
                  height={canvasHeight}
                  Color={Color}
                  PXL={PXL}
                  setPXL={setPXL} />

              </Box>
            </Modal >
          </div >
          <div id="section3" style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            flex: 1
          }}>
            Pixel Cards
            {/* <PXLS /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create;
