import Canvas from "../components/createPXL/Canvas";
import {useState} from 'react'
import { Button, Modal, Box, Stack, Paper, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import * as React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {ADD_PXL} from '../utilities/mutations'
import PXLS from './PXLS'
import { color } from "@mui/system";

function Create(props) {
  const [PXLColorA, setPXLColorA] = useState("color")
  const [PXLName, setPXLName] = useState('New PXL title')
  const [canvasWidth, setCanvasWidth] = useState(6);
  const [canvasHeight, setCanvasHeight] = useState(3);
  const [colorPallete, setColorPallete] =useState(['rgb(255, 0, 0)','rgb(255, 165, 0)', 'rgb(255, 255, 0)','rgb(0, 255, 0)','rgb(0, 0, 255','rgb(75, 0, 130)','rgb(148, 0, 211)']);
  const [Color, setColor] = useState('rgb(0, 255, 0)')
  const [addPXL, {loading, data, error}] = useMutation(ADD_PXL, {variables: {name: PXLName, colorArr: PXLColorA }} )
  const [count, setCount] = useState(1)
  const reset = () => {
    setCount(Math.random())
  }
  
  let tempPXL = new Array(props.height);
  
  for (var i = 0; i < canvasHeight; i++) {
    tempPXL[i] = new Array(canvasWidth);
  }
  
  const [PXL, setPXL] = useState([tempPXL])
  const [PXL_SAVED, setPXL_SAVED] = useState()
  
  function changeColor(event){
    let colorString = event.target.attributes.data.nodeValue
    setColor(colorString)
    // console.log(colorString)
  }
  
  // function handleOpen //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true); 
    console.log(tempPXL)
    ;}
    
    const handleClose = () => {
      setOpen(false); 
      reset();
      const {data,error} = addPXL();
    }


  async function savePXL(event){
    let newPXL = PXL[0]
    setPXL_SAVED(newPXL)
    let newPXLColorA = JSON.stringify(PXL[0])
    console.log('newPXLC',newPXLColorA)
     setPXLColorA(newPXLColorA)
    console.log(PXL[0])
    console.log('Title: ', PXLName)
    console.log('Colors: ', PXLColorA)
  }


  return (
    <div>
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
        }}
      >
        <Box sx={{
          display: "flex",
          width: '90%',
          height: '90%',
          alignItems: "center",

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
            
            <Box sx={{ width: '100%' }}>
              <Stack spacing={1}>
              {colorPallete.map((color,index)=>(
                <ListItem sx={{background: {color}}} key={index}>
                  <ListItemButton data={color} onClick={changeColor}sx={{backgroundColor: {color}}} >{color}</ListItemButton>
                </ListItem>))}
              </Stack>
            </Box>
          </Box>
          <div >
            <Button id="saveBtn" onClick={savePXL} > SAVE PROJECT </Button>
            <Button id="closeBtn" onClick={handleClose}> CLOSE </Button>
            {/* <Button id="delBtn" onClick={handleClose}> CLOSE </Button> */}
          </div>
          
          <Canvas 
            width={canvasWidth} 
            height={canvasHeight} 
            Color={Color}
            PXL ={PXL}
            setPXL = {setPXL} />
 
        </Box>
      </Modal >
    </div >
            <PXLS key={count}/>
    </div>
  )
}

export default Create;
