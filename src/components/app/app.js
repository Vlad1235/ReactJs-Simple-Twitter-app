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
                {label: 'Going to learn React', important: false, like: false, id: 'qsad'},      
                {label: 'This is important library', important: true, like: false, id: 'dsfe'},
                {label: 'Needs time to sharpen skills', important: false, like: false, id: 'accd'},
                112,                                                                
                'helloWorld'                                                        
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
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

    onToggleImportant(recievedId) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === recievedId);

            const old = data[index];
            const newItem = {...old, important: !old.important} 

            const before = data.slice(0, index);    
            const after = data.slice(index+1);     
            const newArr = [...before, newItem, ...after]; 
            
            return {
                data: newArr
            }
        });
    }

    onToggleLike(recievedId) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === recievedId);

            const old = data[index];
            const newItem = {...old, like: !old.like}; 

            const before = data.slice(0, index);    
            const after = data.slice(index+1);     
            const newArr = [...before, newItem, ...after]; 
            
            return {
                data: newArr
            }
        });
    }

    addItem(content) {
        if(content) {
            const newItem = {
                label: content,
                important: false,
                like: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        } 
    }

    render() {
        const {data} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPostsAmount = data.filter(item => typeof item === "object").length

        return (                                            
            <AppBlock>
                <AppHeader
                    liked = {liked}
                    allPostsAmount = {allPostsAmount}
                />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data} 
                    onDelete={ this.deleteItem } 
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />    
                <PostAddForm onAdd={ this.addItem } />
            </AppBlock>
        )
    }
}
