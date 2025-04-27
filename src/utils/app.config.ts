export const appConfig = {
  defaultLocale: 'pt-BR',
  language: [
    {
      id: 'pt-BR',
      name: 'Português Brasil'
    },
    {
      id: 'en',
      name: 'English',
    },
  ],
  links: {
    mainbar: [
      {
        text: "resources",
        link: "/#features"
      },
      {
        text: "plans",
        link: "/#pricing"
      },
      {
        text: "testimonials",
        link: "/#testimonials"
      },
      {
        text: "blog",
        link: "/blog"
      }
    ],
    footer: {
      products: [
        {
          text: "Recursos",
          link: "/#features"
        },
        {
          text: "Planos",
          link: "/#pricing"
        },
        {
          text: "Planos",
          link: "/#testimonials"
        },
      ],
      companies: [
        {
          text: "Sobre nós",
          link: "/about"
        },
        {
          text: "Blog",
          link: "/blog"
        },
        {
          text: "Carreira",
          link: "/careers"
        }
      ],
      supports: [
        {
          text: "Contatos",
          link: "/contact"
        },
        {
          text: "Ajuda",
          link: "/faq"
        },
        {
          text: "Privacidade",
          link: "/privacy"
        },
        {
          text: "Termo de uso",
          link: "/terms"
        }
      ]
    }
  },
  plans: [
    {
      planName: "planFree",
      planValue: 0,
      period: null,
      features: [
        "moments10",
        "featuresOnlyImage",
        "storage100mb",
        "timebasic"
      ],
      emphasis: false,
    },
    {
      planName: "planMothly",
      planValue: 9.90,
      subText: "forCouples",
      period: "periodMonthly",
      features: [
        "moments25",
        "featuresImageAndVideos",
        "storage500mb",
        "CustomTimeline",
        "SpecialDate"
      ],
      emphasis: true,
    },
    {
      planName: "planAnnual",
      subText: "saveOver20",
      planValue: 89.90,
      period: "periodAnnual",
      features: [
        "AllMonthlyPlan",
        "moments50",
        "storage500mb",
        "themes",
        "support"
      ],
      emphasis: false,
    }
  ],
  blog: {
    recentPosts: [
      {
        id: 1,
        title: "10 Dicas para Melhorar sua Produtividade no Trabalho",
        excerpt: "Descubra como organizar melhor seu tempo e aumentar sua eficiência no ambiente de trabalho.",
        image: "https://placehold.co/400x600",
        category: "Produtividade",
        date: "2 horas atrás",
        views: 245,
        author: {
          name: "Ana Silva",
          avatar: "https://placehold.co/100X100",
        },
      },
      {
        id: 2,
        title: "Os Benefícios da Meditação para a Saúde Mental",
        excerpt: "Conheça como a prática regular de meditação pode transformar sua saúde mental e bem-estar.",
        image: "https://placehold.co/400X400",
        category: "Saúde",
        date: "5 horas atrás",
        views: 187,
        author: {
          name: "Carlos Mendes",
          avatar: "https://placehold.co/100X100",
        },
      },
      {
        id: 3,
        title: "Como Começar a Investir com Pouco Dinheiro",
        excerpt: "Um guia completo para iniciantes que desejam começar a investir mesmo com poucos recursos.",
        image: "https://placehold.co/400X600",
        category: "Finanças",
        date: "8 horas atrás",
        views: 320,
        author: {
          name: "Juliana Costa",
          avatar: "https://placehold.co/100X100",
        },
      },
    ],
    popularPosts: [
      {
        id: 4,
        title: "As Tendências de Tecnologia que Dominarão 2024",
        excerpt: "Um panorama completo das tecnologias que prometem revolucionar o mercado no próximo ano.",
        image: "https://placehold.co/400X600",
        category: "Tecnologia",
        date: "2 dias atrás",
        views: 1245,
        author: {
          name: "Ricardo Alves",
          avatar: "https://placehold.co/100X100",
        },
      },
      {
        id: 5,
        title: "Receitas Saudáveis para o Dia a Dia",
        excerpt: "Aprenda a preparar refeições nutritivas e deliciosas para manter uma alimentação equilibrada.",
        image: "https://placehold.co/400X600",
        category: "Culinária",
        date: "3 dias atrás",
        views: 987,
        author: {
          name: "Mariana Santos",
          avatar: "https://placehold.co/100X100",
        },
      },
      {
        id: 6,
        title: "Guia Completo para Viagens Econômicas",
        excerpt: "Dicas e estratégias para planejar viagens incríveis gastando menos do que você imagina.",
        image: "https://placehold.co/400X600",
        category: "Viagens",
        date: "5 dias atrás",
        views: 876,
        author: {
          name: "Fernando Lima",
          avatar: "https://placehold.co/100X100",
        },
      },
    ],
    featuredPosts: [
      {
        id: 7,
        title: "A Revolução da Inteligência Artificial no Mercado de Trabalho",
        excerpt:
          "Uma análise profunda sobre como a IA está transformando profissões e criando novas oportunidades de carreira em diversos setores.",
        image: "https://placehold.co/400X600",
        category: "Tecnologia",
        date: "1 dia atrás",
        views: 1876,
        author: {
          name: "Paulo Rodrigues",
          avatar: "https://placehold.co/100X100",
        },
      },
      {
        id: 8,
        title: "Sustentabilidade: Pequenas Ações que Fazem Grande Diferença",
        excerpt:
          "Descubra como pequenas mudanças em sua rotina podem contribuir significativamente para um planeta mais sustentável.",
        image: "https://placehold.co/400X600",
        category: "Meio Ambiente",
        date: "2 dias atrás",
        views: 1543,
        author: {
          name: "Camila Oliveira",
          avatar: "https://placehold.co/100X100",
        },
      },
    ]
  }
}