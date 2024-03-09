import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { components } from "react-select";

export const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div style={{ display: "flex" }} onClick={props.innerProps.onClick}>
        {props.selectProps.menuIsOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
    </components.DropdownIndicator>
  );
};
