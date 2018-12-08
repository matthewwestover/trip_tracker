import React from 'react';
import { Form, } from 'semantic-ui-react';

class TripForm extends React.Component {
        state = {
        name: '',
        start_date: '',
        end_date: ''
    };

    componentDidMount() {
        if (this.props.id) {
            const { name, start_date, end_date } = this.props;
            this.setState({ name, start_date, end_date });
        }
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleSubmit = (e) => {
        let { name, start_date, end_date } = this.state
        e.preventDefault();
        this.props.addTrip(name, start_date, end_date);
        this.setState({
            name: '',
            start_date: '',
            end_date: '',
        })
    };

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label="Trip Name"
                    placeholder="Add A Trip Name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />                
                <Form.Input
                    label="Trip Start"
                    placeholder="Add Start Date"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />                    
                <Form.Input
                    label="Trip End"
                    placeholder="Add End Date"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}
            
export default TripForm;