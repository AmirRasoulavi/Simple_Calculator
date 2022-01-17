const inputF = document.querySelector('input:nth-child(1)');
const inputS = document.querySelector('input:nth-child(2)');
const ClearBtn = document.querySelector('.C');
const MathBtn = document.querySelectorAll('.Math');
let Solve = document.querySelector('.Sol');
let Cal = document.querySelector('.Cal');
console.log(Solve);
ClearBtn.addEventListener('click', Clear);
MathBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        if (inputF.value == "" && isNaN(inputF)) {
            inputF.style.background = "#ffb592";
            inputF.style.border = "1px solid red";
        } else if (inputS.value == "" && isNaN(inputS)) {
            inputS.style.background = "#ffb592";
            inputS.style.border = "1px solid red";

        } else if (isNaN(inputF) && isNaN(inputS)) {
            switch (e.target.innerText) {
                case "+":
                    const sum = parseInt(inputF.value) + parseInt(inputS.value);
                    Solve.innerText = sum;
                    Cal.innerText = `${parseInt(inputF.value)} + ${parseInt(inputS.value)}`;
                    ClearInput();
                    break;
                case "-":
                    const mines = parseInt(inputF.value) - parseInt(inputS.value);
                    Solve.innerText = mines;
                    Cal.innerText = `${parseInt(inputF.value)} - ${parseInt(inputS.value)}`;
                    ClearInput();
                    break;
                case "x":
                    const X = parseInt(inputF.value) * parseInt(inputS.value);
                    Solve.innerText = X;
                    Cal.innerText = `${parseInt(inputF.value)} x ${parseInt(inputS.value)}`;
                    ClearInput();
                    break;
                case "÷":
                    const T = parseInt(inputF.value) / parseInt(inputS.value);
                    Solve.innerText = T;
                    Cal.innerText = `${parseInt(inputF.value)} ÷ ${parseInt(inputS.value)}`;
                    ClearInput();
                    break;
            }
        }
    })
})

function ClearInput() {
    inputF.value = "";
    inputS.value = "";
}

function Clear() {
    Solve.innerText = "";
    Cal.innerText = "";
}