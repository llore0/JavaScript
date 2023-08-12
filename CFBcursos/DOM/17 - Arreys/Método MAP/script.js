const caixa = document.querySelector('#caixa')
const users = [
    {
        name: 'Carlos',
        address: 'Rua X',
        age: 28,
        isAdmin: false,
    },
    {
        name: 'Maria',
        address: 'Rua XX',
        age: 31,
        isAdmin: true,
    },
    {
        name: 'Matheus',
        address: 'Rua XI',
        age: 22,
        isAdmin: false,
    }
]

users.map((user, index, a) => {
    caixa.innerHTML += `<p> ${index}. ${user.name}, ${user.age}, ${user.address}, ${user.isAdmin ? `<span class="trueADM">true</span>` : `<span class="falseADM">false</span>` } </p>`
})