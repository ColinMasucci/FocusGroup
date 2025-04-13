import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';


interface RegistrationCardProps {
  logo: string;
  title: string;
  description: string;
  buttonLabel: string;
  link: string;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({
  logo,
  title,
  description,
  buttonLabel,
  link
}) => {
  return (
    <Card sx={{ width: 400, margin: 2}}>
      <CardMedia
        sx={{ height: 180 }}
        image={logo}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#FF5733',
            color: 'white',
            '&:hover': { backgroundColor: '#C70039', color: "white" }
          }}
          component={Link} to={link}
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
    
  );
};

export default RegistrationCard;
