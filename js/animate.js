document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // delay kecil biar animasi berasa elegan
          const delay = entry.target.dataset.delay || 0;

          setTimeout(() => {
            entry.target.classList.add("show");
          }, delay);

          // 🔑 animasi cuma sekali (lebih profesional)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // 🔑 muncul saat 15% terlihat
      rootMargin: "0px 0px -50px 0px" // 🔑 lebih natural
    }
  );

  items.forEach((item, index) => {
    // 🔑 auto stagger tanpa sentuh HTML
    item.dataset.delay = index * 120;
    observer.observe(item);
  });
});
