export type StateType = {
  articles:IArticle[]
}

export interface IArticle {
  id: number
  title: string
  body: string
}

export type ArticlesAction = { 
  type: string , 
  payload: IArticle 
}

export type AddArticleInputs = {
  id:number,
  title: string,
  body: string,
};

export type DispatchType = (args: ArticlesAction) => ArticlesAction;