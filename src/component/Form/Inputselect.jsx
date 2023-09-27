import Select from "react-select";
import FormLabe from "./FormLabe";
const Inputselect = ({ id, label, ...rest }) => {
  return (
    <div className="form-control w-full ">
      <FormLabe id={id} label={label} />
      <Select {...rest} />
    </div>
  );
};

export default Inputselect;
