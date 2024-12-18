import { MoyenEnfant } from "./MoyenEnfant";
import { GrandEnfantProps } from "./typescript/TypesProps";


export const GrandEnfant: React.FC<GrandEnfantProps> = ({
  couleur,
  setCouleur,
}) => {
  return (
    <div>
      <div className="border bg-slate-900 my-6 p-3 rounded">
        <h2 className="text-xl font-medium my-6">GrandEnfant </h2>
      </div>
      <MoyenEnfant couleur={couleur} setCouleur={setCouleur} />
    </div>
  );
};
