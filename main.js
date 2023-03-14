export default class Main {
    constructor() {
    }

    validateStudentID(surName, firstName, studentID) {
        let surname = this.getSurname(surName);;
        let firstname = this.getFirstName(firstName);;
        let studentid = this.getJoinDateAndHash(studentID);



    }

    getHash(studentID) {
        let sumOfOdds = this.getSumOfOdds(studentID);
        let sumOfEvens = this.getSumOfEvens(studentID);
        let difference = Math.abs(sumOfEvens - sumOfOdds);


        if (difference > 9) {
            return this.calculateHash(difference);
        }

        return sumOfEvens - sumOfOdds;
    }

    calculateHash(number) {
        return number % 10;
    }

    getSumOfOdds(studentID) {
        let fullDate = this.getJoinDateAndHash(studentID);

        let dateArray = Array.from(String(fullDate), Number);
        let odds = dateArray.filter(function(v, i) {return i % 2 == 0;
        });

        const sum = odds.reduce((partialSum, a) => partialSum + a, 0);


        return sum;
    }

    getSumOfEvens(studentID) {
        let fullDate = this.getJoinDateAndHash(studentID);

        let dateArray = Array.from(String(fullDate), Number);
        let evens = dateArray.filter(function(v, i) {return i % 2 == 1;
        });

        const sum = evens.reduce((partialSum, a) => partialSum + a, 0);


        return sum;
    }

    getSurname(studentID) {
        let studentIDArray = studentID.split('');
        let surname = studentIDArray[0] + studentID[1];
        return surname;
    }

    getFirstName(studentID) {
        let studentIDArray = studentID.split('');
        let firstName = studentIDArray[2] + studentID[3];
        return firstName;
    }

    getJoinDateAndHash(studentID) {
        let studentIDArray = studentID.split('');
        let date = [];

        for (let i = 4; studentIDArray.length - 1 > i; i++) {
            date.push(studentIDArray[i]);
        }
        let joinedDate = date.join('');


        return joinedDate;
    }


}