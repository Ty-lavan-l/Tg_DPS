import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from './Controls';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        position: 'absolute',
        width: '500vh',
        height: '100vh'
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}));

export default function DevelopePopup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
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
