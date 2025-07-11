import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ icon, color, onPress }) => {
	return (
		<Pressable
			android_ripple={{ color: "gray" }}
			onPressIn={onPress}
			style={({ pressed }) => pressed && styles.pressed}
		>
			<Ionicons name={icon} size={24} color={color} />
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});
