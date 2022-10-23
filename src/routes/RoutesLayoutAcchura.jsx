import React,{ useState } from 'react'
import { Box, Grid } from '@material-ui/core'; 
import {NavbarAcchura} from './NavbarAcchura'; 
import { Routes,Route}from 'react-router-dom'; 
import { HomeAcchura } from '../components/home/HomeAcchura'
import {AboutAcchura} from '../components/about/AboutAcchura';
import './RoutesLayoutAcchura.css';

export const RoutesLayoutAcchura=()=>{

    const [darkMode, setDarkMode] = useState(true);
    
    function handleClick() { 
        setDarkMode(!darkMode);
    } 

    return( 
    <Grid container spacing={1} className={`content ${darkMode? 'dark': 'light'}`}> 
        <Grid item xs={11} component={'header'} className={`${darkMode? 'dark': 'light'}`}>
             <NavbarAcchura darkMode={darkMode} handleClick={handleClick} /> 
        
        </Grid> 
    
        <Grid item xs={11} className={`container-content ${darkMode? 'dark': 'light'}`}>
            <Routes>
                <Route exact path={'/'} element={<HomeAcchura/>} /> 
                <Route exact path={'/about'} element={<AboutAcchura/>} /> 
            </Routes> 
        </Grid>
            
        <Grid item xs={11} component={'footer'}>
            <Box className={`${darkMode? 'dark': 'light'} text-footer`}
            
                > 
            
                <p>template created with &hearts; by <a target={'_target'} href={'https://es.reactjs.org/'}>react js</a></p> 
                <p>&copy; 2022</p>
            </Box> 
        </Grid> 
    
    </Grid> 

)
}