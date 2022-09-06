import Cell from './Cell'


function Row(props){

    let cells_array = [];

    for(let i = 0; i < props.width; i++){
        cells_array.push(
            <Cell 
                key={i} 
                row={props.column} 
                column={i} 
                // width={props.width}
                // height={props.height}
                // setTestCells={props.setTestCells} 
                PXL={props.PXL}
                setPXL={props.setPXL}
                // test_cells={props.test_cells}
                // setTestRows={props.setTestRows} 
                // test_rows={props.test_rows}
                Color={props.Color} 
            />);
    }

    return <div className='row'>{cells_array}</div>
};

export default Row