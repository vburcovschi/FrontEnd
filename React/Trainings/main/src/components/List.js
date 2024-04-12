import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const List = ({ orderList }) => {
    return (
        <ul>
            {orderList.map((item, index) => (
                <li key={index} className={item.urgent ? 'urgent' : ''}>
                <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
            {item.name}
          </span>
                </li>
            ))}
        </ul>
    );
};

List.propTypes = {
    orderList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            urgent: PropTypes.bool,
            done: PropTypes.bool,
        })
    ),
};

export default List;
