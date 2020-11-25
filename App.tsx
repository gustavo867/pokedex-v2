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
  types: Types[];
  id: number;
}

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Abilities {
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

export interface Stats {
  base_stat: number;
  stat: {
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
    pokemon: {
      id: number;
      name: string;
      types: Types[];
      height: number;
      weight: number;
      abilities: Abilities[];
      base_experience: number;
      stats: Stats[];
    };
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
