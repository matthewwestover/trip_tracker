import React from 'react';
import { Form, } from 'semantic-ui-react';


class AddressForm extends React.Component {
        state = {
        street: '',
        city: '', 
        state: '',
        zip: ''
    };

    handleChange = (e) => {
        this.setState ({ 
            [e.target.name]: e.target.value
         });
    };

    handleSubmit = (e) => {
        let { street, city, state, zip } = this.state
        e.preventDefault();
        this.props.addAddress(street, city, state, zip );
        this.setState({
            street: '',
            city: '', 
            state: '',
            zip: ''
        })
    };

    render() {
        let { street, city, state, zip } = this.state
        return (
            
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    name="street"
                    label="Street Name"
                    placeholder="Add Street Name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />                
                <Form.Input
                    name="city"
                    label="City Name"
                    placeholder="Add City Name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />     
                <Form.Input
                    name="state"
                    label="State Name"
                    placeholder="Name of State"
                    required
                    value={this.state.state}
                    onChange={this.handleChange}
                />     
                <Form.Input
                    name="zip"
                    label="Zip Code"
                    placeholder="Add Zip Code"
                    required
                    value={this.state.zip}
                    onChange={this.handleChange}
                />     
                <Form.Button>Sumbit</Form.Button>
            </Form>          
        )
    }
}
            
export default AddressForm;