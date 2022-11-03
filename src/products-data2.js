const products = [
  {
    id : 1,
    mark : 'Nike',
    model : 'Zoom Winflo 8',
    description: 'Cuando corres todos los días, necesitas una sujeción que se adapte a tu velocidad. Las Nike Winflo 8 recuperan la amortiguación que más te gusta e incorporan detalles como la parte superior translúcida y la tecnología Flywire para ofrecer un ajuste ceñido y estable para las carreras largas sobre asfalto.',
    price : '32999',
    gender : 'Hombre',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 7,
    img : {
      general : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/D/DD0204-400_0_18.jpg',
      side : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/W/CW3421-400_1.jpg',
      pair : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/W/CW3421-400_2_10.jpg'
    },   
  },

  {
    id : 2,
    mark : 'Nike',
    model : 'Quest 5',
    description: 'Cuando corres todos los días, necesitas una sujeción que se adapte a tu velocidad. Las Nike Quest 5 recuperan la amortiguación que más te gusta e incorporan detalles como la parte superior translúcida y la tecnología Flywire para ofrecer un ajuste ceñido y estable para las carreras largas sobre asfalto.',
    price : '24999',
    gender : 'Mujer',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 4,
    img : {
      general : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/D/DD9291-300_0.jpg',
      side : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/D/DD9291-300_1.jpg',
      pair : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/D/DD9291-300_3.jpg'
    },   
  },

  {
    id : 3,
    mark : 'Adidas',
    model : 'Terrex Soulstride',
    description: 'Llegá más lejos con estas zapatillas de trail running adidas Terrex. La amortiguación en la mediasuela y amortiguación ultrasuave en el talón te permiten avanzar con total comodidad. La suela ranurada híbrida te permite pasar del sendero al asfalto con facilidad. Los bordes elevados complementan el exterior de malla técnica para ofrecer estabilidad a tus pasos sin importar a donde te lleve el camino.',
    price : '24999',
    gender : 'Hombre',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 6,
    img : {
      general : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/F/Y/FY9216_0_14.jpg',
      side : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/F/Y/FY9216_1.jpg',
      pair : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/F/Y/FY9216_3.jpg'
    },   
  },
 
  {
    id : 4,
    mark : 'Adidas',
    model : 'Duramo 10 SL 2.0',
    description: 'Actualizá tu estilo deportivo con detalles modernos. Estas zapatillas de running te permiten ir de la caminadora a la pista con total comodidad. El diseño del talón con soporte proporciona al tendón de Aquiles un rango de movimiento en cada paso.',
    price : '21999',
    gender : 'Hombre',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 8,
    img : {
      general : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/X/GX0719_0.jpg',
      side : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/X/GX0719_1.jpg',
      pair : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/X/GX0719_3.jpg'
    },   
  },
  
  {
    id : 5,
    mark : 'Puma',
    model : 'Cell Vive Elevate',
    description: 'CELL Vive aporta la energía de los grandes felinos en cada paso. Elegantes detalles de PUMA desde el talón hasta la punta y un diseño único para rematar el look. La pieza trasera reforzada está hecha con 10CELL para mayor estabilidad y el interior está forrado con SoftFoam+ para lograr entrenamientos cómodos. Cuello asimétrico tipo calcetín de neopreno y tira elástica gore. Parte superior de malla para mayor transpirabilidad. La suela de goma proporciona tracción y agarre.',
    price : '22999',
    gender : 'Hombre',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 10,
    img : {
      general : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/7/37695102_0.jpg',
      side : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/7/37695102_2.jpg',
      pair : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/7/37695102_1.jpg'
    },   
  },
  {
    id : 6,
    mark : 'Puma',
    model : 'Flyer Flex',
    description: 'Las Zapatillas Puma Flyer Flex están diseñadas para los corredores más exigentes. Cuentan con una plataforma Flyer Runner propia de Puma y ranuras flexibles a lo largo de toda su base, además de un revestimiento de goma en el talón y en la puntera para brindar durabilidad y tracción a tu trayect',
    price : '15999',
    gender : 'Mujer',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 7,
    img : {
      general : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/7/37712908_0.jpg',
      side : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/7/37712908_4.jpg',
      pair : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/7/37712908_1.jpg'
    },   
  },
  {
    id : 7,
    mark : 'Under Armor',
    model : 'Charged Fleet',
    description: 'Las Zapatillas Under Charged Fleet Lam se inspiran en el deporte y se adaptan a tu rutina diaria brindándote un calzado cómodo y versátil. La capellada de malla aporta transpirabilidad y un diseño sobrio, fácil de combinar, mientras que la suela mejora la tracción. La entresuela de EVA aporta una amortiguación adicional a tus pasos y te permite lucirlas cómodamente a donde sea que vayas. Lleva un diseño moderno y único que cuenta con tecnología Charged Cushioning®, que absorbe el impacto y brinda una respuesta ideal para tu actividad.',
    price : '19990',
    gender : 'Hombre',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 6,
    img : {
      general : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/0/3025923-602_0.jpg',
      side : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/0/3025923-602_3.jpg',
      pair : 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/0/3025923-602_1.jpg'
    },   
  },
  {
    id : 8,
    mark : 'Under Armor',
    model : 'Charged Aurora 2',
    description: 'Las zapatillas Under Armour Charged Aurora 2 están construidas para sacar el maximo rendimiento a tus repeticiones. Tienen un refuerzo en la parte media del pie que lo bloquea y estabiliza en todas las direcciones, materiales transpirables que te ayudan a estar fresca y seca en todo momento y amortiguación para controlar los impactos. Además, la entresuela Charged Cushioning de la marca, utiliza una espuma moldeada que agrega capacidad de respuesta y más amortiguación. Si necesitás cumplir con tus rutinas y superar tus repeticiones, esta es tu zapatilla amiga.',
    price : '24190',
    gender : 'Mujer',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 5,
    img : {
      general : 'https://newsport.vteximg.com.br/arquivos/ids/13479602-1000-1000/3025060600-A.jpg?v=637880442460600000',
      side : 'https://newsport.vteximg.com.br/arquivos/ids/13479603-1000-1000/3025060600-B.jpg?v=637880442463100000',
      pair : 'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/5xpw7r97l1crxjuu2huqxn43vqks/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5'
    },   
  },
  {
    id : 9,
    mark : 'Toper',
    model : 'Gondor II',
    description: 'Las Zapatillas Topper Gondor II la nueva versión de un clásico de los deportes outdoor. Ideales para desarrollar todo tipo de actividades al aire libre y en la ciudad, tienen una capellada de mesh que mejora la respirabilidad, combinada con cuero sintético y pasa cordones metálicos. Además, cuentan con entresuela de eva, ideal para terrenos donde se necesita agarre y tracción.',
    price : '16999',
    gender : 'Hombre',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 6,
    img : {
      general : 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4044f865/products/TO_27132/TO_27132-1.JPG',
      side : 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw357485f2/products/TO_27132/TO_27132-2.JPG',
      pair : 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1e32a238/products/TO_27132/TO_27132-6.JPG'
    },   
  },
  {
    id : 10,
    mark : 'Toper',
    model : 'Core',
    description: 'Las Zapatillas Topper Core tienen un concepto diseñado tanto para el entrenamiento como para el uso diario. Con una propuesta cómoda, delicada y una forma moderna. Están hechas en tejidos respirables y livianos con refuerzos en sintético, dando un look singular a este calzado. Su suela de EVA termoformada, agrega liviandad a este producto y los insertos de goma mejoran el agarre. Para que puedas entrenar sin molestias ni preocupaciones. Ponételas y aumentá tus objetivos con ellas.',
    price : '12290',
    gender : 'Mujer',
    size : [38, 38.5,39,39.5,40,40.5,41,41.5,42],
    stock : 4,
    img : {
      general : 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7430a9cb/products/TO_27911/TO_27911-1.JPG',
      side : 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw82d4c7c4/products/TO_27911/TO_27911-2.JPG',
      pair : 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4f03e5be/products/TO_27911/TO_27911-6.JPG'
    },   
  },
  
  
]

const obje = JSON.stringify(products)



export default products