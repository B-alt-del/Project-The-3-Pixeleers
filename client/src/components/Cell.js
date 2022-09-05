import { useState } from "react";


function Cell(props){
    const newColor = props.Color;
    const [cellColor, setCellColor] = useState('');
    const [oldColor, setOldColor] = useState(cellColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    const [manyCells, setManyCells] = useState(false)


    function applyColor(){
        setCellColor(newColor);
        setCanChangeColor(false);
    }
// // amandas idea: hold shift while either erase/draw is select will allow drag feature

    function changeColorOnHover(){
        // setOldColor(newColor);    //this creates a drag click effect
        // setCellColor(newColor)
        setOldColor(cellColor);   
        setCellColor(newColor)
    }
    
    function resetColor(){
        if (canChangeColor){
            setCellColor(oldColor);
        }
        
        setCanChangeColor(true);
    }
        
    function applyMany(){

    //     setManyCells
        setOldColor(newColor);    //this creates a drag click effect needs work
        setCellColor(newColor)

    }

    return (
        <div 
            className="pixel"
            onClick={applyColor}
            onMouseEnter={changeColorOnHover}
            onMouseDown={applyMany}
            onMouseLeave={resetColor}
            style={{backgroundColor: cellColor}}
        ></div>
    );
};

export default Cell