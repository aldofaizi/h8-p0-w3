function angkaPalindrome(angka) {
    var isPalindrome = false
    while (isPalindrome === false) {
        angka++
        angkaString = String(angka)
        angkaBalik = ''
        for (var i = angkaString.length - 1; i >=0; i--) {
            angkaBalik += angkaString[i]
        }
        angkaBeneran = Number(angkaBalik)
        if (angkaBeneran == angka) {
            return angka
        }
    }
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001