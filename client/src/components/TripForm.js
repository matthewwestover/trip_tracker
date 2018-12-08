import React from 'react';
import { Form,  } from 'semantic-ui-react';


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
        this.setState ({
          [e.target.name]: e.target.value
        })
      }

    handleSubmit = (e) => {
    let { name, start_date, end_date} = this.state
    e.preventDefault();
    if (this.props.id) {
        this.props.editTrip({ id: this.props.id, name, start_date, end_date })
        this.props.toggleEdit();
    } else {
        this.props.addTrip(name, start_date, end_date);
    }
    this.setState({ trip: "", start_date: "", end_date: ""});
    };

    render() {
        let {name, start_date, end_date} = this.state
        return(
            
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    name="name"
                    label="Trip Name"
                    placeholder="Add A Trip Name"
                    required
                    value={name}
                    onChange={this.handleChange}
                />                
                <Form.Input
                    name="start_date"
                    label="Trip Start"
                    placeholder="Add Start Date"
                    required
                    value={start_date}
                    onChange={this.handleChange}
                />                    
                <Form.Input
                    name="end_date"
                    label="Trip End"
                    placeholder="Add End Date"
                    required
                    value={end_date}
                    onChange={this.handleChange}
                />
                <Form.Button color="blue">Submit</Form.Button>
            </Form>
        )
    }
}
            
export default TripForm;