function Modal({ enteredEmail, closeModal }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center w-full h-full bg-black/50 z-[99999]"
      onClick={closeModal}
    >
      <div className="p-5 mx-2 text-center bg-white rounded">
        <h2 className="mb-2 font-bold text-[--primary-color]">
          Thank you for subscribing!
        </h2>
        <p className="mb-5">
          A confirmation email has been sent to <b>{enteredEmail}</b>
        </p>
        <button
          className="bg-[--primary-color] text-white px-3 py-1 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
