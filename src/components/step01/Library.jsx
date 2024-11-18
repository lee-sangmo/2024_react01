import React from 'react';
import Book from './Book';

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 리액트" numOfPage="300" />
            <Book name="처음 만난 스프링부트" numOfPage="550" />
            <Book name="처음 만난 MySQL" numOfPage="250" />
        </div>
    );
}

export default Library;