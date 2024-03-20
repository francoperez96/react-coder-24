const products = [
    {
      id: 1,
      title: 'Johnnie Walker',
      price: '1000',
      category: 'Wisky',
      description: 'Double Black',
      image:
        'https://jumboargentina.vtexassets.com/arquivos/ids/791062-1200-auto?v=638283369869830000&width=1200&height=auto&aspect=true',
    },
    {
      id: 2,
      title: 'Johnnie Walker',
      price: '2000',
      category: 'Wisky',
      description: 'Gold Label Reserve',
      image:
        'https://jumboargentina.vtexassets.com/arquivos/ids/791059-1200-auto?v=638283369853970000&width=1200&height=auto&aspect=true',
    },
    {
      id: 3,
      title: 'Johnnie Walker',
      price: '3000',
      category: 'Wisky',
      description: 'Red Label',
      image:
        'https://jumboargentina.vtexassets.com/arquivos/ids/791050-1200-auto?v=638283369813670000&width=1200&height=auto&aspect=true',
    },
    {
      id: 4,
      title: 'Absolut',
      price: '1000',
      category: 'Vodka',
      description: 'Vodka de Origen Sueco',
      image:
        'https://jumboargentina.vtexassets.com/arquivos/ids/774468-1200-auto?v=638150854029570000&width=1200&height=auto&aspect=true',
    },
    {
      id: 5,
      title: 'Grey Groose',
      price: '2000',
      category: 'Vodka',
      description: 'Vodka de Origen Frances',
      image:
        'https://jumboargentina.vtexassets.com/arquivos/ids/793613-1200-auto?v=638303889882030000&width=1200&height=auto&aspect=true',
    },
    {
      id: 6,
      title: 'Smirnoff',
      price: '3000',
      category: 'Vodka',
      description: 'Vodka de Origen Ruso',
      image:
        'https://jumboargentina.vtexassets.com/arquivos/ids/580828-1200-auto?v=637220856183930000&width=1200&height=auto&aspect=true',
    },
    {
      id: 7,
      title: 'Imperial',
      price: '1000',
      category: 'Cerveza',
      description: 'Lager',
      image:
        'https://beermarket.com.ar/wp-content/uploads/2021/11/Imperial-Lager-x24.png',
    },
    {
      id: 8,
      title: 'Andes Origen',
      price: '2000',
      category: 'Cerveza',
      description: 'Roja',
      image:
        'https://beermarket.com.ar/wp-content/uploads/2023/06/andes-roja-x24.png',
    },
    {
      id: 9,
      title: 'Guinness',
      price: '3000',
      category: 'Cerveza',
      description: 'Stout',
      image:
        'https://jumboargentina.vtexassets.com/arquivos/ids/782053-1200-auto?v=638201074088870000&width=1200&height=auto&aspect=true',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  