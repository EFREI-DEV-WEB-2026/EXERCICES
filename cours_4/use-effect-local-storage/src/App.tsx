import { useEffect, useState } from "react";
import { Toggle } from "./Toggle";

const STORAGE_KEY = "feature_enabled";

export default function App() {
  const [enabled, setEnabled] = useState(false);

  // Lecture depuis localStorage au montage
  useEffect(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (storedValue !== null) {
      setEnabled(storedValue === "true");
    }
  }, []);

  // Écriture dans localStorage à chaque changement de enabled
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(enabled));
  }, [enabled]);

  return (
    <div>
      <h1>Préférence utilisateur</h1>

      <Toggle
        enabled={enabled}
        onToggle={() => setEnabled((prev) => !prev)}
      />

      <p>État actuel : {enabled ? "Activé" : "Désactivé"}</p>
    </div>
  );
}
