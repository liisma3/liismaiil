import { gql } from '@apollo/client';
export const GET_TABLETS = gql`
  query Tablets {
    tablets {
      id
      title
      description
      arabeName
      soura
      souraNumber
      tabletWords {
        text
        number
      }
      ayahs {
        text
        numberInSurah
        number
        juz
        soura
      }
    }
  }
`;
export const GET_TABLET_BY_WORD = gql`
  query GetTabletByWord($word: String) {
    getTabletyWord(word: $word) {
      id
      title
      description
      arabeName
      soura
      souraNumber
      tabletWords {
        text
        number
      }
      ayahs {
        text
        numberInSurah
        number
        juz
        soura
      }
    }
  }
`;
export const GET_TABLET_TEMPLATES = gql`
  query GetTabletTemplates {
    getTabletTemplates {
      arabName
      ayahs {
        number
        slice
        juz
        numberInSurah
        text
      }
      group
      description
      souraNb
      souraName
      createdAt
      updatedAt
    }
  }
`;

export const GET_TEMPLATE_BY_SOURA = gql`
  query GetTemplateBySoura($soura: String) {
    getTemplateBySoura(soura: $soura) {
      arabName
      ayahs {
        number
        slice
        juz
        numberInSurah
        text
      }
      group
      description
      souraNb
      souraName
      createdAt
      updatedAt
    }
  }
`;

export const GET_TABLET_BY_SOURA = gql`
  query GetTabletBySoura($soura: String) {
    getTabletBySoura(soura: $soura) {
      id
      title
      description
      arabeName
      soura
      souraNumber
      tabletWords {
        text
        number
      }
      ayahs {
        text
        numberInSurah
        number
        juz
        soura
      }
    }
  }
`;

export const GET_STATS = gql`
  query GetStats($soura: String) {
    getStats(soura: $soura) {
      guests
      time
      suggestions
      coll
      soura
    }
  }
`;
