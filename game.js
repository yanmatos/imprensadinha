//div do input e do botão de palpite
var inputPart = document.getElementById('input-part')
var add = document.getElementById('add')
var num = document.getElementById('num')//input de número


// div dos botões de start e reset
var buttonslist = document.getElementById('botoes')

var buttonStart = document.getElementById('start')//botão de start


//botão reset
var buttonReset = document.createElement('button')
buttonReset.setAttribute('type', 'button')
buttonReset.setAttribute('onclick', 'reset()')
buttonReset.appendChild(document.createTextNode('Reset'))


var visual = document.getElementById('visual-part')//select do html



var wins = 0//número de vitórias
var win = document.getElementById('win?')//mensagem das vitórias


//número aleatório gerado
var min = Math.ceil(1)
var max = Math.floor(100)
var numberRandom = Math.floor(Math.random() * (max - min + 1)) + min


var values = []//array para armazenar os values

var started = false// game start?



function start() {
    started = true
    buttonslist.removeChild(buttonStart)
    buttonslist.appendChild(buttonReset)


}


function reset() {
    started = false

    buttonslist.removeChild(buttonReset)
    buttonslist.appendChild(buttonStart)

    visual.innerHTML = ''
    num.value = ''

    numberRandom = Math.floor(Math.random() * (max - min + 1)) + min

    values = []

    inputPart.appendChild(num)
    inputPart.appendChild(add)



}


function addNum() {
    if (started === true) {

        if (num.value.length !== 0 && num.value > 0 && num.value <= 100) {

            var numAdd = num.value


            if (values.indexOf(numAdd) === -1) {

                values.push(numAdd)
                console.log(values)
                let item = document.createElement('option')
                visual.appendChild(item)

                if (values.length === 7 && values[6] != numberRandom) {
                    window.alert('Você Perdeu por atingir 7 tentativas erradas')
                    num.value = ''
                    reset()
                }

                else {
                    if (numAdd > numberRandom) {
                        item.text = `${numAdd} é maior que o número sorteado`
                    } else if (numAdd == numberRandom) {
                        item.text = `Parabéns, o número sorteado é ${numAdd}`
                        item.style.backgroundColor = 'green'
                        wins++
                        inputPart.removeChild(num)
                        inputPart.removeChild(add)

                       

                        if (wins > 0) {

                            win.innerHTML = `Vitórias: ${wins}`

                        }

                    } else if (numAdd < numberRandom) {
                        item.text = `${numAdd} é menor que o número sorteado`
                    }

                    num.value = ''
                    num.focus()
                    

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






