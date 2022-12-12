import React from 'react';
import {Divider, Grid, Typography } from '@mui/material';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';



function Websites() {
  return (
    <>
        <Grid item sm={3} style={{ backgroundColor: "lightsalmon" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 20px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <LanguageIcon />
                    <Typography>Website</Typography>
                </div>
                    <Typography color={"gray"}>https://bootdey.com</Typography>
            </div>
            <Divider />
                    
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 20px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <GitHubIcon />
                    <Typography>Github</Typography>
                </div>
                    <Typography color={"gray"}>bootdey</Typography>
            </div>
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 20px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <TwitterIcon />
                    <Typography>Twitter</Typography>
                </div>
                    <Typography color={"gray"}>@bootdey</Typography>
            </div>
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 20px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <InstagramIcon />
                    <Typography>Instagram</Typography>
                </div>
                    <Typography color={"gray"}>bootdey</Typography>
            </div>
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 20px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <FacebookIcon />
                    <Typography>Facebook</Typography>
                </div>
                    <Typography color={"gray"}>bootdey</Typography>
            </div>
        </Grid>
        <Grid item sm={7}>
        </Grid>
    </>
  )
}

export default Websites
