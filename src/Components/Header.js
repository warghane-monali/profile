import { Grid,Typography } from '@mui/material';
import React from 'react'

function Header() {
  return (
    <>
      <Grid item sm={10} style={{ backgroundColor: "lightgrey", color: "blue" }}>
          <Typography style={{ padding: "10px" }}>Home / User / User Profile</Typography>
      </Grid>
    </>
  )
}

export default Header
