import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from './Controls';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
        bottom: theme.spacing(3),
        borderRadius: '30px',
        width: '90vh',
        height: '85vh'
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}));

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography
                        variant='h4'
                        component='div'
                        style={{
                            flexGrow: 1,
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: '500'
                        }}
                    >
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        onClick={() => {
                            setOpenPopup(false);
                        }}
                    >
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
}
