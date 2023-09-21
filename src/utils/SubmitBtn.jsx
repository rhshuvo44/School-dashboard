
const SubmitBtn = ({ children }) => {
  return (
    <button
      className="btn-common bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
      type="submit"
    >
      {children}
      <span></span>
    </button>
  );
};

export default SubmitBtn;
