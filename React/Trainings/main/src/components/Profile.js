
import {useState} from "react";
import React from "react";

const data = [
    {
        size: 100,
        person: {
            name: "Bill Gates",
            imageUrl:
                "https://static01.nyt.com/images/2021/05/17/business/14altGates-print/14Gates--top-mediumSquareAt3X.jpg"
        }
    },
    {
        size: 100,
        person: {
            name: "Steve Jobs",
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
        }
    },
    {
        size: 100,
        person: {
            name: "Pavel Durov",
            imageUrl:
                "https://starsunfolded.com/wp-content/uploads/2021/01/Pavel-Durov.jpg"
        }
    }
];


function Avatar({ person, size, onClick }) {
    return (
        <img
            className="avatar"
            src={person.imageUrl}
            alt={person.name}
            width={size}
            height={size}
            onClick={onClick}
        />
    );
}
/*
export default function Profile() {
    const testClickAvatar = () => {
        console.log("Click!");
    };

    const [currentAvatar, setCurrentAvatar] = useState(1);

    const onClickNext = () => {
        setCurrentAvatar(currentAvatar + 1);
        if (currentAvatar === data.length - 1) {
            setCurrentAvatar(0);
        }
    };

    const onClickPrev = () => {
        setCurrentAvatar(currentAvatar - 1);
        if (currentAvatar === 0) {
            setCurrentAvatar(data.length - 1);
        }
    };

    return (
        <div>
            <Avatar
                size={data[currentAvatar].size}
                person={data[currentAvatar].person}
                onClick={testClickAvatar}
            />
            <button onClick={onClickNext}>Next</button>
            <button onClick={onClickPrev}>Prev</button>
        </div>
    );
}*/


/****** REFACTORING WITH CLASS COMPONENT ******/
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAvatar: 0
        };
        this.testClickAvatar = this.testClickAvatar.bind(this);
    }

    testClickAvatar = () => {
        console.log("Click!");
    };

    onClickNext = () => {
        this.setState({ currentAvatar: this.state.currentAvatar + 1 });
        if (this.state.currentAvatar === data.length - 1) {
            this.setState({ currentAvatar: 0 });
        }
    };

    onClickPrev = () => {
        this.setState({ currentAvatar: this.state.currentAvatar - 1 });
        if (this.state.currentAvatar === 0) {
            this.setState({ currentAvatar: data.length - 1 });
        }
    };

    render() {
        return (
            <div>
                <Avatar
                    size={data[this.state.currentAvatar].size}
                    person={data[this.state.currentAvatar].person}
                    onClick={this.testClickAvatar}
                />
                <button onClick={this.onClickNext}>Next</button>
                <button onClick={this.onClickPrev}>Prev</button>
            </div>
        );
    }
}