/* =====================================================================
   Écoutes téléphoniques — configuration Amicial
   C'est le SEUL fichier à modifier. Ne contient aucun secret :
   il peut être publié sur GitHub sans risque.
   ===================================================================== */
window.AMICIAL_ECOUTES_CONFIG = {

  // ---- Connexion Microsoft 365 -----------------------------------------
  tenantId: "amicial.fr",               // domaine Microsoft 365 d'Amicial (ou ID de l'annuaire)
  clientId: "79ce6233-3131-474b-8fd6-c0ed331b3ec0
 ",                         // ⬅ À COLLER : « ID d'application (client) » transmis par le SI
                                        //   Tant qu'il est vide, l'outil fonctionne en mode local (test).

  // ---- Site SharePoint qui héberge les listes ---------------------------
  siteHostname: "assoamicial.sharepoint.com",
  sitePath: "/sites/Communication",       // ⬅ ex : "/sites/Qualite" (partie de l'adresse du site après le nom de domaine)

  // ---- Noms des listes (créées automatiquement par l'assistant) ----------
  listName: "Ecoutes telephoniques",
  refLists: { agences: "Ref Agences", agents: "Ref Agents", motifs: "Ref Motifs" },


  // ---- Listes de secours pour le MODE LOCAL (en attendant SharePoint) -------
  // Pas de noms d'agents ici : ce fichier est public sur GitHub.
  departements: ["01 – Ain", "04 – Alpes-de-Haute-Provence", "05 – Hautes-Alpes", "13 – Bouches-du-Rhône", "16 – Charente", "42 – Loire", "46 – Lot", "64 – Pyrénées-Atlantiques", "73 – Savoie", "75 – Paris", "77 – Seine-et-Marne", "79 – Deux-Sèvres", "84 – Vaucluse", "91 – Essonne", "94 – Val-de-Marne"],
  agences: [
    {nom:"Avignon", departement:"84 – Vaucluse"},
    {nom:"Carpentras", departement:"84 – Vaucluse"},
    {nom:"Orange", departement:"84 – Vaucluse"},
    {nom:"Vaison-la-Romaine", departement:"84 – Vaucluse"},
    {nom:"Apt", departement:"84 – Vaucluse"},
    {nom:"Pertuis", departement:"84 – Vaucluse"},
    {nom:"Cadenet", departement:"84 – Vaucluse"},
    {nom:"L'Isle-sur-la-Sorgue", departement:"84 – Vaucluse"},
    {nom:"Cavaillon", departement:"84 – Vaucluse"},
    {nom:"Marseille Sud", departement:"13 – Bouches-du-Rhône"},
    {nom:"Marseille Nord", departement:"13 – Bouches-du-Rhône"},
    {nom:"Arles", departement:"13 – Bouches-du-Rhône"},
    {nom:"Gap", departement:"05 – Hautes-Alpes"},
    {nom:"Manosque", departement:"04 – Alpes-de-Haute-Provence"},
    {nom:"Saint-Étienne", departement:"42 – Loire"},
    {nom:"Viriat", departement:"01 – Ain"},
    {nom:"Modane", departement:"73 – Savoie"},
    {nom:"Saint-Jean-de-Luz", departement:"64 – Pyrénées-Atlantiques"},
    {nom:"Soyaux", departement:"16 – Charente"},
    {nom:"Niort", departement:"79 – Deux-Sèvres"},
    {nom:"Vayrac", departement:"46 – Lot"},
    {nom:"Ballainvilliers", departement:"91 – Essonne"},
    {nom:"Le Perreux", departement:"94 – Val-de-Marne"},
    {nom:"Fresnes", departement:"94 – Val-de-Marne"},
    {nom:"Vitry", departement:"94 – Val-de-Marne"},
    {nom:"Chennevières/ Villiers", departement:"94 – Val-de-Marne"},
    {nom:"Pays de l'Ourcq", departement:"77 – Seine-et-Marne"},
    {nom:"Provins", departement:"77 – Seine-et-Marne"},
    {nom:"Vaires", departement:"77 – Seine-et-Marne"},
    {nom:"Paris 15ème", departement:"75 – Paris"}
  ],

  // ---- Paramètres -------------------------------------------------------
  seuilDecrochageSec: 15,               // objectif de délai de décrochage (secondes)
  logoUrl: ""                           // ex : "logo-amicial.svg" (fichier déposé à côté de index.html)
};
