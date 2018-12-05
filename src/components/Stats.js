import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class Stats extends Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: [15,14,13,12,10,8],
            stats:[],
            modifier:[]
        }

    }

    randOne = () => {
        const arr = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
        ].sort((a, b) => a-b)
        return arr[1]+arr[2]+arr[3];
    }

    // getStats = () => {
    //     let arr=[];
    //     for(let i=0; i<6; i++){
    //         arr.push(this.randOne());  
    //     }
    //     this.setState({
    //         numbers: arr
    //     })
    // }
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleClick = () => {
        this.setState({
            numbers: [
                this.randOne(),
                this.randOne(),
                this.randOne(),
                this.randOne(),
                this.randOne(),
                this.randOne()
            ]
        })
    }

    add = (e) => {
        this.setState({
            stats: [...this.state.stats,parseInt(e.currentTarget.parentElement.innerText)]
        })
        e.currentTarget.disabled=true;
        e.currentTarget.parentElement.parentElement.nextElementSibling.disabled=true;
    }

    refresh = (e) => {
        this.setState({
            stats: []
        })
        e.currentTarget.parentElement.querySelectorAll('button').forEach((e)=>{
            e.disabled=false;
        })
    }

    // modifier = (num) => {
    //     switch(num){
    //         case 2 || 3:
    //             return -4;
    //         case 4 || 5:
    //             return -3;
    //         case 6 || 7:
    //             return -2;
    //         case 8 || 9:
    //             return -1;
    //         case 10 || 11:
    //             return 0;
    //         case 12 || 13:
    //             return +1;
    //         case 14 || 15:
    //             return +2;
    //         case 16 || 17:
    //             return +3;
    //         case 18 || 19:
    //             return +4;
    //         case 20 || 21:
    //             return +5;
    //     }
    // }
    

    render(){
        const { values } = this.props
        let numbers = this.state.numbers.map((e,i) => {
            return e = <li key={i}>{e} <button onClick={this.add}>+</button></li>
        })
        return(
        <Form color='blue' >
            <h1 className="ui centered">Enter Personal Details</h1>
            <ul>
                {numbers}
            </ul>
            <button onClick={this.handleClick}>Random new numbers</button>
            <button onClick={this.refresh}>Refresh</button>
            <ul>
               <li value={this.state.stats[0]} className='stat'>Strenght: {this.state.stats[0]}</li>
               <li value={this.state.stats[1]} className='stat'>Dexterity: {this.state.stats[1]}</li>
               <li value={this.state.stats[2]} className='stat'>Constitution: {this.state.stats[2]}</li>
               <li value={this.state.stats[3]} className='stat'>Intelligence: {this.state.stats[3]}</li>
               <li value={this.state.stats[4]} className='stat'>Wisdom: {this.state.stats[4]}</li>
               <li value={this.state.stats[5]} className='stat'>Charisma: {this.state.stats[5]}</li>
            </ul>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default Stats;