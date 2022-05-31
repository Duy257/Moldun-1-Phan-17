let battery = new Battery();
battery.setEnergy(100);
let flashlight = new FlashLamp();
flashlight.setBattery(battery);

document.write('số pin hiện có: ' + flashlight.getBatteryInfo() + '<br>')
flashlight.turnOn();
flashlight.Light();
document.write('số pin còn lại: ' + flashlight.getBatteryInfo() + '<br>')
flashlight.turnOff()
flashlight.Light()
flashlight.turnOn();
flashlight.Light()
document.write('số pin còn lại: ' + flashlight.getBatteryInfo())

