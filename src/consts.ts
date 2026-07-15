export const SITE = {
  name: 'Carnets Singuliers',
  author: 'Valérie Malaval',
  description:
    'Là où les organisations décident, là où les outils se construisent, là où le roman éclaire de nouveaux possibles.',
  url: 'https://valerie-carnets.netlify.app',
  locale: 'fr',
} as const;

export const CATEGORIES = {
  'contre-jour': {
    label: 'Contre-jour',
    color: 'var(--contre-jour)',
    tagline: 'Ce que personne ne regarde encore',
    description:
      "L'ombre devient un actif quand la chaleur devient un risque. La heatmap rassure, mais le monde bouge plus vite qu'elle ne se met à jour.",
  },
  'hors-piste': {
    label: 'Hors-piste',
    color: 'var(--hors-piste)',
    tagline: 'Construire ce qui manque',
    description:
      "Un outil qui oublie tout entre deux sessions ne fait gagner du temps qu'une fois. Alors on construit le sien.",
  },
  contrebande: {
    label: 'Contrebande',
    color: 'var(--contrebande)',
    tagline: 'Écrire pour voir ce qu\'on ne peut pas formuler autrement',
    description:
      'Un détour par la fiction pour penser ce qui ne se dit pas dans un rapport. L\'écriture ouvre des portes que la prospective elle-même ne pousse pas — et c\'est souvent par là que le réel arrive.',
  },
} as const;

export type Category = keyof typeof CATEGORIES;
