import { useState } from "react";


function Cell(props){ //props = {row: , column:  , Color:  }

    const newColor = props.Color;

    const [oldColor, setOldColor] = useState('rgb(255, 255, 255)');
    const [prevColor, setPrevColor] = useState('rgb(255, 255, 255)')
    const [cellColor, setCellColor] = useState('rgb(255, 255, 255)');

    const [canChangeColor, setCanChangeColor] = useState(true);
    const [manyCells, setManyCells] = useState(false)

    

    function applyColor(event){
        
        if(oldColor === newColor){
            
            setCellColor(oldColor)
            setCanChangeColor(false)

            console.log("would erase the color")
            return;
        }
            console.log("shouldnt appear when would erase appears")
        setCellColor(newColor);
        setCanChangeColor(false);


        let x = props.row;
        let y = props.column
        let tempPXL = props.PXL


        const new_cell = {row: x, column: y , Color: newColor}
        
        tempPXL[0][x][y] = new_cell  // --------------------------

    }
    
    function changeColorOnHover(e){
        // // amandas idea: hold shift while either erase/draw is select will allow drag feature
        // setOldColor(newColor);    //this creates a drag click effect
        // setCellColor(newColor)

        // console.log(e.target.style.backgroundColor)
        if(oldColor === newColor){
            // console.log("cell contained new color")
            setOldColor(oldColor)
            // setCellColor(oldColor)
            // setCellColor('rgb(255, 255, 255)')

            return;
        }
        // console.log("cell contained old color")
        setOldColor(e.target.style.backgroundColor);   
        // console.log(oldColor)
        setCellColor(newColor)

        // setOldColor(cellColor);   
        // setCellColor(newColor)
    }
    
    function resetColor(){
        if (canChangeColor){
            setCellColor(oldColor);
        }
        
        setCanChangeColor(true);
    }
        
    // function applyMany(){

    // //     setManyCells
    //     setOldColor(newColor);    //this creates a drag click effect needs work
    //     setCellColor(newColor)

    // }

    return (
        <div 
            className="pixel"
            // id={props.column}//{props.row}
            onClick={applyColor}
            onMouseEnter={changeColorOnHover}
            // onMouseDown={applyMany}
            onMouseLeave={resetColor}
            style={{backgroundColor: cellColor}}
        ></div>
    );
};

export default Cell