import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTE_PATHS } from '../router';
import { removeTutor } from '../store/slices/tutorSlice';
import { adminActions } from '../store/slices/adminSlice';
const AdminItem = ({ id, fullName, imgUrl, subjects, experience, added }) => {
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    dispatch(removeTutor(id));
  };

  const handleEdit = (e) => {
    dispatch(adminActions.setTutorToEdit(id));
  };

  return (
    <div className="admin__item item-admin">
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
        <div className="tutor-card__actions">
          <button className="tutor-card__delete" onClick={handleRemove}>
            Удалить
          </button>
          <button className="tutor-card__delete" onClick={handleEdit}>
            Редактировать
          </button>
        </div>
      </article>
    </div>
  );
};

export default AdminItem;
