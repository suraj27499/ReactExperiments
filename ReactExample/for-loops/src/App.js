
import './App.css';
import DisplayDetails from './Components/DisplayDetails';
import Componenet1 from './Components/Componenet1';
import Component2 from './Components/Component2';
import { Form } from './Components/Form';
import { HookCounter } from './Components/HookCounter';
import ButtonComponent from './Components/ButtonComponent'
import { Form2 } from './Components/Form2';
import './App.css';
import { LikeDislike } from './Components/LikeDislike';
import { ApiComponent } from './Components/ApiComponent';
import { PasswordToggle } from './Components/PasswordToggle';
import { PostRequest } from './Components/PostRequest';
import React, { useState } from 'react';
import { ContextApi1Counter } from './Components/ContextApi1Counter';


export const context = React.createContext();
function App() {
  const [appState, setAppState] = useState(0);
  return (
    <div className="App">
      {/* <LikeDislike />
      <DisplayDetails />
      <Componenet1 />
      <Component2 />
      <HookCounter />
      <ButtonComponent color="red" >suraj kumar</ButtonComponent>
      <Form />
      <Form2 />
      <PasswordToggle />
      <ApiComponent />
      <PostRequest /> */}
      <context.Provider value={{ value: appState, setValue: setAppState }}>
        <ContextApi1Counter />
        <ContextApi1Counter />
        <ContextApi1Counter />
        <ContextApi1Counter />
      </context.Provider>

    </div>
  );
}

export default App;
