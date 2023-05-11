export const flexhireApiKey = 'hcua876maiotrmdq';

export const isEmpty = (value) => {
  return (
      value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
  );
}

export const truncateString = (str, num=300) => {
  if (str && str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}


export const listToMatrix = (list, elementsPerSubArray) => {
  const matrix = [];
  let i, k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
};