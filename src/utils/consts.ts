interface IService {
  name: string;
  description: string;
  price: string;
  img: string;
}

interface IReview {
  name: string;
  img: string;
  job: string;
  text: string;
  company: string;
}

export const services: IService[] = [
  {
    name: "Индивидуальный сеанс",
    img: "/images/icons/user.svg",
    description:
      "Персональный подход и глубокая релаксация, нацеленные на ваше уникальное исцеление.",
    price: "90",
  },
  {
    name: "Групповой сеанс",
    img: "/images/icons/userGroup.svg",
    description:
      "Совместное погружение в волнующие звуковые вибрации для общего расслабления и гармонии.",
    price: "30",
  },
  {
    name: "Индивидуальный сеанс на выезде",
    img: "/images/icons/car.svg",
    description:
      "Личный саундхилинг в вашем пространстве для более глубокой связи и исцеления.",
    price: "120",
  },
  {
    name: "Групповой сеанс на выезде",
    img: "/images/icons/carusers.svg",
    description:
      "Привезём гармонию туда, где вы собрались, обеспечив исцеление для всех участников.",
    price: "390",
  },
  {
    name: "Сеанс с индивидуальной фотосессией",
    img: "/images/icons/photo.svg",
    description:
      "Ваше исцеление станет еще ярче с профессиональными снимками с сеанса.",
    price: "390",
  },
  {
    name: "Подарочный сертификат на сеанс",
    img: "/images/icons/certificate.svg",
    description:
      "Подарите исцеление: сертификат на сеанс саундхилинга — подарок, который затрагивает душу.",
    price: "30",
  },
];

export const reviews: IReview[] = [
  {
    name: "Тамара Ларина",
    img: "/images/reviews-images/1.jpg",
    job: "Менеджер проектов в  ",
    text: "Невероятный опыт! После сеанса чувствую себя полностью обновлённой.",
    company: "Pixels",
  },
  {
    name: "Рита Кац",
    img: "/images/reviews-images/2.jpg",
    job: "HR в  ",
    text: "После сеанса улучшился сон, и я чувствую себя гораздо лучше.",
    company: "DD agency",
  },
  {
    name: "Юлия Санина",
    img: "/images/reviews-images/3.jpg",
    job: "Основатель  ",
    text: "World Sound Heal изменил моё представление о релаксации и здоровье.",
    company: "Pic Pen studio",
  },
  {
    name: "Саша Коротких",
    img: "/images/reviews-images/4.jpg",
    job: "Креативный директор  ",
    text: "Ощущаю глубокое исцеление после каждого посещения. Лучшее, что я пробовала!",
    company: "SoSoul magazine",
  },
];
