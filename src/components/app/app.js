import React from 'react'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form.jsx'

// import './app.css'
import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;


const App = () => {

    // модуляция данных с сервера (включая технич данные, ктр могут быть)
    const data = [                                                         
        {label: 'Going to learn React', important: false, id: 'qsad'},      
        {label: 'This is important library', important: true, id: 'dsfe'},
        {label: 'Needs time to sharpen skills', important: false, id: 'accd'},
        112,                                                                
        'helloWorld'                                                        
    ];

    return (                                            
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />    
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;