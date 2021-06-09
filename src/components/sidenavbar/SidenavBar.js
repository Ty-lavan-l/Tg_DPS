import React, { useState, useEffect } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';

import { FiLogOut } from 'react-icons/fi';
import { BsHouseDoorFill, BsServer, BsFileEarmarkText } from 'react-icons/bs';
import { FaStaylinked } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import Modal from './Modal';
import { Dropdown } from 'react-bootstrap';
import Mysql from '../formmodule/dataModule/Mysql';
import Popup from '../controls/Popup';
import FlatFile from '../formmodule/dataModule/FlatFile';
import MicrosoftSql from '../formmodule/dataModule/MicrosoftSqlServer';
import AwsRedShift from '../formmodule/dataModule/AwsRedShift';
import SnowFlake from '../formmodule/dataModule/SnowFlake';
import SqlScript from '../formmodule/developeModule/SqlScript';
import Notebook from '../formmodule/developeModule/Notebook';
import BiAnalytic from '../formmodule/developeModule/BiAnalytic';
import SparkJob from '../formmodule/developeModule/SparkJob';
import { useHistory } from 'react-router-dom';
import LoginPage from '../loginform/LoginPage';
import axios from 'axios';

const SidenavBar = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [openPopup1, setOpenPopup1] = useState(false);
    const [openPopup2, setOpenPopup2] = useState(false);
    const [openPopup3, setOpenPopup3] = useState(false);
    const [openPopup4, setOpenPopup4] = useState(false);

    const [sqlScript, setSqlScript] = useState(false);
    const [notebook, setNotebook] = useState(false);
    const [biAnalytic, setBiAnalytic] = useState(false);
    const [sparkJob, setSparkJob] = useState(false);

    let history = useHistory();

    async function logout() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const [modal, setmodal] = useState(false);
    const [modaldev, setmodaldev] = useState(false);
    const [records, setRecords] = useState([]);
    console.log('this is records', records);

    useEffect(() => {
        getAll();
    }, []);

    function getAll() {
        axios
            .get('https://reqres.in/api/users')

            .then((res) => {
                console.log(res);

                setRecords(res.data.data);
                console.log('this is records ', setRecords);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Modal show={modal}>
                <div className='card col-md-3 ' id='modal_dataSource'>
                    <span>
                        <span className='font-weight-blod header_dataSource'>Data Sources</span>

                        <span>
                            <Dropdown id='dash_dropDown'>
                                <Dropdown.Toggle
                                    className='btn  '
                                    cssclass='e-caret-hide'
                                    id='dropdown_Toggle'
                                >
                                    <i className='fas fa-plus addbtn'></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setOpenPopup(true);
                                        }}
                                    >
                                        {' '}
                                        MySql{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setOpenPopup2(true);
                                        }}
                                    >
                                        {' '}
                                        Microsoft SqlServer{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setOpenPopup4(true);
                                        }}
                                    >
                                        {' '}
                                        SnowFlake{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setOpenPopup3(true);
                                        }}
                                    >
                                        {' '}
                                        AWS Red Shift{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setOpenPopup1(true);
                                        }}
                                    >
                                        {' '}
                                        FlatFile{' '}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        <i
                            onClick={() => {
                                setmodal(false);
                            }}
                            className='fas fa-times-circle ml-3'
                        ></i>
                    </span>
                    <div className='mt-3'>
                        <div className='input-group mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='filter resources by name'
                                aria-label='Reference'
                                aria-describedby='basic-addon2'
                            />
                            <div className='input-group-append'>
                                <button className='referenceButton btn btn-outline-secondary'>
                                    <span>
                                        <i className='fas fa-search'></i>
                                    </span>
                                </button>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                    <div>
                        <th>datasource</th>
                        <ul>
                            {records.map((records) => (
                                <li key={records.id}>
                                    {records.email}
                                    <br />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Modal>

            <Modal show={modaldev}>
                <div className='card col-md-3 ' id='modal_dataSource'>
                    <span>
                        <span className='font-weight-blod header_dataSource'>Develope</span>

                        <span>
                            <Dropdown id='dash_dropDown'>
                                <Dropdown.Toggle
                                    className='btn  '
                                    cssclass='e-caret-hide'
                                    id='dropdown_Toggle'
                                >
                                    <i className='fas fa-plus addbtn'></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setSqlScript(true);
                                        }}
                                    >
                                        {' '}
                                        Sql script{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setNotebook(true);
                                        }}
                                    >
                                        {' '}
                                        Notebook{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setBiAnalytic(true);
                                        }}
                                    >
                                        {' '}
                                        Bi Analytic Tool{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setSparkJob(true);
                                        }}
                                    >
                                        {' '}
                                        Spark job{' '}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>

                        <i
                            onClick={() => {
                                setmodaldev(false);
                            }}
                            className='fas fa-times-circle ml-3'
                        ></i>
                    </span>
                    <div className='mt-3'>
                        <div className='input-group mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='filter resources by name'
                                aria-label='Reference'
                                aria-describedby='basic-addon2'
                            />
                            <div className='input-group-append'>
                                <button className='referenceButton btn btn-outline-secondary'>
                                    <span>
                                        <i className='fas fa-search'></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <div id='header'>
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className='logotext'>
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? 'DPS' : 'DPS'}</p>
                        </div>
                        <div className='closemenu' onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? <FcNext /> : <FcPrevious />}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape='square'>
                            <MenuItem active={true} icon={<BsHouseDoorFill />}>
                                Home
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setmodal(true);
                                }}
                                icon={<BsServer />}
                            >
                                Data
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setmodaldev(true);
                                }}
                                icon={<BsFileEarmarkText />}
                            >
                                Develope
                            </MenuItem>

                            {/* <MenuItem icon={<BsFillDisplayFill />}>Monitor</MenuItem> */}
                            <MenuItem icon={<FaStaylinked />}>Integration</MenuItem>
                            {/*  <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem> */}
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape='square'>
                            <MenuItem icon={<FiLogOut />} onClick={logout}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>

                <Popup title='My SQL' openPopup={openPopup} setOpenPopup={setOpenPopup}>
                    <Mysql />
                </Popup>
                <Popup title='Flat File' openPopup={openPopup1} setOpenPopup={setOpenPopup1}>
                    <FlatFile />
                </Popup>
                <Popup
                    title='Microsoft Sql Server'
                    openPopup={openPopup2}
                    setOpenPopup={setOpenPopup2}
                >
                    <MicrosoftSql />
                </Popup>
                <Popup title='Aws Red Shift' openPopup={openPopup3} setOpenPopup={setOpenPopup3}>
                    <AwsRedShift />
                </Popup>
                <Popup title='Snow Flake' openPopup={openPopup4} setOpenPopup={setOpenPopup4}>
                    <SnowFlake />
                </Popup>
                <Popup openPopup={sqlScript} setOpenPopup={setSqlScript}>
                    <SqlScript />
                </Popup>
                <Popup openPopup={notebook} setOpenPopup={setNotebook}>
                    <Notebook />
                </Popup>
                <Popup openPopup={biAnalytic} setOpenPopup={setBiAnalytic}>
                    <BiAnalytic />
                </Popup>
                <Popup openPopup={sparkJob} setOpenPopup={setSparkJob}>
                    <SparkJob />
                </Popup>
            </div>
        </>
    );
};

export default SidenavBar;
