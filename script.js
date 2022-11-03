class Users {
    constructor(name, lastName, city) {
        this.name = name;
        this.lastName = lastName;
        this.city = city;
        this.borrowedBook = [];
    }
    borrowedBooks(namebook) {
        this.borrowedBook.push(namebook);
    }
}
let user1 = new Users('Alex', 'Kuf', 'Petachtikva');
let user2 = new Users('Eli', 'Rotenberg', 'Jerusalem');
let user3 = new Users('Ayala', 'Shulman', 'Tel-aviv');

user1.borrowedBooks("Book1");
user1.borrowedBooks("Book2");
user1.borrowedBooks("Book3");
user1.borrowedBooks("Book4");
user2.borrowedBooks("Book3");
user2.borrowedBooks("Book1");
user3.borrowedBooks("Book2");


class BookReport {
    constructor(name) {
        this.name = name;
        this.allUsers = [];
    }
    addNewUser(user) {
        this.allUsers.push(user);
    }
    printReport() {
        this.allUsers.forEach(element => {
            console.log(element.name + " " + element.lastName + " from " + element.city + " borrows this books: " + element.borrowedBook);
        });
    }
}
let a = new BookReport("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
