const form = document.getElementById('frm')

const cardHolder = document.querySelector('.deck')



const convertIt = function (e) {
    e.preventDefault();
    // all input data to calculate


    let carbsGet = parseFloat(document.getElementById("carbsInput").value);
    let sugarGet = parseFloat(document.getElementById("sugarsInput").value);
    let fatGet = parseFloat(document.getElementById("fatsInput").value);
    let satGet = parseFloat(document.getElementById("satInput").value);
    let proGet = parseFloat(document.getElementById("proteinInput").value);
    let saltGet = parseFloat(document.getElementById("saltInput").value);
    let fiberGet = parseFloat(document.getElementById("fiberInput").value);

    // update values in table 
    document.getElementById("tableFat").textContent = fatGet.toFixed(1)
    document.getElementById("tableSat").textContent = satGet.toFixed(1)
    document.getElementById("tableCarb").textContent = carbsGet.toFixed(1)
    document.getElementById("tableSug").textContent = sugarGet.toFixed(1)
    document.getElementById("tablePro").textContent = proGet.toFixed(1)
    document.getElementById("tableFib").textContent = fiberGet.toFixed(1)
    document.getElementById("tableSalt").textContent = saltGet.toFixed(2)

    let totalKcal = fatGet * 9 + carbsGet * 4 +
        proGet * 4 + fiberGet * 2
    document.getElementById("tableKcal").textContent = totalKcal;

    // update RDI in table
    document.getElementById("perKcal").textContent = `${(totalKcal / 20).toFixed()}%`
    document.getElementById("perFat").textContent = `${(fatGet.toFixed(1) / 0.7).toFixed()}%`;
    document.getElementById("perSat").textContent = `${(satGet.toFixed(1) / 0.2).toFixed()}%`;
    document.getElementById("perCarb").textContent = `${(carbsGet.toFixed(1) / 2.6).toFixed()}%`;
    document.getElementById("perSug").textContent = `${(sugarGet.toFixed(1) / 0.9).toFixed()}%`;
    document.getElementById("perPro").textContent = `${(proGet.toFixed(1) / 0.5).toFixed()}%`;
    document.getElementById("perSalt").textContent = `${(saltGet.toFixed(2) / 0.06).toFixed()}%`;

    const totalInput = carbsGet + sugarGet + fatGet + satGet + proGet + fiberGet + saltGet;

    if (totalInput == 0) {
        alert("Are you sure that prododuct has no nutrition?")
    }

    cardHolder.innerHTML = '';

    const percentOfProtein = (proGet * 4) / totalKcal

    // validate data from inputs
    if (totalInput > 100) {
        cardHolder.innerHTML += tooMuch
        return
    }

    if (sugarGet > carbsGet) {
        cardHolder.innerHTML += sugMuch
        return
    }

    if (satGet > fatGet) {
        cardHolder.innerHTML += fatMuch
        return
    }

    // add nutrition claims
    if (totalKcal <= 40) {
        cardHolder.innerHTML += lowEnergy
    }

    if (totalKcal <= 17) {
        cardHolder.innerHTML += freeEnergy
    }

    if (fatGet <= 3) {
        cardHolder.innerHTML += lowFat
    }

    if (fatGet <= 0.5) {
        cardHolder.innerHTML += fatFree
    }

    if (satGet <= 1.5) {
        cardHolder.innerHTML += lowSat

    }
    if (satGet <= 0.1) {
        cardHolder.innerHTML += satFree
    }

    if (sugarGet <= 5) {
        cardHolder.innerHTML += lowSug
    }

    if (sugarGet <= 0.5) {
        cardHolder.innerHTML += sugFree
    }

    if (saltGet <= (2.5 * 0.12)) {
        cardHolder.innerHTML += lowSod
    }

    if (saltGet <= (2.5 * 0.04)) {
        cardHolder.innerHTML += vlSod
    }

    if (saltGet <= (2.5 * 0.005)) {
        cardHolder.innerHTML += sodFree
    }

    if (fiberGet >= 3) {
        cardHolder.innerHTML += srcFib
    }

    if (fiberGet >= 6) {
        cardHolder.innerHTML += higFib
    }

    if (percentOfProtein >= 0.12) {
        cardHolder.innerHTML += srcProt
    }

    if (percentOfProtein >= 0.2) {
        cardHolder.innerHTML += higProt
    }



    e.preventDefault();



}


form.addEventListener('submit', convertIt)