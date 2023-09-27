import FormLabe from "./FormLabe";

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
      <FormLabe id={id} label={label} />
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
