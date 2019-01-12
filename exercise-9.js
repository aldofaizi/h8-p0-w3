function cariMean(angka) {
    var tambah = 0
    var rata = 0
    for (var i = 0; i < angka.length; i++) {
        tambah = tambah + angka[i]
    }
    rata = tambah / angka.length
    return Math.round(rata)
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7