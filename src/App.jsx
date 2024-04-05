import {Grid, Container, Typography } from "@mui/material"
import InputUsername from "./components/InputUsername"


function App() {
  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10%",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant='h5' sx={{ marginBottom: "2rem", fontWeight: "bold"}}>Github Profile Viewer</Typography>
      <Grid container spacing={2}>
        <InputUsername />
      </Grid>
    </Container>
  )
}

export default App
