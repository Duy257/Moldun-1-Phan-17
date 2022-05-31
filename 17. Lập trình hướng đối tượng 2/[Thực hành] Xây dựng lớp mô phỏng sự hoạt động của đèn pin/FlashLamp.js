class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        if(this.energy > 0) {
            this.energy--;
        }
    };
}

class FlashLamp {
    status;
    battery;
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    Light(battery) {
        if(this.status == true) {
            alert('đèn đã được bật');
            return this.battery.decreaseEnergy();
        }else {
            alert('đèn đã tắt');
        };
    };
    turnOn() {
        this.status = true;

    };
    turnOff() {
        this.status = false;
    };
}