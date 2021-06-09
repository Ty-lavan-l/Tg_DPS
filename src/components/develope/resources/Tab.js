import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import DataTable from './DataTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`
    };
}

function LinkTab(props) {
    return (
        <Tab
            component='a'
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor='primary'
                    indicatorColor='primary'
                    aria-label='nav tabs example'
                >
                    <LinkTab label='Result' className='tabs' href='/result' {...a11yProps(0)} />
                    <LinkTab label='Messages' className='tabs' href='/messages' {...a11yProps(1)} />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <DataTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Messages
            </TabPanel>
        </div>
    );
}
