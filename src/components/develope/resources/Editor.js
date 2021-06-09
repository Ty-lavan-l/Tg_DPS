import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

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

class CodeEditor extends React.Component {
    state = { code };

    render() {
        return (
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
        );
    }
}

export default CodeEditor;
