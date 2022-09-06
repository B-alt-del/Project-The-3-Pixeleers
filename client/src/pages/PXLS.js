
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD, LOGIN_USER } from '../utilities/mutations';
// import { UserInputError } from "apollo-server-express"
import Display from "../components/displayPXL/Display"
import { ADD_PXL} from '../utilities/mutations';
// import { set } from 'mongoose';


let TEST1 = [  [{Color: "rgb(0, 0, 0)"},{},{Color: "rgb(61, 255, 242"}]  ,  [{Color: "rgb(61, 255, 242"},{},{Color: "rgb(0, 0, 0)"}]  ]
let TEST2 = [  [{Color: "rgb(255, 0, 0)"},{},{Color: "rgb(255, 255, 0"}]  ,  [{Color: "rgb(61, 255, 242"},{},{Color: "rgb(0, 0, 0)"}]  ]
let TEST3 = [  [{Color: "rgb(0, 0, 0)"},{},{},{Color: "rgb(61, 255, 242"}]  ,  [{Color: "rgb(61, 255, 242"},{},{},{Color: "rgb(0, 0, 0)"}],[{Color: "rgb(61, 255, 242"},{},{},{Color: "rgb(0, 0, 0)"}]  ]
// let color_arrays = [TEST1,TEST2,TEST3]
let color_arrays = [TEST1,TEST2,TEST3]


function PXLS(){
    let parsed_coloarr = JSON.stringify(TEST3)
    const [arrays, setArrays] = useState(color_arrays)
    
    const [addPXL, { loading, error, data }] = useMutation(ADD_PXL, {variables: {name:"testPXL", colorArr: parsed_coloarr}});

    console.log(arrays)
    async function addPxl(){
        const {data,error} = await addPXL();
        
        let blah = data.addPXL
        // console.log(blah)
        let unp = JSON.parse(blah.colorArr)
        console.log("unp", unp)

        console.log(arrays)
        
        let rayz = arrays
        // let arrays = [...color_arrays, unp.colorArr]
        setArrays([rayz, unp])

        console.log("arrays", arrays)
        
        // display_array.push(
        //     <Display 
        //     key = {arrays.length}
        //     height={unp.length}
        //     width={unp[0].length}
        //     // // Color={Color}
        //     // colorArray={color_arrays[i]}
        //     colorArray={unp}
        //     />
        //     )
            
            error ? console.log(error) : console.log("worked!", data.addPXL)
            // console.log{error ? error : data}
        }
        
        
        let display_array = []

        useEffect(() => {
            // const data = isAuthenticated();
            // if (data) setUser(data);
            console.log("effect used",)
          }, [arrays]);
        
        
        for(let i = 0; i < arrays.length; i++) {
        display_array.push(
            <Display 
                key = {i}
                height={arrays[i].length}
                width={arrays[i][0].length}
                // // Color={Color}
                // colorArray={color_arrays[i]}
                colorArray={arrays[i]}
            />);
    }

    return(
        <div>
            <div> TESTIN PXLS DISPLAY PAGE</div>
            <button onClick={addPxl}>ADD ONE PXL</button>
            {display_array}    
            
    
        </div>
        )

}

export default PXLS