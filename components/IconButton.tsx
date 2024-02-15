import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export interface IconButtonButtonProps {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
}

const IconButton: FC<IconButtonButtonProps> = ({ label, icon, onPress }) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});

export default IconButton;
