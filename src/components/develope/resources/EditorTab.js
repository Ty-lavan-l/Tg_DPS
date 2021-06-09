// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
// import DataTable from './DataTable';

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role='tabpanel'
//             hidden={value !== index}
//             id={`nav-tabpanel-${index}`}
//             aria-labelledby={`nav-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired
// };

// function a11yProps(index) {
//     return {
//         id: `nav-tab-${index}`,
//         'aria-controls': `nav-tabpanel-${index}`
//     };
// }

// function LinkTab(props) {
//     return (
//         <Tab
//             component='a'
//             onClick={(event) => {
//                 event.preventDefault();
//             }}
//             {...props}
//         />
//     );
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1
//     }
// }));

// export default function EditorTab() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <div className={classes.root}>
//             <Paper square>
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     textColor='primary'
//                     indicatorColor='none'
//                     aria-label='nav tabs example'
//                 >
//                     <LinkTab label='Sql Script' className='tabs' href='/result' {...a11yProps(0)} />
//                     <LinkTab label='Data' className='tabs' href='/messages' {...a11yProps(1)} />
//                 </Tabs>
//             </Paper>
//             <TabPanel value={value} index={0}>
//                 <CodeEditor />
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Data Editor
//             </TabPanel>
//         </div>
//     );
// }
import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Button } from 'antd';
import CodeEditor from './Editor';

const { TabPane } = Tabs;

class EditorTab extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', key: '1' },
            { title: 'Tab 2', key: '2' }
        ];
        this.state = {
            activeKey: panes[0].key,
            panes
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = (targetKey) => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render() {
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={this.add}>ADD</Button>
                </div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type='editable-card'
                    onEdit={this.onEdit}
                >
                    {this.state.panes.map((pane) => (
                        <TabPane tab={pane.title} key={pane.key}>
                            <CodeEditor />
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
}

export default EditorTab;
