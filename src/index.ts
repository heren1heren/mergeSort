// import './style.css';
import './style.scss';

const arr1 = [3, 2, 4, 13, 8, 5, 0, 1]; // return [0, 1, 1, 2, 3, 5, 8, 13]

function mergeSort(array: number[]) {
  // change to left, right, and middle index instead

  if (array.length > 1) {
    let mid = array.length / 2;
    const leftPart = array.slice(0, mid);
    const rightPart = array.slice(mid, array.length);
    console.log(leftPart);
    console.log(rightPart);

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
      parent[k] = sub2[j];
      i++;
    } else {
      parent[k] = sub1[j];
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
