import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Container from '@mui/material/Container';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Checkbox ,FormControlLabel} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export default function Cards({name,email,phone,web,image}) {
    const [show, setShow] = useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<Container maxWidth="xl" sx={{ my: 4 }}>
  {  show?<Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="250"
                image={image}
            />
            <CardContent align="left">
                <center>
            <Typography >
            {name}
            </Typography>
            </center>
            <Typography variant="body1" color="text.secondary">
                <MailIcon></MailIcon>
                {email}
            </Typography>
        <Typography variant="body1" color="text.secondary">
            <CallIcon></CallIcon>
            {phone}
        </Typography>

        <Typography variant="body1" color="text.secondary">
            <LanguageIcon></LanguageIcon>
            {web}
        </Typography>

            </CardContent>
            <CardActions align="center">
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <IconButton >
                <div style={{
                    margin: 'auto',
                    display: 'block',
                    width: 'fit-content',
                    
                    }}>
                <FormControlLabel
                    control={<Checkbox sx={{
                        color: "#FF69B4",
                        '&.Mui-checked': {
                        color:"#FF69B4",
                        },
                    }}
                    icon={<FavoriteBorderIcon />} 
                            checkedIcon={<FavoriteIcon />}/>}
                />
                </div>
                </IconButton>
                <IconButton onClick={handleOpen}><ModeEditIcon/></IconButton>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} align="center">
                                    <Typography>
                                <TextField id="outlined-basic" label= {name} variant="outlined" ></TextField>
                                </Typography>
                                <Typography>
                                <TextField id="outlined-basic" label={email} variant="outlined" />
                                </Typography>
                                <Typography>
                                <TextField id="outlined-basic" label={phone} variant="outlined" />
                                </Typography>
                                <Typography>
                                <TextField id="outlined-basic" label={web} variant="outlined" />
                                </Typography>
                                </Box>
                            </Modal>
                <IconButton onClick={()=>setShow(false)}><DeleteIcon/></IconButton>
</Grid>
            </CardActions>
        </Card>:null }
</Container>
  );
}
