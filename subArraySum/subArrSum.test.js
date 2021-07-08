const { subArrSum, oldSubArrSum } = require("./subArrSum");

describe("subArrSum()", () => {
  it("An empty array returns 0", () => {
    expect(subArrSum([])).toBe(0);
  });
  it("An array full of negative numbers returns 0", () => {
    expect(subArrSum([-3, -2, -1])).toBe(0);
  });
  it("An array full of positive numbers returns the sum of all numbers", () => {
    expect(subArrSum([46, 1236, 23564, 267, 246])).toBe(25359);
  });
  it("An array with a mix of negative and positive numbers returns the sum of the highest summing subsequence", () => {
    expect(
      subArrSum([3, -2, -6, 1, -8, -8, 8, 4, -2, 9, -2, 6, 1, -3, 2])
    ).toBe(24);
  });
  it("Still returns the sum of a possible subsequence when there is a single number of higher value than the sum", () => {
    expect(subArrSum([2, 1, 2, -6, 6])).toBe(5);
  });
  it("The array passed is not mutated", () => {
    const anArray = [3, 2, 1];
    const anArrayCopy = [3, 2, 1];
    subArrSum(anArray);
    expect(anArray).toEqual(anArrayCopy);
  });
  it("Testing how long it takes to process an array with 2000 random numbers between -10000 to 10000", () => {
    const anArray = Array.from({ length: 2000 }).map(() =>
      Math.round((Math.random() - 0.5) * 20000)
    );
    const start = Date.now();
    const oldAlgorithmResult = oldSubArrSum(anArray);
    const stop = Date.now();
    console.log(
      "2000 elements array - Old algorithm Took " + (stop - start) + " ms"
    );
    const newStart = Date.now();
    const newAlgorithmResult = subArrSum(anArray);
    const newStop = Date.now();
    console.log("2000 elements array - Took " + (newStop - newStart) + " ms");
    expect(oldAlgorithmResult).toBe(newAlgorithmResult);
  });
  it("Testing how long it takes to process an array with 1'000'000 random numbers between -10000 to 10000", () => {
    const anArray = Array.from({ length: 1000000 }).map(() =>
      Math.round((Math.random() - 0.5) * 20000)
    );
    const Start = Date.now();
    subArrSum(anArray);
    const Stop = Date.now();
    console.log("1'000'000 elements array - Took " + (Stop - Start) + " ms");
  });
});
