import React from 'react' 
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'    
import logotipo from '../../../assets/img/logotipo.png' 

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyle = makeStyles({
    logotipo : {
      height: '60px',
      margin: 'auto'
    }
})

export default function NavBar() {

  const classes = useStyle()

    return (
        <AppBar position="fixed" color="default">
          <Toolbar> 
                <img src={logotipo} alt="logotipo Neuroseller VIP" className={classes.logotipo}/>  
          </Toolbar>
        </AppBar>
    )
}
