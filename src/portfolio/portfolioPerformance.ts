interface PortfolioSummary {
	initialInvestment: number;
	currentValue: number;
	profitOrLoss: number;
	percentageChange: number;
	performanceSummary: string;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioSummary {

	const profitOrLoss: number = currentValue - initialInvestment;

	const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

	let performanceSummary: string;
	// if (percentageChange > 20) {
	// 	performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
	// } else {
	// 	performanceSummary = `The portfolio has performed poorly.`;
	// }

    /**
     * Googled: "how to write conditional statements without using if statements"
     * https://www.koderhq.com/tutorial/typescript/conditional-control/
     */
    performanceSummary = percentageChange > 20 ? "Portfolio has gain significantly"
                        : percentageChange > 10 ? "Portfolio has gain moderately"
                        : percentageChange > 0.1 ? "Portfolio has gained slightly"
                        : percentageChange == 0 ? "Portfolio made no changes"
                        : percentageChange > -10 ? "Portfolio has lost slightly"
                        : percentageChange > -20 ? "Portfolio has lost moderately"
                        : "Portfolio has lost significantly";

	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
}