import { height } from '@mui/system';
import Row from './Row'

function Canvas(props){ // {width,height,Color}
    let rows = [];

    for(let i = 0; i < props.height; i++){
        rows.push(
            <Row 
                key={i} 
                width={props.width} 
                Color={props.Color}
            />)
    }
    return (
        <div id="Canvas">
            <div id="rows">
                {rows}
            </div>
        </div>
    );
}

export default Canvas;