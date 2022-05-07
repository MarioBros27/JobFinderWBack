import { Grid, Typography } from "@mui/material"
const questions = [
    {
        question: "ashahsuih",
        answer: "asb"
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
]
export default function Faq() {
    return (
        <Grid container orientation="row"
        justifyContent="center"
        alignItems="center"
        sx={{paddingTop:4}}>
            <Grid item container xs={8} orientation="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                {questions.map((element, index) => (
                    <Grid item key={index} container xs={12}>
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                {element.question}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h8">
                                {element.answer}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}