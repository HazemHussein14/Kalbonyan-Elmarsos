const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 py-10 mx-auto max-w-contentContainer xl:py-32"
    >
      <p className="flex items-center text-lg font-semibold tracking-wide font-titleFont text-textGreen">
        04. What’s Next?
      </p>
      <h2 className="text-5xl font-semibold font-titleFont">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I would be delighted to connect with you and discuss potential
        collaborations or answer any questions you may have. Let’s create
        something amazing together!
      </p>
      <a href="mailto:hazimhussein159@gmail.com">
        <button className="w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textGreen font-titleFont text-textGreen hover:bg-hoverColor">
          Contact Me
        </button>
      </a>
    </section>
  );
};
export default Contact;
