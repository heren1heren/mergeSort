// import './style.css';
import './style.scss';

const arr1 = [3, 2, 2, 13, 8, 5, 0, 1]; // return [0, 1, 1, 2, 3, 5, 8, 13]

function mergeSort(array: number[]) {
  // change to left, right, and middle index instead

  if (array.length > 1) {
    let mid = array.length / 2;
    if (mid % 2 !== 0) mid = Math.round(mid);
    const leftPart = array.slice(0, mid);
    const rightPart = array.slice(mid, array.length);

    mergeSort(leftPart);
    mergeSort(rightPart);

    merge(array, leftPart, rightPart);
  }

  return array;
}
mergeSort(arr1);

function merge(parent: number[], sub1: number[], sub2: number[]) {
  // should using left,right, and middle index instead
  let i = 0,
    j = 0,
    k = 0;
  while (i < sub1.length && j < sub2.length) {
    if (sub1[i] < sub2[j]) {
      parent[k] = sub1[i];
      i++;
    } else {
      parent[k] = sub2[j];
      j++;
    }
    k++;
  }

  // copy the remaining elements
  while (i < sub1.length) {
    parent[k] = sub1[i];
    i++;
    k++;
  }
  // copy the remaining elements
  while (j < sub2.length) {
    parent[k] = sub2[j];
    j++;
    k++;
  }
  console.log(parent);
}
