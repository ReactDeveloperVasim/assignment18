import { Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Home=()=>{
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[mobile,setMobile]=useState("");
    const[city,setCity]=useState("");
    const[address,setAddress]=useState("");
    return(
        <Card sx={{bgcolor:"lightblue"}}>
            <CardContent>
                <Grid container spacing={2}>
<Grid item xs={12} sx={{textAlign:"center", }}><h1>Assignment - 18</h1></Grid>
                    <Grid item xs={6} sx={{bgcolor:"white", margin:"10px",marginTop:"30px",height:"370px"}}>
                        <h2 style={{textAlign:"center" ,marginBottom:"35px"}}>Fill Employee Details</h2>
                       <Grid container spacing={3} >
                        <Grid item xs={6}>
                            <TextField variant="outlined" label="Enter First Name" fullWidth  onChange={(e)=>setFname(e.target.value)} />
                        </Grid>
                        <Grid item xs={5.7}>
                            <TextField variant="outlined"  label="Enter Last Name" fullWidth onChange={(e)=>setLname(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined"  label="Enter Mobile Number" fullWidth onChange={(e)=>setMobile(e.target.value)}/>
                        </Grid>
                        <Grid item xs={5.7} >
                            <TextField variant="outlined"  label="Enter City" fullWidth onChange={(e)=>setCity(e.target.value)}  />
                        </Grid>
                        <Grid item xs={11.7}  >
                            <TextField label="Address" variant="outlined" fullWidth onChange={(e)=>setAddress(e.target.value)} sx={{marginBottom:"30px",}}/>
                        </Grid>
                        </Grid>
                      
                    </Grid>
                   
                    <Grid item xs={5.8} sx={{bgcolor:"white", margin:"0px",marginTop:"30px", height:"370px"}}>
                        <h2 style={{textAlign:"center" ,marginBottom:"35px"}}>Show Employee Details</h2>
                       <Grid container spacing={1} >
                        <Grid item xs={6}>
                        <h3>{fname ? fname: "First name"}</h3>
                        </Grid>
                        <Grid item xs={5.7}>
                        <h3>{lname ? lname: "Last name"}</h3>
                        </Grid>
                        <Grid item xs={6}>
                        <h3>{mobile ? mobile: "Mobile No"}</h3>
                        </Grid>
                        <Grid item xs={5.7} >
                        <h3>{city ? city: "City"}</h3>
                        </Grid>
                        <Grid item xs={11.7}  >
                           <h3 style={{marginLeft:"210px"}}>{address ? address : "Address..."}</h3>
                        </Grid>
                        </Grid>
                      
                    </Grid>
                   
                </Grid>
            </CardContent>
        </Card>
    );
}