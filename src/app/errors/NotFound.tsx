import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="bg-primary">
        <Container component={Paper} sx={{height: 400, mt: 10}}>
            <Typography gutterBottom variant="h3">Oops - we could not found what you are looking for</Typography>
            <Divider />
            <Button fullWidth component={Link} to='/'>Go back</Button>
        </Container>
        </div>
    )
}