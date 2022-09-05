import Cell from './Cell'


function Row(props){
    let cells_array = [];

    for(let i = 0; i < props.width; i++){
        cells_array.push(<Cell key={i} Color={props.Color} />);
    }

    return <div className='row'>{cells_array}</div>
};

export default Row