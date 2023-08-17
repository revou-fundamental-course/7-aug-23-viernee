function countluas(){
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)){
        document.getElementById("hasilluas").innerHTML = "Masukkan panjang alas dan tinggi segitiga";
        return;
    }

    var luas = 0.5*alas*tinggi;
    var rumus = "L = 1/2 x alas x tinggi";
    document.getElementById("hasilluas").innerHTML = rumus + "<br>" + "L = 1/2 x "+alas+" x "+tinggi+"<br>" + "L = "+luas;
}

function countkeliling(){
    var AB = parseFloat(document.getElementById("AB").value);
    var BC = parseFloat(document.getElementById("BC").value);
    var AC = parseFloat(document.getElementById("AC").value);

    if (isNaN(AB) || isNaN(BC) || isNaN(AC)){
        document.getElementById("hasilkeliling").innerHTML = "Masukkan panjang ketiga sisi segitiga";
        return;
    }

    var keliling = AB+BC+AC;
    var rumus = "K = AB + BC + AC";
    document.getElementById("hasilkeliling").innerHTML = rumus + "<br>" + "K = "+AB+" + "+BC+" + "+AC+"<br>" + "K = "+keliling;
}

function resetluas(){
    document.getElementById("alas").value="";
    document.getElementById("tinggi").value="";
    document.getElementById("hasilluas").value="";
}
function resetkeliling(){
    document.getElementById("AB").value="";
    document.getElementById("BC").value="";
    document.getElementById("AC").value="";
    document.getElementById("hasilkeliling").value="";
}