import React, { Component } from 'react'
import axios from 'axios'
import Debits from './Debits'

class DebitsList extends Component {

    state = {
        debits: []
    }

    componentDidMount() {
        axios.get('/debits')
            .then((response) => {
                this.setState({debits: response.data})
            })
    }

    render() {

        const debitsData = JSON.stringify(this.state.debits);
        console.log('hello' + typeof(debitsData));
        const debitComponents = debitsData.map((debit) => {
            return (
                <Debits
                  {...debit}/>
            )
        });
        return (
            <div>
                { debitComponents }
            </div>    
        )    
    }
}

export default DebitsList