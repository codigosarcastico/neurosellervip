import React from 'react'
import NavBar from '../views/templates/NavBar.jsx'
import Jumbotron from '../views/templates/Jumbotron.jsx'
import Container from '@material-ui/core/Container' 
import Grid from '@material-ui/core/Grid'
import CardBelmatis from '../clients/belmatis/CardBelmatis.jsx'
import CardMilic from '../clients/milicremositos/CardMilic.jsx'



const Home = () => 
{
     return (
         <div>
             <NavBar /> 
             <Jumbotron /> 

             <Container maxWidth="lg">
                <Grid container spacing={2}>
                   <Grid item lg={3} md={4} sm={6} xs={12}>
                      <CardBelmatis />
                   </Grid>

                   <Grid item lg={3} md={4} sm={6} xs={12}>
                      <CardMilic />
                   </Grid>
 
                </Grid>
             </Container>

         </div>
     )
}

export default Home