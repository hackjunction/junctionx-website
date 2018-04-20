import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Track from './Track';
import NotFound from './NotFound';

import '../stylesheets/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="junction_website" id="junction_website">
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,700,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/tracks/:track" component={Track} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
