export const routes = {
    tours: {
        id: "tours",
        name: "Туры",
    },
    createTour: {
        id: "createTour",
        name: "Создать тур",
    },
    reviews: {
        id: "reviews",
        name: "Отзывы",
    },
    history: {
        id: "history",
        name: "История",
    },
}

export const options = [
    {
        value: 1,
        text: "Куда хотите ехать",
        disabled: true, 
        selected: true,
    },
    {
        value: 2,
        text: "Путешествие в горы",
        disabled: false, 
        selected: false,
    },
    {
        value: 3,
        text: "Путешествие в горы",
        disabled: false, 
        selected: false,
    },

]

export const historyCards = [
    {
        id: 1,
        title: "Автостопом в Стамбул",
        paragraph: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
        listingItems: ["вкусная еда","дешевый транспорт","красивый город."],
        social: [
            {
                name: "instagram",
                link: "#"
            },
            {
                name: "facebook",
                link: "#"
            },
            {
                name: "YouTube",
                link: "#"
            },
        ],
        detailLink: "#",
        backgroundUrl: "assets/images/story/story_photo-1.jpg"
    },
    {
        id: 2,
        title: "Автостопом в Стамбул",
        paragraph: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
        listingItems: [],
        social: [
            {
                name: "instagram",
                link: "#"
            },
            {
                name: "ВКонтакте",
                link: "#"
            },
        ],

        detailLink: "#",
        backgroundUrl: "assets/images/story/story_photo-2.jpg"
    },
    {
        id: 3,
        title: "Автостопом в Стамбул",
        paragraph: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
        listingItems: [],
        social: [
            {
                name: "instagram",
                link: "#"
            },
            {
                name: "facebook",
                link: "#"
            },
            {
                name: "ВКонтакте",
                link: "#"
            },
        ],

        detailLink: "#",
        backgroundUrl: "assets/images/story/story_photo-3.jpg"
    }
]


export const links = [
    {
        name: "instagram",
        link: "#",
        iconUrl: "assets/images/icons/inst.svg",
    },
    {
        name: "facebook",
        link: "#",
        iconUrl: "assets/images/icons/facebook.svg",
    },
    {
        name: "vkontakte",
        link: "#",
        iconUrl: "assets/images/icons/vk.svg",
    }
]


export const pictures = [
    {
        id: 1,
        url: "assets/images/travel/travel_photo-1.jpg",
    },
    {
        id: 2,
        url: "assets/images/travel/travel_photo-2.jpg",
        hidden: "tablet"
    },
    {
        id: 3,
        url: "assets/images/travel/travel_photo-3.jpg",
        hidden: "mobile"
    },
    {
        id: 4,
        url: "assets/images/travel/travel_photo-4.jpg",
    },
    {
        id: 5,
        url: "assets/images/travel/travel_photo-5.jpg",
    },
    {
        id: 6,
        url: "assets/images/travel/travel_photo-6.jpg",
        hidden: "mobile"
    },
    {
        id: 7,
        url: "assets/images/travel/travel_photo-7.jpg",
        hidden: "tablet"
    },
    {
        id: 8,
        url: "assets/images/travel/travel_photo-8.jpg",
    },
    {
        id: 9,
        url: "assets/images/travel/travel_photo-9.jpg",
    },
    {
        id: 10,
        url: "assets/images/travel/travel_photo-10.jpg",
    },
    {
        id: 11,
        url: "assets/images/travel/travel_photo-11.jpg",
    },
    {
        id: 12,
        url: "assets/images/travel/travel_photo-12.jpg",
        hidden: "mobile"
    },
    {
        id: 13,
        url: "assets/images/travel/travel_photo-13.jpg",
        hidden: "tablet"
    },
]



export const reviews = [
    {
        name: "Мария",
        tour: "Вдали от дома",
        photo: "assets/images/review/review_photo-1.jpg",
        text: ["Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития."]
    },
    {
        name: "Павел", 
        tour: "Путешествие в горы",
        photo: "assets/images/review/review_photo-2.jpg",
        text : [
            "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.",
            "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития."
        ]
    }
]



export const tours = [
    {
        id: 1,
        types: ["Популярные"],
        imageUrl: "assets/images/cards/card_tour_photo-1.jpg",
        url:"#",
        cost: "80 000",
        title: "Путешествие в горы",
    },
    {
        id: 2,
        types: ["Популярные"],
        imageUrl: "assets/images/cards/card_tour_photo-2.jpg",
        url:"#",
        cost: "80 000",
        title: "Путешествие в горы",
    },
    {
        id: 3,
        types: ["Популярные", "Велопрогулки"],
        imageUrl: "assets/images/cards/card_tour_photo-3.jpg",
        url:"#",
        cost: "80 000",
        title: "Путешествие в горы",
    },
    {
        id: 4,
        types: ["Популярные", "Авторский"],
        imageUrl: "assets/images/cards/card_tour_photo-4.jpg",
        url:"#",
        cost: "80 000",
        title: "Путешествие в горы",
    },
    {
        id: 5,
        types: ["Популярные", "Походы"],
        imageUrl: "assets/images/cards/card_tour_photo-5.jpg",
        url:"#",
        cost: "80 000",
        title: "Путешествие в горы",
    },
    {
        id: 6,
        types: ["Популярные", "Сплавы"],
        imageUrl: "assets/images/cards/card_tour_photo-6.jpg",
        url:"#",
        cost: "80 000",
        title: "Путешествие в горы",
    }
]