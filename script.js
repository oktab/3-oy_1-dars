document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('body');

  let colors = ['bg-[#F4A764]', 'bg-gray-500', 'bg-green-500', 'bg-red-500'];

  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  swiper.on('slideChange', () => {
    const currentIndex = swiper.realIndex;
    header.classList.remove(...colors);
    header.classList.add(colors[currentIndex % colors.length]);
  });

});