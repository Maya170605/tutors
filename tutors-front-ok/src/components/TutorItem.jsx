import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATHS } from '../router';
const TutorItem = ({ id, fullName, imgUrl, subjects, experience, added }) => {
  return (
    <article className="tutors__card tutor-card">
      <div className="tutor-card__wrapper">
        <div className="tutor-card__image">
          <NavLink to={ROUTE_PATHS.CATALOG + '/' + id}>
            <img src={imgUrl} alt="" />
          </NavLink>
        </div>
        <div className="tutor-card__body">
          <NavLink to={ROUTE_PATHS.CATALOG + '/' + id} className="tutor-card__title">
            {fullName}
          </NavLink>
          <ul className="tutor-card__list">
            <li className="tutor-card__item">
              <span>Предметы:</span>
              <span>{subjects}</span>
            </li>
            <li className="tutor-card__item">
              <span>Опыт репетиторства:</span>
              <span>с {experience} г.</span>
            </li>
            <li className="tutor-card__item">
              <span>На сайте:</span>
              <span>с {added}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default TutorItem;
