import React from 'react';
import AdminItem from './AdminItem';

const AdminCatalog = ({ items }) => {
  return (
    <div className="admin__list ">
      {!items.length && <h4 className="error-title">Список репетиторов пуст</h4>}
      {items.map((item) => (
        <AdminItem //
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default AdminCatalog;
