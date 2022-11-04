import { Grid } from '@mui/material';
import React from 'react'
import Card from '../components/card'
import { Users } from '../utils/users'
export default function DisplayCard() {
  return (
    <div>
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {Users.map((data, key) => {
          return (
            <div key={key}>
        <Card 
        id={data.id}
        name={data.name}
        email={data.email}
        phone={data.phone}
        web={data.web}
        image={data.image}
        />
        </div>
  
          );
        })}
              </Grid>
    </div>
  )
}
