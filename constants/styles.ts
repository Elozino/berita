import { StyleSheet } from "react-native";
import { useTheme } from "../utils/theme";

export const globalStyles = StyleSheet.create({
  // BUTTON
  button: {
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  // INPUT
  searchWrapper: {
    flexDirection: "row",
    borderRadius: 50,
    padding: 7,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    borderRadius: 50,
    padding: 7,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  inputField: {
    flex: 1
  },
});
