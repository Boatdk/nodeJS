import React, {Component}  from 'react';
// import axios from "axios"
import {getApi} from '../action'
import {connect} from 'react-redux'

class Github extends Component {

    componentDidMount(){
        console.log('props', this.props)
        this.props.getApi()
    }
    
    renderUser = () => {
        // console.log(data)
        console.log('prop: ', this.props.data)
        if(this.props.data){
           return "URL: " + this.props.data.url+ "NAME: " + this.props.data.name
           
        }
    }
    render() {
      return (
          <div>
              <h2> RENDER USER</h2>  
              <ul>
                  {this.renderUser()}
              </ul>
          </div>
      )
    }
 }

 const mapStateToProps = ({data}) => {
     return {data}
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         getApi: () => dispatch(getApi())
     }
 }
 
 export default connect (mapStateToProps,mapDispatchToProps)(Github)