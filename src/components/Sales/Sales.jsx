import React from 'react';
import './Sales.css';

const Sales = () => {
  return (
    <main className='main'>
      <section
        className='sales'
      >

        <h2
          className='sales__title'
        >Ценообразование</h2>
        <p className='sales__pharagraph'>Наши квартиры представлены для аренды на многих площадках.</p>


        <p
          className='sales__pharagraph'
        >
          Цены на аренду формируются исходя из спроса на рынке. Цены зависят на какой день недели выпадает бронирование.
          В выходные и праздничные дни цена выше исходя из того что повышен спрос. Также цена зависит от количества гостей. Не забывайте указывать это количество верное. От этого зависит количество комплектов постельного белья.
        </p>


        <p
          className='sales__pharagraph'
        >
          Минимальная рыночная цена формируется на будние дни, а также при определенных условиях:
          чем больше ночей тем больше скидка
        </p>


        <p
          className='sales__pharagraph'
        >Дейcтвует cистeмa cкидок ➡ от 3 ночeй 5%, oт 7 нoчeй 10%, oт 30 нoчeй 20%;</p>



        <div className='sales__background-rectangle'></div>

      </section>
    </main>
  );
}

export default Sales;
