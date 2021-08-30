import React from 'react'
import {AppBar, Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import  logo from '../../asserts/comm.png'
import  useStyle from './styles';
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) =>{
     
    const classes = useStyle()
    const location  = useLocation()
    return (
  
        <>
        <AppBar position = "fixed" className = {classes.appBar} color = "inherit">
            <Toolbar>
                <Typography component = {Link} to  = "/"variant = "h6" className = {classes.appBar} color = "inherit">
                    <img src = {logo} alt = "Commerce.js" height = "45px" className = {classes.image}/>
                    
                </Typography>
                <div className = {classes.grow}/>

                {location.pathname === "/"   &&(
                <div className = {classes.button}>

                <IconButton component = {Link} to  = "/cart"arial-label = "Show cart item" color = "inherit"> 
                <Badge badgeContent = {totalItems }  color  = "secondary">
                    <ShoppingCart/>
                </Badge>
                </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
        </>
    )
}
export default Navbar;