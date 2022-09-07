
import BottomNavigation from '@mui/material/BottomNavigation';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { padding } from '@mui/system';





export const MuiBottomNavigation = () => {
// function Footer() {
    return(
        <>
        {/* <Container> */}
            <Box style={{color:'antiquewhite'}} m={0} position="fixed" bottom="0px" right='20%' left='22%' padding={0}>
                <h1 sx={{disply:'flex',alignItems:'bottom', justifycontent:'center', padding:0, margin:0}}>Created by: Brad Schill, Fartuun Ali, and Lee Boettcher</h1>

                    <Box style={{ padding:'0'}} sx={{ display: 'flex', justifyContent: 'space-around',}}>
                        <Button variant='contained'>
                            <column>
                                <a href="https://github.com/B-alt-del">Brad's GitHub Profile</a>
                            </column>
                        </Button>
                        <Button variant='contained'>
                            <column>
                                <a href="https://github.com/afartuun">Fartuun's GitHub Profile</a>
                            </column>
                        </Button>
                        <Button variant='contained'>
                            <column>
                                <a href="https://github.com/Lilniz">Lee's GitHub Profile</a>
                            </column>
                        </Button>
                    </Box>
            </Box>

        {/* </Container> */}
            
         </>

    );
};

export default MuiBottomNavigation;