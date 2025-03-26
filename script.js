function hitungFitrah() {
    console.log("Any")
    let jumlahOrang = document.getElementById("jumlah").value;

    if (jumlahOrang === "" || jumlahOrang <= 0) {
        alert("Masukkan jumlah orang yang valid!");
        return;
    }

    let zakat = jumlahOrang * 2.5; 
    document.getElementById("hasil").innerText = `Total Zakat Fitrah yang harus dibayar: ${zakat} kg beras`;
    document.getElementById("form-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.body.classList.add("show-result");
}

function resetForm() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("jumlah").value = "";
    document.body.classList.remove("show-result");
}

function hitungMaal() {
    console.log("uy");
    let nominal = document.getElementById("jumlah").value;

    if (nominal === "" || nominal <= 0) {
        alert("Nominal hartanya kurang nih 🥺");
        return;
    }

    let zakat = nominal * 0.025; 
    document.getElementById("hasil").innerText = `Total Zakat Maal yang harus dibayar: Rp${zakat}`;
    document.getElementById("form-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.body.classList.add("show-result");
}

function hitungZakatTani() {    
    let nominal = parseFloat(document.getElementById("jumlah").value);
    let jenisAir = document.getElementById("jenisAir").value;

    if (isNaN(nominal) || nominal <= 0) {
        alert("Nominal hasil panennya belum diisi/tidak valid 🥺");
        return;
    }

    let zakatPersentase = 0;

    if (jenisAir === "mandiri") {
        zakatPersentase = 0.05;
    } else if (jenisAir === "hujan") {
        zakatPersentase = 0.10;
    } else {
        alert("Pilih sistem pengairan dulu!");
        return;
    }

    let zakat = nominal * zakatPersentase;

    document.getElementById("hasil").innerText = 
        `Total Zakat Pertanian yang harus dibayar: Rp${zakat.toLocaleString("id-ID")}`;
    document.getElementById("form-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.body.classList.add("show-result");
}
