import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { Button, Dropdown, Menu } from 'antd';
import { Icon } from '@material-ui/core';
import {
    CaretRightOutlined,
    ClusterOutlined,
    DownOutlined,
    PoweroffOutlined,
    UserOutlined
} from '@ant-design/icons';

const code = `function add(a, b) {
    var emotion = "happy";
    var time = 1614;
    var name = "Ruby";
    var day = "morning";
    
    if ( time < 1200 ) {
      day = "morning";
    };
    else if ( time < 600 || time > 2200 ) {
      day = "night";
    };
    else {
      day = "afternoon";
    };
    
    console.log("at " + time + "at " + day + ". " + name + "was felling quite" + emotion + ".");
}
`;

function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key='1' icon={<UserOutlined />}>
            Sql
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}>
            noTEBOOK
        </Menu.Item>
        <Menu.Item key='3' icon={<UserOutlined />}>
            Bi Analytic Tool
        </Menu.Item>
        <Menu.Item key='4' icon={<UserOutlined />}>
            Spark job
        </Menu.Item>
    </Menu>
);

class CodeEditor extends React.Component {
    state = { code };

    render() {
        return (
            <>
                <Button variant='contained' icon={<CaretRightOutlined />}>
                    Run
                </Button>

                <Button variant='contained' icon={<ClusterOutlined />}>
                    Query plan
                </Button>
                <span style={{ marginLeft: '5%' }}>
                    Connect to{' '}
                    <Dropdown overlay={menu}>
                        <Button>
                            choose database <DownOutlined />
                        </Button>
                    </Dropdown>
                </span>
                <span style={{ marginLeft: '1%' }}>
                    Use Database{' '}
                    <Dropdown overlay={menu}>
                        <Button>
                            Database <DownOutlined />
                        </Button>
                    </Dropdown>
                </span>
                <Editor
                    value={this.state.code}
                    onValueChange={(code) => this.setState({ code })}
                    highlight={(code) => highlight(code, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                        height: '45vh'
                    }}
                />
            </>
        );
    }
}

export default CodeEditor;
