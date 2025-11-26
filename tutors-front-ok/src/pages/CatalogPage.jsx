import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TutorsList from '../components/TutorsList.jsx';
import { useItems } from '../hooks/useItems.js';
import { fetchTutors } from '../store/slices/tutorSlice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { tutors } = useSelector((state) => state.tutors);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchTutors(query));
  }, [query]);
  return (
    <div className="page__catalog catalog">
      <div className="catalog__container">
        <div className="cart-page__top catalog__top">
          <input //
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search"
            type=""
            placeholder="Предмет..."
          />
        </div>
        <div className="catalog__body">
          <TutorsList list={tutors} />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
