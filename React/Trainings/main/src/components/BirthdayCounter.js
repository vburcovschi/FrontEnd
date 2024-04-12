import React from "react";

class BirthdayCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isInFuture: true
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            const { birthdayDate } = this.props;
            //const birthdayDate = new Date('1976-10-26');

            if (birthdayDate) {
                const currentDate = new Date();
                console.log(currentDate);
                console.log(birthdayDate);
                const difference = birthdayDate.getTime() - currentDate.getTime();
                console.log(difference);

                if (difference <= 0) {
                    this.setState({ isInFuture: false });
                    clearInterval(this.interval);
                } else {
                    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                    this.setState({ days, hours, minutes, seconds });
                }
            }
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const { days, hours, minutes, seconds, isInFuture } = this.state;
        return (
            <div className="main-container">
                <h1 className="title">To my birthday:</h1>
                <div className="counter">
                    <div className="clock-part">
                        <span className="number">{days}</span>days
                    </div>
                    <div className="clock-part">
                        <span className="number">{hours}</span>Hours
                    </div>
                    <div className="clock-part">
                        <span className="number">{minutes}</span>Minutes
                    </div>
                    <div className="clock-part">
                        <span className="number">{seconds}</span>Seconds
                    </div>
                </div>
                <div className="birthday-emoji">{isInFuture ? '🎉' : '🎂'}</div>
            </div>
        );
    }
}

export default BirthdayCounter;