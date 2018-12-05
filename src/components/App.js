import React, { Component } from 'react';
import RaceAndClass from './RaceAndClass';
import Stats from './Stats';
import ProficiencyAndSavingThrows from './ProficiencyAndSavingThrows';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        race: 'Dwarf',
        clas: 'Barbarian',
        str:'',
        dex:'',
        con:'',
        int:'',
        wis:'',
        char:''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleAccept = (e) => {
      e.preventDefault();
      let arr = e.currentTarget.parentElement.querySelectorAll('.stat')
      this.setState({
        str: arr[0].value,
        dex: arr[1].value,
        con: arr[2].value,
        int: arr[3].value,
        wis: arr[4].value,
        char: arr[5].value,
        })
    }
    
    render(){
        const {step} = this.state;
        const { race, clas, str, dex, con, int, wis, char } = this.state;
        const values = { race, clas, str, dex, con, int, wis, char };
        switch(step) {
        case 1:
            return <RaceAndClass 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <Stats 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    handleAccept = {this.handleAccept}
                    values={values}
                    />
        case 3:
            return <ProficiencyAndSavingThrows 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

export default MainForm;
