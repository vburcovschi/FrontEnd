import React from "react";

class SearchBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        };
    }
    handleFilterTextChange = (event) => {
        this.setState({ filterText: event.target.value });
    };

    render() {
        const filteredItems = this.props.items.filter(item =>
            item.toLowerCase().startsWith(this.state.filterText.toLowerCase())
        );
        return(
            <div className="filtered-list">
                <input
                    className="filtered-list__input"
                    onChange={this.handleFilterTextChange}
                    value={this.state.filterText}
                    placeholder="Введите начало фразы или слова"
                />
                <ul className="filtered-list__list">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, ind) => (
                            <li key={ind} className="filtered-list__item">
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="filtered-list__item">Нет элементов для отображения</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default SearchBox;