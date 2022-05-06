import { useNavigate , Link} from "react-router-dom";
import { Grid, Typography, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import React from "react";
const jobso = [
    {
        id: 1,
        title: "Front end developer",
        description: ""
    },
    {
        id: 2
    }, {
        id: 3
    }, {
        id: 4
    }, {
        id: 5
    },
]

function Jobs() {
    // let navigate = useNavigate();

    return (
        <>
            <div style={{ marginTop: 20, marginLeft: 20, }}>


                <Typography variant="h2" component="div" style={{ marginLeft: 20 }}>
                    Trabajos disponibles para ti:
                </Typography>
                

                
                {jobso.map(job => {


                    return (
                            <Paper
                                key={job.id} 
                                elevation={0}
                                 sx={{ borderRadius: 2, maxWidth: "95%", textTransform: 'none', marginTop: 2, 
                                 marginBottom: 2,
                                 padding: 2,
                                 borderWidth: 1,
                                 borderColor: "#000",
                                 borderStyle: "solid"
                                 }}>
                                <Grid container alignItems="center" direction="row" columnSpacing={2} >
                                    <Grid item xs={1}>
                                        <img style={{ maxWidth: "100%", align: "center" }} src={`${process.env.PUBLIC_URL}/building.png`} />


                                    </Grid>
                                    <Grid item container rowSpacing={0}
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                        xs={10}>
                                        <Grid item xs={12} >
                                            <Typography component={Link} to={`/jobs/${job.id}`} align="left" variant="h4" sx={{color:"#000",textDecoration: "none"}}>
                                            Gerente de calidad especializado en sector panadero
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} align="left">
                                            <Typography variant="h6" component="div">
                                                Grupo Bimbo
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} align="left">
                                            <Typography variant="h8" component="div">
                                                Chihuahua, Chihuahua, México
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1} style={{align:"center", justifyContent:"center"}}>
                                        <IconButton aria-label="bookmark"  sx={{color: "#000"}} >
                                            <BookmarkIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>

                            </Paper>
                    )
                    
                })}
                {/* < Outlet /> */}
            </div>
        </>

    )

}
export default Jobs