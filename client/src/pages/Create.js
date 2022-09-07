import Canvas from "../components/createPXL/Canvas";
import { useState } from 'react'
import { Button, Modal, Box, Stack, TextField, MenuItem, Paper, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import * as React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PXL } from '../utilities/mutations'
import PXLS from './PXLS'
import { color } from "@mui/system";
import { Grid } from '@mui/material';


function Create(props) {
  const [PXLColorA, setPXLColorA] = useState("[[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]")
  const [PXLName, setPXLName] = useState('New PXL title')
  const [canvasWidth, setCanvasWidth] = useState(6);
  const [canvasHeight, setCanvasHeight] = useState(3);
  const [colorPallete, setColorPallete] = useState(['rgb(255, 0, 0)', 'rgb(255, 165, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255', 'rgb(75, 0, 130)', 'rgb(148, 0, 211)']);
  const [Color, setColor] = useState('rgb(0, 255, 0)')
  const [addPXL, { loading, data, error }] = useMutation(ADD_PXL, { variables: { name: PXLName, colorArr: PXLColorA } })
  const [count, setCount] = useState(1)
  const dimensions = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  const reset = () => {
    setCount(Math.random())
  }

  let tempPXL = new Array(props.height);

  for (var i = 0; i < canvasHeight; i++) {
    tempPXL[i] = new Array(canvasWidth);
  }

  const [PXL, setPXL] = useState([tempPXL])
  const [PXL_SAVED, setPXL_SAVED] = useState()

  function changeColor(event) {
    let colorString = event.target.attributes.data.nodeValue
    setColor(colorString)
  }

  // function handleOpen //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(tempPXL)
      ;
  }

  const handleClose = () => {
    setOpen(false);
    reset();
    const { data, error } = addPXL();
  }

  async function savePXL(event) {
    let newPXL = PXL[0]
    setPXL_SAVED(newPXL)
    let newPXLColorA = JSON.stringify(PXL[0])
    console.log('newPXLC', newPXLColorA)
    setPXLColorA(newPXLColorA)
    console.log(PXL[0])
    console.log('Title: ', PXLName)
    console.log('Colors: ', PXLColorA)
  }


  return (
    <div id="main" style={{
      display: "flex",
      margin: "15px"
    }}>
      <div id="maincontainer" style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}>
        {/* <div id="section1" style={{
          display: "flex",
          flexBasis: "100%",
        }}>
          <section id="templateArt">
            Links to pixel art templates
          </section>
        </div> */}
        <div id="section2" style={{
          display: "flex",
          flexDirection: "column",
        }}>
          <div id='create' style={{justifyContent: "space-around"}}>
            <h1>PXL Dashboard</h1>
            <p><Button onClick={handleOpen} variant="outlined">Create New PXL!</Button></p>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box id="boxOne" sx={{
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
                      {colorPallete.map((color, index) => (
                        <ListItem sx={{ background: { color } }} key={index}>
                          <ListItemButton data={color} onClick={changeColor} sx={{ backgroundColor: { color } }} >{color}</ListItemButton>
                        </ListItem>))}
                    </Stack>
                  </Box>

                </Box>

                <Canvas
                  width={canvasWidth}
                  height={canvasHeight}
                  Color={Color}
                  PXL={PXL}
                  setPXL={setPXL} />
                <div id="modalButtons">
                  <form >
                    <h1>Canvas Dimensions</h1>

                    {/* <input
                    value={todo_text} //canvas width
                    onChange={e => setTodoText(e.target.value)}
                    type="number"
                    placeholder="Enter your todo text" />
                  <button>Submit</button> */}
                    <div>
                      <TextField
                        id="widthInput"
                        select
                        label="Width"
                        type="number"
                        value={canvasWidth}
                        onChange={e => setCanvasWidth(e.target.value)}
                        helperText="Width"
                      >
                        {dimensions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="heightInput"
                        select
                        label="Height"
                        value={canvasHeight}
                        onChange={setCanvasHeight}
                        helperText="Height"
                      >
                        {dimensions.map((option) => (
                          <option key={option.valueOf} value={option.valueOf}>
                          </option>
                        ))}
                      </TextField>
                    </div>

                  </form>
                  <Button id="saveBtn" onClick={savePXL} > SAVE PROJECT </Button>
                  <Button id="closeBtn" onClick={handleClose}> CLOSE </Button>
                  {/* <Button id="delBtn" onClick={handleClose}> CLOSE </Button> */}
                </div>

              </Box>
            </Modal >
          </div >
          <div id="section3" style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}>
            <section style={{
              display: "flex"
            }}>
              <h3>Saved PXL Cards</h3>
              <PXLS key={count} />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create;

