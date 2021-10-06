// Code MovieReviews Here
import React from 'react'

let review = ({byline, headline,link,summary_short}) => {
    return(
        <div className="review" key={link.url}>
            <h1>{headline}</h1>
            <a href={link.url}>{link.suggested_link_test}</a>
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = ({reviews}) => 
    <div className="review-list">
        {reviews.map(review)}
    </div>

export default MovieReviews