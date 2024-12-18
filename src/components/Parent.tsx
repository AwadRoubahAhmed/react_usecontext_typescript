import { useState } from "react";
import { GrandEnfant } from "./GrandEnfant";

export const Parent = () => {
  //State;
  const [couleur, setCouleur] = useState<string>("");
  return (
    <div>
      <div className="border bg-slate-900 my-6 p-3 rounded">
        <h2 className="text-2xl font-semibold my-6">Papa a dit: </h2>
        <input
          type="text"
          placeholder="Couleur du Tshirt..."
          value={couleur}
          onChange={(event) => setCouleur(event.target.value)}
          className="input input-bordered w-full max-w-xs mb-4"
        />
      </div>
      <GrandEnfant couleur={couleur} setCouleur={setCouleur} />
    </div>
  );
};
