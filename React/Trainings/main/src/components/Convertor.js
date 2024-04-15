import React from "react";

class Convertor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usdRate: null,
            eurRate: null
        };
    }
    componentDidMount() {
        fetch('https://www.cbr-xml-daily.ru/latest.js')
            .then(response => response.text())
            .then(data => {
                // Находим курсы валют USD и EUR в полученных данных
                const usdMatch = data.match(/USD[^>]*>([\d.,]+)</);
                const eurMatch = data.match(/EUR[^>]*>([\d.,]+)</);

                if (usdMatch && eurMatch) {
                    const usdRate = parseFloat(usdMatch[1].replace(',', '.'));
                    const eurRate = parseFloat(eurMatch[1].replace(',', '.'));
                    this.setState({ usdRate, eurRate });
                } else {
                    console.error('Error: Currency rates not found in data');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { usdRate, eurRate } = this.state;
        return (
            <div>
                <span>Курсы валют:</span>
                <b> USD </b>
                <span>{usdRate}</span>
                <b> EUR </b>
                <span>{eurRate}</span>
            </div>
        );
    }
}

export default Convertor;