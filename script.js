const btn = document.querySelector('.btn');
const code = document.querySelector('.code');
const input = document.querySelector('.input');
const toast = document.querySelector('#toast');
const downloadBtn = document.querySelector('.downloadButton'); // Corrected this line

btn.addEventListener('click', generate);

function generate() {
    const data = input.value;
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    code.src = URL;
    code.style.display = 'inline'; // Show the QR code
    downloadBtn.href = URL;
    toastDiv();
}

function toastDiv() {
    toast.style.display = 'block';
    setTimeout(function () {
        toast.style.display = 'none';
    }, 2000)
}
