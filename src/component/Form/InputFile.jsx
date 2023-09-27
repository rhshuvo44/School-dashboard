import FormLabe from "./FormLabe";

const InputFile = ({ name, classname, id, label, val, onCh, onBl }) => {
  return (
    <div className="form-control w-full">
      <FormLabe id={id} label={label} />

      <input
        id={id}
        name={name}
        onChange={onCh}
        onBlur={onBl}
        value={val}
        type="file"
        className={`file-input bg-transparent w-full max-w-xs ${classname}`}
      />
    </div>
  );
};

export default InputFile;
