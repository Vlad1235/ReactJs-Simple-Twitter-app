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


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [                                                         
                {label: 'Going to learn React', important: false, id: 'qsad'},      
                {label: 'This is important library', important: true, id: 'dsfe'},
                {label: 'Needs time to sharpen skills', important: false, id: 'accd'},
                112,                                                                
                'helloWorld'                                                        
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(recievedId) {
        // console.log(recievedId);
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === recievedId)   
            const before = data.slice(0, index);    
            const after = data.slice(index+1);     
            const newArr = [...before, ...after];   
            return {
                data: newArr
            }
        });
    }

    render() {
        return (                                            
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data} onDelete={ this.deleteItem }/>    
                <PostAddForm/>
            </AppBlock>
        )
    }
}
