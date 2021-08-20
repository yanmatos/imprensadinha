//div do input e do botão de palpite
var inputPart = document.getElementById('input-part')
var add = document.getElementById('add')
var num = document.getElementById('num')//input de número


// div dos botões de start e reset
var botoeslist = document.getElementById('botoes')

var botaostart = document.getElementById('start')//botão de start


//botão reset
var botaoreset = document.createElement('button')
botaoreset.setAttribute('type', 'button')
botaoreset.setAttribute('onclick', 'reset()')
botaoreset.appendChild(document.createTextNode('Reset'))


var visual = document.getElementById('visual-part')//select do html



var wins = 0//número de vitórias
var win = document.getElementById('win?')//mensagem das vitórias


//número aleatório gerado
var min = Math.ceil(1)
var max = Math.floor(100)
var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min


var valores = []//array para armazenar os valores

var iniciou = false// game start?




console.log(numeroAleatorio)


function start() {
    iniciou = true
    botoeslist.removeChild(botaostart)
    botoeslist.appendChild(botaoreset)


}


function reset() {
    iniciou = false

    botoeslist.removeChild(botaoreset)
    botoeslist.appendChild(botaostart)

    visual.innerHTML = ''
    num.value = ''

    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min

    console.log(numeroAleatorio)

    valores = []

    inputPart.appendChild(num)
    inputPart.appendChild(add)



}


function addNum() {
    if (iniciou === true) {

        if (num.value.length !== 0 && num.value > 0 && num.value <= 100) {

            var numAdd = num.value


            if (valores.indexOf(numAdd) === -1) {

                valores.push(numAdd)
                console.log(valores)
                let item = document.createElement('option')
                visual.appendChild(item)

                if (valores.length <= 10) {



                    if (numAdd > numeroAleatorio) {
                        item.text = `${numAdd} é maior que o número sorteado`
                    } else if (numAdd == numeroAleatorio) {
                        item.text = `Parabéns, o número sorteado é ${numAdd}`
                        item.style.backgroundColor = 'green'
                        wins++
                        inputPart.removeChild(num)
                        inputPart.removeChild(add)

                       

                        if (wins > 0) {

                            win.innerHTML = `Vitórias: ${wins}`

                        }

                    } else if (numAdd < numeroAleatorio) {
                        item.text = `${numAdd} é menor que o número sorteado`
                    }

                    num.value = ''
                    num.focus()
                }

                else {
                    window.alert('Você Perdeu por atingir 10 tentativas erradas')
                    num.value = ''
                    reset()

                }

            } else {
                window.alert('Valor já foi palpitado')
                num.value = ''
            }

        } else {
            window.alert('Valor inválido ou espaço vazio')
            num.value = ''
        }



    } else {
        window.alert('Pressione Start')
        num.value = ''
        num.focus()
    }

}






