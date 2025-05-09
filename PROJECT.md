# Documentation du Projet Bhaldur

## Vue d'ensemble

Bhaldur est un projet monorepo utilisant pnpm comme gestionnaire de packages. Il est structuré avec une architecture frontend/backend séparée, où le backend est développé avec NestJS et le frontend avec Nuxt.js. Le projet utilise également Prisma comme ORM pour la gestion de la base de données PostgreSQL.

## Structure du Projet

bhaldur/
├── apps/
│ ├── backend/ # Application NestJS
│ └── frontend/ # Application Nuxt.js
├── packages/
│ └── types/ # Types partagés entre les applications
├── prisma/ # Configuration et schéma Prisma
├── package.json # Configuration racine du projet
└── pnpm-workspace.yaml # Configuration de l'espace de travail pnpm

## Technologies Principales

### Backend (NestJS)

- Framework: NestJS v11
- Base de données: PostgreSQL via Prisma ORM
- Tests: Jest pour les tests unitaires et e2e
- Linting: ESLint avec configuration TypeScript

### Frontend (Nuxt.js)

- Framework: Nuxt.js v3
- UI: Tailwind CSS (d'après les informations fournies)
- Vue.js v3.5
- Vue Router v4.5

### Base de données

- PostgreSQL
- Prisma comme ORM
- Migrations gérées via Prisma

## Configuration de l'Environnement

Le projet utilise des variables d'environnement pour la configuration de la base de données, stockées dans des fichiers `.env` (non suivis par Git).

Variables d'environnement requises:

- `DATABASE_URL`: URL de connexion à la base de données PostgreSQL
- `DIRECT_URL`: URL directe pour Prisma (probablement pour les connexions sans pooling)

## Scripts Disponibles

### Racine du Projet

```bash
# Démarrer le développement (frontend et backend simultanément)
pnpm dev

# Migrations de base de données
pnpm db:migrate

# Génération du client Prisma
pnpm db:generate
```

## Backend

```
# Démarrer le serveur de développement
pnpm --filter backend start:dev

# Construire l'application
pnpm --filter backend build

# Exécuter les tests
pnpm --filter backend test
```

## Frontend

```
# Démarrer le serveur de développement
pnpm --filter frontend dev

# Construire l'application
pnpm --filter frontend build
```

## Modèles de Données

Le schéma Prisma est minimaliste pour l'instant, avec une configuration pour PostgreSQL. Les modèles de données spécifiques ne sont pas encore définis dans le schéma.

## Types Partagés

Le projet inclut un dossier packages/types qui contient des types TypeScript partagés entre le frontend et le backend, comme le type User .

## Workflow de Développement

1. Démarrer les services de développement avec pnpm dev
2. Effectuer les migrations de base de données si nécessaire avec pnpm db:migrate
3. Générer le client Prisma après les modifications du schéma avec pnpm db:generate

## Notes Additionnelles

- Le projet utilise pnpm pour la gestion des packages et des workspaces
- La structure monorepo permet le partage de code et de types entre le frontend et le backend
- Les tests sont configurés avec Jest pour le backend
