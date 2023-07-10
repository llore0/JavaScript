var i = 0;
var n = 0;

while (i < 5) {
    i++
    if (i === 3) {
        continue;
    }
    console.log(`i = ${i} += n = ${n} => ${n += i}`);
}
