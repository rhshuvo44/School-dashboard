const InputText = ({
  name,
  type,
  classname,
  id,
  label,
  placeholder,
  val,
  onCh,
  onBl,
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-md font-bold">{label}</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onCh}
        onBlur={onBl}
        value={val}
        placeholder={placeholder}
        className={`input input-bordered w-full ${classname}`}
      />
    </div>
  );
};

export default InputText;
