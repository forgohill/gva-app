import React from 'react';
import { Link } from 'react-router-dom';
import './Recommendations.css';
import { slidesMain } from '../../utils/constantsSource';
import RecommenadionPlace from '../RecommenadionPlace/RecommenadionPlace.jsx';
const Recommendations = () => {

  const renderRecommenadionPlace = slidesMain.map((slide) => {
    return <RecommenadionPlace
      key={slide.lot}
      slide={slide}
    />
  });

  return (
    <main className='main'>
      <section
        className='recommendations'
      >
        <h2
          className='recommendations__title'
        >Рекомендации</h2>
        <p className='recommendations__pharagraph'>Гости оставляют свои рекомендации на площадках бронирования, где размещены наши объекты — <Link
          to="https://www.avito.ru/user/7abe81bd51747f6d21ad77a2e15dd89a/profile/all/kvartiry?id=2465832266&src=item&page_from=from_item_card&iid=2465832266&sellerId=7abe81bd51747f6d21ad77a2e15dd89a"
          target='_blank' rel='noreferrer' className="recommendations__link recommendations__link_type_inlain">Авито</Link>, <Link to="/place/place-ostrovok" className="recommendations__link recommendations__link_type_inlain">Островок</Link>, <Link to="/place/place-sutochnoru" className="recommendations__link recommendations__link_type_inlain">Суточно</Link>.</p>
        <p className='recommendations__pharagraph'> Мы копировали некоторые из этих комментариев к нам на сайт. </p>
        <p className='recommendations__pharagraph'> Все рекомендации настоящие, можете убедится этому найдя нас на площадках бронирования! </p>
        <div className='recommendations__background-rectangle'></div>
      </section>
      <section
        className='recommendations-space'
      >
        {renderRecommenadionPlace}
      </section>
    </main>
  );
}

export default Recommendations;
