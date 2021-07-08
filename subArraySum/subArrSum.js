// Please do not change the name of this function
const oldSubArrSum = (array) => {
  let bestSum = 0;
  const arrayLength = array.length;
  array.forEach((element, index) => {
    const lastIndexDiff = arrayLength - index - 1;
    if (lastIndexDiff) {
      Array.from({ length: lastIndexDiff })
        .map((entry, index) => index + 2)
        .forEach((indexDiff) => {
          const arrayEnd = index + indexDiff;
          const tempSum = array
            .slice(index, arrayEnd)
            .reduce((total, curr) => total + curr);
          if (tempSum > bestSum) {
            bestSum = tempSum;
          }
        });
    }
  });
  return bestSum;
};

const subArrSum = function (array) {
  const slopes = [{ min: { value: 0, index: 0 } }];
  let currSlopeIndex = 0;
  let currSum = 0;
  array.forEach((element, index) => {
    currSum += element;
    if (
      (!slopes[currSlopeIndex].hasOwnProperty("max") &&
        currSum > slopes[currSlopeIndex].min.value &&
        index > slopes[currSlopeIndex].min.index + 1) ||
      (slopes[currSlopeIndex].hasOwnProperty("max") &&
        currSum > slopes[currSlopeIndex].max.value)
    ) {
      if (!slopes[currSlopeIndex].hasOwnProperty("max")) {
        slopes[currSlopeIndex].max = {};
      }
      slopes[currSlopeIndex].max.value = currSum;
      slopes[currSlopeIndex].max.index = index;
    } else {
      if (currSum < slopes[currSlopeIndex].min.value) {
        if (slopes[currSlopeIndex].hasOwnProperty("max")) {
          slopes.push({ min: { value: currSum, index } });
          currSlopeIndex += 1;
        } else {
          slopes[currSlopeIndex].min.value = currSum;
          slopes[currSlopeIndex].min.index = index;
        }
      }
    }
  });
  let bestSlope = { slope: 0, index: null };
  slopes.forEach((slope, slopeIndex) => {
    if (
      slope.hasOwnProperty("max") &&
      slope.max.value - slope.min.value > bestSlope.slope
    ) {
      bestSlope.slope = slope.max.value - slope.min.value;
      bestSlope.index = slopeIndex;
    }
  });
  return bestSlope.slope;
};

module.exports = { oldSubArrSum, subArrSum };
