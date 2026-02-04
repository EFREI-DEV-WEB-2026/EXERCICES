import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  // 1. Déclarer l'état pour le texte de la note (ex: note)
  // 2. Déclarer l'état pour l'heure de la sauvegarde (ex: lastSaved)

  // --- VOTRE CODE ICI (useEffect) ---
  // Objectif : 
  // - Surveiller les changements de la note
  // - Sauvegarder dans le localStorage sous la clé "autosave_note"
  // - Mettre à jour l'heure de sauvegarde



  return (
    <div className="container">
      <h1>Notepad Auto-save</h1>
      
      <textarea
        className="textarea"
        placeholder="Tapez votre texte ici, il sera sauvegardé automatiquement..."
        // 3. Lier l'état et l'événement de saisie ici
      />

      <div className="status">
        <span className="status-icon">💾</span>
        {/* 4. Afficher le message de sauvegarde dynamique ici */}
        En attente de saisie...
      </div>
    </div>
  );
}