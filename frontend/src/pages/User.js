import { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { UsersContext } from '../contexts/Users'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const User = () => {
    const { slug } = useParams();
    const { getUser } = useContext(UsersContext)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser(slug)
          .then(data => setUser(data))
    }, [])

    if (!user)   {
        return <p>Chargement ...</p>
    }  
    
    return (
        <Box
            sx={{ 
                display: 'flex',
                justifyContent: 'center,'
            }} 
        >
            <Card
                sx={{ 
                    border: '1px solid grey',
                    borderRadius: '10px',
                    bgcolor: `transparent`,
                    width: 600,
                }}
            >
                <CardMedia
                    component="img"
                    height="350"
                    image={user.profile_picture}
                    alt="user"
                />
                <CardContent>
                    <Typography 
                        variant="h3"
                        sx={{ 
                           my:2,
                        }}
                    >
                        {user.name}
                    </Typography>
                    <Typography 
                        variant="body1"
                        sx={{ 
                           my:2,
                        }}
                    >
                        City: {user.city}
                    </Typography>
                </CardContent>
            </Card>
        </Box>   
    )
}

export default User