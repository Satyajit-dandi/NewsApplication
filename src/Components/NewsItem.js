import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, URL, newsurl, author, date, source } = this.props;
    return (
      <div>
        <div className="card mx-3 my-3">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{left:'90%',zIndex :'1'}}>{source}   </span>
          <img
            src={
              !URL
                ? "https://media.cnn.com/api/v1/images/stellar/prod/230214155935-01-sarah-michelle-gellar-scad.jpg?c=16x9&q=w_800,c_fill"
                : URL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small>
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
