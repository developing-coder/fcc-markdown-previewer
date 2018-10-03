import React, { Component } from 'react';
import './App.css';
import defaultInput from './DefaultInput';

const ReactMarkdown = require('react-markdown');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultInput
    }
  }

  updateInput = (event) => {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Markdown Preview Tool</h1>
          <p className="SubHeading">Created as an assignement for <a href="https://freecodecamp.org">FreeCodeCamp.org</a></p>
        </header>
        <main>
          <Editor updateInput={this.updateInput} input={this.state.input} />
          <Preview input={this.state.input}/>
        </main>
      </div>
    );
  }
}

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <textarea id="editor" onChange={this.props.updateInput} value={this.props.input}/>
      </div>
    );
  }
}

class Preview extends Component {

  render() {
    return (
      <div id="preview">
        <ReactMarkdown source={this.props.input} skipHtml={true}/>
      </div>
    );
  }
}

export default App;
