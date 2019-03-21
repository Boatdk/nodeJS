import React, {Component} from 'react';
import './App.css';
// import TaskList from './todo/TaskList'
// import InputTask from "./todo/InputTask";
import Github from "./github";
// import Content from "./Content"
// import Header from "./Header"
// import Data from './Data'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import axios from '../node_modules/axios';
import { combineReducers, createStore, applyMiddleware } from '../node_modules/redux';

export const getApiSuccess = data => ({ type: 'GET_API_SUCCESS', data})
export const getApiFailed = () => ({type:'GET_API_FAILED'})
export const getApi = (USER) => async (dispatch) => {
    try{
        console.log('get data')
        const res = await axios.get(`https://api.github.com/users/${USER}`)
        console.log(res)
        const resBody = await res.data
        console.log(res.data)
        console.log('res:' , resBody)
        dispatch(getApiSuccess(resBody))
    } catch(error){
        console.error(error)
        dispatch(getApiFailed())
    }
    console.log(store)
}

export const githubReducer = (state = 0, action) => {
    switch(action.type){
        case "GET_API_SUCCESS":
            return action.data
        case 'GET_API_FAILED':
            return state
        default:
            return state
    }
}

export const rootReducer = combineReducers({data: githubReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk,logger))


class App extends Component {


//    state = {
//        tasks: [{id: 1, task: 'Do homework', place: 'Library'},
//                {id: 2, task: 'Read book', place: 'Cafe'}],
//        id:3
//    }

//    addTask = (task,place) => {
//        this.setState({
//                 tasks: [...this.state.tasks, {id: this.state.id, task, place } ],
//                 id: this.state.id+1  })
//    }

  //  deleteTask = (id) => {

  //  }

   render() {   


       return (
           <Provider store={store}>
            <Github/>
           </Provider>
       )
   }
}

export default App;
