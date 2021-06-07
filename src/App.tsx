import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import BlogPageComponent from './components/BlogPageComponent';
import AddBlogPageComponent from './components/AddBlogPageComponent';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePageComponent} />
            <Route exact path="/blog/:blogId" component={BlogPageComponent} />
            <Route exact path="/blog/new" component={AddBlogPageComponent} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
