import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance"

// jest.mock("../src/portfolio/portfolioPerformance");

describe("calculatePortfolioPerforance function", () => {
    it("should return correct performance summary for percentageChange over 20", () => {
        const actual = calculatePortfolioPerformance(1000, 2000);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(2000);
        expect(actual.profitOrLoss).toBe(1000);
        expect(actual.percentageChange).toBe(100);
        expect(actual.performanceSummary).toBe("Portfolio has gained significantly");
    })

    it("should return correct performance summary for percentageChange of 20", () => {
        const actual = calculatePortfolioPerformance(1000, 1200);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1200);
        expect(actual.profitOrLoss).toBe(200);
        expect(actual.percentageChange).toBe(20);
        expect(actual.performanceSummary).toBe("Portfolio has gained moderately");
    })

    it("should return correct performance summary for percentageChange between 10 and 20", () => {
        const actual = calculatePortfolioPerformance(1000, 1150);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1150);
        expect(actual.profitOrLoss).toBe(150);
        expect(actual.percentageChange).toBe(15);
        expect(actual.performanceSummary).toBe("Portfolio has gained moderately");
    })

    it("should return correct performance summary for percentageChange of 10", () => {
        const actual = calculatePortfolioPerformance(1000, 1100);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1100);
        expect(actual.profitOrLoss).toBe(100);
        expect(actual.percentageChange).toBe(10);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })

    it("should return correct performance summary for percentageChange between 0.1 and 10", () => {
        const actual = calculatePortfolioPerformance(1000, 1050);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1050);
        expect(actual.profitOrLoss).toBe(50);
        expect(actual.percentageChange).toBe(5);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })


    it("should return correct performance summary for percentageChange of 0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 1001);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1001);
        expect(actual.profitOrLoss).toBe(1);
        expect(actual.percentageChange).toBe(0.1);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })

    it("should return correct performance summary for percentageChange between 0 and 0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 1000.5);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1000.5);
        expect(actual.profitOrLoss).toBe(0.5);
        expect(actual.percentageChange).toBe(0.05);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })

    it("should return correct performance summary for percentageChange of 0", () => {
        const actual = calculatePortfolioPerformance(1000, 1000);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1000);
        expect(actual.profitOrLoss).toBe(0);
        expect(actual.percentageChange).toBe(0);
        expect(actual.performanceSummary).toBe("Portfolio made no changes");
    })

    it("should return correct performance summary for percentageChange between -0.1 and 0", () => {
        const actual = calculatePortfolioPerformance(1000, 999.5);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(999.5);
        expect(actual.profitOrLoss).toBe(-0.5);
        expect(actual.percentageChange).toBe(-0.05);
        expect(actual.performanceSummary).toBe("Portfolio has lost slightly");
    })

    it("should return correct performance summary for percentageChange of -0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 999);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(999);
        expect(actual.profitOrLoss).toBe(-1);
        expect(actual.percentageChange).toBe(-0.1);
        expect(actual.performanceSummary).toBe("Portfolio has lost slightly");
    })

    it("should return correct performance summary for percentageChange between -10 and -0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 950);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(950);
        expect(actual.profitOrLoss).toBe(-50);
        expect(actual.percentageChange).toBe(-5);
        expect(actual.performanceSummary).toBe("Portfolio has lost slightly");
    })

    it("should return correct performance summary for percentageChange of -10", () => {
        const actual = calculatePortfolioPerformance(1000, 900);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(900);
        expect(actual.profitOrLoss).toBe(-100);
        expect(actual.percentageChange).toBe(-10);
        expect(actual.performanceSummary).toBe("Portfolio has lost moderately");
    })

    it("should return correct performance summary for percentageChange between -20 and -10", () => {
        const actual = calculatePortfolioPerformance(1000, 850);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(850);
        expect(actual.profitOrLoss).toBe(-150);
        expect(actual.percentageChange).toBe(-15);
        expect(actual.performanceSummary).toBe("Portfolio has lost moderately");
    })

    it("should return correct performance summary for percentageChange of -20", () => {
        const actual = calculatePortfolioPerformance(1000, 800);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(800);
        expect(actual.profitOrLoss).toBe(-200);
        expect(actual.percentageChange).toBe(-20);
        expect(actual.performanceSummary).toBe("Portfolio has lost significantly");
    })

    it("should return correct performance summary for percentageChange over -20", () => {
        const actual = calculatePortfolioPerformance(1000, 700);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(700);
        expect(actual.profitOrLoss).toBe(-300);
        expect(actual.percentageChange).toBe(-30);
        expect(actual.performanceSummary).toBe("Portfolio has lost significantly");
    })
})