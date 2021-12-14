
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
         colors:{
            primary: '#0a192f',
            secondary: '#ffffff',
            dark: '#293036',
            darkBlack :'#30363c',
            disabled:'#2d343a',
            darkCard:'rgba(255,255,255,0.05)',
            lightCard: 'rgba(255,255,255,0.1)',
            darknavy: "#020c1b",
            navy: '#0a192f',
            lightnavy: '#112240',
            lightestnavy: '#233554',
            navyshadow: 'rgba(2,12,27,0.7)',
            darkslate: '#495670',
            slate: '#8892b0',
            lightslate: '#a8b2d1',
            lightestslate: '#ccd6f6',
            white: '#e6f1ff',
            green: '#64ffda',
            greentint: 'rgba(100,255,218,0.1)',
            pink: '#f57dff',
            blue: '#57cbff',
         },
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
}
