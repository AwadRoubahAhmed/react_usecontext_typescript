import { useContext } from "react";
import { CouleurContext } from "../context/Context";

export const PetitEnfant: React.FC = () => {
  // 3. La comsommation du Context
  const { couleur, setCouleur } = useContext(CouleurContext);

  //Comportement;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouleur(event.target.value);
  };

  //Affichage(render);
  return (
    <div
      className="border bg-slate-900 my-6 p-3 rounded"
      style={{ background: couleur }}
    >
      <h2 className="text-base font-light my-6">PetitEnfant: {couleur} </h2>
      <p className="text-base font-extralight my-6">Mais il préfère porter:</p>
      <input
        type="text"
        placeholder="Couleur du Tshirt..."
        value={couleur}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs mb-4"
      />
    </div>
  );
};
