import app from "./app";

import { Server } from "http";

import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

const PORT: string | number = process.env.PORT || 3000;

const server: Server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

console.log(calculatePortfolioPerformance(10000, 12000))

export { server };