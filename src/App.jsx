import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "King Solomon",
        bio: "A passionate king who love God so much, endowed with the biggest of wisdom",
        imgSrc:
          "https://bloggersforthekingdom.com/wp-content/uploads/2024/07/ai-image-depicting-the-fall-of-King-Solomon.jpg",
        profession: "Kingship",
      },
      shows: false,
      lastMounted: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        lastMounted: prevState.lastMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  toggleShow = () => {
    // this.setState((prevState) => ({ shows: !prevState.shows }));
    this.setState((prevState) => {
      return { shows: !prevState.shows };
    });
  };

  render() {
    const { Person, shows, lastMounted } = this.state;
    return (
      <div
        style={{
          border: "2px solid black",
          maxWidth: "700px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2rem",
          textAlign: "center",
          borderRadius: "2rem",
        }}
      >
        <p>Time since mounted {lastMounted} seconds</p>
        <button
          onClick={this.toggleShow}
          style={{
            maxWidth: "150px",
            padding: "0.5rem",
            fontSize: "1rem",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            alignSelf: "center",
          }}
        >
          {shows ? "Hide profile" : "Show profle"}
        </button>
        {shows && (
          <div>
            <img
              style={{
                width: "100%",
                borderRadius: "10px",
                paddingTop: "2rem",
              }}
              src={Person.imgSrc}
              alt={Person.fullName}
            />
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <h4>{Person.profession}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default App;
