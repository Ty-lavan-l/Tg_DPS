import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none',
        color: 'white',
        bold: { fontWeight: 'bold' }
    }
}));

export default function Button(props) {
    const { text, size, color, variant, onClick, ...other } = props;
    const classes = useStyles();

    return (
        <MuiButton
            style={{ backgroundColor: '#08072B' }}
            variant={variant || 'contained'}
            // size={size || 'medium'}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}
        >
            {text}
        </MuiButton>
    );
}
