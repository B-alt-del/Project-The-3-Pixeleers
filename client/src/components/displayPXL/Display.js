// import { height } from '@mui/system';
import Row from './Row'
// import { Button } from '@mui/material';
// import {useState} from 'react'

function Display(props){ // {width,height,Color}
    let rows = []
    for(let i = 0; i < props.height; i ++){
        rows.push(
            <Row 
                key= {i} 
                row={i}
                width={props.width} 
                height={props.height}
                // row={}
                // Color={props.Color}
                colorArray={props.colorArray}

                // cells= {cells}
                // setTestRows={setTestRows}
                // PXL= {props.PXL}
                // setPXL = {props.setPXL}
                // test_rows={test_rows}
                // test_cells={test_cells}
                // setTestCells={setTestCells}
                // logPXL={logPXL}
            />)
    }

    // console.log(rows)

    return (
        <div id="Canvas">
            <div id="rows">
                {rows}
            </div>
        </div>
    );
}

export default Display;