const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    },
  ];

const cards = document.querySelector('.galery'); // переменная для карточкек 


//   создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice()

class Transport {
  constructor(type, price, brand) {
      this.type = type;
      this.price = price;
  this.brand = brand;
  }

  getInfo() {
      return `Марка: ${this.brand}`
  };

  getPrice() {
      return `Цена: ${this.price}`
  }
};

// - создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount(), который возвращает количество дверей;

class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);  // наследуемые свойства
    this.doors = doors;  // уникальное для класса свойство
  }

  getDoorsCount() {
    return `Количество дверей: ${this.doors}`; // и уникальный метод для класса Car
  }
}

// - создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.

class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  // Метод для получения максимальной скорости
  getMaxSpeed() {
    return `Max скорость: ${this.maxSpeed} км/ч`;
  }
}

data.forEach((item) => {  // Цикл для отрисовки карточек (перебор по каждому элементу массива данных)
  let exemplar;

  if (item.type === "car") {  // Проверяем тип ТС
    exemplar = new Car(item.type, item.price, item.brand, item.doors); // Создаем экземпляр класса Car
  } else if (item.type === "bike") {
    exemplar = new Bike(item.type, item.price, item.brand, item.maxSpeed);  // Создаем экземпляр класса Bike
  }

  const card = document.createElement("div"); // Элемент для карточки ТС
  card.className = "card";

  const image = document.createElement("img"); // Элемент для вставки картинки ТС
  image.src = item.image;
  card.appendChild(image);  // Удочеряем в card

  const info = document.createElement("p");  // Элемент для вывода доп информации о ТС
  info.textContent = exemplar.getInfo();
  card.appendChild(info);

  const price = document.createElement("p"); // Элемент для вывода цены ТС
  price.textContent = exemplar.getPrice();
  card.appendChild(price);

  if (exemplar instanceof Car) {  // Еще раз проверяем тип ТС
    // Для машин добавляю элемент длявывода количества дверей
    const doorsCount = document.createElement("p");
    doorsCount.textContent = exemplar.getDoorsCount();
    card.appendChild(doorsCount);
  } else if (exemplar instanceof Bike) {
    // Для мото добавляю элемент для вывода макс.скорости
    const maxSpeed = document.createElement("p");
    maxSpeed.textContent = exemplar.getMaxSpeed();
    card.appendChild(maxSpeed);
  }

  cards.appendChild(card); // Удочеряю карточку ТС в галерею
}); 