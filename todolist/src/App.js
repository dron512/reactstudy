import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let aryPerson = Array([]);
aryPerson.push(new Person('aa', 20));
aryPerson.push(new Person('bb', 30));
aryPerson.push(new Person('cc', 25));
aryPerson.push(new Person('dd', 22));
aryPerson.push(new Person('ee', 24));

function App() {
  let test = '테스트';
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Link to="/xtodo">TodoList</Link>
          <Switch>
            <Route excct path="/todo">
              <TodoList />
            </Route>
          </Switch>
        </BrowserRouter>
        <div>
          <h1>{test}</h1>
          {aryPerson.map((person) => `${person.name}\n`)}
        </div>
      </div>
    </>
  );
}

export default App;
