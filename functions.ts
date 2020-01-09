const add = (a: number, b: number): number => {
	return a;
};

const logger = (message: string): void => {
	console.log(message);
};

// We never expect the function to return anything ever
const throwError = (message: string): never => {
	throw new Error(message);
};

const forecast = {
	date: new Date(),
	weather: 'sunny'
};

interface Forecast {
	date: Date;
	weather: string;
}

const logWeather = ({ date, weather }: Forecast): void => {
	console.log(date);
	console.log(weather);
};

logWeather(forecast);
