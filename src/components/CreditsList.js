import React, { Component } from 'react';
import axios from 'axios';
import Credits from './Credits';

class CreditsList extends Component {
    
    state = {
        credits: []
    };

    componentDidMount() {
        axios.get('/credits')
        .then((response) => {
            this.setState({credits: response.date})
        })
    }

    render() {
        const creditsData = JSON.stringify(this.state.credits);
        const creditComponents = creditsData.map((credit) => {
            console.log("here");
            return (
                <Credits
                  {...credit}/>
            )
        });
        return (
            <div>
                { creditComponents }
            </div>    
        )    
    }
}

export default CreditsList;