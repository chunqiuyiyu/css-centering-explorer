import React, { Component } from 'react';
import './App.css';
import {
  globalSelector,
  getChildrenArr
} from './utils/selectorConfig';
import condRoad from './utils/condRoad';

import Selector from './components/Selector';
import Code from './components/Code';
import Corner from './components/Corner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      code: 'CSS code will be displayed here.',
      jsx: <div>{'Here is the final result.'}</div>,
      configs: [],
      note: ''
    };

    this.handleSelector = this.handleSelector.bind(this);
  }

  componentDidMount() {
    const configs = [ globalSelector ];
    this.setState({
      configs
    });
  }

  handleSelector(index, e) {
    const anchors  = [];

    let configs = this.state.configs.slice(0, index + 1);
    const lastVal = configs[configs.length - 1];

    if (lastVal.children) {
      const tmp = lastVal.children[e.target.value[0]];
      if (tmp) {
        if (tmp.children) {
          configs.push(tmp);
        }
      } else {
        configs.splice(index + 1);
      }
    }

    const tmpConfig = configs.slice(1);
    tmpConfig.forEach(obj => anchors.push(obj.name[0]));
    if (e.target.value !== '...') {
      anchors.push(e.target.value[0])
    }

    this.matchCode(anchors);
    this.setState({
      configs
    });
  }

  matchCode (anchors) {
    const data = condRoad[anchors.join('_')];
    if (data) {
      const { code, jsx, note } = data;
      this.setState({
        code,
        jsx,
        note
      });
    } else {
      this.setState({
        code: 'CSS code will be displayed here.',
        jsx: <div>{'Here is the final result.'}</div>,
        note: ''
      });
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{'CSS Centering Explorer'}</h1>
          <p className="App-intro">
            {'Find the way that how to center things in CSS'}
          </p>
          <Corner />
        </header>
        <main>
          {
            this.state.configs.map((config, index) => (
              <Selector data={getChildrenArr(config)} key={config.id}
                id={config.id} onChange={this.handleSelector.bind(this, index)} desc={config.desc} />
            ))
          }
          <Code {...this.state} />
        </main>
        <footer>
          <p>
            &copy; {`${new Date().getFullYear()}`} <a href='http://www.chunqiuyiyu.com'>{'chunqiuyiyu'}</a>
              {' Inspired by '}
              <a href='https://css-tricks.com/centering-css-complete-guide/'>{'CSS-Tricks'}</a>
              {' and '}
              <a href='https://github.com/sdras/array-explorer'>{'JavaScript Array Explorer'}</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
