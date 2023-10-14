import React, { useState } from 'react';

import './Booking.css';
import './BookingForm.css';
import { Helmet } from 'react-helmet-async'
const Booking = () => {
  const [jsLoaded, setJsLoaded] = useState(false);



  return (
    <main className='main'>
      <h1 >Booking</h1>

      <div id="rc-small-bookings-widget-root"></div>
      <Helmet>
        <script type="text/javascript">RC_SMALL_BOOKINGS_WIDGET.init('18a682d5b6e8dd87c30d92cbf743d596');</script>
      </Helmet>
    </main >
  );
}

export default Booking;

// <div class="rc-f34235">
//   <form class="rc-form-inline rc-search_form">
//     <div class="rc-search_form__dates_wrapper">
//       <div class="rc-form-group search_form__item rc-search_form__item-first">
//         <label for="rc-checkin">Заезд</label>
//         <div class="rc-input-group rc-date rc-search_form__item__date rc-datepicker-begin-date">
//           <input type="text" class="rc-form-control" id="rc-checkin">
//             <div class="rc-input-group-addon">
//               <span class="rc-glyphicon rc-glyphicon-th"></span>
//             </div>
//         </div>
//       </div>
//       <div class="rc-form-group rc-search_form__item">
//         <label for="rc-checkout">Выезд</label>
//         <div class="rc-input-group rc-date rc-search_form__item__date rc-datepicker-end-date">
//           <input type="text" class="rc-form-control" id="rc-checkout">
//             <div class="rc-input-group-addon">
//               <span class="rc-glyphicon rc-glyphicon-th"></span>
//             </div>
//         </div>
//       </div>
//       <div class="rc-form-group rc-search_form__item">
//         <label for="guests">Гостей</label>
//         <select name="guests" class="rc-form-control rc-search_form__item__guests__control">
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//           <option value="9+">более 9</option>
//         </select>
//       </div>
//     </div>
//     <div class="rc-search_form__btn__wrapper">
//       <button type="submit" class="rc-btn rc-btn-lg rc-search_form__search_btn">
//         <i class="rc-fa rc-fa-search" aria-hidden="true"></i>
//         Поиск
//       </button>
//     </div>
//   </form>
// </div>