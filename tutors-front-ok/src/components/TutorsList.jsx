import React from 'react';
import TutorItem from './TutorItem';

const TutorsList = ({ list }) => {
  if (!list.length) {
    return <h4 className="error-title">Список репетиторов пуст</h4>;
  }
  return (
    <div className="tutors">
      <div className="tutors__wrapper">
        {list.map((item) => (
          <TutorItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TutorsList;
