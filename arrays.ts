const carMakers: string[] = ['ford', 'toyota'];

carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
