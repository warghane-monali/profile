import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';


function Profile() {
  return (
    <>
        <Grid item xs={6} sm={3} style={{ backgroundColor: "lightblue", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Avatar alt="Profile Image" src="./images/profile.jpeg" sx={{ width: 120, height: 120 }} style={{ margin: "5px" }} />
            <Typography variant='h5'>John Doe</Typography>
            <Typography variant="subtitle1" color={"grey"}>FullStack Developer</Typography>
            <Typography variant="subtitle1" color={"grey"} style={{ marginBottom: "10px" }}>Bay Area, San Fransisco, CA</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Button variant="contained">Follow</Button>
                <Button variant="outlined">Message</Button>
            </Stack>
        </Grid>
    </>
  )
}

export default Profile
