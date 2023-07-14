const objs = document.getElementsByTagName('div');

for (a of objs) {
    console.log(a.innerHTML = 'Lorenzo');
}

for (a in objs) {
    console.log(objs[a].innerHTML)
}