export type {Asset as Asset};
module.exports = {calculatePortfolioPerformance, largestAssetFinder, assetPercentageCalculator}

interface PortfolioSummary {
	initialInvestment: number;
	currentValue: number;
	profitOrLoss: number;
	percentageChange: number;
	performanceSummary: string;
}

/**
 * Calculates the performance of a portfolio based on initial investment and current value of investment.
 * Provides a summary based on profit or loss and percetnage change.
 * @param {number} initialInvestment - initial amount invested
 * @param {number} currentValue - current value of the portfolio
 * @returns {PortfolioSummary}
 */
function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioSummary {

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

/**
 * Receives a list of assets. If the list is empty, return null. If the list is populated,
 * loop through it until the largest asset is found. Return the largest asset
 * @param {Assets[]} assets - list of assets
 * @returns {null} - null, if list of assets is empty
 * @returns {Asset} - asset with largest value
 */
function largestAssetFinder(assets: Asset[]): Asset | null {
	
	if(assets.length == 0){
		return null;
	}

	let largestAsset: Asset = assets[0]
	
	for (let i = 1; i < assets.length; i++){
		if (assets[i].value > largestAsset.value){
			largestAsset = assets[i]
		}
	}

	return largestAsset;
}


// https://stackoverflow.com/questions/29382389/defining-array-with-multiple-types-in-typescript
/**
 * Calculates the percentage that each asset makes up relative to the total value of all assets
 * @param {Assets[]} assets - list of assets
 * @returns {array} - array of objects, each containing, the name, value, and percentage of the portfolio
 * the asset makes up
 */
function assetPercentageCalculator(assets: Asset[]): {name: string; value: number; percentage: number}[] | null{

	if(assets.length == 0){
		return null;
	}

	let valueOfAllAssets: number = 0;

	for(let i = 0; i < assets.length; i++){
		valueOfAllAssets = valueOfAllAssets + assets[i].value;
	}

	if(valueOfAllAssets == 0){
		return null;
	}

	let assetArray: {name: string; value: number; percentage: number}[] = [];

	for(let i = 0; i < assets.length; i++){
		assetArray.push({
			name: assets[i].name,
			value: assets[i].value,
			percentage: Math.floor((assets[i].value / valueOfAllAssets) * 100)
		})
	}

	return assetArray;
}