import React, { useEffect, useReducer } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import BlogPageComponent from './components/BlogPageComponent';
import AddBlogPageComponent from './components/AddBlogPageComponent';
import {reducer, ContextApp, initialState} from './state/reducer';

const App: React.FC = () => {
  const currentStorage = localStorage.getItem('articles');
  const [state, dispatch] = useReducer(reducer, currentStorage !== null? JSON.parse(localStorage.getItem('articles')!) : initialState);
  
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(state))
  },[state])

  return (
    <>
      <ContextApp.Provider value={{state, dispatch}}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" render={(props)=><HomePageComponent {...props} />} />
              <Route exact path="/blog/new" render={(props)=><AddBlogPageComponent {...props} />} />
              <Route exact path="/blog/:blogId" component={BlogPageComponent} />
          </Switch>
        </BrowserRouter>
      </ContextApp.Provider>
    </>
  );
}

export default App;
