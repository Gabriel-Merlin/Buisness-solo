# ETAPES — Apprentissage et progression

> Ce fichier est ta carte de progression. Tous les jalons techniques, business et personnels du projet, dans l'ordre. Coche les cases au fur et à mesure. Mets à jour les compétences quand tu les acquiers.
>
> **Objectif final** : maîtriser le modèle "build + retainer" pour signer des clients à 700 € + 70 €/mois récurrent au début, et monter à 1 500 € + 150 €/mois à maturité, en 100 % halal.

---

## Pivot stratégique (suite au retour du père développeur web)

**Insight clé :** les petits commerçants ne veulent pas un site sophistiqué. Ils veulent **être trouvés sur Google** et **recevoir des appels**. Le dashboard et le chatbot intéressent ~20 % du marché (restaurants avec réservations, coachs avec rendez-vous, artisans avec devis), pas la majorité.

**Conséquences sur l'offre :**
- L'offre par défaut devient le **"Pack Présence Locale"** : site vitrine simple + Google Business Profile + formulaire qui envoie un email au client.
- Le dashboard admin reste un **module premium** pour les 20 % qui en ont vraiment besoin (ou pour l'apprentissage personnel).
- Le chatbot devient une **option** vendue séparément, pas l'argument central.
- Le **positionnement marketing** change : "j'aide les commerces de [zone] à être trouvés sur Google et à recevoir plus d'appels", au lieu de "je crée des sites IA + dashboards".

**Nouvelle compétence prioritaire :** Google Business Profile (gratuit, énorme impact réel, ~1 h pour apprendre l'essentiel).

---

## Sommaire

1. [Vue d'ensemble](#vue-densemble)
2. [Phase 0 — Setup (terminé)](#phase-0--setup)
3. [Phase 1 — Démo Boucherie Al-Baraka (en cours)](#phase-1--démo-boucherie-al-baraka)
4. [Phase 1.5 — Projet pilote gratuit](#phase-15--projet-pilote-gratuit-avant-les-18-ans)
5. [Phase 2 — Démo n°2 et n°3](#phase-2--démos-supplémentaires)
5. [Phase 3 — Portfolio personnel et profils pro](#phase-3--portfolio-personnel)
6. [Phase 4 — Prospection et premiers clients](#phase-4--prospection-et-premiers-clients)
7. [Phase 5 — Retainer et revenus récurrents](#phase-5--retainer-et-revenus-récurrents)
8. [Compétences techniques](#compétences-techniques)
9. [Compétences business](#compétences-business)
10. [Compétences personnelles](#compétences-personnelles)

---

## Vue d'ensemble

| Phase | Objectif | Durée estimée | Statut |
|---|---|---|---|
| 0 | Setup | 1 jour | ✅ Terminé |
| 1 | Démo Boucherie Al-Baraka | 10-12 jours | 🟡 En cours |
| 1.5 | Projet pilote gratuit (vrai client, avant 18 ans) | 2-3 semaines | ⏳ À venir |
| 2 | 2 autres démos | 2-3 semaines | ⏳ À venir |
| 3 | Portfolio personnel + profils | 1 semaine | ⏳ À venir |
| 4 | Prospection + premier client payant | 1-3 mois | ⏳ À venir |
| 5 | Modèle retainer | Continu | ⏳ À venir |

---

## Phase 0 — Setup

- [x] Compte GitHub configuré
- [x] Mac configuré : Git, VS Code, Command Line Tools
- [x] Compte Supabase créé
- [x] Compte Netlify créé
- [x] Dossier de travail local créé
- [x] Premier repo GitHub créé et lié en local

---

## Phase 1 — Démo Boucherie Al-Baraka

### Jour 1 — Contenu rédactionnel ✅
- [x] Page Accueil (titre, sous-titre, à propos, features, infos)
- [x] Page Notre viande (4 sections)
- [x] Page Nos produits (5 catégories avec prix)
- [x] Page Contact (intro, encart Aïd, coordonnées)
- [x] PDF récap des consignes rédactionnelles

### Jour 2-3 — Structure HTML/CSS ✅
- [x] Arborescence du projet
- [x] Design system CSS (palette vert/blanc cassé/or, Playfair + Inter)
- [x] Navigation responsive avec menu burger mobile
- [x] Page Accueil complète
- [x] Page Notre viande
- [x] Page Nos produits
- [x] Page Contact (formulaire + encart Aïd)
- [x] Footer cohérent sur les 4 pages
- [x] Config Netlify + `.gitignore`
- [x] Déploiement sur GitHub Pages
- [x] Workflow GitHub Actions pour auto-déploiement

### Jour 4 — Supabase ✅
- [x] Projet Supabase créé
- [x] Table `contact_submissions` configurée (nullable, types)
- [x] RLS activé + policy `Allow anonymous inserts`
- [x] Formulaire câblé à l'API REST Supabase
- [x] Default value `now()` sur `created_at`
- [x] Test end-to-end réussi (soumission visible dans Supabase)

### Jour 5 — Chatbot FAQ
- [ ] Compte Chatbase créé (ou choix API Claude)
- [ ] Knowledge base rédigée (~20 questions/réponses)
- [ ] Widget intégré sur les 4 pages
- [ ] Test sur 10 questions différentes
- [ ] Remplacement du stub par le vrai widget

### Jour 6 — Polish
- [ ] Favicon créé et intégré
- [ ] Balises meta complètes sur chaque page (titre, description, OG)
- [ ] Test responsive sur vrais mobiles (iPhone + Android)
- [ ] Score PageSpeed Insights > 90 (desktop) et > 80 (mobile)
- [ ] Image hero locale (pas dépendante d'Unsplash)
- [ ] Vérification accessibilité basique (alt text, contraste)
- [ ] Renommage du repo `Buisness-solo` → `business-solo` (coquille)

### Jour 7 — Notification email + Google Business Profile (priorité après pivot)
- [x] Compte Resend créé (envoi d'emails transactionnels gratuit)
- [x] Edge Function Supabase déployée (`send-contact-notification` / `dynamic-api`)
- [x] Database Webhook configuré (INSERT sur `contact_submissions`)
- [x] Email reçu en moins d'1 min côté boîte mail (testé en bout-en-bout)
- [ ] Création d'une fiche Google Business Profile (test sur boutique fictive)
- [ ] Comprendre les leviers : photos, posts, avis clients, horaires, attributs
- [ ] Notes sur ce que tu apprends pour le proposer à tes futurs clients

### Jour 8-10 — Mini-dashboard admin (module premium / apprentissage perso)
- [ ] Comprendre Supabase Auth (concepts : utilisateurs, sessions, JWT)
- [ ] Créer une page `admin/login.html` avec formulaire de connexion
- [ ] Créer une page `admin/index.html` (dashboard) protégée par auth
- [ ] Lecture des soumissions du formulaire (GET vers Supabase)
- [ ] Affichage en tableau paginé
- [ ] Marquer une soumission comme "traitée" (ajout colonne `status`, UPDATE)
- [ ] Recherche / filtrage par sujet
- [ ] Export CSV de toutes les soumissions
- [ ] Bouton "Déconnexion"
- [ ] Lien discret depuis le footer du site public

### Jour 11 — Présentation du projet
- [ ] README projet final avec contexte, stack, captures
- [ ] 5 captures d'écran soignées (accueil, viande, produits, contact, admin)
- [ ] Lien live bien visible
- [ ] Description GitHub du repo remplie + topics
- [ ] Partage à 3 proches pour retours

---

## Phase 1.5 — Projet pilote gratuit (avant les 18 ans)

> Stratégie validée : faire un site gratuit pour un commerçant que tu connais déjà (par exemple un restaurateur chez qui tu manges régulièrement). Avant les 18 ans, c'est légal car aucune rémunération n'est échangée. Objectif : tester tes compétences en conditions réelles, gagner un témoignage, et arriver à la déclaration en micro-entreprise avec un cas concret à montrer.

- [ ] Choix du commerçant cible (restaurant connu, contact direct)
- [ ] Premier RDV informel (autour d'un repas) pour proposer l'idée
- [ ] Cadrage clair par écrit avant de démarrer : scope, durée, contreparties (témoignage, photos)
- [ ] Recueil des contenus du client (textes, photos, infos pratiques)
- [ ] Construction du site (réutilise le design system de la démo Boucherie)
- [ ] Configuration Google Business Profile du client
- [ ] Connexion d'un nom de domaine si le client en a un (sinon URL Pages suffit)
- [ ] Formation flash du client (15 min) sur comment lire les messages reçus
- [ ] Livraison officielle avec petit document récapitulatif
- [ ] Obtention d'un témoignage écrit du client (utilisable sur portfolio)
- [ ] Photos avant/après du site pour le portfolio
- [ ] Pas d'engagement de maintenance illimité : limites claires posées dès le début

---

## Phase 2 — Démos supplémentaires

### Démo 2 — Coach sportif (idée par défaut, à valider)
- [ ] Choix du secteur final
- [ ] Rédaction du contenu (5 pages)
- [ ] Construction HTML/CSS (réutilise le design system)
- [ ] Système de prise de rendez-vous simple (calendrier)
- [ ] Espace client (auth, accès à ses programmes)
- [ ] Déploiement
- [ ] README projet

### Démo 3 — Restaurant halal (idée par défaut, à valider)
- [ ] Choix du secteur final
- [ ] Rédaction du contenu
- [ ] Menu interactif (filtres : entrées / plats / desserts / végétarien)
- [ ] Système de réservation de table
- [ ] Admin pour gérer les réservations
- [ ] Déploiement
- [ ] README projet

---

## Phase 3 — Portfolio personnel

- [ ] Choix d'un nom de domaine (idéalement prénom-nom.fr ou similaire)
- [ ] Achat du domaine (~12 €/an)
- [ ] Page d'accueil portfolio (présentation + 3 projets)
- [ ] Page "À propos" personnelle
- [ ] Page "Services" avec offres claires (vitrine, vitrine + dashboard, retainer)
- [ ] Page "Contact" professionnelle
- [ ] Mise en ligne du portfolio
- [ ] Connexion du domaine perso à GitHub Pages ou Netlify

### Profils pro
- [ ] Profil LinkedIn propre (photo, bio, expérience, lien portfolio)
- [ ] Profil Malt complet
- [ ] Profil Comeup (ex-5euros.com)
- [ ] Profil Codeur.com (optionnel)
- [ ] Compte Twitter/X pro (optionnel mais utile pour visibility)

---

## Phase 4 — Prospection et premiers clients

### Préparation (le jour de tes 18 ans)
- [ ] Déclaration micro-entreprise sur autoentrepreneur.urssaf.fr
- [ ] Code APE choisi (6201Z ou 6202A)
- [ ] Régime profession libérale
- [ ] Option versement libératoire (à voir avec parents)
- [ ] Compte bancaire pro séparé (néobanque gratuite)
- [ ] Outil de facturation choisi (Henrri, Tiime, ou Excel simple au début)
- [ ] Modèle de devis prêt
- [ ] Modèle de facture prêt
- [ ] CGV (Conditions Générales de Vente) basiques rédigées

### Prospection
- [ ] Liste de 30 commerces locaux (Châtillon + alentours) avec site moche/absent
- [ ] Template d'email de prospection rédigé (audit gratuit en accroche)
- [ ] Personnalisation pour chaque envoi (jamais de copier-coller pur)
- [ ] Envoi de 5 emails / jour pendant 6 jours
- [ ] Suivi des réponses dans un Notion ou Trello
- [ ] Relance après 5 jours si pas de réponse

### Premier client
- [ ] Premier RDV téléphone / visio (script préparé d'avance)
- [ ] Premier devis envoyé
- [ ] Premier acompte reçu (généralement 30-50 % à la commande)
- [ ] Premier projet livré dans les temps
- [ ] Premier paiement complet reçu
- [ ] Premier témoignage client demandé et publié sur portfolio

---

## Phase 5 — Retainer et revenus récurrents

- [ ] Offre retainer formalisée (forfait mensuel, scope clair)
- [ ] Premier retainer proposé à un client existant
- [ ] Premier retainer signé
- [ ] Mise en place d'un système de facturation récurrente automatique
- [ ] Mise en place de la maintenance préventive mensuelle (cron / rappel)
- [ ] 3 clients en retainer simultanés (premier palier de revenus stables)
- [ ] 10 clients en retainer simultanés (= ~800 €/mois passif)

---

## Compétences techniques

> Coche au fur et à mesure de l'acquisition. Si une case est cochée, tu dois pouvoir l'expliquer à quelqu'un d'autre.

### Bases du web
- [x] HTML : structure d'une page (header, main, footer, sections)
- [x] HTML : formulaires (inputs, select, textarea, validation native)
- [x] CSS : sélecteurs, propriétés, cascade
- [x] CSS : Flexbox et Grid
- [x] CSS : responsive design (media queries)
- [x] CSS : variables (custom properties)

### JavaScript
- [x] Manipulation du DOM (querySelector, addEventListener)
- [x] Événements (click, submit)
- [x] Requêtes HTTP avec fetch()
- [x] async / await
- [x] Gestion des erreurs (try / catch)
- [ ] Manipulation d'arrays (map, filter, reduce)
- [ ] Modules ES6 (import / export)
- [ ] localStorage / sessionStorage
- [ ] Frameworks légers (Astro recommandé après les bases)

### Backend / Base de données
- [x] Concept de base de données relationnelle
- [x] Tables, colonnes, types de données (text, uuid, timestamptz)
- [x] Row Level Security (RLS) et policies Supabase
- [x] API REST (POST, GET, PATCH, DELETE)
- [x] Authentification par clé API (anon vs service_role)
- [ ] Authentification utilisateur (Supabase Auth, JWT)
- [ ] Requêtes SQL simples (SELECT, INSERT, UPDATE, DELETE)
- [ ] Relations entre tables (foreign keys)
- [ ] Triggers et fonctions PostgreSQL
- [ ] Stockage de fichiers (Supabase Storage)

### Outils de développement
- [x] Terminal / ligne de commande basique
- [x] Git : init, add, commit, push, pull
- [x] Git : branches, merge
- [ ] Git : résoudre un conflit
- [x] GitHub : repos, README, Issues
- [ ] GitHub : Pull Requests, code review
- [x] GitHub Actions : workflows basiques
- [x] VS Code : édition, extensions, Live Server
- [ ] DevTools du navigateur (Console, Network, Elements)
- [ ] Debugging JavaScript (breakpoints)

### Déploiement et hébergement
- [x] GitHub Pages (sites statiques)
- [ ] Netlify (sites statiques + fonctions serverless)
- [ ] Vercel (alternative)
- [ ] Domaine personnalisé (achat + DNS)
- [ ] HTTPS (Let's Encrypt)
- [ ] CDN (concept)

### IA et intégrations
- [x] Utilisation de Claude / ChatGPT comme assistant de dev
- [ ] API Claude (Anthropic SDK) en production
- [ ] Chatbots no-code (Chatbase, Voiceflow)
- [ ] Webhooks et automatisations (Zapier, n8n, Make)
- [ ] Emails transactionnels (Resend, SendGrid)

### Visibilité locale (priorité après pivot)
- [ ] Google Business Profile : création, optimisation, photos, posts
- [ ] Gestion des avis clients (demande, réponses)
- [ ] Référencement local basique (mots-clés "boucher halal Paris 18e")
- [ ] Outils gratuits : Google Search Console, Google Trends
- [ ] Compréhension du parcours client réel : qui cherche quoi, où, comment

### Qualité et performance
- [ ] Lighthouse / PageSpeed Insights
- [ ] SEO basique (meta tags, sitemap, robots.txt)
- [ ] Accessibilité (a11y) — alt text, contraste, navigation clavier
- [ ] Optimisation d'images (WebP, lazy loading)
- [ ] Tests manuels structurés
- [ ] Sécurité basique (HTTPS, headers, RLS, env vars)

---

## Compétences business

### Rédaction et communication
- [x] Rédaction de contenus web (arguments forts en premier, punchlines, trios rythmés)
- [x] Vocabulaire métier (vérifier avant d'écrire — ex : fournisseur ≠ certificateur)
- [x] Orthographe cohérente sur tout un site
- [ ] Rédaction d'un email de prospection personnalisé
- [ ] Rédaction d'un devis clair et professionnel
- [ ] Rédaction d'une facture
- [ ] Rédaction de CGV / conditions générales
- [ ] Pitch oral de 30 secondes ("elevator pitch")
- [ ] Présentation orale d'un projet (10 min)

### Compréhension client
- [ ] Faire un audit gratuit d'un site existant
- [ ] Identifier les besoins réels derrière une demande
- [ ] Proposer 2-3 options (basique / recommandé / premium)
- [ ] Détecter un client toxique avant signature
- [ ] Demander un témoignage en fin de mission

### Tarification et négociation
- [x] Comprendre la différence one-shot vs récurrent
- [ ] Construire une grille de tarifs claire
- [ ] Annoncer son prix sans hésiter
- [ ] Refuser de baisser ses prix injustement
- [ ] Vendre la valeur, pas l'effort

### Gestion juridique et administrative
- [ ] Créer sa micro-entreprise
- [ ] Comprendre les seuils (CA, TVA, charges sociales)
- [ ] Déclarer son CA chaque mois/trimestre
- [ ] Comprendre la zakat sur ses revenus pro

### Marketing
- [ ] Construire une présence LinkedIn
- [ ] Construire une présence X (Twitter) / autres
- [ ] Demander et publier des témoignages clients
- [ ] Cas client : transformer un projet en étude détaillée

---

## Compétences personnelles

> Plus important que la technique sur le long terme.

### Éthique et discipline
- [x] Identifier ce qui est haram dans un business (riba, gharar, etc.)
- [x] Vérifier la légalité d'une action avant de l'exécuter
- [ ] Refuser un client/projet non halal même tentant financièrement
- [ ] Payer ses impôts sans tricher
- [ ] Honorer ses engagements même quand ça arrange pas

### Gestion du temps
- [ ] Bloquer 2h/jour pour le travail business
- [ ] Distinguer "important" de "urgent"
- [ ] Faire des pauses (cerveau ≠ machine)
- [ ] Refuser les distractions Discord/TikTok pendant le travail

### Apprentissage continu
- [x] Demander à Claude / ChatGPT au lieu de bloquer 2h sur un problème
- [ ] Tenir un journal des erreurs (ce qu'on a appris)
- [ ] Lire 1 article tech sérieux par semaine
- [ ] Faire un retour d'expérience mensuel ("qu'est-ce que j'ai appris ce mois ?")

### Posture professionnelle
- [x] Poser les bonnes questions (ex : "est-ce que c'est du travail au noir ?")
- [ ] Reconnaître ses erreurs face à un client
- [ ] Ne pas survendre ses compétences
- [ ] Sous-promettre et sur-livrer ("under-promise, over-deliver")
- [ ] Garder son calme quand un client est désagréable

---

## Rappels stratégiques

**Le piège à éviter** : passer 6 mois à apprendre sans signer un client. La séquence saine est : compétences minimales → premier client → revenus → réinvestir dans plus de compétences.

**Le 80/20** : 20 % des compétences techniques apportent 80 % de la valeur perçue par le client. Maîtrise d'abord ces 20 % avant d'aller chercher l'exotique.

**Le retainer est l'objectif** : un freelance qui ne fait que du one-shot recommence à zéro chaque mois. Un freelance avec 10 clients en retainer dort tranquille.

**100 % halal sur la durée** : refuser un client haram à court terme te protège sur le long terme — réputation, baraka, paix intérieure. C'est rentable même au sens matériel.

**Écouter les pros de l'ancienne génération.** Le retour du père développeur sur "les commerçants veulent juste être trouvés sur Google, pas une stack technologique" vaut 100 articles Medium. Toujours valider les hypothèses avec des gens qui ont vraiment vendu sur ce marché.
