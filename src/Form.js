import React from "react";

export default class Form extends React.Component {

    constructor(props){
        super(props);
        this.state={
            message:'',
            counter:10,
        }
       function handleChange(text){
            this.setState({
                message:"Message has"+ text.length + "Characters ",
            });}
        }

        render() {
            return (<div><h2>Hi,Rohan mohan</h2>
                <form>
                    <label>enter somethin</label>
                    <input placeholder="Input" onChange={
                        (e)=>this.handleChange(e.target.value)
                        } ></input>
                        
                    <button type="submit" >Click me</button>
                </form>
                <p>hello {this.state.message}</p>
                </div>);
            
          }


    
  };