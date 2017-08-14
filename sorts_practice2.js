
var un1 = [4, 2, 6, 3, 1, 5]
var un2 = [9, 5, 8, 7, 2, 6, 1, 3, 4]


/*
=== BUBBLE SORT
*/

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var k = 1; k < arr.length; k++) {
            // remember the outerloop only to run the loop
            // as many times as needed, i never used
            if (arr[k - 1] > arr[k]) {
                var tmp = arr[k]
                arr[k] = arr[k - 1]
                arr[k - 1] = tmp
            }
        }
    }
    return arr
}

/*
=== SELECTION SORT
*/

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[min]) {
                min = k
            }
        }
        if (min !== i) {
            var tmp = arr[min]
            arr[min] = arr[i]
            arr[i] = tmp
        }
    }
    return arr
}

/*
=== INSERT SORT
*/

function insertSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i]
        var j = i - 1 // keeps track of sorted / unsorted marker

        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = tmp
    }
    return arr
}


// console.log(bubbleSort(un1))
// console.log(bubbleSort(un2))
// console.log(selectionSort(un1))
// console.log(selectionSort(un2))
console.log(insertSort(un1))
console.log(insertSort(un2))
