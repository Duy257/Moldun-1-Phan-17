let apple = new Apple(10);
let human = new Human('Duy', 1, 53);
document.write('người này tên ' + human.name + '<br>');
document.write(human.name + ' là ' + human.setGender() + '<br>');
document.write(human.name + ' nặng ' + human.setWeight() + '<br>');
document.write('quả táo nặng: ' + human.checkApple() + '<br>');
human.checkWeightApple()
human.eatApple();



