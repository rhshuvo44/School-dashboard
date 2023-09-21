const InputTextarea = ({
  name,
  classname,
  id,
  label,
  placeholder,
  val,
  onCh,
  onBl,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-md font-bold">{label}</span>
      </label>
      <textarea
        className={`textarea textarea-bordered h-44 ${classname}`}
        id={id}
        name={name}
        onChange={onCh}
        onBlur={onBl}
        value={val}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default InputTextarea;
