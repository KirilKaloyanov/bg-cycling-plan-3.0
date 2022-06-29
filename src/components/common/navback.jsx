import React, { Fragment } from 'react';

export default function NavBack (props) {
    return (
        <Fragment>
            <div className="navback">
                <div className="menu_back">
                <div className="logo_back"></div>
                <div className={props.toggle ? 'container_menu' : 'container_menu container_hidden'}>
                    <span className="item">План</span>
                    <span className="item">Веломрежа</span>
                    <span className="item">Партньори</span>
                    <span className="item">Конференция</span>
                    <span className="item">Посланици</span>
                    <span className="item">Библиотека</span>
                </div>
                </div>
            </div>
        </Fragment>
    )
}