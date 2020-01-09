interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name is ${this.name}`;
	}
};

interface VehicleStats {
	name: string;
	year: Date;
	broken: boolean;
	summary(): string;
}

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`;
	}
};

const printSummary = (oldCivic: Reportable) => {
	console.log(oldCivic.summary());
};

printSummary(oldCivic);
printSummary(drink);
