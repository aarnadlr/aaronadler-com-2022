import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class HackerrankScore extends Component {
  state = {
    data: {},
    isLoading: true
  };

  componentDidMount() {
    fetch(
      'https://cdn.contentful.com/spaces/5uofj56iylkc/environments/master/entries?access_token=0f542b1ab45cc72b3bb7a47b30269c8be13b21308efc8faefdbf15db4940e731&content_type=hackerRankScore'
    )
      // Get the response and convert it to JSON:
      .then(response => response.json())
      // Do something with the JSON data: Place JSON data into state:
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        });
        // console.log(data);
      });
  }

  render() {
    const hrScore = this.state.isLoading
      ? null
      : this.state.data.items[0].fields.score;

    return (
      <a
        href="https://www.hackerrank.com/aaron_adler"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="hr-badge">
          <div className="flex items-center">
            <div className="svg-wrapper">
              <svg
                width="24"
                viewBox="0 0 42 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M32.0859 8.07471H9.94629V37.9582H32.0859V8.07471Z"
                    fill="white"
                  />
                  <path
                    d="M41.8157 20.6504C41.7495 16.3482 41.4185 12.4763 40.8559 11.5165C40.3926 10.7223 38.043 9.03453 35.1308 7.18129L27.3207 2.64748C24.3754 1.09209 21.8934 0 20.9998 0C19.9077 0 16.3667 1.65468 12.5941 3.77266C9.71493 5.36115 6.70342 7.18129 4.45306 8.7036C2.7322 9.89496 1.44155 10.9209 1.11062 11.5165C0.779683 12.1122 0.514935 13.7669 0.382561 15.9842C0.184 18.764 0.117813 22.3712 0.184 25.6806C0.28328 29.8835 0.581122 33.5899 1.11062 34.5165C2.43436 36.7669 18.3854 46 20.9998 46C22.0919 46 25.4675 44.4115 29.1408 42.3928C32.0531 40.8043 35.1308 38.918 37.4473 37.3626C39.2344 36.1381 40.525 35.1122 40.889 34.5165C41.2531 33.9209 41.4847 32.2993 41.6171 30.1482C41.8157 27.4345 41.8818 23.8935 41.8157 20.6504ZM30.3653 32.6964L27.1552 35.6086C27.0559 35.741 26.9236 35.8072 26.7581 35.8072C26.5926 35.8072 26.4272 35.741 26.3279 35.6086L23.3164 32.6964C23.0847 32.564 23.0185 32.2662 23.1509 32.0345C23.2502 31.8691 23.4157 31.8029 23.5811 31.8029H24.4416V25.2835H17.5912V32.4647C17.5912 32.7295 17.3595 32.9611 17.0948 32.9611H13.2559C12.9912 32.9611 12.7595 32.7295 12.7595 32.4647V14.1971H11.866C11.6013 14.1971 11.3696 13.9655 11.3696 13.7007C11.3696 13.5353 11.4689 13.3698 11.6013 13.2705L14.8113 10.3583C14.9106 10.2259 15.043 10.1597 15.2085 10.1597C15.3739 10.1597 15.5394 10.2259 15.6387 10.3583L18.6502 13.2705C18.8818 13.4029 18.948 13.7007 18.8157 13.9324C18.7164 14.0978 18.5509 14.164 18.3854 14.164H17.525V20.4187H24.3754V13.4691C24.3754 13.2043 24.607 12.9727 24.8718 12.9727H28.7106C28.9754 12.9727 29.207 13.2043 29.207 13.4691V31.7367H30.1005C30.3653 31.7367 30.5969 31.9683 30.5969 32.2331C30.5969 32.4647 30.5308 32.6302 30.3653 32.6964Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="21.0001"
                    y1="46"
                    x2="21.0001"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1BA94C" />
                    <stop offset="1" stopColor="#32C766" />
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="42" height="46" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p>HackerRank: {hrScore}</p>
          </div>

          <style jsx>{`
            .hr-badge {
              // background: rgba(255, 255, 255, 0.2);
              width: 168px;
              padding: 10px 14px;
              border-radius: 8px;
              margin: 0 auto 88px auto;
              transition: all 0.4s ease;
            }
            .hr-badge:hover {
              // background: rgba(255, 255, 255, 0.25);
              transform: translateY(-3px);
            }

            .svg-wrapper {
              position: relative;
              top: 2px;
            }
            p {
              font-family: 'Teko', sans-serif;
              font-weight: 300;
              letter-spacing: 0.05rem;
              font-size: 21px;
              margin: 0 0 0 10px;
              position: relative;
              top: 2px;
            }
          `}</style>
        </div>
      </a>
    );
  }
}
