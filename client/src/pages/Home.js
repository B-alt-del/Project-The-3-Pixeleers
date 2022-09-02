function Home(props) {
    return (
      <div>
        <h1>Welcome to the Homepage {props.user ? props.user.username : ''}</h1>
      </div>
    )
  }
  
  export default Home;