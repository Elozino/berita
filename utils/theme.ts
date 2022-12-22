import { COLORTHEME } from "../constants/colors";

export const useTheme = (mode: Boolean) => {
  if (mode) {
    return COLORTHEME.dark;
  } else {
    return COLORTHEME.light;
  }
};
