import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar
            component="header"
            sx={{
                maxWidth: "lg",
                mx: "auto",
                position: "relative",
            }}
        >
            <Toolbar
                sx={{
                    bgcolor: "primary.dark",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="h1"
                    align="center"
                    sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: 16,
                    }}
                >
                    Calories Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
