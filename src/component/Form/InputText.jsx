import FormLabe from "./FormLabe";

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
      <FormLabe id={id} label={label} />
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
