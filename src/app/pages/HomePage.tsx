import { Container, Grid2 as Grid } from "@mui/material";
import Form from "@app/components/Form";

const HomePage = () => {
    return (
        <Container
            sx={{
                height: "100vh",
                p: {
                    xs: 0,
                },
            }}
            maxWidth="lg"
            component="main"
        >
            <Grid
                container
                component="section"
                sx={{
                    bgcolor: "primary.light",
                    py: 12,
                    px: 5,
                }}
            >
                <Grid size={12}>
                    <Form />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
