// import facepaint from 'facepaint'

export const transitions = {
  default: '200ms ease-in-out',
}

export const typography = {
  headings: {
    small: {
      fontSize: '1.2rem',
    },
    medium: {
      fontSize: '1.5rem',
    },
    large: {
      fontSize: '2rem',
    },
    xlarge: {
      fontSize: '4.25rem',
    },
  },
  text: {
    xsmall: {
      fontSize: '0.85rem',
    },
    small: {
      fontSize: '1rem',
    },
    medium: {
      fontSize: '1.2rem',
    },
    large: {
      fontSize: '1.5rem',
    },
  },
}

const white = '#fff'
const black = '#16171a'

const gray = {
  g3: '#d1d2db',
  g5: '#b0b2c1',
  g7: '#85879f',
  g9: '#3c3e4d',
}

const indigo = {
  i3: '#9aa3e8',
  i5: '#2e41d1',
  i7: '#2332a3',
}

export const colors = {
  white,
  black,
  ...indigo,
  ...gray,
}

// export const mq = facepaint([
//   '@media(max-width: 420px)',
//   '@media(max-width: 920px)',
//   '@media(max-width: 1120px)',
// ])
