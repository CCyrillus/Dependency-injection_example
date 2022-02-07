var UserMongoDBRepo = /** @class */ (function () {
    function UserMongoDBRepo() {
    }
    UserMongoDBRepo.prototype.getUsers = function () {
        console.log('Используем подключение к монго и получаем пользователей');
        return [{ age: 15, userName: 'User from Mongo DB' }];
    };
    return UserMongoDBRepo;
}());
var UserPostgresRepo = /** @class */ (function () {
    function UserPostgresRepo() {
    }
    UserPostgresRepo.prototype.getUsers = function () {
        console.log('Используем подключение к postgress и получаем пользователей');
        return [{ age: 15, userName: 'User from Postgress DB' }];
    };
    return UserPostgresRepo;
}());
var UserService = /** @class */ (function () {
    function UserService(userRepo) {
        this.userRepo = userRepo;
    }
    UserService.prototype.filterUserByAge = function (age) {
        var users = this.userRepo.getUsers();
        // Какая-то логика фильтрации
        console.log(users);
    };
    return UserService;
}());
var userService = new UserService(new UserMongoDBRepo());
userService.filterUserByAge(15);
//Используем подключение к монго и получаем пользователей
//[ { age: 15, userName: 'User from Mongo DB' } ]
var userService2 = new UserService(new UserPostgresRepo());
userService2.filterUserByAge(15);
