import { Grid, Typography, Chip } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const skills = [
    {
        skill: "6 sigma"
    },
    {
        skill: "Calidad"
    },
    {
        skill: "Simulación"
    },
    {
        skill: "CNC"
    },
]
export default function MyInfo() {
    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item container xs={7} spacing={2}>

                <Grid item container >
                    <Grid item container xs={12} >
                        <Grid item xs={11}>
                            <Typography variant="h5">
                                Información sobre mí:
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>

                            <IconButton edge="end" aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} direction="column">
                        <Grid item>
                            <Typography variant="h7">
                                <b> Nombre: </b> José Laura Villareal McJouk
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7">
                                <b> Edad: </b> 43
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7">
                                <b> Sexo: </b> Masculino
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7">
                                <b> Profesión: </b> Gerente de calidad
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7">
                                <b> Correo electrónico: </b> jose.vader@hotmail.com
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7">
                                <b> Teléfono </b> 6150101010
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>


                    <Grid item container xs={12}>
                        <Grid item xs={11}>
                            <Typography variant="h5">
                                Mis trabajos:
                            </Typography>
                            <ul>
                                <li>2020-2022: Panadería Pan Pan
                                    <ul>
                                        <li>
                                            Gerente de calidad donde participé en 4 mejoras
                                        </li>
                                    </ul>
                                </li>
                                <li>2006-2020: Mashbros Wheel Motors
                                    <ul>
                                        <li>
                                            Gerente de calidad de maquinaria CNC y láser
                                        </li>
                                    </ul>
                                </li>
                                <li>2003-2006: Zapatería 3 hermanos
                                    <ul>
                                        <li>
                                            Gerente por 1 año y vendedor de zapatos por 2
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={1}>

                            <IconButton edge="end" aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container xs={12}>
                    <Grid item container xs={12}>
                        <Grid item xs={11}>
                            <Typography variant="h5">
                                Mi educación:
                            </Typography>
                            <ul>

                                <li>2003-2006: Maestría en administración
                                    <ul>
                                        <li>
                                            UACH
                                        </li>
                                    </ul>
                                </li>

                                <li>1999-2003: Ingeniería industrial
                                    <ul>
                                        <li>
                                            UACH
                                        </li>
                                    </ul>
                                </li>
                                <li>1996-1999: Bachillerato
                                    <ul>
                                        <li>
                                            Colegio de Bachilleres no 69
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={1}>

                            <IconButton edge="end" aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item container xs={12}>
                        <Grid item xs={11}>
                            <Typography variant="h5">
                                Mis habilidades:
                            </Typography>

                        </Grid>
                        <Grid item xs={1}>

                            <IconButton edge="end" aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} spacing={2}>
                        {skills.map((element, index) => (
                            <Grid item>
                                <Chip style={{ margin: 2 }} key={index} icon={<LocalOfferIcon />} label={element.skill} size="small" />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}