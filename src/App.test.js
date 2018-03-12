import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App View', () => {
  let component = null;

  it('App View 초기 렌더링', () =>{
    component = renderer.create(<App />);
  });

  it('App View Snapshot check', () =>{
    const snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });

});