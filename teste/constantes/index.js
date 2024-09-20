export const categories = [
    {
        id: 1,
        name: "Domésticos ",
        image: require('../assets/imagens/cleaning.png')
    },
    {
        id:2,
        name: "Diário ",
        image: require('../assets/imagens/encanadora.png') 
    },
    {
        id:3,
        name: "Academia ",
        image: require('../assets/imagens/treinadora.png')
    },
    {
        id:4,
        name: "Lazer",
        image: require('../assets/imagens/musician.png')
    },
    {
        id:5,
        name: "Emocional",
        image: require('../assets/imagens/psychologist.png')
    },
    {
        id:6,
        name: "Viagem",
        image: require('../assets/imagens/motorista.png')
    },
]

export const featured = {
    id:1,
    title: 'Para Casa',
    description: "Encanamento, parte elétrica, limpeza",
    options: [
        {
            id:1,
            name: 'Joana Oliveira',
            image: require('../assets/imagens/carro.jpg'),
            description: "Problema com encanamento? É so me chamar!",
            loc:'São Paulo - SP',
            stars: 4,
            reviews: "2.5 mil",
            category: 'Domésticos',

        },
        {
            id:2,
            name: 'Gabriela Tomieto',
            image: require('../assets/imagens/carro.jpg'),
            description: "Vamos queimar essas gorduras!",
            loc:'Taubaté - SP',
            stars: 3,
            reviews: "1.2 mil",
            category: 'Academia',

        },
        {
            id:3,
            name: 'Guilhermina Damacenico',
            image: require('../assets/imagens/carro.jpg'),
            description: "Te levo para qualquer lugar!",
            loc:'Rio de Janeiro - RJ',
            stars: 5,
            reviews: "2.5 mil",
            category: 'Domésticos',

        },
    ],
   
}