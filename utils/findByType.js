import React from "react";

// Helper for building subcomponents
const findByType = (children, component) => {
  const result = [];
  const type = [component.displayName] || [component.name];

  React.Children.forEach(children, (child) => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });

  return result[0];
};
export default findByType;
