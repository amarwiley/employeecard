import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AutoSuggestion from './AutoSuggestion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoSuggestion />
      </div>
    );
  }
}

export default App;
