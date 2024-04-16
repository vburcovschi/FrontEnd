import React from 'react';

const Item = ({ task, onTaskCompletion }) => {
    const { id, text, completed } = task;

    return (
        <div className="item-container">
            <input type="checkbox" checked={completed} onChange={() => onTaskCompletion(id)} className="item-checkbox" />
            <label className={completed ? 'item-label completed' : 'item-label'}>{text}</label>
        </div>
    );
};

export default Item;
