const FormLabe = ({ id, label }) => {
  return (
    <label htmlFor={id} className="label">
      <span className="label-text capitalize text-md font-bold">{label}</span>
    </label>
  );
};

export default FormLabe;
