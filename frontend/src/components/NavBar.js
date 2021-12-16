import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const NavBar = () => {
    return (
        <Box
            sx={{  
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                ml: 4,
            }}
        >
            <h1>KONEXIO</h1>
            <Link
                to={"/users/"}
                style={{
                    textDecoration: "none",
                }}
            >
                    <Button 
                        size="large"
                        variant="text"
                        color="primary"
                        sx={{ ml: 4, mt: 2, }}
                    >
                        HOME
                    </Button>
            </Link>
        </Box>
    )
}

export default NavBar