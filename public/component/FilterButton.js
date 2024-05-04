import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDiscoverContext } from "../contextapi/useDiscoverContext";

const FilterButton = ({ data, category }) => {
  const { serviceFilter, setServiceFilter } = useDiscoverContext();
  const handleFilter = (value) => {
    setServiceFilter({
      ...serviceFilter,
      [category]: value,
    });
  };
  return (
    <>
      {data.map((filterOption, index) => {
        const active = serviceFilter[category] === filterOption;
        return (
          <TouchableOpacity
            style={[styles.btn, active && { backgroundColor: "#1976d2" }]}
            key={index}
            onPress={() => handleFilter(filterOption)}
          >
            <Text style={[{ color: "#8C8C8C" }, active && { color: "white" }]}>
              {filterOption}
            </Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 10,
    marginRight: 10,
  },
});
export default FilterButton;
