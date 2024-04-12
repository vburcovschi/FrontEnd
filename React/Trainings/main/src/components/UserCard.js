import React from 'react';
import PropTypes from "prop-types";

class UserCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            avatar: '',
        }

    }
    render() {
        const {name, email, avatar} = this.props;
        return (
            <div className="card">
                <img src={avatar} alt="User Avatar" className="avatar" />
                <div className="card-data">
                    <h2 className="name">{name}</h2>
                    <p className="email">Email: {email}</p>
                </div>
            </div>
        );
    }
}

UserCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default UserCard;
