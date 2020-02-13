import React, { Component } from "react";
import axios from "axios"
import Movie from "./components/Movie"

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then(res => {
      this.setState({
        movies: res.data.data.movies
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { movies } = this.state

    return (
    <div className="4">
      <Movie movies={movies} />
    </div>
    )
  }
}

export default App;


// "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
