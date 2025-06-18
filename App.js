import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#351401",
					elevation: 0,
					shadowOpacity: 0,
					borderBottomWidth: 0,
				},
				headerTintColor: "white",
				sceneStyle: {
					backgroundColor: "#3f2f25",
				},
				drawerStyle: {
					backgroundColor: "#351401",
					width: "80%",
				},
				drawerItemStyle: {
					marginHorizontal: 0,
					marginVertical: 2,
					borderRadius: 4,
				},
				drawerInactiveTintColor: "white",
				drawerInactiveBackgroundColor: "#5c2c0d",
				drawerActiveTintColor: "black",
				drawerActiveBackgroundColor: "#f8d9c9",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					title: "Favorites",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />

			{/* <FavoritesContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: "#351401" },
							headerTintColor: "white",
							contentStyle: { backgroundColor: "#3f2f25" },
						}}
					>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
						/>
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							options={{
								title: "About the Meal!",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavoritesContextProvider> */}
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
