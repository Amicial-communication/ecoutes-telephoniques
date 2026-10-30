/* =====================================================================
   Écoutes téléphoniques — configuration Amicial
   C'est le SEUL fichier à modifier. Ne contient aucun secret :
   il peut être publié sur GitHub sans risque.
   ===================================================================== */
window.AMICIAL_ECOUTES_CONFIG = {

  // ---- Connexion Microsoft 365 -----------------------------------------
  tenantId: "amicial.fr",               // domaine Microsoft 365 d'Amicial (ou ID de l'annuaire)
  clientId: "",                         // ⬅ À COLLER : « ID d'application (client) » transmis par le SI
                                        //   Tant qu'il est vide, l'outil fonctionne en mode local (test).

  // ---- Site SharePoint qui héberge les listes ---------------------------
  siteHostname: "assoamicial.sharepoint.com",
  sitePath: "/sites/A-COMPLETER",       // ⬅ ex : "/sites/Qualite" (partie de l'adresse du site après le nom de domaine)

  // ---- Noms des listes (créées automatiquement par l'assistant) ----------
  listName: "Ecoutes telephoniques",
  refLists: { agences: "Ref Agences", agents: "Ref Agents", motifs: "Ref Motifs" },

  // ---- Paramètres -------------------------------------------------------
  seuilDecrochageSec: 15,               // objectif de délai de décrochage (secondes)
  logoUrl: ""                           // ex : "logo-amicial.svg" (fichier déposé à côté de index.html)
};
