import { useState } from "react";
import Modal from "../UI/Modal/Modal";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const changeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-6 lg:mb-0">
      <h3 className="text-3xl text-[#741906] font-bold mb-3">News Letter</h3>
      <p className="mb-5">
        Subscribe to our news letter for updates, news and exclusive offers
      </p>
      <form
        className="lg:flex lg:items-center lg:gap-4 lg:justify-center"
        onSubmit={submitHandler}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          value={enteredEmail}
          required
          className="border border-solid border-[#741906] outline-none py-2 px-4 mb-5 lg:mb-0"
        />
        <button className="block mx-auto lg:m-0 bg-[#741906] text-white py-2 px-4 cursor-pointer font-bold">
          Subscribe
        </button>
      </form>
      {showModal && <Modal enteredEmail={enteredEmail} closeModal={closeModal} />}
    </div>
  );
};

export default Form;
