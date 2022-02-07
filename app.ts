interface UserRepo {
  getUsers: () => User[];
  //delete, create ...
}

class UserMongoDBRepo implements UserRepo {
  getUsers(): User[] {
    console.log('Используем подключение к монго и получаем пользователей');
    return [{ age: 15, userName: 'User from Mongo DB' }];
  }
}

class UserPostgresRepo implements UserRepo {
  getUsers(): User[] {
    console.log('Используем подключение к postgress и получаем пользователей');
    return [{ age: 15, userName: 'User from Postgress DB' }];
  }
}

class UserService {
  userRepo: UserRepo;

  constructor(userRepo: UserRepo) { // берем репо из-вне это АГРЕГАЦИЯ
    this.userRepo = userRepo;
  }

  filterUserByAge(age: number) {
    const users = this.userRepo.getUsers()
    // Какая-то логика фильтрации
    console.log(users);
  }
}

const userService = new UserService(new UserMongoDBRepo());
const userService2 = new UserService(new UserPostgresRepo());
userService.filterUserByAge(15)
userService2.filterUserByAge(15)
//Terminal
//Используем подключение к монго и получаем пользователей
//[ { age: 15, userName: 'User from Mongo DB' } ]
//Используем подключение к postgress и получаем пользователей
//[ { age: 15, userName: 'User from Postgress DB' } ]

// сам сервис остался не изменным, мы определили то как он будет 
// работать от куда-то из вне, передав соответствующий
// аргумент в конструктор 

// Есть две базы данных, затем мы решили хранить данные в файлах 
// сделали соответствующую имплементацию просто подменили 
// в конструкторе соответствующий объект, а сам сервис нам изменять
// нам не пришлось