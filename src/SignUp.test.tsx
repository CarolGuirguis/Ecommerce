import { render as rtlRender, screen ,fireEvent} from '@testing-library/react';
import App from './App';
import React from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import {SignUp} from './components/SignUp'
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useAppDispatch ,useAppSelector} from './hooks';
import { signup } from './store/users/users.actions';
import {createMemoryHistory} from 'history';

const render = (component:any) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)
describe('Sign Up', () =>{
  
test('testing', () => {
    window.history.pushState({},"","/")
    
  render(
    <Router>  <SignUp /></Router>
  );
  const btn = screen.getByText("Create Account");
  expect(btn).toBeInTheDocument();
  const firstname = screen.getByTestId('add-firstname-input');
  const lastname = screen.getByTestId('add-lastname-input');
  const email = screen.getByTestId('add-email-input');
  const username = screen.getByTestId('add-username-input');
  const password = screen.getByTestId('add-password-input');
  fireEvent.change(firstname, {target: {value: 'carol'}});
  fireEvent.change(lastname, {target: {value: 'guirguis'}});
  fireEvent.change(email, {target: {value: 'c@gmail.com'}});
  fireEvent.change(username, {target: {value: 'carol'}});
  fireEvent.change(password, {target: {value: 'carolcarol'}});
  fireEvent.click(btn);
  
 
 

});
})
