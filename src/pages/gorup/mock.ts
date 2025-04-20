export const stepsMock = [
  {
    fullName: 'Иванов Иван',
    avatar: 'https://i.pravatar.cc/300',
    count: 12000,
    goal: 10000,
  },
  {
    fullName: 'Владислав Рассолов',
    avatar: 'https://cdn.usegalileo.ai/sdxl10/d14edf49-7242-40b9-9e3e-f358e7d1297b.png',
    count: 14,
    goal: 10000,
    you: true,
  },
];

export const weightMock = [
  {
    fullName: 'Иванов Иван',
    avatar: 'https://i.pravatar.cc/300',
    count: 84,
    goal: 80,
  },
  {
    fullName: 'Владислав Рассолов',
    avatar: 'https://cdn.usegalileo.ai/sdxl10/d14edf49-7242-40b9-9e3e-f358e7d1297b.png',
    count: 143,
    goal: 70,
    you: true,
  },
];

export const groupMock  = {
  photo: { uri: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60' },
  fullName: 'Колесников Евгений',
  description: 'Здесь собраны самые толстые люди города Ногинска',
  title: 'Группа для очень толстых людей'
};

export const groupTabs = [
  {
    title: 'Шаги',
    data: stepsMock,
  },
  {
    title: 'Вес',
    data: weightMock,
    reverse: true,
  },
];
