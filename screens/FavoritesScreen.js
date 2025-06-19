import React from "react";
import MealsList from "../components/MeasList/MealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

// ===== REDUX IMPORTS =====
import { useSelector } from "react-redux";

// ===== CONTEXT IMPORTS (COMMENTED OUT) =====
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
	// ===== REDUX VERSION =====
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
	const favoriteMeals = MEALS.filter((meal) =>
		favoriteMealIds.includes(meal.id)
	);

	// ===== CONTEXT VERSION (COMMENTED OUT) =====
	// const favoriteMealsContext = useContext(FavoritesContext);
	// const favoriteMeals = MEALS.filter((meal) =>
	//   favoriteMealsContext.ids.includes(meal.id)
	// );

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite meals yet.</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});
