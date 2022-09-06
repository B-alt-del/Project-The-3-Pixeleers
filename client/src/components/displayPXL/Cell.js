import { useState } from "react";


function Cell(props){ //props = {row: , column:  , Color:  }

    let x = props.row;
    let y = props.column

    let cellColor = props.colorArray[x][y].Color

    return (
        <div 
            className="pixel"
            style={{backgroundColor: cellColor}}
        ></div>
    );
};

export default Cell