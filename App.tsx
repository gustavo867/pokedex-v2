import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import Pokemon from "./src/types/Pokemon";

export interface State {
  pokeStore: {
    pokemons: Pokemon[] | undefined;
    loading: boolean;
    pokemon: Pokemon;
  };
}

export default function App() {
  const [fontsLoaded] = useFonts({
    SF_Bold: require("./src/assets/fonts/sf-pro-display-bold.ttf"),
    SF_Medium: require("./src/assets/fonts/sf-pro-display-medium.ttf"),
    SF_Regular: require("./src/assets/fonts/sf-pro-display-regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Routes />
    </Provider>
  );
}
