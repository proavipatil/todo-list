import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {

  const onDelete = (todo) =>{
    console.log("I am on Delete todo",todo);

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todo.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      let sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos,setTodos]=useState([])
  return (
    <>
      <Router>
        <Header title="My Todos List" searchbar={false}/>
        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
              <AddTodo addTodo={addTodo}></AddTodo>
              <Todos todos={todos} onDelete={onDelete}/>
              <Footer/>
            </>)
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
