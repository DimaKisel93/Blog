import React from "react";
import { StateType, ArticlesAction, IArticle } from './types'
import { ADD_ARTICLE } from './constants';

export const initialState: StateType = {
  articles: [
    {
      id:1,
      title:"Tesla failed to stop Musk tweets, says regulator",
      body:"In 2018, the US Securities and Exchange Commission (SEC) accused Mr Musk of misleading investors, after he made claims about taking Tesla private.An agreement was made requiring Tesla's lawyers to pre-approve certain tweets.But documents obtained by the Wall Street Journal suggest the regulator believes Mr Musk and Tesla have broken the terms of that deal."
    },
    {
      id:2,
      title:"Do we need React useReducer Typescript?",
      body:"We will base our code on an example from the official React documentation. The demo linked from this article is a simple implementation of a very common pattern - fetching a list of items from some backend service. In this case, we’re fetching a list of Hacker News article headers.What functionality is missing in this little demo? When fetching data from backend it’s useful to indicate."
    },
    {
      id:3,
      title:"Apple's all-online Worldwide Developers Conference (WWDC)",
      body:"Apple News debuted with iOS 9 as a replacement for Newsstand. Using RSS and publication feeds, the app gathers articles from across the web and sorts them into a news feed.The service is available as a native and pre-installed app for iOS, iPadOS, and macOS.Users can subscribe to their preferred publications, like or dislike articles, and save stories for offline reading."
    },
    {
      id:4,
      title:"React useContext",
      body:" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
  ],
};

export const ContextApp = React.createContext<{
  state: StateType;
  dispatch: React.Dispatch<ArticlesAction> 
}>({
  state: initialState,
  dispatch:() => undefined,
});

export const reducer = (state:StateType, action:ArticlesAction): StateType => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newArticle: IArticle = {
          id: Date.now(),
          title: action.payload.title,
          body: action.payload.body
      } 
      return {
         articles: state.articles.concat(newArticle)
      }
    default:
      return state;
  }
}

