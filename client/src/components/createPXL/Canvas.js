import { height } from '@mui/system';
import Row from './Row'
import { Button } from '@mui/material';
import {useState} from 'react'

function Canvas(props){ // {width,height,Color}
    let rows = [];
    // let cells = [];

    function logPXL(){
        console.log(props.PXL[0])
    }

    // const [test_cells, setTestCells] =useState([])
    // const [test_rows, setTestRows] = useState([])
    

    for(let i = 0; i < props.height; i ++){
        rows.push(
            <Row 
                key= {i} 
                column={i}
                width={props.width} 
                height={props.height}
                Color={props.Color}
                // cells= {cells}
                // setTestRows={setTestRows}
                PXL= {props.PXL}
                setPXL = {props.setPXL}
                // test_rows={test_rows}
                // test_cells={test_cells}
                // setTestCells={setTestCells}
                logPXL={logPXL}
            />)
    }

    // console.log(rows)

    return (
        <div id="Canvas">
            <div id="rows">
                {rows}
            </div>
            <Button onClick={logPXL}>Console.Log</Button>
        </div>
    );
}

export default Canvas;