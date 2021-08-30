import {makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    toolbar : theme.mixins.toolbar,
    content :{
        flexGrow : 1,
        background : theme.palette.background.default,
        padding : theme.spacing(3),

    },
    root : {
        flexGlow :1,
    },

}));