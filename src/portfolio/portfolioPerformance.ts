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

    /**
     * Googled: "how to write conditional statements without using if statements"
     * https://www.koderhq.com/tutorial/typescript/conditional-control/
     */
    performanceSummary = percentageChange > 20 ? "Portfolio has gained significantly"
                        : percentageChange > 10 ? "Portfolio has gained moderately"
                        : percentageChange > 0.1 ? "Portfolio has gained slightly"
						: percentageChange > 0 ? "Portfolio has gained slightly"
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


interface Asset {
	name: string,
	value: number
}

export function largestAssetFinder(assets: Asset[]): Asset | null {
	
	// if the list of assets is empty
	if(assets.length == 0){
		return null;
	}

	// select the first asset in the list
	let largestAsset: Asset = assets[0]
	
	// loop through the list of assets
	for (let i = 1; i < assets.length; i++){

		// if the an asset is larger, set it as the largestAsset
		if (assets[i].value > largestAsset.value){

			// loop through until the select asset is the largest
			largestAsset = assets[i]
		}
	}

	return largestAsset;
}