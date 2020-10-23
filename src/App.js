import "./App.css";
import React, { Component } from "react";

//a method that accepts markdown and returns HTML
import marked from "marked";

let initialState = `**This is bolded text**

# Heading 

## Heading 2

> Block Quotes!

- list item 1
- list item 2
- list item 3

[Visit my website!](https://github.com/xandert93?tab=repositories)

This is an inline \`<div></div>\`.

This is a block of code:

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![React](https://www.iconninja.com/ico/128/react-js-react-logo-js-11722.ico)

`;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: initialState,
    };
  }

  handleChange = (e) => this.setState({ markdown: e.target.value });

  render() {
    let { markdown } = this.state;
    const markup = marked(markdown, { breaks: true });
    return (
      <div className="App">
        <h1 className="text-center mt-4">Markdown Converter</h1>
        <div className="row">
          <div className="col col-xs-12 col-lg-6 markdown-container">
            <h4 className="text-center">Enter your Markdown...:</h4>
            <textarea
              className="form-control"
              id="editor"
              value={markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className="col col-xs-12 col-lg-6 preview-container">
            <h4 className="text-center">...Here's your Markup!:</h4>
            <div
              className="preview rounded p-4"
              id="preview"
              dangerouslySetInnerHTML={{ __html: markup }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
