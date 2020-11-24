import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import { useFonts } from "expo-font";
import { AppLoading } from "expo";

export interface Poke {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface State {
  pokeStore: {
    pokemons: Poke[] | undefined;
    prevUrl: "" | undefined;
    nextUrl: "" | undefined;
    loading: boolean;
    nextPokes: Poke[] | undefined;
    pokemon: [
      {
        id: number;
        color: string;
        types: Types[];
      }
    ];
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
