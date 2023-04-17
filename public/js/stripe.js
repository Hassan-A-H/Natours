/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
// import Stripe from 'stripe';

// const stripe = Stripe(
//   'pk_test_51Mv5t9KBKdgrfd7KT3dgHzrMaaH525QiQusaGQwaAtcYvAMBPAuDawKqfmXaO2VGBgV2byBqe3cJ4cPGKyHz8KVH007Crbh9jB'
// );

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    //2) Create checkout form + chargecredit card
    if (session.data.status === 'success') {
      window.location.href = session.data.session.url;
    }

    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id
    // });
  } catch (err) {
    showAlert('error', err);
  }
};

// 2) Create checkout form + chargecredit card
// if (session.data.status === 'success') {
//   window.location.href = session.data.session.url;
// }
