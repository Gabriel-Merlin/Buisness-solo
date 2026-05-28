# Business-Solo

Dépôt de travail pour le lancement de mon activité de freelance — création de sites web et outils numériques pour commerces locaux.

**Porteur :** Gabriel Merlin, 17 ans, en 1ʳᵉ (majorité le 17/06/2026).
**Localisation cible :** Le Mans, Chartres et alentours (+ remote France).
**Cadre :** 100 % halal — transparence, contrats clairs, zéro intérêt (riba), prix annoncés à l'avance.

---

## Sites déployés

- **Démo Boucherie Al-Baraka** (vitrine fictive halal) : https://gabriel-merlin.github.io/Buisness-solo/
- **Portfolio personnel** (offre commerciale) : https://gabriel-merlin.github.io/Buisness-solo/portfolio.html

---

## Arborescence du repo

```
Buisness-solo/
├── README.md                       # Ce fichier — vue d'ensemble
├── ETAPES.md                       # Carte d'apprentissage et progression
├── PROSPECTION.md                  # Méthodologie + 4 templates email + scripts RDV
├── CHATBASE-PLANS.md               # Grille des plans Chatbase + décision par client
├── prospects-template.csv          # Template Google Sheets pour suivi prospects
│
├── index.html                      # Démo Boucherie : Accueil
├── viande.html                     # Démo Boucherie : Notre viande
├── produits.html                   # Démo Boucherie : Nos produits (5 catégories)
├── contact.html                    # Démo Boucherie : Contact + formulaire Supabase
├── portfolio.html                  # Portfolio personnel Gabriel Merlin
│
├── assets/
│   ├── css/
│   │   ├── styles.css              # Design system Al-Baraka (vert/blanc/or)
│   │   └── portfolio.css           # Design portfolio (slate/blanc/bleu sobre)
│   ├── js/
│   │   └── script.js               # Menu mobile + formulaire Supabase
│   └── img/                        # Images locales (à enrichir Jour 6)
│
├── supabase/
│   └── functions/
│       └── send-contact-notification/
│           └── index.ts            # Edge Function : email auto via Resend
│
├── .github/
│   └── workflows/
│       └── pages.yml               # CI/CD : déploiement auto sur GitHub Pages
│
├── netlify.toml                    # Config Netlify (alternative à GH Pages)
├── .nojekyll                       # Désactive Jekyll sur GH Pages
└── .gitignore                      # Ignore .DS_Store, .env, etc.
```

---

## Documents PDF de référence (sauvegarder en local)

Ces PDFs ne sont pas dans le repo (ils sont régénérés à la demande) mais constituent la mémoire du projet :

| PDF | Contenu | Usage |
|---|---|---|
| `Consignes-pages-boucherie.pdf` | Trame rédactionnelle pour les 4 pages | Référence quand tu rédiges du contenu pour un site |
| `Tarifs.pdf` | Grille tarifaire 3 phases + règles + offre standard | Référence interne pour devis |
| `Questions-pere.pdf` | 34 questions à poser au père développeur (8 thèmes) | À utiliser en 2-3 sessions |
| `Recap-business.pdf` | Synthèse complète du projet (8 sections) | Document vivant, mis à jour à chaque session |
| `Audit-GBP.pdf` | Méthodologie d'audit Google Business Profile en 10 points | Outil de vente avec les prospects |
| `Prospects-30.pdf` | 30 commerces sans site (Le Mans + Chartres) | Liste de départ pour la prospection |

---

## État actuel

### ✅ Terminé

**Setup**
- Compte GitHub + repo public + GitHub Pages activé
- Mac configuré (Git, VS Code, Command Line Tools)
- Compte Supabase + Netlify + Resend + Outlook pro (`gabriel.merlin.pro@outlook.fr`)

**Démo Boucherie Al-Baraka (Jours 1-4 + 7)**
- Contenu rédactionnel des 4 pages
- Design system CSS (vert / blanc cassé / or, Playfair + Inter)
- 4 pages HTML responsive avec navigation mobile burger
- Formulaire de contact connecté à Supabase (table `contact_submissions` + policy RLS)
- Notifications email via Edge Function Supabase + Resend (bout en bout)
- Workflow GitHub Actions automatique
- Google Business Profile : théorie complète + outil d'audit en 10 points

**Portfolio personnel**
- Page `portfolio.html` en ligne, palette sobre (slate/blanc/bleu)
- 3 packages tarifaires + offre sur-mesure
- Formulaire de contact réutilisant Supabase
- Email pro Outlook intégré

**Préparation prospection (Phase 1.75)**
- Méthodologie + 4 templates d'email + scripts (PROSPECTION.md)
- Liste de 30 prospects qualifiés (Le Mans + Chartres + banlieues)
- Template CSV pour Google Sheets

### 🟡 En cours / à finir

**Démo Boucherie — sessions restantes**
- Jour 5 — Chatbot FAQ (Chatbase, 20-25 Q/R) ← **prochaine session**
- Jour 6 — Polish (favicon, SEO, image hero locale, Lighthouse)
- Jours 8-10 — Mini-dashboard admin (Supabase Auth + CRUD + export CSV)

**Préparation prospection — manque**
- Audits GBP des 30 prospects (5 par jour × 6 jours)
- Téléphone à compléter sur portfolio
- Profil LinkedIn pro à créer

### ⏳ À venir

- **Phase 1.5** — Projet pilote gratuit : **site anti-harcèlement pour le lycée de la sœur** (sujet validé)
- **Phase 2** — Démos n°2 et n°3 (à choisir : coach sportif, restaurant, autre)
- **Phase 4** — Déclaration micro-entreprise (le 17/06/2026) + prospection active
- **Phase 5** — Modèle retainer (60-90 €/mois × 10 clients = revenu passif)

---

## Offre commerciale (Phase 1)

| Pack | Tarif | Contenu |
|---|---|---|
| **Présence Locale** | 790 € | Site 4 pages + GBP + email notif + hébergement 1 an |
| **+ Assistant IA** | 1 090 € | + chatbot FAQ (max 30 Q/R, scope strict) |
| **+ Suivi Clients** | 1 990 € | + espace admin (login, marquage traité, export CSV) |
| **Sur-mesure** | Dès 2 500 € | Plateformes, intégrations avancées, multi-utilisateurs |
| **Maintenance mensuelle** | 70 €/mois | Hébergement, sauvegardes, support 48 h, 1-2 modifs/mois |

**Règle prudence :** ne pas vendre le Pack Suivi Clients avant d'avoir construit son premier dashboard en interne (sur la démo Boucherie ou un projet pilote).

---

## Stack technique

| Couche | Outil | Coût |
|---|---|---|
| Code | HTML5 / CSS3 / JavaScript vanilla | 0 € |
| Versioning | Git + GitHub | 0 € (repo public) |
| Hébergement | GitHub Pages | 0 € |
| Domaine perso | (à acheter) | ~12 €/an |
| Base de données | Supabase (PostgreSQL + RLS) | Plan gratuit |
| Auth | Supabase Auth (Jours 8-10) | Plan gratuit |
| Serverless | Supabase Edge Functions (Deno) | Plan gratuit |
| Emails transactionnels | Resend | Gratuit jusqu'à 3 000 emails/mois |
| Chatbot | Chatbase (Jour 5) | Plan gratuit |
| Éditeur | VS Code | 0 € |
| CI/CD | GitHub Actions | 0 € (repo public) |

---

## Cadre éthique islamique

**Refusé :** alcool, porc, jeux, prostitution, drogue, finance à intérêts (riba), tromperie commerciale, faux avis, manipulation marketing, dropshipping mensonger, contenus haram.

**Engagements :**
- Prix annoncé = prix tenu (pas de surfacturation a posteriori)
- Honnêteté sur le scope et les délais
- Contrats clairs (devis écrit avant tout engagement)
- Pas de gharar (incertitude excessive)
- Zakat à calculer sur les économies nettes une fois le nissab atteint
- Refuser un client haram, même tentant — la baraka prime sur le chiffre

---

## Roadmap personnelle (rappel)

- **17/06/2026** — 18 ans + déclaration micro-entreprise
- **23/06/2026** — Fin du bac de français + math
- **24/06 → 03/08** — 6 semaines plein temps : finir démo + projet pilote sœur + prospection
- **Sept 2026 → juin 2027** — Terminale : 15-20 h/sem en parallèle, 1-2 clients/mois
- **Juin 2027** — Bac
- **Sept 2027 → juin 2029** — 2 ans de prépa (mode survie business, 4-5h/sem max)
- **Mai-juin 2029** — Concours grandes écoles
- **Sept 2029** — Entrée en école de commerce (objectif : 32 k€ accumulés)

**Objectif financier 3 ans :** 32 k€ net avant école de commerce (faisable via mix Business Solo + retainers cumulés + bourses + alternance si possible).

---

## Projet parallèle

**QuickFix.IA** — marketplace d'urgence domestique en cofondation 50/50 avec Matys Donat. MVP complet, prêt à lancer (Stripe live, Supabase, Resend, multilingue). Documenté à part. Statut du partenariat à clarifier (voir conversation Claude pour le cadre).

---

## Stratégie hosting recommandée

- **Démos personnelles** (Boucherie, portfolio, sœur) : GitHub Pages gratuit
- **Premiers clients** : domaine à 12 €/an + GitHub Pages / Netlify (refacturer le domaine)
- **Clients exigeants ou Phase 2-3** : hébergeur payant français (o2switch ~7 €/mois ou OVH ~3 €/mois mutualisé)

> *« Pour un professionnel, payer un hébergeur est mieux. »* — conseil du père, à appliquer dès le premier vrai client.

---

## Comment reprendre le travail à distance

```bash
cd ~/Documents/Business-Solo/boucherie-al-baraka
git pull origin main
code .
```

Dans VS Code : clic droit sur `index.html` → **Open with Live Server**.

Pour modifier le portfolio : clic droit sur `portfolio.html` → **Open with Live Server**.

Tout commit sur `main` déclenche automatiquement un redéploiement GitHub Pages (visible dans l'onglet Actions du repo, ~1-2 min).
