import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class RaceAndClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            races:'',
            classes:''
        }
        this.getRace = (() =>
        axios.get(`http://www.dnd5eapi.co/api/races/`)
        .then((res) => {
            this.setState({
                races: res.data.results.map((e,i) => <option key={i} value={e.name}>{e.name}</option>)
            })
        }))()

        this.getClass = (() =>
        axios.get(`http://www.dnd5eapi.co/api/classes/`)
        .then((res) => {
            this.setState({
                classes: res.data.results.map((e,i) => <option key={i} value={e.name}>{e.name}</option>)
            })=
        }))()
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        if(this.state.races){
        return(
            <Form color='green' >
                <h1 className="ui centered">Choose Your Race and Class</h1>
                <Form.Field>
                    <label>Class    </label>
                    <select
                    placeholder='class'
                    onChange={this.props.handleChange('clas')}
                    defaultValue={values.clas}
                    >
                        {this.state.classes}
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Race </label>
                    <select
                    placeholder='Race'
                    onChange={this.props.handleChange('race')}
                    defaultValue={values.race}
                    >
                        {this.state.races}
                    </select>
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
            
        )
        }else{
            return null
        }
    }
}

export default RaceAndClass;