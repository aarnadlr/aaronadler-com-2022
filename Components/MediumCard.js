import React, { Component } from 'react';
import RSSRequestHOC from './HOCs/RSSRequestHOC';

// IMPORTANT MEDIUNM INFO:
// RSS FEED:
// https://medium.com/feed/@aaronadler

// GIST: FetchDataFromRSSFeed
// https://gist.github.com/mittalyashu/4182b0cdaa54654e6b9f3e9441831edc

// RSS 2 JSON:
// https://rss2json.com/#rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40aaronadler

// 👇👇👇
// PAGE OF POSTS I SHOULD EMULATE:
// https://medium.com/@aaronadler

class MediumCard extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="flex flex-wrap justify-center">
        {/* <div className="br2 ma2 bg-white"> */}
        <div className="">
          {this.props.items
            ? this.props.items.map(article => (
                <div className='mediumArticle br2 ma2 pa4'>
                  <h1>{article.title}</h1>
                  <h2>{article.pubDate}</h2>
                  {/* <a>{article.link}</a> */}
                  <a rel='noopener noreferrer' href={article.link}>
                    {article.link}
                  </a>
                  <h4>{article.guid}</h4>
                  <h5>{article.author}</h5>
                  --------------------------
                  <h3>
                    {this.props.mediumData
                      ? this.props.mediumData.feed.title
                      : null}
                  </h3>
                  <h3>
                    {this.props.mediumData
                      ? this.props.mediumData.feed.link
                      : null}
                  </h3>
                  {/* <img src={this.props.mediumData ? this.props.mediumData.feed.image : null} alt=""/> */}
                  <img src={article.thumbnail} alt='' />
                </div>
              ))
            : null}

          {/* <h3>{this.props.status}</h3> */}
          {/* <h3>{this.props.status}</h3> */}
          {/* <h3>{this.props.url}</h3> */}
        </div>

        <style jsx>{`
          .card {
            width: 430px;
            transition: all 0.3s ease;
            /* -moz-transition: scale .3s ease; */
            /* -webkit-transition: scale .3s ease; */
            &:hover {
              transform: translateY(-10px);
            }
          }
          .mediumArticle {
            background: lavender;
          }
          .mediumArticle a {
            color: blue;
            // background: lavender;
          }
          .completed {
            border: 1px solid blue;
            margin-top: 2.7rem;
          }

          .image {
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
          }

          .tag {
            /* background: blue; */
            color: white;
            display: inline-block;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 10px;
            margin-top: 10px;
          }

          p.tag:not([first]) {
            margin-left: 6px;
          }

          p.projectRole {
            /* line-height: 1.3; */
          }
        `}</style>
      </div>
    );
  }
}

export default RSSRequestHOC(MediumCard);
