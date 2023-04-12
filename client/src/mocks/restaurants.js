export default [
  {
    id: '1',
    name: 'Mayta',
    description:
      'Matya, que significa Tierra Noble en el idioma aymara, es una expresion personal y contemporanea de la gastronomia y territorio peruano',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RiIMSJCpmW4rb6j9ma3M_N6dDpilcj4udA&usqp=CAU',
    distance: '500m',
    payment: ['online', 'cash', 'card'],
    tables: '5',

    menu: {
      Entradas: [
        {
          id: '1.1',
          name: 'Papa a la Huancaina',
          description:
            'Papa andina mediana, con aceituna, huevo y toque de leche.',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2020/04/papa-a-la-huacaina.jpg',
          price: 13.9,
          orderStatus: 'Entregado',
        },
        {
          id: '1.2',
          name: 'Leche de Tigre',
          description: 'Macerado de ceviche concentrado, con su toque de ají.',
          imageDish:
            'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
          price: 19.9,
          orderStatus: 'Entregado',
        },
        // {
        //   id: "1.3",
        //   name: "Ceviche Mixto",
        //   description: "una sabrosa combinación de pescado y mariscos marinados en jugo de limón, cebolla roja, ají limo y cilantro. Servido con choclo, camote y cancha tostada",
        //   imageDish: "https://cdn7.kiwilimon.com/recetaimagen/26255/23270.jpg",
        //   price: 38.5,
        //   orderStatus: "Entregado",
        // },
        // {
        //   id: '1.4',
        //   name: 'Causa Rellena',
        //   description:
        //     'una deliciosa entrada fría hecha de puré de papa amarilla, sazonada con limón, ají amarillo y aceite. Rellena de pollo, atún o langostinos, y acompañada de aguacate, huevo y aceitunas. Una opción deliciosa y colorida que deleitará su paladar.',
        //   imageDish:
        //     'https://comidaperuanaweb.org/wp-content/uploads/2018/10/Receta-de-Causa-Rellena-de-Pollo-1-1-300x203.jpg.webp',
        //   price: 28.2,
        //   orderStatus: 'Entregado',
        // },
        // {
        //   id: '1.5',
        //   name: 'Choritos a la chalaca',
        //   description:
        //     'mejillones frescos en su concha, acompañados de una mezcla picante de cebolla roja, tomate, cilantro y ají limo, todo sazonado con limón y sal. Una opción refrescante y deliciosa para comenzar su comida o compartir.',
        //   imageDish:
        //     'https://comidaperuanaweb.org/wp-content/uploads/2018/10/Receta-de-Choritos-a-la-Chalaca-1-1-300x170.jpg.webp',
        //   price: 27.0,
        //   orderStatus: 'Entregado',
        // },
      ],
      PlatosDeFondo: [
        {
          id: '1.3',
          name: 'Lomo Saltado',
          description: 'Plato bandera de la comida peruana',
          imageDish: 'https://i.blogs.es/5620ff/lomo-saltado-dap/840_560.jpg',
          price: 25.0,
          orderStatus: 'Entregado',
        },
        {
          id: '1.4',
          name: 'Arroz con Mariscos',
          description: 'Arroz salteado con mariscos y un toque de cilantro',
          imageDish:
            'https://comidasperuanas.net/wp-content/uploads/2015/11/Arroz-con-mariscos.jpg',
          price: 32.5,
          orderStatus: 'Entregado',
        },
        // {
        //   id: '4',
        //   name: 'Ceviche Mixto',
        //   description: 'Plato típico peruano a base de pescado y mariscos',
        //   imageDish: 'https://i.imgur.com/UCIOzJh.jpg',
        //   price: 27.0,
        //   orderStatus: 'Entregado',
        // },
        // {
        //   id: '5',
        //   name: 'Ají de Gallina',
        //   description: 'Pollo deshilachado en salsa de ají amarillo y leche',
        //   imageDish: 'https://i.imgur.com/pqCwv20.jpg',
        //   price: 20.0,
        //   orderStatus: 'Entregado',
        // },
      ],
      Bebidas: [
        {
          id: '1.5',
          name: 'Coca-Cola',
          description: 'Bebida gaseosa refrescante',
          imageDrink:
            'https://www.eluniverso.com/resizer/XDCSRrWf-mQVhi9fw2igV2hzPg8=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6O3SHHDC55GTHHHGY4HAWTVD5A.jpg',
          price: 3.5,
          orderStatus: 'Entregado',
        },
        {
          id: '1.6',
          name: 'Jugo de Naranja',
          description: 'Jugo natural de naranjas frescas',
          imageDrink:
            'https://images.ecestaticos.com/4pf3S6T-4p3m68lVpNi1FNSsRY0=/0x0:1699x1130/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8d%2Fa2d%2Ff42%2Fe8da2df4282557bd4975dbf7feb13143.jpg',
          price: 5.0,
          orderStatus: 'Entregado',
        },
      ],
    },
  },
  {
    id: '2',
    name: 'Papachos',
    description:
      'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
    image:
      'https://tofuu.getjusto.com/orioneat-prod-resized/bYNu7rJd9pGprdsYu-200-x.webp',
    distance: '500m',
    payment: ['online', 'cash', 'card'],
    tables: '5',
    menu: {
      Entradas: [
        {
          id: '2-1',
          name: 'Ceviche Mixto',
          description: 'Un plato de pescado marinado',
          imageDish: 'https://cdn7.kiwilimon.com/recetaimagen/26255/23270.jpg',
          price: 25.9,
          orderStatus: 'Entregado',
        },
        {
          id: '2',
          name: 'Leche de Tigre',
          description: 'Otro plato muy delicioso',
          imageDish:
            'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
          price: 19.9,
          orderStatus: 'Entregado',
        },
      ],
      PlatoDeFondo: [
        {
          id: '4',
          name: 'Ceviche Mixto',
          description: 'Plato típico peruano a base de pescado y mariscos',
          imageDish: 'https://i.imgur.com/UCIOzJh.jpg',
          price: 27.0,
          orderStatus: 'Entregado',
        },
        {
          id: '5',
          name: 'Ají de Gallina',
          description: 'Pollo deshilachado en salsa de ají amarillo y leche',
          imageDish: 'https://i.imgur.com/pqCwv20.jpg',
          price: 20.0,
          orderStatus: 'Entregado',
        },
      ],
      Bebidas: [
        {
          id: '3',
          name: 'Agua Mineral',
          description: 'Agua purificada sin gas',
          imageDrink:
            'https://www.naturaselection.com/pub/media/catalog/product/cache/2ee41b7f542b240f20e88c99180a138f/a/g/agua-mineral-natura-500-ml.png',
          price: 2.5,
          orderStatus: 'Entregado',
        },
        {
          id: '4',
          name: 'Cerveza',
          description: 'Cerveza artesanal hecha con ingredientes naturales',
          imageDrink:
            'https://cdn.pixabay.com/photo/2017/12/09/08/18/beer-3008177_960_720.jpg',
          price: 8.0,
          orderStatus: 'Entregado',
        },
      ],
    },
  },
  {
    id: '3',
    name: 'Central',
    description:
      'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hJXKvIa3jsD51UTiFhWhgCxpUWHbxe2atQ&usqp=CAU',
    distance: '500m',
    payment: ['online', 'cash', 'card'],
    tables: '5',
    menu: {
      Entradas: [
        {
          id: '1',
          name: 'Papa a la Huancaina',
          description: 'Un plato muy delicioso',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2020/04/papa-a-la-huacaina.jpg',
          price: 13.9,
          orderStatus: 'Entregado',
        },
        {
          id: '2',
          name: 'Leche de Tigre',
          description: 'Otro plato muy delicioso',
          imageDish:
            'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
          price: 19.9,
          orderStatus: 'Entregado',
        },
      ],
      PlatoDeFondo: [
        {
          id: '4',
          name: 'Arroz con Pollo',
          description: 'Un plato tradicional de arroz con pollo',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2019/06/arroz-con-pollo-peruano.jpg',
          price: 15.9,
          orderStatus: 'Entregado',
        },
        {
          id: '3',
          name: 'Lomo Saltado',
          description: 'Un plato de carne saltada con cebolla y tomate',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2020/04/lomo-saltado.jpg',
          price: 21.9,
          orderStatus: 'Entregado',
        },
      ],
      Bebidas: [
        {
          id: '12',
          name: 'Chicha de Jora',
          description:
            'Otra bebida típica peruana hecha de maíz jora fermentado.',
          imageDrink:
            'https://i.pinimg.com/originals/19/2c/1b/192c1b9f7ea9df5262f8eb8e161dc0c1.jpg',
          price: 8.0,
          orderStatus: 'Entregado',
        },
        {
          id: '11',
          name: 'Pisco Sour',
          description:
            'Una bebida alcohólica peruana hecha de pisco, jugo de limón y clara de huevo.',
          imageDrink:
            'https://unareceta.com/wp-content/uploads/2020/09/receta-de-pisco-sour.jpg',
          price: 12.5,
          orderStatus: 'Entregado',
        },
      ],
    },
  },

  {
    id: '4',
    name: 'La 22',
    description:
      'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
    image:
      'https://restaurantela22.com/media/uploads/e896040c945411ea8f5cb67ac514398a.png',
    distance: '500m',
    payment: ['online', 'cash', 'card'],
    tables: '5',
    menu: {
      Entradas: [
        {
          id: '1',
          name: 'Papa a la Huancaina',
          description: 'Un plato muy delicioso',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2020/04/papa-a-la-huacaina.jpg',
          price: 13.9,
          orderStatus: 'Entregado',
        },
        {
          id: '2',
          name: 'Leche de Tigre',
          description: 'Otro plato muy delicioso',
          imageDish:
            'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
          price: 19.9,
          orderStatus: 'Entregado',
        },
      ],
      PlatoDeFondo: [
        {
          id: '2',
          name: 'Ceviche Mixto',
          description: 'Un plato muy popular en la costa peruana',
          imageDish:
            'https://assets.unileversolutions.com/recipes-v2/234472.jpg',
          price: 18.5,
          orderStatus: 'Entregado',
        },
        {
          id: '3',
          name: 'Lomo Saltado',
          description: 'Un plato de carne saltada con cebolla y tomate',
          imageDish: 'https://i.blogs.es/5620ff/lomo-saltado-dap/840_560.jpg',
          price: 21.9,
          orderStatus: 'Entregado',
        },
      ],
      Bebidas: [
        {
          id: '9',
          name: 'Jugo de Maracuyá',
          description:
            'Un jugo refrescante y delicioso hecho de maracuyá fresco.',
          imageDrink:
            'https://www.comidasperuanas.vip/wp-content/uploads/2020/03/jugo-de-maracuya.jpg',
          price: 6.5,
          orderStatus: 'Entregado',
        },
        {
          id: '10',
          name: 'Chicha Morada',
          description: 'Una bebida típica peruana hecha de maíz morado.',
          imageDrink:
            'https://okdiario.com/img/2019/08/25/receta-de-chicha-morada-de-peru-1.jpg',
          price: 7.0,
          orderStatus: 'Entregado',
        },
      ],
    },
  },
  {
    id: '5',
    name: 'La 22',
    description:
      'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
    image: 'http://admin.tantaperu.com/wp-content/uploads/2019/09/tanta-fb.png',
    distance: '500m',
    payment: ['online', 'cash', 'card'],
    tables: '5',
    menu: {
      Entradas: [
        {
          id: '1',
          name: 'Papa a la Huancaina',
          description: 'Un plato muy delicioso',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2020/04/papa-a-la-huacaina.jpg',
          price: 13.9,
          orderStatus: 'Entregado',
        },
        {
          id: '2',
          name: 'Leche de Tigre',
          description: 'Otro plato muy delicioso',
          imageDish:
            'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
          price: 19.9,
          orderStatus: 'Entregado',
        },
      ],
      PlatoDeFondo: [
        {
          id: '4',
          name: 'Arroz con Pollo',
          description: 'Un plato tradicional de arroz con pollo',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2019/06/arroz-con-pollo-peruano.jpg',
          price: 15.9,
          orderStatus: 'Entregado',
        },
        {
          id: '5',
          name: 'Ají de Gallina',
          description: 'Un plato con pollo deshilachado y una salsa de ají',
          imageDish:
            'https://unacomidaperuana.com/wp-content/uploads/2019/07/aji-de-gallina.jpg',
          price: 16.9,
          orderStatus: 'Entregado',
        },
      ],
      Bebidas: [
        {
          id: '11',
          name: 'Pisco Sour',
          description:
            'Una bebida alcohólica peruana hecha de pisco, jugo de limón y clara de huevo.',
          imageDrink:
            'https://unareceta.com/wp-content/uploads/2020/09/receta-de-pisco-sour.jpg',
          price: 12.5,
          orderStatus: 'Entregado',
        },
        {
          id: '12',
          name: 'Chicha de Jora',
          description:
            'Otra bebida típica peruana hecha de maíz jora fermentado.',
          imageDrink:
            'https://i.pinimg.com/originals/19/2c/1b/192c1b9f7ea9df5262f8eb8e161dc0c1.jpg',
          price: 8.0,
          orderStatus: 'Entregado',
        },
      ],
    },
  },
]
