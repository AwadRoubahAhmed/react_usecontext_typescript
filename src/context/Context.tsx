import { createContext } from "react";
import { EnfantsProps } from "../components/typescript/TypesProps";

// 1. La création du Context;
export const CouleurContext = createContext<EnfantsProps>({
  couleur: "",
  setCouleur: () => {},
});

// 2. L'installation du Context provider => vers Composant Provider Parent;
// 3. La comsommation du Context => vers Composant Enfants;;
