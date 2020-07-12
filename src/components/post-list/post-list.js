import React from 'react'

import PostListItem from '../post-list-item/post-list-item.jsx'
import { ListGroup } from 'reactstrap';

import './post-list.css'

const PostList = (props) => {
    
    function _isEmpty(obj) {
        for(let key in obj) {
            return true;
        }
        return false;
    }


    const elements= props.posts.map((item) => {                 
        if ( typeof item === 'object' && _isEmpty(item) ) {      
            return (
                <li key={item.id} className="list-group-item">
                    <PostListItem label={item.label} important={item.important} onDelete={ ()=> props.onDelete(item.id) }/>
                </li>
            )
        }
    })

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;