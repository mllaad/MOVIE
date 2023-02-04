/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/App.js',
    './src/components/pagination-bar/pagination-bar.jsx',
    './src/components/swiper-actor/swiper-actor.jsx',
    './src/components/swiper-picture/swiper-picture.jsx',
    './src/components/swiper-card/swiper-card.jsx',
    './src/components/player/player.jsx',
    './src/pages/detail-page/detail-page.jsx',
    './src/pages/detail-person/detail-person.jsx',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
