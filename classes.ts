class Vehicle {
	// color: string;
	// constructor(color: string) {
	// 	this.color = color;
	// }

	constructor(public color: string) {}
	public drive(): void {
		console.log('chugga chugga');
	}

	public honk(): void {
		console.log(`I am ${this.color}`);
	}
}

const vehicle = new Vehicle('green');
vehicle.drive();
vehicle.honk();

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	protected meow(): void {
		console.log('meow');
	}
	saymeow(): void {
		this.meow();
	}
	honk(): void {
		console.log(`I am ${this.color}`);
	}
}

const cat = new Car(4, 'blue');
cat.honk();
cat.saymeow();
