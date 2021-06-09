import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Button } from 'antd';
import CodeEditor from './Editor';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';

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
                <span style={{ marginBottom: 16 }}>
                    <Button onClick={this.add}>Add</Button>
                </span>
                <span style={{ marginBottom: 16, marginLeft: 10 }}>
                    <Button icon={<SyncOutlined />}>Refresh</Button>
                </span>
                <span style={{ marginBottom: 16, marginLeft: 10 }}>
                    <Button icon={<DeleteOutlined />}> Discard all</Button>
                </span>
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
