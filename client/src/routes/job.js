

import { Routes, Route, useParams } from "react-router-dom";
import { Grid, Typography, Button, List, ListItem } from '@mui/material';

export default function Job() {
    let { jobId } = useParams();
    return (
        <Grid container sx={{ marginTop: 2 }}>
            <Grid item container xs={1}></Grid>
            <Grid item container xs={10} spacing={2}>
                <Grid item container direction="row" spacing={1} xs={12} sx={{ borderBottomStyle: "solid" }}>
                    <Grid item container direction="column" xs={6} sx={{ borderRightStyle: "solid" }}>
                        <Grid item>
                            <Typography variant="h6">
                                Grupo Bimbo
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7">
                                Chihuahua, Chihuahua, México
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6}>
                        <Typography variant="h4">
                            Gerente de calidad especializado en sector panadero
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="row" xs={12} spacing={1} >
                    <Grid item container direction="row" xs={6} spacing={2} sx={{ borderRightStyle: "solid" }} >
                        <Grid item container direction="column" xs={12} spacing={2} sx={{ borderBottomStyle: "solid", paddingBottom: 3 }}>
                            <Grid item>
                                <Typography variant="h5">
                                    Detalles del empleo .-
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7">
                                    <b> Salario</b> $7000 por semana.
                                </Typography>
                            </Grid>
                            <Grid item container>
                                <Grid item xs={12}>
                                    <Typography variant="h7">
                                        <b> Tipo de empleo .-</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h7">
                                        De tiempo completo y fines de semana
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container>
                                <Grid item xs={12}>
                                    <Typography variant="h7">
                                        <b> Contrataciones requeridas.-</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h7">
                                        2
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" spacing={2} xs={12} >
                            <Grid item container xs={12}>
                                <Grid item>
                                    <Typography xs={12} variant="h5">
                                        Ubicación .-
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h7">
                                        Colonia cumbres de vallarta
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h7">
                                        Residencial Cunia II
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item container xs={6}>
                                    <Grid item xs={12}>
                                        <Typography variant="h7">
                                            <b> Contactos.-</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h8">
                                            (614)-488-5076
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h8">
                                            (055)-342-5599
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={6}>
                                    <Grid item xs={12}>
                                        <Typography variant="h7">
                                            <b> Redes sociales.-</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h8">
                                            <a href="">Instagram</a>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h8">
                                            <a href="">bimbo.mx</a>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item container direction="column" xs={6} spacing={2}    >
                        <Grid item>
                            <Typography variant="h5">
                                Descripción acertada del puesto .-
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h8">
                                Asesores en plantas comerciales principales y productoras
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={12}>
                                <Typography variant="h7">
                                    <b> Horario.-</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h8">
                                    Lunes a viernes de 8am a 4pm
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h8">
                                    Sabados y domingos de 12pm a 6pm
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item container>


                            <Grid item xs={12}>
                                <Typography variant="h7">
                                    <b> Requisitos.-</b>
                                </Typography>
                                <ul>
                                    <li>Buenas habilidades de comunicación escritas tanto escritas como verbales.</li>
                                    <li>Maestría en ingeniería de calida.</li>
                                    <li>Tener un enfoque siempre orientado al resultado.</li>
                                    <li>Disponibilidad de transporte y responsable.</li>
                                </ul>
                            </Grid>
                        </Grid>
                        {jobId > 0 &&
                            <Grid item container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Grid item xs={12}>
                                    <Button size="large" sx={{ backgroundColor: "#62f664", }}>
                                        aplicar al puesto
                                    </Button>
                                </Grid>

                            </Grid>
                        }
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    )
}