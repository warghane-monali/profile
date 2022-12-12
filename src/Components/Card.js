import React, { useState } from 'react';
import {Grid} from '@mui/material';
import Header from './Header';
import Profile from './Profile';
import Info from './Info';
import Websites from './Websites';


function Card() {
    return (
        <>
            <Grid container justifyContent="center" gap='10px' style={{ marginTop: "20px", marginBottom: "30px" }}>
               {/* <Header/> */}
               <Profile/>
               <Info/>
               <Websites/>
                </Grid>
        </>
    )
}

export default Card
