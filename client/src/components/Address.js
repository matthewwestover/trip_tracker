import React from 'react';
import { Header, } from 'semantic-ui-react'
import AddressForm from './AddressForm';

class Address extends React.Component {
    state = {
        Address: []
    };

    renderAddresses = () => {
        return this.state.addresses.map(address =>
            <
                Address key={address.id} {...address}
                updateAddress={this.updateAddress}
                deleteAddress={this.deleteAddress}
            />);
    }

    addAddress = (addressData) => {
        const { addresses, } = this.state;
        const address = { id, ...addressesData, };
        this.setState({ addresses: [address, ...addresses] })
    }

    updateAddress = (addressData) => {
        const addresses = this.state.addresses.map(address => {
            if (address.id === addressData.id)
                return addressData;
            return address;
        })
        this.setState({ addresses, });

    }

    deleteAddress = (id) => {
        const address = this.state.adddresses.filter(address => {
            if (address.id !== id)
                return address;
        })
        this.setState({
            address: []
        });

    }

    render() {
        return (
            <div>
                <Header as='h1'>AddressForm Change This Name</Header>
                <AddressFrom addAddress={this.addAddress} />
                {this.renderAddresses()}
            </div>
        )
    }
}

export default Address;