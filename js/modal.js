(() => {
  const refs = {
    openHeaderModalBtn: document.querySelector("[data-header-modal-open]"),
    closeHeaderModalBtn: document.querySelector("[data-header-modal-close]"),
    headerModal: document.querySelector("[data-header-modal]"),
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openHeaderModalBtn.addEventListener("click", toggleHeaderModal);
  refs.closeHeaderModalBtn.addEventListener("click", toggleHeaderModal);

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleHeaderModal() {
    refs.headerModal.classList.toggle("is-hidden");
  }
})();
