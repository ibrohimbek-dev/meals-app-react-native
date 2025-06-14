import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ items }) => {
	return items.map((item, key) => (
		<View key={key} style={styles.listItem}>
			<Text style={styles.itemText}>{`${key + 1})`} </Text>
			<Text style={styles.itemText}>{item}</Text>
		</View>
	));
};

export default List;

const styles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "start",
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#e2b497",
	},

	itemText: {
		color: "#351401",
		textAlign: "start",
	},
});
