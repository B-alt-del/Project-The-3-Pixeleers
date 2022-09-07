// import each background-Home image separately, then create an array with all of them together
import image1 from "../assets/background-Home/sunset.png"
import image2 from "../assets/background-Home/mariohacker.png"

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { textAlign } from "@mui/system";


const images = [image1, image2]
var randomIndex = Math.floor(Math.random() * images.length)
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="PLACEHOLDER">
        Pixeleer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Home(props) {
  console.log(images.length)

  return (
    <div style={{
      backgroundImage: `url(${images[randomIndex]})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
    }}>
      <h1 style={{
        fontSize: "2.5em",
        marginLeft: '5%',
        marginTop: 0,
        paddingTop: '1%',
        textAlign: "center",
        textShadow: "3px 3px #002400",
        fontFamily: "Sabon",
        color: 'white',
      }}>Welcome to the Homepage {props.user ? props.user.username : ''}</h1>
      {/* <Copyright style={{}} sx={{ mt: 5 }} /> */}
    </div>


  )
}

export default Home;