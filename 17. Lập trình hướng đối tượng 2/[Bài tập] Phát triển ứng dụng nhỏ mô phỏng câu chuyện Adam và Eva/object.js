class Apple {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    decreaseWeight() {
        if (this.weight > 0) {
            this.weight--;
        }
    }
    isEmpty (weight) {
        if (weight > 0) {
            return true;
        }
        else {
            return false;
        }
    }

}

class Human {
    name;
    gender;
    weight;
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        if(this.gender === 1) {
            return true;
        }
        else {
            return false;
        }

    }
    setGender() {
        if (this.isMale() === true) {
            return "Nam"
        }
        else {
            return "Nữ"
        }

    }
    setWeight (weight) {
        return this.weight;
    }
    checkApple (apple) {
        return apple.isEmpty();
    }
    checkWeightApple(apple) {
        return apple.getWeight();
    }
    eatApple (apple) {
        if (apple.getWeight() > 0) {
            apple.decreaseWeight();
            document.write('Duy ăn táo')
            this.weight++;
        }
        else {
            document.write('táo đã hết')
        }
    }
}