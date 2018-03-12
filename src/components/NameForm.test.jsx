import React from 'react';
// import renderer from 'react-test-renderer';
import NameForm from './NameForm.jsx';

import {shallow, configure} from 'enzyme';

describe('NameForm View', () => {
    let component = null;
    let changed = null;
    const onInsert = (name) => {
        changed = name;
    }

    it('NameForm View 초기 렌더링', () =>{
        component = shallow(<NameForm onInsert={onInsert}/>);
    });
    
    // it('NameForm View Snapshot check', () =>{
    //     const snap = component.toJSON();
    //     expect(snap).toMatchSnapshot();
    // })

    it('input 값 변경', () => {
        const changeInputValue = {
            target: {
                value: 'Gom'
            }
        };
        component.find('input').simulate('change', changeInputValue);
        expect(component.state().name).toBe('Gom');
    });

    it('submit 실행', () => {
        const changeInputValueSubmit = {
            preventDefault: () => null
        };
        component.find('form').simulate('submit', changeInputValueSubmit);
        expect(component.state().name).toBe('');
        expect(changed).toBe('Gom');
    });
    

});