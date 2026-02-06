// src/api.js

// On récupère l'URL du backend depuis l'environnement
const API_URL = import.meta.env.VITE_API_URL;

// Fonction pour tester la connexion au backend
export const fetchTest = async () => {
  try {
    const res = await fetch(`${API_URL}/api/test`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Erreur API:", err);
    return { message: "Erreur de connexion au backend" };
  }
};
