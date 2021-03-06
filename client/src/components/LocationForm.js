import React from 'react';
import { Form, } from 'semantic-ui-react';


class LocationForm extends React.Component {
        state = {
        name: '',
        days: ''
    };

    handleChange = (e) => {
        this.setState ({ 
            [e.target.name]: e.target.value
         });
    };

    // handleSubmit = (e) => {
    //     let { name, days, } = this.state
    //     e.preventDefault();
    //     this.props.addLocation(name, days );
    //     this.setState({
    //         name: '',
    //         days: ''
    //     })
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.id) {
         this.props.editLocation({ id: this.props.id, ...this.state })
         this.props.toggleEdit();
        } else {
         this.props.addLocation(this.state);
        }
        this.setState({ name: "", days: "", trip_id: ""});
       };

    render() {
        let { name, days } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    name="name"
                    label="Location Name"
                    placeholder="Add A Location Name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />                
            <Form onSubmit={this.handleSubmit}/>
                <Form.Input
                    name="days"
                    label=" Total Days"
                    placeholder="Total Days"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />     
            <Form.Button>Sumbit</Form.Button> 
         </Form>          
        )
    }
}

export default LocationForm;