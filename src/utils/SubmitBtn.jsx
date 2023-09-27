const SubmitBtn = ({ className, children, type }) => {
  return (
    <button
      className={`btn-common bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ${className}`}
      type={type}
    >
      {children}
      <span></span>
    </button>
  );
};

export default SubmitBtn;
