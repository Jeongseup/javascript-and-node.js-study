class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._useGears = ['D', 'R']
        this._useGear = this._useGears[0]
    }

    get userGear() {
        return this._useGear;
    }

    set userGear(value) {
        if (this._useGear.indexOf(value) < 0)
            throw new Error("Invalid gear")

        this._useGear = value;
    }

    shift(gear) {
        this.userGear = gear
    }

}