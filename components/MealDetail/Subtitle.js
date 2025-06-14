import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subtitleContainer: {
		margin: 4,
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		textAlign: "center",
		borderBottomColor: "#e2b497",
		borderBottomWidth: 1,
	},

	subtitle: {
		color: "#e2b497",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
