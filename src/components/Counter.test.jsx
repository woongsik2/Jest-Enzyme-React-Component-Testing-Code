import React from 'react';
// import renderer from 'react-test-renderer';
import Counter from './Counter.jsx';
import {shallow, configure} from 'enzyme';

describe('Counter View', () => {  
    let component = null;

    it("Counter View 초기 렌더링이 정상적으로 됨.", () => {
        component = shallow(<Counter />);
    });

    it('Counter View Snapshot check', () => {
        expect(component).toMatchSnapshot();
    });

    // it('카운트 UP이 정상적으로 됨.', () => {
    //     component.find('#plus').simulate('click');
    //     expect(component.state().number).toBe(2);
    //     expect(component).toMatchSnapshot();
    // });

    // it('카운드 DOWN이 정상적으로 됨.', () => {
    //     component.find('#minus').simulate('click');
    //     expect(component.state().number).toBe(1);
    //     expect(component).toMatchSnapshot();
    // });

    // it('렌더링이 정상적으로 진행되어야 한다.', () => {
    //     const wrapper = shallow(<Counter />);
    //     expect(wrapper.length).toBe(1);
    // });
    
    // it('카운터 표시 부분이 렌더링 되어야 한다.', () => {
    //     const wrapper = shallow(<Counter />);
    //     expect(wrapper.find('h1').length).toEqual(1);
    // });

    // it('플러스를 누르면 숫자가 올라가야 한다.', () => {
    //     const wrapper = shallow(<Counter />);
    //     wrapper.find('#plus').simulate('click');
    //     wrapper.find('#plus').simulate('click');
    //     wrapper.find('#plus').simulate('click');
    //     wrapper.find('#plus').simulate('click');
    //     expect(wrapper.state().number).toBeLessThan(6);
    // });

    describe('DOM 확인', () => {
        it('h1 여부 확인', () => {
            expect(component.find('h1').exists()).toBe(true);
        });

        it('button 여부 확인', () => {
            expect(component.find('button').exists()).toBe(true);
        });
    });

    describe('Counter View 이벤트 시뮬레이트', () => {
        it('number 초기값 변경', () => {
            component.setState({number:3});
            expect(component.state().number).toBe(3);
        });
    });

});