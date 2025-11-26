import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminCatalog from '../components/AdminCatalog';
import AdminForm from '../components/AdminForm';
import { fetchTutors } from '../store/slices/tutorSlice';
import { selectAdmin } from '../store/slices/adminSlice';
const AdminPage = () => {
  const dispatch = useDispatch();
  const { tutors, isLoading, error } = useSelector((state) => state.tutors);
  const { editId } = useSelector(selectAdmin);

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    dispatch(fetchTutors());
  }, [editId]);

  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <div className="page__admin admin">
      <div className="admin__container">
        <AdminForm visible={visible} setVisible={setVisible} />
        {isLoading ? ( //
          <h2 className="error-title">Загрузка...</h2>
        ) : (
          <AdminCatalog items={tutors} />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
