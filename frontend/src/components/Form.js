import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const Form = () => {
      const formik = useFormik({
        initialValues: {
            name: '', 
            password: '', 
            city: '', 
            profile_picture: '',
        },
        onSubmit: values => {
            fetch('http://localhost:5000/users', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              })
                .then(response => response.json())
        }
    }) 

    return (
        <>
            <Box  
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    m: 4,
                }}
            >
                <Typography 
                    variant="h6"
                    mb={2}
                >
                    + Add a user
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    <Box
                        sx={{ 
                            width: 270,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,

                        }}
                    >
                        <TextField
                            type="texte"
                            name="name"
                            label="Name"
                            id="standard-basic"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            autoComplete='off'
                            helperText="4 caractères minimum"
                        />
                        <TextField
                            type="password"
                            name="password"
                            id="standard-basic"
                            variant="outlined"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            autoComplete='off'
                            helperText="8 caractères minimum"
                        />
                        <TextField
                            type="texte"
                            name="city"
                            id="standard-basic"
                            variant="outlined"
                            label="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            autoComplete='off'
                        />  
                         <TextField
                            type="texte"
                            name="profile_picture"
                            label="Image Url"
                            value={formik.values.profile_picture}
                            onChange={formik.handleChange}
                            id="outlined-basic"
                            variant="outlined"
                            autoComplete='off'
                        />
                        <Button 
                            type="submit"
                            size="small" 
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </Box>
                </form> 
                
            </Box>
        </>
    )
}

export default Form
