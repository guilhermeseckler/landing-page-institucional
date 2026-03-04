document.addEventListener("DOMContentLoaded", () => {
  // ── MODAL ──
  const modal = document.querySelector(".modal");
  const buttonHeader = document.querySelector(".header__button");
  const buttonFaq = document.querySelector(".faq__button");
  const closeButton = document.querySelector(".modal__close");

  buttonHeader.addEventListener("click", () => modal.showModal());
  buttonFaq.addEventListener("click", () => modal.showModal());
  closeButton.addEventListener("click", () => modal.close());

  // ── ACCORDION ──

  const faqItems = document.querySelectorAll(".faq__list li");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("faq--open");
      faqItems.forEach((i) => i.classList.remove("faq--open"));
      if (!isOpen) {
        item.classList.add("faq--open");
      }
    });
  });
});
