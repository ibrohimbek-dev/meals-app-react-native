import React, { useCallback, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
	// const favoriteMealsContext = useContext(FavoritesContext);

	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
	const dispatch = useDispatch();

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	// const mealsIsFavorite = favoriteMealsContext.ids.includes(mealId);
	const mealsIsFavorite = favoriteMealIds.includes(mealId);

	const changeFavoriteStatusHandler = useCallback(() => {
		if (mealsIsFavorite) {
			dispatch(removeFavorite({ id: mealId }));
		} else {
			dispatch(addFavorite({ id: mealId }));
		}
	}, [mealsIsFavorite, mealId, dispatch]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealsIsFavorite ? "star" : "star-outline"}
						color="white"
						onPress={changeFavoriteStatusHandler}
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatusHandler, mealsIsFavorite]);

	return (
		<ScrollView style={styles.rootContainer}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			</View>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			/>

			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List items={selectedMeal.ingredients} />

					<Subtitle>Steps</Subtitle>
					<List items={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},

	imageContainer: {
		borderRadius: 15,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
		margin: 12,
		backgroundColor: "#f9f9f9",
	},
	image: {
		width: "100%",
		height: 350,
		resizeMode: "cover",
	},

	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},

	detailText: {
		color: "white",
	},

	listOuterContainer: {
		alignItems: "center",
	},

	listContainer: {
		width: "90%",
	},
});
