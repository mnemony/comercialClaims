const form = document.getElementById('frm')


const check = function (e) {
    e.preventDefault();

    console.log('działa')


}


form.addEventListener('submit', check)