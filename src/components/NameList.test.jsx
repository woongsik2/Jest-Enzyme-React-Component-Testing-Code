import React from 'react';
import renderer from 'react-test-renderer';
import NameList from './NameList.jsx';

describe('NameList View', () => {
    let component = null;

    it('NameList View 초기 렌더링', () =>{
        component = renderer.create(<NameList names={['웅식', '킴웅식']} />);
    });
    
    it('NameList View Snapshot check', () =>{
        const snap = component.toJSON();
        expect(snap).toMatchSnapshot();
    })

});