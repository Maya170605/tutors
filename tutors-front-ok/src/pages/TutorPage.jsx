import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleTutor } from '../store/slices/tutorSlice';
import Modal from '../components/modal/Modal';
import { selectAdmin } from '../store/slices/adminSlice';

const TutorPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, tutor } = useSelector((state) => state.tutors);
  const [order, setOrder] = useState({
    subject: '',
    tel: '',
  });
  const { isAuth } = useSelector(selectAdmin);

  const [isOrder, setIsOrder] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(fetchSingleTutor(id));
  }, []);
  const handleSendOrder = (e) => {
    if (order.subject && order.tel) {
      setIsOrder(true);
      setOrder({
        subject: '',
        tel: '',
      });
    }
  };
  const handleVisible = () => {
    setIsOrder(false);
    setVisible(false);
  };
  if (isLoading) {
    return <h2 className="error-title">Загрузка...</h2>;
  }
  return (
    <div className="page__tutor tutor-page">
      <div className="tutor-page__container">
        <div className="tutor-page__block block-tutor">
          <div className="block-tutor__images">
            <img src={tutor.imgUrl} alt="" />
          </div>
          <div className="block-tutor__content content-tutor">
            <div className="content-tutor__title">{tutor.fullName}</div>
            <div className="content-tutor__list">
              <div className="content-tutor__item">
                <div className="content-tutor__subtitle">Предметы:</div>
                <div className="content-tutor__text">{tutor.subjects}</div>
              </div>
              <div className="content-tutor__item">
                <div className="content-tutor__subtitle">Образование:</div>
                <div className="content-tutor__text">{tutor.education}</div>
              </div>
              <div className="content-tutor__item">
                <div className="content-tutor__subtitle">Опыт репетиторства:</div>
                <div className="content-tutor__text">с {tutor.experience} г.</div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => setVisible(true)} className="tutor-page__button">
          Заказать занятие
        </button>
      </div>
      <Modal visible={visible} setVisible={handleVisible}>
        <>
          {isOrder ? (
            <div className="login__form">
              <div className="login__order">
                <p>Заявка отправлена.</p>
                <p>Ожидайте звонка!</p>
              </div>
              <button onClick={handleVisible} className="tutor-close">
                ×
              </button>
            </div>
          ) : (
            <div className="login__form">
              <>
                {!isAuth ? (
                  <div className="login__order">
                    <p>Необходимо авторизоваться!</p>
                  </div>
                ) : (
                  <>
                    <input //
                      value={order.subject}
                      onChange={(e) => setOrder({ ...order, subject: e.target.value })}
                      className="form__input input"
                      type="text"
                      placeholder="Предмет"
                    />
                    <input //
                      value={order.tel}
                      onChange={(e) => setOrder({ ...order, tel: e.target.value })}
                      className="form__input input"
                      type="tel"
                      placeholder="Номер телефона"
                    />
                    <button onClick={handleSendOrder} className="btn btn-primary login__btn">
                      Отправить заявку
                    </button>
                  </>
                )}
              </>

              <button onClick={handleVisible} className="tutor-close">
                ×
              </button>
            </div>
          )}
        </>
      </Modal>
    </div>
  );
};

export default TutorPage;
