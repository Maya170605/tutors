import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTutor, fetchTutors, updateTutor } from '../store/slices/tutorSlice';
import { selectAdmin, adminActions } from '../store/slices/adminSlice';
const EMPTY_TUTOR = {
  fullName: '',
  imgUrl: '',
  subjects: '',
  experience: '',
  education: '',
};

const AdminForm = () => {
  const dispatch = useDispatch();
  const { editId } = useSelector(selectAdmin);
  const currentTutor = useSelector((state) => state.tutors.tutors.find((tutor) => tutor.id === editId));

  const [tutor, setTutor] = useState(EMPTY_TUTOR);
  const handleChange = (e) => {
    setTutor({ ...tutor, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (editId) {
      setTutor(currentTutor || EMPTY_TUTOR);
    } else {
      setTutor(EMPTY_TUTOR);
    }
  }, [currentTutor, editId]);

  const handleTutorSubmit = (e, action) => {
    e.preventDefault();
    if (Object.values(tutor).every(Boolean)) {
      dispatch(action(tutor));
      setTutor(EMPTY_TUTOR);
      dispatch(adminActions.setTutorToEdit(null));
      dispatch(fetchTutors());
    }
  };
  const handleAdd = (e) => {
    handleTutorSubmit(e, createTutor);
  };
  const handleSave = (e) => {
    handleTutorSubmit(e, updateTutor);
  };
  return (
    <form className="admin__form form-admin" action="">
      <input //
        required
        name="fullName"
        onChange={handleChange}
        value={tutor.fullName}
        placeholder="ФИО"
        className="input"
        type="text"
      />
      <input //
        required
        name="subjects"
        onChange={handleChange}
        value={tutor.subjects}
        placeholder="Предметы"
        className="input"
        type="text"
      />
      <input //
        required
        name="imgUrl"
        onChange={handleChange}
        value={tutor.imgUrl}
        placeholder="Ссылка на картинку"
        className="input"
        type="text"
      />
      <input //
        required
        name="experience"
        onChange={handleChange}
        value={tutor.experience}
        placeholder="Опыт (с какого года)"
        className="input"
        type="number"
      />{' '}
      <input //
        required
        name="education"
        onChange={handleChange}
        value={tutor.education}
        placeholder="Образование"
        className="input"
        type="text"
      />{' '}
      {editId ? (
        <button onClick={handleSave} className="btn">
          Сохранить изменения
        </button>
      ) : (
        <button onClick={handleAdd} className="btn">
          Добавить преподавателя
        </button>
      )}
    </form>
  );
};

export default AdminForm;
