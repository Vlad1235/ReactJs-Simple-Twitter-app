import React from 'react'

import './post-list-item.css'

export default class PostListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {          // значения по умолчанию задали
            important: false,   
            like: false         
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    // обработчик для звездочки
    onImportant() {
        this.setState(({important}) => ({   // оборачиваем в () дополнительно. Деструктурируем state
            important : !important
        }))
    }

    // обработчик для сердечка
    onLike() {
        this.setState(({like}) => ({   // оборачиваем в () дополнительно
            like : !like
        }))
    }

    render() {
        const {label} = this.props;               // получаем из неизменяемой части
        const {important, like} = this.state;     // получаем из собственного созданного состояния
        let classNames = 'app-list-item d-flex justify-content-between';    // динамически изменяется

        if(important) {
            classNames +=' important';  
        }
        if(like) {
            classNames +=' like';   
        }

        return (
            <div className={classNames} >   
                <span className="app-list-item-label" onClick={this.onLike} >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={this.onImportant} >
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
