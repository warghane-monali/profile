import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';

function Info() {
    const inform = {
        id:'uuidv4',
        fullname: "Kenneth Valdez",
        email: "fip@jukmuh.al",
        phone: "(239) 816-9029",
        mobile: "(320) 380-4539",
        address: "Bay Area, San Fransisco, CA"
    }
  return (
    <>
      <Grid item sm={7} style={{ backgroundColor: "wheat", height: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-evenly", margin: "15px" }}>
                        <Typography variant='h6'>Actions</Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Button 
                            variant='contained'>Edit</Button>
                            <Button 
                            variant='contained'>Save</Button>
                        </Stack>
                        </div>
                        <Divider/>
                        <div style={{ display: "flex", justifyContent: "space-evenly", padding:"10px"}}>
                        <Typography>FullName</Typography>
                        <Typography color={"gray"}>{inform.fullname}</Typography>
                    </div>

                    <Divider />
                    <div style={{ display: "flex", justifyContent: "space-evenly",padding:"10px"}}>
                        <Typography>Email</Typography>
                        <Typography color={"gray"}>{inform.email}</Typography>
                    </div>
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "space-evenly",padding:"10px"}}>
                        <Typography>Phone</Typography>
                        <Typography color={"gray"}>{inform.phone}</Typography>
                    </div>
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "space-evenly", padding:"10px"}}>
                        <Typography>Mobile</Typography>
                        <Typography color={"gray"}>{inform.mobile}</Typography>
                    </div>
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "space-evenly",padding:"10px"}}>
                        <Typography>Address</Typography>
                        <Typography color={"gray"}>{inform.address}</Typography>
                    </div>
                </Grid>

    </>
  )
}

export default Info
