import { isString } from "lodash";

export const getExtFile = (file) => {
  if (!isString(file)) return "";

  return file?.split(".").pop().toLowerCase();
};

export const mediaSrc = (src) =>
  `${process.env.REACT_APP_SERVER_PUBLIC_URL}${src || ""}`;
