import { Component } from "./LenguageDropdown.js";
import { useContext } from "react";
import { TiWorld } from "react-icons/ti";
import { lenguageContext } from "../../App.js";

export default function LenguageDropdown() {
  const lenguageWrapper = useContext(lenguageContext);
  return (
    <Component>
      <button id="open-drowndown">
        <TiWorld />
        Lenguage
      </button>

      <div class="options-wrapper">
        <button
          class={lenguageWrapper.lenguage == "pt" ? "selectedLang" : ""}
          onClick={() => lenguageWrapper.setLenguage("pt")}
        >
          Português
        </button>
        <button
          class={lenguageWrapper.lenguage == "en" ? "selectedLang" : ""}
          onClick={() => lenguageWrapper.setLenguage("en")}
        >
          English
        </button>
      </div>
    </Component>
  );
}
