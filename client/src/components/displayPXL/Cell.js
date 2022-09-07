import { useState } from "react";


function Cell(props){ //props = {row: , column:  , Color:  }

                            let x = props.row;
                            let y = props.column

                            let color = props.colorArray
    // console.log(color[0][0])
    // console.log(props.colorArray[0][0])

    // if(!(color[x][y].Color)){

    //    return null;

    // }else{
    //     let cellColor = color.Color.Color

// console.log(color[x][y])

                let nil = (color[x][y]) ? (color[x][y]).Color : 'rgb(255, 255, 255)'
        //    console.log(nil)


        // let blah = cellColor ? cellColor : 'rgb(255, 255, 255)'

    //        console.log(blah)
    // // }

    return (
        <div 
            className="pixel"
            style={{backgroundColor: nil}}
        ></div>
    );
};

export default Cell