import { render, screen } from '@testing-library/react';
import App from './App';
import InputWithFocusButton from './App';
import React, { useState, useEffect } from "react";
import {mount, shallow} from 'enzyme';
import Parent from './App';
import UserInfoWithTitle from "./components/UserInfoWithTitle";
import UserInfo from "./components/UserInfo";
import Page from "./components/Page";
import {act} from "react-dom/test-utils";
import Blink from "./App";
import WelcomeTitle from "./App";
import Counter from "./App";
import ListUsers from "./App";
import ResultDisplayer from "./App";


/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

//******************************************************
/*const getNewResult = () => 'testXYZ';
it('Displays nothing at first', function () {
  const component = shallow(<ResultDisplayer getNewResult={getNewResult} />);
  expect(component.exists('#result')).toEqual(false);
});
it('Displays the result after click', function () {
  const component = shallow(<ResultDisplayer getNewResult={getNewResult} />);
  component.find('#button').simulate('click')
  expect(component.find('#result').text()).toEqual('testXYZ');
});*/

//**************************************************
/*it('Has expected user count', function () {
  const wrapper = mount(<ListUsers users={[{firstName: 'Donald', lastName: 'Knuth'}, {firstName: 'Ada', lastName: 'Lovelace'}]} />);
  expect(wrapper.find('.user-count').text()).toBe('Users: 2');
});
it('Has expected users in correct order', function () {
  const wrapper = mount(<ListUsers users={[{firstName: 'Ada', lastName: 'Lovelace'}, {firstName: 'Donald', lastName: 'Knuth'}]} />);
  expect(wrapper.find('.user-list li').at(0).text()).toBe('Donald Knuth');
  expect(wrapper.find('.user-list li').at(1).text()).toBe('Ada Lovelace');
});*/

//**************************************************
/*
it('Starts at 0', function () {
  const component = shallow(<Counter />);
  expect(component.find('#value').text()).toEqual('0');
});
it('Increments the value on click', function () {
  const component = shallow(<Counter />);
  expect(component.find('#value').text()).toEqual('0');
  component.find('#increment').simulate('click');
  expect(component.find('#value').text()).toEqual('1');
});
it('Decrements the value on click', function () {
  const component = shallow(<Counter />);
  expect(component.find('#value').text()).toEqual('0');
  component.find('#decrement').simulate('click');
  expect(component.find('#value').text()).toEqual('-1');
});*/

//****************************************************
/*it('Has expected text with primary and user', function (){
  const component = shallow(<WelcomeTitle user='Peter' primary />);
  expect(component.text()).toEqual('Welcome Peter!')
});

it('Has expected text without primary and user', function (){
  const component = shallow(<WelcomeTitle />);
  expect(component.text()).toEqual('Welcome!')
});

it('Has expected dom element when not primary', function (){
  const component = shallow(<WelcomeTitle user='Peter' />);
  expect(component.find('h1')).toHaveLength(0)
  expect(component.find('h2')).toHaveLength(1)
});*/

//*****************************************************
/*
it('Has expected content', function (){
  let component
  act(()=>{component = mount(<Blink>Solution</Blink>);});
  expect(component.text()).toEqual('Solution')
});

it('Text blink', function (){
  jest.useFakeTimers();
  let wrapper;
  act(()=>{wrapper = mount(<Blink>Solution</Blink>);});
  const component = wrapper.getDOMNode();
  expect(component.style.visibility == null || component.style.visibility === 'visibility').toBe(true);
  act(()=>{jest.advanceTimersByTime(1000);})
  expect(component.style.visibility).toEqual(('hidden'));
  act(()=>{jest.advanceTimersByTime(1000);})
  expect(component.style.visibility == null || component.style.visibility === 'visibility').toBe(true);
  act(()=>{jest.advanceTimersByTime(1000);})
  expect(component.style.visibility).toEqual(('hidden'));
});
*/

//******************************************************
/*it('Has expected user info',function (){
  const component = mount(<Page user={{firstName: 'John', lastName:'Doe'}}/>);
  const userInfoComponent = component.find(UserInfoWithTitle).find(UserInfo)
  expect(userInfoComponent.text()).toBe('JohnDoe');
});*/

//************************************************
/*it('Input displays initial value',function (){
  const initialValue = 'test'
  const component = mount(<Parent initial={initialValue}/>);
  expect(component.find('#input').val()).toEqual(initialValue);
});

it('Modifies value on value',function (){
  const initialValue = 'test'
  const newValue = '42'
  const component = mount(<Parent initial={initialValue}/>);
  component.find('#input').inputNewValue(newValue);
  expect(component.find('#value').text()).toEqual(newValue);
});*/

//*********************************************
/*it('Child div exists',function (){
  const component = mount(<Parent value={43}/>);
  expect(component.exists('#child')).toEqual(true);
});

it('Hexed div exists',function (){
  const component = mount(<Parent value={43}/>);
  expect(component.exists('#hexed')).toEqual(true);
});

it('Displays 42 as hex',function (){
  const component = mount(<Parent value={42}/>);
  expect(component.find('#child').text()).toEqual('0x2a');
});*/

//**********************************************
/*it('Has focus when clicked', function (){
  const wrapper = mount(<InputWithFocusButton />);
  expect(wrapper.find('input:focus').exists()).toEqual(false);
wrapper.find('button').simulate('click');
expect(wrapper.find('input:focus').exists()).toEqual(true);
});*/

