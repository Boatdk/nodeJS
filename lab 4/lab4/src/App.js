import React, {Component} from 'react';
import './App.css';
// import TaskList from './todo/TaskList'
// import InputTask from "./todo/InputTask";
import Github from "./github";
import Content from "./Content"
import Header from "./Header"

class App extends Component {


   state = {
       tasks: [{id: 1, task: 'Do homework', place: 'Library'},
               {id: 2, task: 'Read book', place: 'Cafe'}],
       id:3
   }

   addTask = (task,place) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id, task, place } ],
                id: this.state.id+1  })
   }

  //  deleteTask = (id) => {

  //  }

   render() {   


       return (
           <div className="App">
           <div class="space">
           <Header/>
           </div>
           
           <Content/>
            
           </div>
       );
   }
}

export default App;
