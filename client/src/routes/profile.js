import { Grid, Avatar } from "@mui/material"
import ProfileTabs from "./tabs"
export default function Profile() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item container xs={12} direction="column"
                sx={{ paddingTop: 5, marginBottom: 2 }}
                justifyContent="center"
                alignItems="center">
                <Grid item xs={2}>
                    <Avatar
                        sx={{ width: 100, height:100}}
                        src={`${process.env.PUBLIC_URL}/profile.png`} />
                </Grid>

            </Grid>
            <ProfileTabs/>
        </Grid>
    )
}