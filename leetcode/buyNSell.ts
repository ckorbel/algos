//  minPrice = 1
//. maxProfit = 0
// Input: prices = [7,1,5,3,6,4]
// Output: 5

function maxProfit(prices: number[]): number {
  let minPrice: number = Number.POSITIVE_INFINITY;
  let maxProfit: number = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
