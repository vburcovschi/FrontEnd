import React from "react";
import Title from "./Title";
import TimeM from "./Time";

class Blogpost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            const {titleBlog}= this.props;
    return (
      <div>
          <Title titleText={titleBlog} />
          <TimeM />
      </div>
    );
  }
}

export default Blogpost;