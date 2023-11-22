import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableHighlight, FlatList } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import { fetchData } from "../../data/TheMealDB";

export default function RecipeScreen(props) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const { route } = props;
    const { params } = route;
    const { item } = params;
    handleFetchData(item);
  }, [props.route]);

  const handleFetchData = async (item) => {
    try {
      const data = await fetchData(`lookup.php?i=${item}`);
      setRecipe(data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const { navigation } = props;
  const category = recipe ? recipe.strCategory : "";
  const title = recipe ? recipe.strMeal : "";

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {recipe && (
        <View style={{ margin: 60 }}>
          <View style={styles.infoRecipeContainer}>
            <Text style={[styles.infoRecipeName, { marginTop: 10 }]}>{title}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.category}>{category}</Text>
              <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={[recipe]}
                renderItem={({ item }) => (
                  <TouchableHighlight>
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                    </View>
                  </TouchableHighlight>
                )}
                keyExtractor={(item) => item.idMeal}
              />
              <Text style={styles.instruction}>{recipe.strInstructions}</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
