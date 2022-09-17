import { render as rtlRender, screen ,fireEvent} from '@testing-library/react';
import App from './App';
import React from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import {SignUp} from './components/SignUp'
import {Login} from './components/Login'
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useAppDispatch ,useAppSelector} from './hooks';
import { signup } from './store/users/users.actions';
import {createMemoryHistory} from 'history';
import { login } from './store/users/users.actions';

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({}))
  }),

}));

const render = (component:any) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)
describe('Log in', () =>{
  
test('testing', () => {
    window.history.pushState({},"","/home")
    
  render(
    <Router>  <Login /></Router>
  );
  const btn = screen.getByText("Sign in");
  expect(btn).toBeInTheDocument();
  const username = screen.getByTestId('add-username-input');
  const password = screen.getByTestId('add-password-input');
  fireEvent.change(username, {target: { value: 'mor_2314'}});
  fireEvent.change(password, {target: {value: '83r5^_'}});
  fireEvent.click(btn);
  expect(mockedNavigator).toHaveBeenCalled();
 
  
 
 
 

});
})
