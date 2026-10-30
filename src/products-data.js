const placeholderImages = [
  {
    general: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    side: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    pair: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
  },
  {
    general: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    side: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    pair: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    general: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    pair: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80'
  }
]

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
    img : placeholderImages[0],
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
    img : placeholderImages[1],
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
    img : placeholderImages[2],
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
    img : placeholderImages[0],
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
    img : placeholderImages[1],
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
    img : placeholderImages[2],
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
    img : placeholderImages[0],
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
    img : placeholderImages[1],
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
    img : placeholderImages[2],
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
    img : placeholderImages[0],
  },
  
  
]

const obje = JSON.stringify(products)



export default products
