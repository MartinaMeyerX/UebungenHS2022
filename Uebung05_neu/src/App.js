import React from 'react';
import Typography from "@mui/material/Typography";
import Timer from "./Timer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


function App() {

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">Counter</Typography>
        </Toolbar>
      </AppBar>

      <Timer/>
    </>
  );

}

export default App;
