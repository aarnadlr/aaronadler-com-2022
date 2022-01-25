import React from 'react';

const RSSRequestHOCFn = WrappedComponent => {
  class RSSRequestHOC extends React.Component {
    constructor() {
      super();
      this.state = {
        status: '',
        url: '',
      };
    }

    RSSRequestHOC() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          var mediumData = JSON.parse(request.responseText);
          // console.log(myObj)
          for (var i = 0; i < 1; i++) {
            this.setState({
              mediumData: mediumData,
              items: mediumData.items,
              // status: myObj.status,
              // url: myObj.feed.url
              // name: myObj.items[i].title,
              // url: myObj.items[i].link
            });
          }
        }
      };
      request.open(
        'GET',
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com/feed/@aaronadler',
        true,
      );
      request.send();
    }

    componentDidMount() {
      {
        this.RSSRequestHOC();
      }
    }

    render() {
      // return <WrappedComponent status={this.state.status} url={this.state.url} />
      return (
        <WrappedComponent
          mediumData={this.state.mediumData}
          items={this.state.items}
        />;
      );
    }
  }

  return RSSRequestHOC;
};

export default RSSRequestHOCFn;
