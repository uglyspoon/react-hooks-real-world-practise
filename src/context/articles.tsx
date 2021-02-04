import React, { useReducer } from 'react'

import {
    ArticleListState,
    ArticleListAction,
    articlesReducer,
    initialState
} from '../reducers/articleList'

type ArticlesContextProps = {
    state: ArticleListState,
    dispatch: React.Dispatch<ArticleListAction>
}
const ArticlesContext = React.createContext<ArticlesContextProps>({
    state: initialState,
    dispatch: () => initialState
})

export function ArticlesProvider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(articlesReducer, initialState)
    return <ArticlesContext.Provider value={{ state, dispatch }} {...props} />
}

export default function useArticles() {
    const context = React.useContext(ArticlesContext)
    if (!context) {
        throw new Error('useArticles must be used within an ArticlesProvider')
    }

    return context
}