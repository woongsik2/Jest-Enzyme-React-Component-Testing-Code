import React, { Component } from 'react';
import Counter from './components/Counter.jsx';
import NameForm from './components/NameForm.jsx';
import NameList from './components/NameList.jsx';

class App extends Component {
  state = {
    names: ['웅식', '킴웅식']
  }
  onInsert = (name) => {
    this.setState(({names}) => ({names: names.concat(name)}));
  }
  render() {
    const {names} = this.state;
    const {onInsert} = this;
    return (
      <div>
        <Counter />
        <hr/>
        <h1>이름 목록</h1>
        <NameForm onInsert={onInsert}/>
        <NameList names={names}/>
      </div>
    );
  }
}

export default App;
