# BRIEF-NAH — ARCHIVE (cadrage initial)

> ⚠️ **Document archivé** — rédigé le 28/05/2026 comme cadrage initial.
> Le projet a été développé bien au-delà de ce brief.
>
> **Repo officiel** : https://github.com/Gabriel-Merlin/NAH
> **URL publique** : https://gabriel-merlin.github.io/NAH/
>
> Document conservé pour mémoire de la vision de départ.

---

## BRIEF-NAH — Projet site « Non Au Harcèlement » (Lycée Marceau, Chartres)

> Document de cadrage et prompt prêt à utiliser pour un nouveau projet.
> Sœur de Gabriel = porteuse de projet · Lycée Marceau, Chartres (28) · 2026.

---

## Comment utiliser ce document

Il sert **deux usages** simultanés :

1. **Prompt pour IA** : copie-colle l'intégralité du fichier dans Claude / ChatGPT / Cursor au début d'une session pour qu'ils aient tout le contexte.
2. **Cahier des charges** : référence à consulter pendant toute la construction du site.

---

## 1 — Contexte du projet

### Le porteur
- **Nom du projet** : NAH — *Non Au Harcèlement*
- **Porteuse** : [Prénom de la sœur de Gabriel], lycéenne au Lycée Marceau à Chartres (28000)
- **Mission** : sensibiliser et accompagner les lycéens face au harcèlement scolaire
- **Cadre** : projet lycéen (associatif ou institutionnel — à valider)
- **Destinataires** : les élèves du lycée Marceau (1ère cible), élèves d'autres lycées (2ᵉ cible), parents et enseignants (3ᵉ cible)

### Le développeur
- **Réalisation** : Gabriel Merlin (frère, étudiant en 1ʳᵉ, en formation freelance)
- **Coût pour le client** : 0 € (projet pilote bénévole, avant déclaration micro-entreprise)
- **Contrepartie** : témoignage écrit + droit d'utilisation pour le portfolio Gabriel
- **Délai cible** : été 2026 (entre juillet et août)

### Le contexte légal — points à clarifier
- [ ] Le lycée valide-t-il officiellement le projet ? Si oui, peut-il l'héberger ?
- [ ] Si formulaire de signalement → conformité RGPD obligatoire (consentement explicite, durée de conservation, droit d'accès)
- [ ] Mention obligatoire du **3018** (numéro national contre les violences numériques) et du **3020** (numéro national contre le harcèlement scolaire)
- [ ] Lien vers les ressources officielles (education.gouv.fr/non-au-harcelement)

---

## 2 — Identité visuelle

### Palette de couleurs

| Usage | Couleur | Code hex |
|---|---|---|
| Bleu principal (titres, CTA) | Bleu doux apaisant | `#4A90E2` |
| Bleu secondaire (hover, accents) | Bleu clair | `#6FA8DC` |
| Vert (engagement, validation) | Vert sobre | `#327A52` |
| Gris clair / bleu-gris (fonds, séparateurs) | Gris-bleu doux | `#E8EEF4` |
| Bordeaux (alertes, urgences, important) | Bordeaux discret | `#7B1E2E` |
| Texte principal | Gris très foncé | `#2A2A2A` |
| Texte secondaire | Gris moyen | `#555555` |
| Fond général | Blanc | `#FFFFFF` |

**Logique de la palette** : le bleu = calme, confiance, écoute. Le vert = mouvement positif, soutien. Le bordeaux = utilisé avec parcimonie pour signaler une urgence (bouton "Appel au secours"). Pas de couleur agressive (rouge vif, orange criard).

### Typographie

Reprendre la stack utilisée sur la démo Al-Baraka :
- **Titres** : Playfair Display (serif élégante, sérieuse mais chaleureuse)
- **Texte** : Inter (sans-serif moderne, très lisible)
- Chargées via Google Fonts (`display=swap`)

### Ton et style rédactionnel

- **Tutoiement** : oui, la cible est lycéenne — créer la proximité
- **Phrases courtes**, sans jargon psy ou juridique
- **Pas de pathos** : ni dramatique ni culpabilisant
- **Validation** : "tu as le droit de…", "ce n'est pas ta faute si…"
- **Action** : toujours proposer une issue concrète (numéro, app, personne à voir)

### Bandeau de page

Un **bandeau haut de page** sur chaque page avec une **photo du Lycée Marceau de Chartres** en arrière-plan, **surimposée d'un voile bleu doux semi-transparent** pour assurer la lisibilité du titre. Cette photo crée l'ancrage local et l'identification ("c'est mon lycée").

---

## 3 — Sitemap

```
NAH — Site web
│
├── Accueil
│   ├── Bandeau "Non Au Harcèlement — Lycée Marceau"
│   ├── Phrase d'accroche forte
│   ├── 3 CTA principaux :
│   │   ├── "Je suis harcelé(e) → AIDE IMMÉDIATE"
│   │   ├── "Je veux comprendre" → Page Renseignement
│   │   └── "Je veux agir" → Calendrier événements
│   └── Numéros d'urgence visibles
│
├── Renseignement (page longue, structurée par ancres)
│   ├── C'est quoi le harcèlement ?
│   ├── Les types de harcèlement
│   ├── À partir de quand c'est du harcèlement ?
│   ├── Comment réagir si je suis victime
│   ├── Comment réagir si je vois un harcèlement (témoin)
│   ├── Numéros à appeler + applications
│   └── Organigramme NAH (équipe, profs référents, infirmière scolaire)
│
├── Fonctionnalités
│   ├── Quiz : "Réagis-tu bien face au harcèlement ?"
│   ├── Question anonyme
│   ├── Sondage en cours
│   ├── Calendrier (événements, journées spéciales)
│   └── BOUTON ROUGE flottant : "J'ai besoin d'aide maintenant"
│
└── Contact
    ├── Réseaux sociaux (Instagram, Snapchat éventuellement)
    ├── Email dédié NAH
    ├── Adresse du lycée Marceau
    └── Carte intégrée
```

---

## 4 — Spécifications page par page

### 4.1 — Page Accueil

**Bandeau** : photo du Lycée Marceau en pleine largeur, hauteur ~400 px desktop / 250 px mobile, voile bleu `rgba(74, 144, 226, 0.7)` par-dessus.

**Titre principal** (sur le bandeau) :
> *Non Au Harcèlement — Lycée Marceau*

**Sous-titre** :
> *Tu n'es pas seul(e). Voici ce que tu peux faire, dès maintenant.*

**Sous le bandeau, 3 cartes CTA** (côte à côte desktop, empilées mobile) :

| Carte | Titre | Action | Couleur fond |
|---|---|---|---|
| 1 | Je suis harcelé(e) | Affichage immédiat des numéros + chat | Bordeaux `#7B1E2E` |
| 2 | Je veux comprendre | Lien vers /renseignement | Bleu `#4A90E2` |
| 3 | Je veux agir | Lien vers /fonctionnalites#calendrier | Vert `#327A52` |

**Section "Numéros qui sauvent"** (visible direct, sans scroll) :
- **3020** — Numéro national harcèlement scolaire (gratuit, anonyme)
- **3018** — Violences numériques (cyberharcèlement)
- **119** — Enfance en Danger (24/24)
- Tous avec un bouton "Appeler" cliquable mobile (`tel:`)

**Section "Le mot de l'équipe NAH"** (3-4 lignes humaines) :
> *Nous sommes des élèves du Lycée Marceau qui avons créé NAH pour qu'aucun camarade ne reste seul face au harcèlement. Ce site est fait par et pour vous.*

**Footer** identique sur toutes les pages.

### 4.2 — Page Renseignement

Page longue avec un **menu d'ancres** à gauche (sticky en desktop, replié en accordéon mobile) :

1. **C'est quoi le harcèlement ?**
   - Définition simple en 2-3 phrases
   - Distinction harcèlement / conflit / blague
   - "Le harcèlement n'est jamais ta faute"

2. **Les types de harcèlement**
   - Verbal (insultes, moqueries répétées)
   - Physique (coups, bousculades, vols)
   - Social (exclusion, rumeurs)
   - Cyberharcèlement (réseaux, messageries)
   - Sexuel (commentaires, gestes déplacés)
   - Discriminatoire (origine, religion, orientation, handicap, apparence)

3. **À partir de quand c'est du harcèlement ?**
   - Les **3 critères clés** : répétition, intention de nuire, déséquilibre de pouvoir
   - Encadré : *"Si tu te sens mal au lycée à cause d'un comportement répété, parle-en."*

4. **Comment réagir si je suis victime**
   - 5 étapes concrètes :
     1. Tu n'es pas seul(e)
     2. Note les faits (date, lieu, témoins)
     3. Parle à un adulte de confiance
     4. Contacte le 3020 ou 3018 si numérique
     5. Conserve les preuves (captures d'écran)

5. **Comment réagir si je vois un harcèlement (témoin)**
   - Tu peux faire la différence
   - Ne pas filmer / ne pas relayer
   - Soutenir la victime sans confrontation
   - Alerter un adulte

6. **Numéros et applications utiles**
   - 3020, 3018, 119, 112
   - App **3018** (App Store / Google Play)
   - App **Stop Hate** (selon recommandations)
   - Plateforme **PHAROS** pour signaler du contenu illégal en ligne

7. **Organigramme NAH**
   - Schéma visuel des personnes-ressources :
     - Élèves référents NAH (avec prénoms ou rôles)
     - Professeur(s) référent(s) NAH
     - CPE référent
     - Infirmière scolaire
     - Assistante sociale
     - Direction
   - Chaque case : nom (ou rôle), email, créneau de disponibilité

### 4.3 — Page Fonctionnalités

Chaque outil est un **bloc autonome** avec son propre titre + description courte + bouton d'accès.

#### 4.3.1 — Quiz "Réagis-tu bien face au harcèlement ?"

- 8 à 12 questions à choix multiples
- Scénarios concrets (cantine, vestiaire, snap, etc.)
- Résultat à la fin : score + conseils personnalisés selon les réponses
- Pas de jugement, ton positif
- Possibilité de re-jouer

**Stockage** : optionnel — soit aucun stockage (juste front), soit stockage anonyme du score dans Supabase pour stats agrégées.

#### 4.3.2 — Question anonyme

Formulaire simple :
- Champ texte unique (200 caractères max)
- Bouton "Envoyer"
- Aucune donnée personnelle demandée
- Mention claire : *"Ce message est anonyme. Personne ne pourra savoir qui l'a écrit."*

**Stockage** : table `questions_anonymes` dans Supabase, lue uniquement par l'équipe NAH (accès admin via dashboard simple).

**RGPD** : pas de cookies, pas d'IP loggée (Supabase respecte par défaut).

#### 4.3.3 — Sondage

Un sondage actif à la fois (modifiable par l'équipe NAH) :
- Question + 2-5 réponses possibles
- Vote anonyme
- Affichage des résultats en temps réel (barres de pourcentage)
- Limite : 1 vote par IP par sondage (anti-spam basique)

**Stockage** : Supabase, table `sondages` + `votes`.

#### 4.3.4 — Calendrier

Liste chronologique des événements à venir :
- Journée nationale contre le harcèlement scolaire (**7 novembre** chaque année)
- Atelier sensibilisation
- Intervention d'un professionnel
- Animation au CDI
- Ramassage d'idées de l'équipe NAH

**Format** : carte par événement (date, titre, description courte, lieu).
**Édition** : par l'équipe NAH via mini-back-office Supabase ou simple JSON éditable.

#### 4.3.5 — Bouton flottant "J'ai besoin d'aide maintenant"

Visible **sur toutes les pages**, en bas à droite, **rouge bordeaux** discret mais identifiable.

> **Nom à modifier** : « Appel au secours » est trop dramatique. Suggestions :
> - **« Besoin d'aide ? »** (le plus neutre)
> - **« Parle-nous »**
> - **« Stop, j'ai besoin »**
> - **« S'aider »** (court, marquant)

**Au clic** → ouvre une popup avec :
- Les 4 numéros d'urgence cliquables
- Lien vers la page Renseignement (réagir si victime)
- Formulaire de signalement direct (anonyme ou identifié, au choix)
- Lien email du référent NAH

**Important** : aucune confirmation requise pour fermer la popup. Si la personne a peur d'être vue, elle ferme en 1 clic.

### 4.4 — Page Contact

Sobre et utile :

**Réseaux sociaux** (cartes cliquables)
- Instagram : @nah_marceau (ou nom à définir)
- Snapchat : @nah.marceau
- TikTok : optionnel selon stratégie

**Email dédié NAH**
- Adresse à créer : `nah.marceau@gmail.com` ou via lycée si validation officielle
- Bouton "Écrire un email" (`mailto:`)
- Précision : *"Cet email est lu par l'équipe élève + le professeur référent. Réponse sous 48h."*

**Adresse du lycée**
- 2 boulevard de la Courtille, 28000 Chartres
- Téléphone du lycée
- **Carte Google Maps intégrée** (iframe officielle Google, sans tracking abusif)

**Mentions légales rapides**
- Lien vers mentions légales complètes
- Lien vers politique de confidentialité RGPD

---

## 5 — Stack technique

Reprendre l'écosystème éprouvé sur la démo Al-Baraka :

| Couche | Outil | Pourquoi |
|---|---|---|
| HTML / CSS / JS vanilla | — | Pas besoin de framework lourd |
| Hébergement | **GitHub Pages** (gratuit) | Suffit largement, lien officiel possible plus tard |
| Base de données | **Supabase** | Pour questions anonymes, sondages, signalements |
| Sécurité données | **Row Level Security** | Lecture des messages anonymes = équipe NAH uniquement |
| Notifications | **Resend** + Edge Function | Email automatique au référent NAH à chaque signalement urgent |
| Domaine | Sous-domaine GitHub OU domaine perso `nah-marceau.fr` (~12 €/an) | À voir avec la sœur / lycée |
| Carte | Google Maps embed (iframe) | Pas de clé API requise |
| Polices | Google Fonts | Playfair + Inter, comme Al-Baraka |

---

## 6 — Accessibilité (renforcée vu le public)

Le public cible peut être en détresse psychologique. L'accessibilité est **non négociable**.

- [ ] Contraste WCAG AA minimum (4,5:1 texte normal, 3:1 grands titres)
- [ ] Navigation 100 % clavier
- [ ] Skip-link "Aller au contenu principal"
- [ ] Tous les éléments interactifs avec `aria-label` ou texte visible
- [ ] Tous les boutons cliquables ≥ 44 × 44 px (cible tactile mobile)
- [ ] Texte alternatif sur toutes les images
- [ ] Pas de timing imposé (sondages sans timer)
- [ ] Lecteur d'écran compatible
- [ ] Police minimum 16 px sur mobile
- [ ] Mode "reduced motion" respecté (`prefers-reduced-motion`)

---

## 7 — Sécurité et conformité

### Données collectées
- Question anonyme : texte uniquement
- Sondage : choix + IP hashée (anti-doublon, non identifiable)
- Quiz : optionnel (score seulement)
- Signalement (depuis bouton "Besoin d'aide") : libre — anonyme ou avec coordonnées

### Conformité RGPD
- [ ] Bandeau cookies : **aucun cookie tiers**, donc bandeau minimal (juste mention)
- [ ] Politique de confidentialité publiée
- [ ] Mentions légales avec identité de l'éditeur (sœur + lycée ?) et hébergeur (GitHub)
- [ ] Aucune analytics tierce (pas de Google Analytics — incompatible avec public mineur sans consentement parental)
- [ ] Si analytics nécessaire → **Plausible Analytics** (RGPD-friendly, sans cookies)
- [ ] Droit à l'effacement : implémenter une procédure de demande par email

### Validation institutionnelle
- [ ] Si site officiel du lycée → validation direction + conformité aux chartes ÉN
- [ ] Si projet associatif élève → mention claire "projet d'élèves, non officiel"

---

## 8 — Cadre éthique

Le sujet est sensible. Quelques règles non négociables :

- **Aucune mise en scène dramatique** (pas de témoignage tire-larmes inventé, pas de musique anxiogène)
- **Pas de jugement** sur les harceleurs (on les recadre vers l'arrêt, pas vers la diabolisation)
- **Pas de promesse irréaliste** ("on va régler ton problème" → faux, on l'oriente vers les bonnes personnes)
- **Anonymat tenu** : si un élève envoie une question anonyme, **jamais** essayer de l'identifier, même avec curiosité
- **Pas de stockage de signalement sans politique de durée de conservation claire** (6 mois max recommandé, puis suppression)
- **Pas d'usage commercial des données** (évidence mais à écrire dans la politique)

---

## 9 — Questions ouvertes à clarifier avec la sœur

À discuter **avant** de coder une seule ligne :

1. **Qui pilote le projet** ?
   - Elle seule, un groupe d'élèves, un prof référent, le CVL ?
2. **Le lycée est-il officiellement impliqué** ?
   - Si oui : sous quelle forme ? Hébergement officiel ? Validation direction ? Lien depuis le site du lycée ?
3. **Quel email** dédié à utiliser ?
   - Gmail, ProtonMail, email lycée ?
4. **Qui gère le back-office** (questions anonymes, sondages, calendrier) ?
   - 1 personne ? 2-3 ? Comment se relayer ?
5. **Quelle deadline** ?
   - Fin d'année scolaire 2026 ? Rentrée septembre 2026 ? Journée nationale 7 nov 2026 ?
6. **Y a-t-il une charte graphique du lycée** à respecter ?
7. **Faut-il l'aval d'un professeur référent** pour publier les sondages ?
8. **Volonté de viser un public au-delà du lycée Marceau** ? (si oui, prévoir cette extension)

---

## 10 — Roadmap proposée (à valider avec la sœur)

**Phase 1 — Cadrage (semaine 1, juillet 2026)**
- Réponses aux 8 questions ouvertes
- Choix nom de domaine (ou sous-domaine GitHub)
- Création des comptes (Gmail dédié, Supabase, etc.)

**Phase 2 — Contenu (semaine 2)**
- Rédaction de tous les textes (page Renseignement surtout)
- Validation par professeur référent
- Photo du Lycée Marceau (avec autorisation du chef d'établissement)

**Phase 3 — Construction (semaines 3-4)**
- HTML/CSS des 4 pages avec palette imposée
- Bandeau photo + voile
- Footer commun
- Bouton flottant "Besoin d'aide"

**Phase 4 — Fonctionnalités (semaine 5)**
- Quiz (front uniquement, ou avec Supabase)
- Question anonyme (Supabase + RLS)
- Sondage (Supabase + anti-doublon IP)
- Calendrier (JSON éditable ou Supabase)
- Signalement bouton flottant + notif Resend

**Phase 5 — Tests et conformité (semaine 6)**
- Tests sur 5-10 lycéens
- Audit accessibilité WCAG AA
- Politique confidentialité + mentions légales validées
- Lancement officiel (journée d'annonce ?)

**Total estimé** : 5-6 semaines à raison de 8-12 h/semaine (été = temps plein possible).

---

## 11 — Livraison

À la livraison, la sœur reçoit :

- [ ] L'URL publique du site
- [ ] Les accès Supabase (en tant qu'admin)
- [ ] L'accès au repo GitHub (en tant que collaboratrice)
- [ ] Un mini-tutoriel de 15 min en visio :
  - Comment modifier un sondage
  - Comment lire les questions anonymes
  - Comment ajouter un événement au calendrier
  - Comment répondre à un signalement urgent
- [ ] Un document récapitulatif (PDF d'une page)
- [ ] Un témoignage écrit demandé en retour (pour le portfolio de Gabriel)

---

## Prompt court (à coller dans une nouvelle session IA)

Si tu veux relancer le projet avec une IA sans donner tout ce fichier, voici la version condensée :

> Je veux créer un site web pour le projet **NAH (Non Au Harcèlement)**, porté par ma sœur lycéenne au Lycée Marceau à Chartres (28).
>
> **Palette obligatoire** : bleu doux `#4A90E2`, bleu clair `#6FA8DC`, vert `#327A52`, gris-bleu `#E8EEF4`, bordeaux `#7B1E2E`.
>
> **Stack** : HTML/CSS/JS vanilla, hébergement GitHub Pages, base de données Supabase (questions anonymes + sondages + signalements), notifications email via Resend.
>
> **4 pages** : Accueil (bandeau photo lycée + 3 CTA + numéros d'urgence), Renseignement (long format avec ancres : définition, types, réagir victime/témoin, organigramme NAH), Fonctionnalités (quiz, question anonyme, sondage, calendrier, bouton flottant "Besoin d'aide"), Contact (réseaux, email, adresse lycée, carte).
>
> **Cadre** : public lycéen en détresse possible → tutoiement, phrases courtes, ton non dramatique, accessibilité WCAG AA stricte, RGPD respecté, anonymat tenu.
>
> **Numéros à intégrer** : 3020 (harcèlement scolaire), 3018 (violences numériques), 119 (enfance en danger), 112 (urgences).
>
> Aide-moi à construire ce site, étape par étape.

---

*Document rédigé le 28 mai 2026. À mettre à jour après l'entretien de cadrage avec la sœur.*
