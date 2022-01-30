function flippingBits(n) {
    // Write your code here
    var new_bit = n.toString(2)
    while (new_bit.length < 32) {
        new_bit = "0" + new_bit
    }
    new_bit = new_bit.split("")
    for (let i = 0; i < new_bit.length; i++) {
        if (new_bit[i] == 1) {
            new_bit[i] = 0
        }
        else {
            new_bit[i] = 1
        }
    }
    new_bit = new_bit.join("")
    new_bit = parseInt(new_bit, 2)
    return new_bit
}