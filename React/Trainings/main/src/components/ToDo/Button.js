import React from 'react';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className="button">
            Показать количество выполненных задач
        </button>
    );
};

export default Button;
