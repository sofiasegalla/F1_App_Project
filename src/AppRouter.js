// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './Content'; // Import your Home component

function AppRouter() {
  return (
    <Router>
      <div>
        {/* You can add navigation links here */}
        <Switch>
          <Route path="/Content" exact component={Content} />
          {/* Add more routes for other pages as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
