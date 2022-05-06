import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <
            div
            style={{
                backgroundColor: '#020811',
                height: '100%',
                color: "#fff"
            }}
        >
        <img style={{position:"absolute", left:-3, top:-3, width: 330, height: 240}}src={`${process.env.PUBLIC_URL}/logo.png`}/>
            <div
                style={{ minHeight: "70px", minWidth: "100%" }}
            />
            <div style={{ padding: 80 }}>
                <Typography variant="h1" component="div">
                    Tu nuevo trabajo
                </Typography>
                <div
                    style={{ minHeight: "40px", minWidth: "100%" }}
                />

                <Typography variant="h4" component="div">
                    A un click de distancia
                </Typography>
                <div
                    style={{ minHeight: "80px", minWidth: "100%" }}
                />
                <Button component={Link} to="/jobs" variant="outlined" color="inherit" sx={{ borderRadius: 28, marginLeft: 10 }}>buscar trabajo   -----{'>'}</Button>

            </div>
            <div
                style={{ minHeight: "250px", minWidth: "100%" }}
            />
        </div>



    )
}