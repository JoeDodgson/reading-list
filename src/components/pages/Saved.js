import React from 'react';
import { NavBar } from '../NavBar'
import { Header } from '../Header'
import { SearchBar } from '../SearchBar'
import { BooksContainer } from '../BooksContainer'

export const Saved = () => {
  return (
    <>
        <NavBar active="saved"/>
        <Header title="Saved Books"/>
        <BooksContainer heading="Saved Books"/>
    </>
  );
}

export default Saved;
