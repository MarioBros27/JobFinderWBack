import { Grid, Input, Button, List, ListItem, ListItemText, Link } from '@mui/material'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Curriculums() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
        >

            <Grid item container xs={12}
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Grid item>
                    <Input inputProps={{ accept: '.doc,.docx,.pdf' }} id="contained-button-file" type="file" />

                </Grid>
                <Grid item >
                    <Button onClick={() => { alert("curriculum subido") }} variant="contained" component="span">
                        Subir Currículum
                    </Button>
                </Grid>

            </Grid>
            <Grid item>
                <List dense={false} xs={12}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <Link href="">
                            <ListItemText
                                primary="CurriculumBueno.pdf"
                            />
                        </Link>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}