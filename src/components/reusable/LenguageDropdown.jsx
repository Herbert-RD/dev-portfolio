import { Component } from "./LenguageDropdown.js";
import { useContext } from "react";
import { TiWorld } from "react-icons/ti";
import { lenguageContext } from "../../App.js";

export default function LenguageDropdown() {
  const lenguageWrapper = useContext(lenguageContext);
  return (
    <Component
      onClick={() =>
        lenguageWrapper.setLenguage(
          lenguageWrapper.lenguage == "en" ? "pt" : "en"
        )
      }
    >
      <TiWorld />
      Teste
      <div class="dropdown-wrapper">
        <button>Dropdown 1</button>
        <button>Dropdown 2</button>
      </div>
    </Component>
  );
}
