import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const UserCard = ({ user }) => {
    return (
        <Card 
            sx={{ 
                width: 230,
                m: 2, 
                border: 1,
                borderColor: "rgba(255, 255, 255, 0.30)",
                bgcolor: `transparent`
            }}
        >
            <CardMedia
                component="img"
                alt="super"
                height="200"
                image={user.profile_picture}
            />
            <CardContent>
                <Typography 
                    variant="h4"
                    sx={{  
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                >
                    {user.name}
                </Typography>
                <Typography 
                    variant="body 1"
                    sx={{  
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                >
                    {user.city}
                </Typography>
            </CardContent>
            <CardActions 
                sx={{  
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Link
                    to={`/users/${user.slug}`}
                    style={{
                        textDecoration: "none",
                      }}
                >
                    <Button 
                        size="small" 
                        variant="text"
                        color="primary"
                        sx={{ ml: 1 }}
                    >
                        + Learn More
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default UserCard;  