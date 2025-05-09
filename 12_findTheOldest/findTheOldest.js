    const totalYears = function(birth, death){
        if (!death){
            death = new Date().getFullYear();
        }
        return death - birth;
    }
    
    const findTheOldest = function(people) {
        return people.reduce((oldPerson, currentPerson) => {
            const currentAge = totalYears(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
            const oldAge = totalYears(oldPerson.yearOfBirth, oldPerson.yearOfDeath);
            if (oldAge > currentAge){
                return oldPerson;
            }
            else{
                return currentPerson;
            }
    
        });
    };

    // Do not edit below this line
    module.exports = findTheOldest;
