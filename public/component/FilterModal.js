import SortServices from "./SortServices";
import FilterServices from "./FilterServices";

const FilterModal = ({ type }) => {
  if (type === "sort") return <SortServices />;
  if (type === "filter") return <FilterServices />;
  return null;
};

export default FilterModal;
