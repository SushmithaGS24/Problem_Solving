function union(arr1, arr2) {

    const unionSet = new Set();

    for(let element of arr1) {
        unionSet.add(element);
    }
    for(let element of arr2) {
        unionSet.add(element);
    }

    return Array.from(unionSet);

}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const arr3 = union(arr1, arr2);
console.log(arr3);