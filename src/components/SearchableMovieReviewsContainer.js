import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Szs7sLUM7SPxNw1BIMGOwDmAMI0INAPQ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }
    // componentDidMount(){
    //     fetch(URL)
    //     .then(res=>res.json())
    //     .then(data => 
    //         this.setState({
    //             reviews: data.results
    //         })
    //     ) 
    // }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            searchTerm: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL)
        .then(res=>res.json())
        .then(data => 
            this.setState({
                reviews: data.results
            })
        ) 
    }
    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search for a movie review!</label> 
                    <input type="text" name="search" value={this.state.searchTerm}></input>
                    <input type="button" value="Search"></input>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}