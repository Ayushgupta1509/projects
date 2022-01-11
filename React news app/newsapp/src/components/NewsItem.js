import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date} = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/Screenshot_2021-09-04_at_11.29_1200x768.png?jl5_dkZK164siXF51Bkld7dZdtRXmIHh&":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author? "Unknown" :author} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More &rarr;</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
