
// let TEST1 = [  [{Color: "rgb(0, 0, 0)"},{},{Color: "rgb(61, 255, 242"}]  ,  [{Color: "rgb(61, 255, 242"},{},{Color: "rgb(0, 0, 0)"}]  ]
// let TEST2 = [  [{Color: "rgb(255, 0, 0)"},{},{Color: "rgb(255, 255, 0"}]  ,  [{Color: "rgb(61, 255, 242"},{},{Color: "rgb(0, 0, 0)"}]  ]
// let TEST3 = [  [{Color: "rgb(0, 0, 0)"},{},{},{Color: "rgb(61, 255, 242"}]  ,  [{Color: "rgb(61, 255, 242"},{},{},{Color: "rgb(0, 0, 0)"}],[{Color: "rgb(61, 255, 242"},{},{},{Color: "rgb(0, 0, 0)"}]  ]
// let color_arrays = [TEST1,TEST2,TEST3]
// let color_arrays = [TEST1,TEST2,TEST3]

// import { useState, useEffect } from 'react';
// import { ADD, LOGIN_USER } from '../utilities/mutations';
// import { UserInputError } from "apollo-server-express"
import Display from "../components/displayPXL/Display"
// import { ADD_PXL} from '../utilities/mutations';
//----------------------------------------------------------------------
// import { useEffect, useState } from "react";
// import classNames from "classnames";

// const MyComponent = () => {
//   const [playAnimation, setPlayAnimation] = useState(false);

//   // This will run one time after the component mounts
//   useEffect(() => {
//     const onPageLoad = () => {
//       setPlayAnimation(true);
//     };

//     // Check if the page has already loaded
//     if (document.readyState === "complete") {
//       onPageLoad();
//     } else {
//       window.addEventListener("load", onPageLoad);
//       // Remove the event listener when component unmounts
//       return () => window.removeEventListener("load", onPageLoad);
//     }
//   }, []);

//   return (
//     <div className={classNames("myComponentClass", { "myAnimation": playAnimation })}/>
//   );
// };

// export default MyComponent;
//------------------------------------------------------------------------------
import { GET_PXLS } from '../utilities/queries';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';

function PXLS() {

    // useEffect
    // const [pxl_array, setPixel_array] = useState()


    const { data, loading, error } = useQuery(GET_PXLS)

    if (loading||error) {
        return(null)
    }
    
    const information = data.getPXLs;
    let display_array = [];
    // console.log(data)
    // console.log(data.getPXLs)
    // console.log(information)
    // console.log(information[0].colorArr)
    // let blah = JSON.parse(information[0].colorArr)
    // console.log(blah.length)
    // console.log(blah[2])
    // console.log((blah[2]).length)
    // console.log(information.length)

    for(let i = 0; i < information.length; i++) {
        // console.log(information.length)
        let parsed = JSON.parse(information[i].colorArr)
        console.log (parsed)
        let width = parsed[0].length
        let height = parsed.length
        display_array.push(
            <Display 
                key = {i}
                height={height}
                width={width}
              
                colorArray={parsed}
            />);
}


    // setPixel_array([data.getPXLs])

    // console.log(pxl_array)
    return (
        <div id="display">
            <div> TESTIN PXLS DISPLAY PAGE</div>
            {display_array}
        </div>
    )
}

export default PXLS
// {/* <button onClick={GETpxls}>GET <PXLS></PXLS></button> */}
// {/* {display_array}      */}


      
        


    // setPxl(blah.data.getPXLs)
    // console.log(blah.data)
    // console.log(blah.data.getPXLs)
//   const { loading, data } = useQuery(QUERY_THOUGHTS);

    // const pxl_array = blah.data.getPXLs
    // const color_array = new Array(pxl_array.length)
    // console.log(blah)
    // console.log(blah.data.getPXLs)

    // for(let i =0; i < pxl_array.array.length; i++){
    //     color_array[i] = pxl_array[i].colorArr
    // }


    // console.log(color_array)



    // let parsed_coloarr = JSON.stringify(TEST3)
    // const [arrays, setArrays] = useState(color_arrays)
    
    // const [addPXL, { loading, error, data }] = useMutation(ADD_PXL, {variables: {name:"testPXL", colorArr: parsed_coloarr}});
    
    // console.log(arrays)
    
    // const PIXELS = GETpxls()
    
    // async function GETpxls(){
    //     const {data, error} = await getPXLs()
    //     // const info = data.getPXLs
    //         // console.log(da.getPXLs)
    //     // error ? console.log(error) : console.log("worked!", data.getPXLs)
    //         // console.log(in)
    //     // return data
    // }

    // async function addPxl(){
    //     const {data,error} = await addPXL();
        
    //     let blah = data.addPXL
    //     // console.log(blah)
    //     let unp = JSON.parse(blah.colorArr)
    //     console.log("unp", unp)

    //     // console.log(arrays)
        
    //     // let rayz = arrays
    //     // let arrays = [...color_arrays, unp.colorArr]
    //     // setArrays([rayz, unp])

    //     console.log("arrays", arrays)
        
    //     // display_array.push(
    //     //     <Display 
    //     //     key = {arrays.length}
    //     //     height={unp.length}
    //     //     width={unp[0].length}
    //     //     // // Color={Color}
    //     //     // colorArray={color_arrays[i]}
    //     //     colorArray={unp}
    //     //     />
    //     //     )
            
    //         error ? console.log(error) : console.log("worked!", data.addPXL)
    //         // console.log{error ? error : data}
    //     }
        
        
        // let display_array = []

        // useEffect(() => {
        //     // const data = isAuthenticated();
        //     // if (data) setUser(data);
        //     console.log("effect used",)
        //   }, [arrays]);
        
        
    //     for(let i = 0; i < pxl_array.length; i++) {
    //     display_array.push(
    //         <Display 
    //             key = {i}
    //             height={pxl_array[i].length}
    //             width={pxl_array[i][0].length}
    //             // // Color={Color}
    //             // colorArray={color_arrays[i]}
    //             colorArray={pxl_array[i]}
    //         />);
    // }

//     return(
//         <div>
//             <div> TESTIN PXLS DISPLAY PAGE</div>
//             {/* {/* <button onClick={addPxl}>ADD ONE PXL</button> */}
//             {/* <button onClick={GETpxls}>GET <PXLS></PXLS></button> */}
//             {/* {display_array}      */}
            
    
//         </div>
//         )

// }

// export default PXLS