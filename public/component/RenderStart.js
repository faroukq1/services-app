import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const RenderStart = ({ value }) => {
  const starts = Array(5).fill();
  return starts.map((_, index) => {
    return (
      <Icon
        key={index}
        name="star"
        size={20}
        color={index < value ? "orange" : "grey"}
      />
    );
  });
};

export default RenderStart;
