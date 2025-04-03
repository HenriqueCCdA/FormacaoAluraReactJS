import { ThemeProvider } from '@emotion/react';

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '#B009FF',
        primarias: {
            a: '#5754ED',
            b: '#D93114',
            c: ''
        },
        secundarias: {
            a: '#F8F8FD',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '',
        }
    },
    espacamentos: {
       xs: '8px',
       s: '16px',
       l: '32px',
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}
