import { PetitEnfant } from "./PetitEnfant";
import { GrandEnfantProps } from "./typescript/TypesProps";

export const MoyenEnfant: React.FC<GrandEnfantProps> = ({ couleur, setCouleur }) => {
  return (
    <div>
      <div className="border bg-slate-900 my-6 p-3 rounded">
        <h2 className="text-lg font-normal my-6">MoyenEnfant </h2>
      </div>
      <PetitEnfant couleur={couleur} setCouleur={setCouleur} />
    </div>
  );
};
