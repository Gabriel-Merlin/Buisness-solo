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

## Pivot tarifaire (suite au retour d'une IA tierce sur les risques économiques)

**Constat** : la grille initiale (790 / 990 / 1 490 €) sous-pricait gravement le dashboard admin et ne cadrait pas assez le scope du chatbot. Risque de pertes économiques sur les packs 2 et 3.

**Structure révisée Phase 1 :**
- **Pack Présence Locale — 790 €** (site + GBP + email notification)
- **Pack + Assistant IA — 1 090 €** (+ chatbot avec scope strict : ≤ 30 Q/R, données fournies par le client)
- **Pack Suivi Clients — 1 990 €** (+ espace admin avec login, marquage, export CSV)
- **Sur-mesure — dès 2 500 €** (plateformes, intégrations avancées)

**Règle de prudence** : ne pas vendre le Pack Suivi Clients avant d'avoir construit son premier dashboard en interne (sur la démo Boucherie ou un projet pilote).

**Sur l'hébergement** : pour les vrais clients, **toujours acheter un nom de domaine** (~12 €/an refacturable). L'hébergement peut rester gratuit (Netlify/GitHub) techniquement, mais la perception client demande un domaine pro. Pour les clients exigeants ou en Phase 2-3 : passage à un hébergeur payant (o2switch ~7 €/mois, OVH ~3 €/mois).

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
| 0 | Setup technique | 1 jour | ✅ Terminé |
| 1 | Démo Boucherie Al-Baraka | 10-12 jours | 🟡 En cours (Jours 1-4 + 7 faits, reste 5, 6, 8-10) |
| 1.5 | Projet pilote gratuit (site sœur anti-harcèlement) | 2-3 semaines | ⏳ À venir |
| 1.75 | Préparation prospection (avant 24 juin) | En continu | 🟡 En cours (assets prêts, audits à faire) |
| 2 | 2 autres démos | 2-3 semaines | ⏳ À venir |
| 3 | Portfolio personnel + profils | 1 semaine | 🟡 Portfolio en ligne, profils à faire |
| 4 | Prospection + premier client payant | 1-3 mois | ⏳ À venir (post bac) |
| 5 | Modèle retainer | Continu | ⏳ À venir |

### Plan immédiat (les 4 prochaines sessions)
1. **Jour 5 — Chatbot FAQ** (en cours)
2. **Jour 6 — Polish** (favicon, SEO, perf, image hero locale)
3. **Jours 8-10 — Mini-dashboard admin** (Supabase Auth + CRUD complet)
4. **Phase 1.5 — Site sœur** (cadrage + construction + livraison)

### 8 axes de formation (post-démo Boucherie, ordre prioritaire)
1. Comptabilité micro-entreprise (urgent pour le 17 juin)
2. Rédaction commerciale (devis, négo, emails clients)
3. ~~Supabase Auth + Dashboard~~ (déjà couvert par Jours 8-10)
4. GBP avancé (audits réels, posts, avis)
5. Cybersécurité basique (clés API, RGPD, sécurité formulaires)
6. CSS/HTML avancé (animations, accessibilité WCAG, performance)
7. JavaScript moderne (modules, arrays, debugging DevTools)
8. Git avancé (branches, conflits, revert, PR)

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

### Jour 5 — Chatbot FAQ ✅
- [x] Compte Chatbase créé
- [x] Knowledge base rédigée (24 paires Q/R Al-Baraka)
- [x] Bot entraîné sur "Text" via "Autres sources"
- [x] Test réussi (réponses cohérentes + ton naturel)
- [x] Widget intégré sur les 4 pages (chatbotId: JkMH2TOyBfO9P_iIwI5Kv)
- [x] Stub précédent caché avec attribut `hidden`

### Jour 6 — Polish ✅
- [x] Favicons SVG créés (`favicon-boucherie.svg` + `favicon-portfolio.svg`)
- [x] Favicons intégrés sur les 5 pages
- [x] Balises meta complètes (description, robots, theme-color, canonical)
- [x] Open Graph + Twitter Card sur les 5 pages
- [x] Structured Data JSON-LD (Store + LocalBusiness avec geo coords sur index, ProfessionalService sur portfolio)
- [x] sitemap.xml créé (5 URLs avec priorités)
- [x] robots.txt créé (Allow all + sitemap reference)
- [x] Suppression dépendance Unsplash (hero CSS-only, gradient + motif SVG inline)
- [x] Skip-link "Aller au contenu principal" sur les 5 pages
- [x] Focus visible global (outline accent au clavier)
- [x] `id="main"` ajouté sur les balises main des 5 pages
- [x] Lazy-loading Chatbase (assets/js/chatbase-lazy.js) — charge à la 1re interaction ou après 4 s
- [x] Heading order corrigé sur produits.html et contact.html (h3 → h2 sous h1)
- [x] PageSpeed Desktop : 100 / 95 / 100 / 100 (perf / a11y / bonnes pratiques / SEO)
- [x] Schema Markup Validator : 0 erreur, 0 avertissement
- [ ] Re-test PageSpeed Mobile après lazy-load (devrait passer de 57 à 80+ en perf)
- [ ] Identifier élément avec contraste insuffisant (audit a11y)
- [ ] Test responsive sur vrais mobiles iPhone + Android (manuel)
- [ ] Renommage du repo `Buisness-solo` → `business-solo` (optionnel)

### Jour 7 — Notification email + Google Business Profile (priorité après pivot)
- [x] Compte Resend créé (envoi d'emails transactionnels gratuit)
- [x] Edge Function Supabase déployée (`send-contact-notification` / `dynamic-api`)
- [x] Database Webhook configuré (INSERT sur `contact_submissions`)
- [x] Email reçu en moins d'1 min côté boîte mail (testé en bout-en-bout)
- [x] Théorie GBP maîtrisée : 12 leviers + 3 erreurs fatales + méthode d'audit
- [x] PDF Audit-GBP.pdf créé (outil de vente avec 10 points + offre + pitch)
- [ ] Audit pratique de 3-5 boucheries locales sur Google Maps (exercice)
- [ ] Tester l'interface admin GBP (via proche commerçant OU sa propre fiche au 17 juin)

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

## Phase 1.5 — Projet pilote gratuit ✅ (livré, en attente de validation lycée)

> Stratégie validée : faire un site gratuit pour un proche, avant la déclaration en micro-entreprise. Avant les 18 ans, c'est légal car aucune rémunération n'est échangée. Objectif : tester les compétences en conditions réelles, gagner un témoignage, arriver à la déclaration avec un cas concret à montrer.

**Projet réalisé : site NAH (Non Au Harcèlement) pour le Lycée Marceau de Chartres.**

- **Repo** : https://github.com/Gabriel-Merlin/NAH
- **URL publique** : https://gabriel-merlin.github.io/NAH/
- **Porteuse** : Lou-Ann Merlin (sœur, lycéenne au Lycée Marceau)
- **Statut** : développement terminé, en attente de validation par le personnel du lycée

### Surface livrée (très au-delà du brief initial)
- [x] 11 pages : Accueil, Comprendre, Agir & Outils, Nous rejoindre, Contact, Espace équipe, Administration, Activation lien, Transfert admin, Mentions légales, Confidentialité
- [x] Palette dédiée : bleu doux + vert + bordeaux + gris-bleu
- [x] Stack : HTML/CSS/JS vanilla + Supabase (Auth Google + email/mdp) + Resend + GitHub Pages
- [x] Authentification double : Google OAuth + email/mot de passe
- [x] Système candidatures + sélection (manuelle ou tirage au sort)
- [x] Email de bienvenue automatique avec lien d'activation à usage unique
- [x] Tableau de bord admin (stats, gestion membres, configuration places)
- [x] Système de transfert d'administration par lien temporaire 72h
- [x] Row Level Security + fonctions RPC + Edge Functions
- [x] Question anonyme, sondage, calendrier, signalement
- [x] Protection anti-lockout du dernier admin
- [x] Conservation des données 6 mois (RGPD)
- [x] Tableau de bord administrateur
- [x] Mentions légales + politique de confidentialité

### Reste à valider (côté lycée)
- [ ] RDV avec le personnel du lycée (planifié)
- [ ] Validation officielle du projet par le chef d'établissement
- [ ] Coordonnées des personnes-ressources à intégrer (CPE, infirmière, prof référent)
- [ ] Email dédié définitif (remplacer `lou.ann.merlin@gmail.com` par un email NAH dédié)
- [ ] Comptes réseaux sociaux à créer
- [ ] Photo du lycée Marceau (autorisation chef d'établissement requise)
- [ ] Statut officiel à clarifier dans les mentions légales
- [ ] Témoignage écrit à demander en retour pour le portfolio Gabriel

---

## Phase 1.75 — Préparation prospection (à faire avant le 24 juin 2026)

> Voir le fichier **`PROSPECTION.md`** pour la méthodologie complète, les templates d'email et les scripts de RDV.

- [x] Méthodologie de qualification des prospects rédigée
- [x] 4 templates d'email de prospection (approche directe, recommandation, relance 1, relance 2)
- [x] Phone script et script de premier RDV rédigés
- [x] Système de suivi CSV créé (`prospects-template.csv`)
- [x] Routine quotidienne de prospection définie
- [x] Liste de 30 prospects identifiés (Le Mans + Chartres, PDF `Prospects-30.pdf`)
- [x] Page portfolio publique créée (`portfolio.html`)
- [x] Email pro créé : gabriel.merlin.pro@outlook.fr
- [ ] Téléphone à compléter sur la page portfolio avant publication
- [ ] Audits GBP des 30 prospects (5 par jour pendant 6 jours)
- [ ] Profil LinkedIn pro finalisé
- [ ] Achat d'un nom de domaine personnel (optionnel, ~12 €/an)

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
- [x] HTTPS automatique (Let's Encrypt via GitHub Pages)
- [x] CDN (concept compris — GitHub Pages utilise Fastly)
- [ ] Netlify (sites statiques + fonctions serverless) — compte créé, à pratiquer
- [ ] Vercel (alternative)
- [ ] Domaine personnalisé (achat + DNS)
- [ ] Hébergeur payant pro (o2switch / OVH mutualisé)

### Edge / Backend serverless
- [x] Supabase Edge Functions (déploiement, secrets, Deno/TypeScript)
- [x] Database Webhooks Supabase (trigger sur INSERT)
- [x] Sécurisation des secrets côté serveur (RESEND_API_KEY, NOTIFICATION_EMAIL)
- [ ] Logs et debugging Edge Functions
- [ ] Tests unitaires sur Edge Functions

### IA et intégrations
- [x] Utilisation de Claude / ChatGPT comme assistant de dev
- [x] Emails transactionnels (Resend) — bout en bout fonctionnel
- [ ] Chatbots no-code (Chatbase) — Jour 5 à venir
- [ ] API Claude (Anthropic SDK) en production
- [ ] Webhooks et automatisations (Zapier, n8n, Make)

### Visibilité locale (priorité après pivot)
- [x] Google Business Profile : théorie complète (12 leviers + 3 erreurs fatales + audit 10 points)
- [x] Méthodologie d'audit GBP en 10 points (PDF Audit-GBP.pdf)
- [x] Compréhension du parcours client local (Local Pack, distance, notoriété)
- [ ] Création d'une vraie fiche GBP (à faire le 17 juin sur sa propre activité)
- [ ] Gestion pratique des avis clients (demande, réponses)
- [ ] Google Search Console + Google Trends
- [ ] Audits réels sur 5-10 commerces (en pratique)

### Qualité et performance
- [x] Sécurité basique : headers HTTP, RLS Supabase, env vars, anti-XSS
- [x] Workflow GitHub Actions automatisé
- [ ] Lighthouse / PageSpeed Insights — Jour 6
- [ ] SEO basique (meta tags, sitemap, robots.txt) — Jour 6
- [ ] Accessibilité (a11y) — alt text, contraste, navigation clavier — Jour 6
- [ ] Optimisation d'images (WebP, lazy loading) — Jour 6
- [ ] Tests manuels structurés

---

## Compétences business

### Rédaction et communication
- [x] Rédaction de contenus web (arguments forts en premier, punchlines, trios rythmés)
- [x] Vocabulaire métier (vérifier avant d'écrire — ex : fournisseur ≠ certificateur)
- [x] Orthographe cohérente sur tout un site
- [x] Rédaction d'un email de prospection personnalisé (4 templates dans PROSPECTION.md)
- [x] Phone script structuré pour appel entrant
- [x] Script de premier RDV en personne
- [ ] Rédaction d'un devis clair et professionnel
- [ ] Rédaction d'une facture
- [ ] Rédaction de CGV / conditions générales
- [ ] Pitch oral de 30 secondes ("elevator pitch")
- [ ] Présentation orale d'un projet (10 min)

### Compréhension client
- [x] Méthodologie d'audit gratuit d'une présence Google (10 points)
- [x] Proposer 2-3 options (Pack Présence / + IA / + Suivi Clients / Sur-mesure)
- [x] Identifier les signaux d'un client à éviter (5 critères dans PROSPECTION.md)
- [ ] Détecter en pratique un client toxique avant signature
- [ ] Demander un témoignage en fin de mission

### Tarification et négociation
- [x] Comprendre la différence one-shot vs récurrent
- [x] Grille de tarifs claire construite (Tarifs.pdf, 3 phases)
- [x] Compréhension du risque de sous-pricing (chatbot, dashboard)
- [x] Pivot tarifaire effectué (790 / 1 090 / 1 990 €)
- [x] Bornage de scope dans les offres (chatbot ≤ 30 Q/R, dashboard sans stats)
- [ ] Annoncer son prix sans hésiter (à muscler en pratique)
- [ ] Refuser de baisser ses prix injustement (à pratiquer)
- [ ] Vendre la valeur, pas l'effort

### Gestion juridique et administrative
- [ ] Créer sa micro-entreprise (le 17 juin 2026)
- [ ] Comprendre les seuils (CA, TVA, charges sociales) — formation #1 à venir
- [ ] Déclarer son CA chaque mois/trimestre
- [ ] Comprendre la zakat sur ses revenus pro

### Marketing
- [x] Page portfolio publique créée (portfolio.html)
- [x] Liste de 30 prospects qualifiés (Prospects-30.pdf)
- [x] Méthodologie complète de prospection (PROSPECTION.md)
- [ ] Construire une présence LinkedIn pro
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
- [x] Croiser les avis (père développeur, autre IA sur tarifs) avant de figer une décision
- [x] Documenter les erreurs et apprentissages dans des fichiers / PDF de référence
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
