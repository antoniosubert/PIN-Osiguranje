/*$(document).ready(function(){
    DohvacanjeKlijenata();
    DohvacanjePoliceOsig();
    DohvacanjeVrsteOsig();
    DohvacanjeAutomobila();
    DohvacanjeTipVozila();
    DohvacanjeStambProstor();
    DohvacanjeTipStambProstor();
    DohvacanjeZivotnoOsig();
    PopuniKlijentaTablica();
})*/


var SviKlijenti = [];
var SvePolice = [];
var SveVrsteOsig = [];
var SviAutomobili = [];
var SviStambProstor = [];
var SviTipVoz = [];
var SviZivotnoOsig = [];
var SviOdgDaNe = [];
var CurrentId = "";


oDbKlijenti.on('value', function (oOdgovorPosluzitelja) {
    SviKlijenti = [];
    oOdgovorPosluzitelja.forEach(function(oKlijentiSnapshot){
      
      var sKlijentKey = oKlijentiSnapshot.key;
      var oKlijenti = oKlijentiSnapshot.val();
      
      SviKlijenti.push({
        klijentKey: sKlijentKey,
        IDKlijent: oKlijenti.IDKlijent,
        ime: oKlijenti.ime,
        prezime: oKlijenti.prezime,
        OIB: oKlijenti.OIB,
        datrod: oKlijenti.datrod
      });

    });
    console.log(SviKlijenti);
    $(document).ready(function () {
        PopuniKlijentaTablica(SviKlijenti);
    });
    $('#searchInput').on('keyup', function () {
        searchData = $(this).val()
        console.log('Value: ', searchData)
        pretraziTablicu(searchData, SviKlijenti)
    })
    
  });


oDbPolice.on('value', function (oOdgovorPosluzitelja) {
    SvePolice = [];
    oOdgovorPosluzitelja.forEach(function (oPoliceSnapshot) {
        var sPoliceKey = oPoliceSnapshot.key;
        var oPolice = oPoliceSnapshot.val();
        SvePolice.push({
            policaKey: sPoliceKey,
            IdOsig: oPolice.IDOsig,
            KlijentID: oPolice.KlijentID,
            VrstaOsig: oPolice.VrstaOsig,
            Od: oPolice.od,
            Do: oPolice.do,
            Cijena: oPolice.Cijena
        });
    });
    console.log(SvePolice);
    // $(document).ready(function () {
    //     klijentiPoOsiguranju(SvePolice);
    // });
});

oDbVrstaPolice.on('value', function (oOdgovorPosluzitelja) {
    SveVrsteOsig = [];
    oOdgovorPosluzitelja.forEach(function(oVrstaPoliceSnapshot){
      var sVrstePoliceKey = oVrstaPoliceSnapshot.key;
      var oVrstaPolice = oVrstaPoliceSnapshot.val();

        SveVrsteOsig.push({
            vrstepoliceKey: sVrstePoliceKey,
            IDVrsta: oVrstaPolice.IDVrsta,
            Vrsta: oVrstaPolice.Vrsta
        });
    });
    $(document).ready(function(){
        TipOsiguranjaDropdown('#TipDropdown');
        TipOsiguranjaDropdown('#TipDropdownosig');
        TipOsiguranjaDropdown('#TipDropdownosigEdit');
        TipOsiguranjaDropdown('#TipDropdownosigExtend');
        DatePicekrFunction();
    });
    console.log(SveVrsteOsig);
  });


oDbAutomobil.on('value', function (oOdgovorPosluzitelja) {
    SviAutomobili = [];
    oOdgovorPosluzitelja.forEach(function(oAutomobilSnapshot){
      var sAutomobiliKey = oAutomobilSnapshot.key;
      var oAutomobil = oAutomobilSnapshot.val();
        SviAutomobili.push({
            automobiliKey: sAutomobiliKey,
            id: oAutomobil.id,
            godiste: oAutomobil.godiste,
            snaga: oAutomobil.snaga,
            tip: oAutomobil.tip,
            osigID: oAutomobil.osigID
        });
    });
    $(document).ready(function(){
        TipVozilaDropdown('#TipVozila');
    });
    console.log(SviAutomobili);
  });

oDbTipVozila.on('value', function (oOdgovorPosluzitelja) {
    SviTipVoz = [];
    oOdgovorPosluzitelja.forEach(function(oTipVozilaSnapshot){
      var sTipVozKey = oTipVozilaSnapshot.key;
      var oTipVozila = oTipVozilaSnapshot.val();
        SviTipVoz.push({
            tipvozilaKey: sTipVozKey,
            id: oTipVozila.id,
            tip: oTipVozila.TipVozila
        });
    });
    console.log(SviTipVoz);
  });

oDbStambProst.on('value', function (oOdgovorPosluzitelja) {
    SviStambProstor = [];
    oOdgovorPosluzitelja.forEach(function(oStambProstSnapshot){
      var sStambProstKey = oStambProstSnapshot.key;
      var oStambProst = oStambProstSnapshot.val();
        SviStambProstor.push({
            stambprostKey: sStambProstKey,
            id: oStambProst.id,
            vrsta: oStambProst.vrsta,
            velicina: oStambProst.velicina, 
            godizgr: oStambProst.godizgr,
            osigID: oStambProst.osigID
    });
  });
    $(document).ready(function(){
        TipStambDropdown('#TipStan');
    });
    console.log(SviStambProstor);
});

 oDbTipStambProst.on('value', function (oOdgovorPosluzitelja) {
    SviTipStambProstor = [];
    oOdgovorPosluzitelja.forEach(function(oTipStambProstSnapshot){
      var sTipStambProstKey = oTipStambProstSnapshot.key;
      var oTipStambProst = oTipStambProstSnapshot.val();
        SviTipStambProstor.push({
            tipstambprostKey: sTipStambProstKey,
            id: oTipStambProst.id,
            vrsta: oTipStambProst.vrsta
        });
    });
    console.log(SviTipStambProstor);
  }); 

oDbOdgDaNe.on('value', function (oOdgovorPosluzitelja) {
    SviOdgDaNe = [];
    oOdgovorPosluzitelja.forEach(function(oOdgDaNeSnapshot){
      var sOdgDaNeKey = oOdgDaNeSnapshot.key;
      var oOdgDaNe = oOdgDaNeSnapshot.val();
      SviOdgDaNe.push({
            odgdaneKey: sOdgDaNeKey,
            id: oOdgDaNe.id,
            odgovor: oOdgDaNe.odgovor
        });
    });
    console.log(SviOdgDaNe);
  }); 


oDbZivotno.on('value', function (oOdgovorPosluzitelja) {
    SviZivotnoOsig = [];
    oOdgovorPosluzitelja.forEach(function(oZivotnoSnapshot){
      var sZivotnoKey = oZivotnoSnapshot.key;
      var oZivotno = oZivotnoSnapshot.val();
        SviZivotnoOsig.push({
            zivotnoKey: sZivotnoKey,
            id: oZivotno.id,
            brojdjec: oZivotno.brojdjec,
            kronBolesti: oZivotno.kronBolesti,
            prihod: oZivotno.prihod,
            osigID: oZivotno.osigID 
        });
    });
    $(document).ready(function(){
        TipOdgDaNeKronDropdown('#kronBolest');
    });
    console.log(SviZivotnoOsig);
  });

  oDbAktivnosti.on('value', function (oOdgovorPosluzitelja) {
    aAktivnostList = [];
    oOdgovorPosluzitelja.forEach(function (oAktivnostSnapshot) {
        var sAktivnostKey = oAktivnostSnapshot.key;
        var oAktivnost = oAktivnostSnapshot.val();
        aAktivnostList.push({
            aktivnostKey: sAktivnostKey,
            dateTime: oAktivnost.dateTime,
            radnja: oAktivnost.radnja,
            naziv: oAktivnost.naziv
        });
    });
    console.log(aAktivnostList);
});


function PopuniKlijentaTablica(glavnaLista){
    var oTablica = $('#TablicaKlijenta');
    var nRbr = 1;
    oTablica.find('tbody').empty();
    //aZavrsniList.forEach(oZavrsni => {
    for (var i = 0; i < glavnaLista.length; i++) {
        var sRow = '<tr><td>' + nRbr++ + '</td><td>' + glavnaLista[i].ime + 
        '</td><td>' + glavnaLista[i].prezime + 
        '</td><td>' + glavnaLista[i].OIB + '</td><td>' + glavnaLista[i].datrod +
         '</td><td><span><button class="btn btn-success" onclick="ModalDodajOsiguranje(\'' + glavnaLista[i].klijentKey + '\')"><span class="glyphicon glyphicon-plus-sign"></span></button></span></td><td><span><button onclick="ModalAzurirajKlijenta('+"'"+glavnaLista[i].klijentKey+"'"+')" class="btn btn-info" data-toggle="modal"><span class="glyphicon glyphicon-pencil"></span></button></span></td><td><span><button class="btn btn-danger" data-toggle="modal" onclick="ObrisiKlijenta('+"'"+glavnaLista[i].klijentKey+"'"+')"><span class="glyphicon glyphicon-remove"></span></button></span></td></tr>';
        oTablica.append(sRow);
    }
    
}

function klijentiPoOsiguranju(oPolice) {
    $('#tablica-po-osiguranjima').modal('show');
    var Table = document.getElementById("podaciTablicePoOsiguranjima");
    Table.innerHTML = "";
    var oTablica = $('#TablicaPoOsiguranju');
    var nRbr = 1;
    SvePolice.forEach(oPolice => {
        var sRow = '<tr><td>' + nRbr++ + '</td><td>' + dajKlijentaIme(oPolice.KlijentID) + '</td><td>' + dajKlijentaPrezime(oPolice.KlijentID) + '</td><td>' + dajOsiguranje(oPolice.VrstaOsig) + '</td><td>' + dajKlijentaOib(oPolice.KlijentID) + '</td><td>' + oPolice.Cijena + '</td><td><span><button data-dismiss="modal" onclick="ModalAzurirajOsiguranje('+"'"+oPolice.IdOsig+"'"+')" class="btn btn-info" data-toggle="modal"><span class="glyphicon glyphicon-pencil"></span></button></span></td><td><span><button class="btn btn-danger" data-toggle="modal" data-target="#tablica-po-osiguranjima" onclick="ObrisiPolicuOsiguranja(\'' + oPolice.IdOsig + '\')"><span class="glyphicon glyphicon-remove"></span></button></span></td></tr>';
        oTablica.append(sRow);
        
    });
}

function IsteklaOsiguranja(oPolice) {
    var today = new Date();

    $('#tablica-neaktivnih-osiguranja').modal('show');
    var Table = document.getElementById("podaciTabliceNeaktivOsiguranja");
    Table.innerHTML = "";
    var oTablica = $('#TablicaNeaktivOsiguranja');
    var nRbr = 1;
    SvePolice.forEach(oPolice => {

        var dateString = oPolice.Do; // Oct 23

        var dateParts = dateString.split("/");

        // month is 0-based, that's why we need dataParts[1] - 1
        var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        console.log(dateObject);
        console.log(today);
        if(dateObject < today){
            var sRow = '<tr><td>' + nRbr++ + '</td><td>' + dajKlijentaIme(oPolice.KlijentID) + '</td><td>' + dajKlijentaPrezime(oPolice.KlijentID) + '</td><td>' + dajOsiguranje(oPolice.VrstaOsig) + '</td><td>' + oPolice.Do + '</td><td><span><button data-dismiss="modal" onclick="ModalProduziOsiguranje('+"'"+oPolice.IdOsig+"'"+')" class="btn btn-info" id="TipkaProduziOsiguranje" data-toggle="modal"><span class="glyphicon glyphicon-repeat"></span></button></span></td><td><span><button class="btn btn-danger" data-toggle="modal" data-target="#tablica-po-osiguranjima" onclick="ObrisiPolicuOsiguranja(\'' + oPolice.IdOsig + '\')"><span class="glyphicon glyphicon-remove"></span></button></span></td></tr>';
            oTablica.append(sRow);
        }
    });
}

function pretraziTablicu(data, lista) {
    var filtList = [];
    for (var i = 0; i < lista.length; i++) {
        data = data.toLowerCase();
        var imKlijent = lista[i].ime.toLowerCase();
        if (imKlijent.includes(data)) {
            filtList.push(lista[i]);
        }
    }
    PopuniTablicuSearch(filtList);
}
function PopuniTablicuSearch(lista) {
    var oTablica = document.getElementById('TablicaPretrazivanje');
    oTablica.innerHTML = '';
    var nRbr = 1;
    for (var i = 0; i < lista.length; i++) {
        var sRow = '<tr><td>' + nRbr++ + '</td><td>' + lista[i].ime + 
        '</td><td>' + lista[i].prezime + 
        '</td><td>' + lista[i].OIB + '</td><td>' + lista[i].datrod +
         '</td><td><span><button class="btn btn-success" onclick="ModalDodajOsiguranje(\'' + lista[i].klijentKey + '\')"><span class="glyphicon glyphicon-plus-sign"></span></button></span></td><td><span><button onclick="ModalAzurirajKlijenta('+"'"+lista[i].klijentKey+"'"+')" class="btn btn-info" data-toggle="modal"><span class="glyphicon glyphicon-pencil"></span></button></span></td><td><span><button class="btn btn-danger" data-toggle="modal" onclick="ObrisiKlijenta('+"'"+lista[i].klijentKey+"'"+')"><span class="glyphicon glyphicon-remove"></span></button></span></td></tr>';
        oTablica.innerHTML += sRow;
    }
}

function dodajAktivnost(id, naziv) {
    aAktivnostList = [];
    var obavljenaradnja = id;
    var NazivAkt = naziv;

    //dohvacanje datuma i vremena
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datum_vrijeme = date + ' ' + time;

    var sKey = firebase.database().ref().child('aktivnost').push().key;

    var oAktivnost = {
        dateTime: datum_vrijeme,
        naziv: NazivAkt,
        radnja: obavljenaradnja
    }
    // Zapi�i u Firebase
    var oZapis = {};
    oZapis[sKey] = oAktivnost;
    oDbAktivnosti.update(oZapis);
}


function IzracunajCijenuAuto(){
    var godisteVoz = $('#godVozilo').val(); 
    var snagaVoz = $('#snagaVozilo').val();  
    var tipVoz = Odabir("TipVozila"); 
    var temeljCijena = 200;
    var povrat=false;

    if(snagaVoz==""){
        alert('Molim unesite snagu vozila!');
        povrat=true;
    }
    if(povrat == false){

    if(godisteVoz < 1990){
        temeljCijena *= 1.2;
    }
    if(1990 <= godisteVoz < 2000){
        temeljCijena *= 1.5;
    }
    if(2000 <= godisteVoz < 2010){
        temeljCijena *= 2.0;
    }
    if(2010 <= godisteVoz){
        temeljCijena *= 2.5;
    }
    if(snagaVoz < 75){
        temeljCijena *= 1.3;
    }
    if(75 <= snagaVoz < 150){
        temeljCijena *= 1.9;
    }
    if(150 <= snagaVoz < 225){
        temeljCijena *= 2.1;
    }
    if(225 <= snagaVoz){
        temeljCijena *= 2.5;
    }
    if(tipVoz == 1){
        temeljCijena *= 1.5;
    }
    if(tipVoz == 2){
        temeljCijena *= 2;
    }
    if(tipVoz == 3){
        temeljCijena *= 2.2;
    }
    var FinalCijena = Math.round(temeljCijena);
    $('#CijenaOsig').val(FinalCijena);
    console.log(FinalCijena);
    $("#TipkaDodajOsiguranjeAuto").removeAttr('disabled');
}
}

function IzracunajCijenuStan(){
    var godIzgrad = $('#godIzgradnje').val(); 
    var povStan = $('#povrsinaStan').val();   
    var tipStan = Odabir("TipStan"); 
    var temeljCijena = 200;
    var povrat=false;

    if(povStan==""){
        alert('Molim unesite površinu stambene površine!');
        povrat=true;
    }

    if(povrat == false){
    if(godIzgrad < 1960){
        temeljCijena *= 1.2;
    }
    if(1960 <= godIzgrad < 1980){
        temeljCijena *= 1.5;
    }
    if(1980 <= godIzgrad < 2000){
        temeljCijena *= 2.0;
    }
    if(2000 <= godIzgrad){
        temeljCijena *= 2.5;
    }
    if(povStan < 75){
        temeljCijena *= 1.3;
    }
    if(75 <= povStan < 150){
        temeljCijena *= 1.9;
    }
    if(150 <= povStan){
        temeljCijena *= 2.1;
    }
    if(tipStan == 1){
        temeljCijena *= 1.5;
    }
    if(tipStan == 2){
        temeljCijena *= 2;
    }
    var FinalCijena = Math.round(temeljCijena);
    $('#CijenaOsig').val(FinalCijena);
    console.log(FinalCijena);
    $("#TipkaDodajOsiguranjeStan").removeAttr('disabled');
}
}

function IzracunajCijenuZivot(){
    var brDjece = $('#brojDjece').val(); 
    if(brDjece == ""){
        brDjece = 0;
    }
    var mjesPlaca = $('#mjPlaca').val(); 
    var kronBol = Odabir("kronBolest"); 
    var temeljCijena = 200;
    var povrat=false;

    if(mjesPlaca==""){
        alert('Molim unesite količinu mjesečnih primanja!');
        povrat=true;
    }

    if(povrat == false){
    if(brDjece == 0){
        temeljCijena *= 0.9;
    }
    if(1 <= brDjece < 3){
        temeljCijena *= 1.2;
    }
    if(3 <= brDjece < 6){
        temeljCijena *= 2.0;
    }
    if(6 <= brDjece){
        temeljCijena *= 2.5;
    }
    if(mjesPlaca <= 3000){
        temeljCijena *= 1.1;
    }
    if(3000 < mjesPlaca <= 4500){
        temeljCijena *= 1.9;
    }
    if(4500 < mjesPlaca){
        temeljCijena *= 2.1;
    }
    if(kronBol == 2){
        temeljCijena *= 1.5;
    }
    if(kronBol == 1){
        temeljCijena *= 2.5;
    }
    var FinalCijena = Math.round(temeljCijena);
    $('#CijenaOsig').val(FinalCijena);
    console.log(FinalCijena);
    $("#TipkaDodajOsiguranjeZivot").removeAttr('disabled');
}
}

function DodajKlijenta() {
  
    var num = 10001;
    var nSifra = 0;
    var sig = 0;
    for (var i = 0; i < SviKlijenti.length; i++) {
        sig = 0;
        for (var j = 0; j < SviKlijenti.length; j++) {
            if (num == SviKlijenti[j].IDKlijent) {
                num++;
                sig = 1;
            }
        }
        if (sig == 0) {
            nSifra = num;
        }
    }

    var povrat=false;

    //var idKlijenta = $('#idKlijenta').val();
    var sImeKlijenta = $('#Imeklijenta').val();
    if(sImeKlijenta==""){
		alert('Molim popunite polje ime');
        povrat=true;
    }
    var sPrezimeKlijenta = $('#Prezimeklijenta').val();
    if(sPrezimeKlijenta==""){
		alert('Molim popunite polje prezime');
        povrat=true;
    }
    var sOIBKlijenta = $('#OIBklijenta').val();
    if(sOIBKlijenta==""){
		alert('Molim popunite polje oib');
        povrat=true;
    }
    if(sOIBKlijenta.length!=11){
        alert('Oib mora sadržavati 11 znakova!');
		if(isNaN(sOIBKlijenta)){
            alert('Oib neispravan unos(unesite brojeve)!');
			povrat=true;
        }
    }
    var sDatumRođenja = $('#DatumRodenjaklijenta').val();

    var sImePrezKlijenta = "" + sImeKlijenta + " " + sPrezimeKlijenta + "";

    if(povrat == false){
	var zKey = firebase.database().ref().child('klijenti').push().key;

    var oKlijent =
    {
        IDKlijent: zKey,
        ime: sImeKlijenta,
        prezime: sPrezimeKlijenta,
        OIB: sOIBKlijenta,
        datrod: sDatumRođenja
    };

    var oZapis = {};
    oZapis[zKey] = oKlijent;
    oDbKlijenti.update(oZapis);
    $('#idKlijenta').val('');
    $('#Imeklijenta').val('');
    $('#Prezimeklijenta').val('');
    $('#OIBklijenta').val('');
    $('#DatumRodenjaklijenta').val('');
    $('.refresh').click();
    }
    dodajAktivnost(1, sImePrezKlijenta);
}

function PotvrdiDodavanjeOsiguranja(sKlijentKey){
    var IdOsig = $('#idOsiguranjaosig').val();
    var sklijentid = sKlijentKey;
    var stiposig = $('#TipDropdownosig').val();
    var osiguranjeod = $('#datumOdosig').val();
    var osiguranjedo = $('#datumDoosig').val(); 
    var cijenaOsig = $('#CijenaOsig').val();
    var godisteVoz = $('#godVozilo').val(); 
    var snagaVoz = $('#snagaVozilo').val();
    var tipVoz = $('#TipVozila').val();  
    var godIzgrad = $('#godIzgradnje').val(); 
    var povStan = $('#povrsinaStan').val(); 
    var tipStan = $('#TipStan').val(); 
    var kronBol = $('#kronBolest').val(); 
    var brDjece = $('#brojDjece').val(); 
    if(brDjece == ""){
        brDjece = 0;
    }
    var mjesPlaca = $('#mjPlaca').val(); 
    var povrat=false;

    var dobiveniId = Odabir("TipDropdownosig");
    if(dobiveniId == 1){
        //console.log('uso u if');
        //document.getElementById('dodatni-modal-auto').className = "modal-content auti otvoren";
        //document.getElementById('dodatni-modal-stan').className = "modal-content stan";
        //document.getElementById('dodatni-modal-zivot').className = "modal-content zivot";
        //formControl.classList.add('');
        
        var pKey = firebase.database().ref().child('PolicaOsi').push().key;
        var aKey = firebase.database().ref().child('automobil').push().key;
        
        var oPolica =
        {
            IDOsig: pKey,
            KlijentID: sklijentid,
            VrstaOsig: stiposig,
            do: osiguranjedo,
            od: osiguranjeod,
            Cijena: cijenaOsig
        };

        var oAutomobil =
        {
            id: aKey,
            godiste: godisteVoz,
            snaga: snagaVoz,
            tip: tipVoz,
            osigID: pKey
        };
    
        var oZapisPolica = {};
        oZapisPolica[pKey] = oPolica;
        oDbPolice.update(oZapisPolica);

        $('#idOsiguranjaosig').val('');
        $('#klijentidosig').val('');

        var oZapisAuto = {};
        oZapisAuto[aKey] = oAutomobil;
        oDbAutomobil.update(oZapisAuto);
        $('#godVozilo').val('');
        $('#snagaVozilo').val('');
        $('#TipVozila').val('');
        $('.refresh').click();
        dodajAktivnost(4, Odabir(stiposig));
    }
    if(dobiveniId == 2){
        //console.log('uso u if');
        //document.getElementById('dodatni-modal-stan').className = "modal-content stan otvoren";
        //document.getElementById('dodatni-modal-auto').className = "modal-content auti";
        //document.getElementById('dodatni-modal-zivot').className = "modal-content zivot";
        //formControl.classList.add('');

        var pKey = firebase.database().ref().child('PolicaOsi').push().key;
        var sKey = firebase.database().ref().child('StambProst').push().key;
        
        var oPolica =
        {
            IDOsig: pKey,
            KlijentID: sklijentid,
            VrstaOsig: stiposig,
            do: osiguranjedo,
            od: osiguranjeod,
            Cijena: cijenaOsig
        };

        var oStambProst =
        {
            id: sKey,
            vrsta: tipStan,
            velicina: povStan,
            godizgr: godIzgrad,
            osigID: pKey
        };
    
        var oZapisPolica = {};
        oZapisPolica[pKey] = oPolica;
        oDbPolice.update(oZapisPolica);

        $('#idOsiguranjaosig').val('');
        $('#klijentidosig').val('');

        var oZapisStan = {};
        oZapisStan[sKey] = oStambProst;
        oDbStambProst.update(oZapisStan);
        $('#godIzgradnje').val(''); 
        $('#povrsinaStan').val(''); 
        $('#TipStan').val('');
        $('.refresh').click();  
        dodajAktivnost(4, Odabir(stiposig));  

    }
    if(dobiveniId == 3){
        //console.log('uso u if');
        //document.getElementById('dodatni-modal-zivot').className = "modal-content zivot otvoren";
        //document.getElementById('dodatni-modal-auto').className = "modal-content auti";
        //document.getElementById('dodatni-modal-stan').className = "modal-content stan";
        //formControl.classList.add('');

        var pKey = firebase.database().ref().child('PolicaOsi').push().key;
        var zKey = firebase.database().ref().child('Zivotno').push().key;
        
        var oPolica =
        {
            IDOsig: pKey,
            KlijentID: sklijentid,
            VrstaOsig: stiposig,
            do: osiguranjedo,
            od: osiguranjeod,
            Cijena: cijenaOsig
        };

        var oZivotno =
        {
            id: zKey,
            brojdjec: brDjece,
            kronBolesti: kronBol,
            prihod: mjesPlaca,
            osigID: pKey
        };
    
        var oZapisPolica = {};
        oZapisPolica[pKey] = oPolica;
        oDbPolice.update(oZapisPolica);

        $('#idOsiguranjaosig').val('');
        $('#klijentidosig').val('');

        var oZapisZivotno = {};
        oZapisZivotno[zKey] = oZivotno;
        oDbZivotno.update(oZapisZivotno);
        $('#kronBolest').val('');
        $('#brojDjece').val('');
        $('#mjPlaca').val(''); 
        $('.refresh').click();
        dodajAktivnost(4, Odabir(stiposig));
    }

}

function refresh(){
    window.location.href = "index.html";
}

    function ModalDodajOsiguranje(sKlijentKey) {
        var oKlijentRef = oDb.ref('klijenti/' + sKlijentKey);
        oKlijentRef.once('value', function (oOdgovorPosluzitelja) {
            var oKlijent = oOdgovorPosluzitelja.val();
            console.log(oKlijent);
            //Popunjavanje elemenata forme za uređivanje
            $('#klijentidosig').val(oKlijent.ime);
            $('#TipkaDodajOsiguranjeAuto').attr('onclick', 'PotvrdiDodavanjeOsiguranja("' + sKlijentKey + '")');
            $('#TipkaDodajOsiguranjeStan').attr('onclick', 'PotvrdiDodavanjeOsiguranja("' + sKlijentKey + '")');
            $('#TipkaDodajOsiguranjeZivot').attr('onclick', 'PotvrdiDodavanjeOsiguranja("' + sKlijentKey + '")');
    
            $('#dodaj-osiguranje').modal('show');
        });
    }

    // function DodajOsiguranje(sKlijentKey) {
    
    //     var IdOsig = $('#idOsiguranjaosig').val();
    //     var sklijentid = sKlijentKey;
    //     var stiposig = $('#TipDropdownosig').val();
    //     var osiguranjeod = $('#datumOdosig').val();
    //     var osiguranjedo = $('#datumDoosig').val();
    
    //     // Generiranje novoga klju�a u bazi
    //     var zKey = firebase.database().ref().child('PolicaOsi').push().key;
    
    //     var oPolica =
    //     {
    //         IDOsig: zKey,
    //         KlijentID: sklijentid,
    //         VrstaOsig: stiposig,
    //         od: osiguranjedo,
    //         do: osiguranjeod
    //     };
    
    //     var oZapis = {};
    //     oZapis[zKey] = oPolica;
    //     oDbPolice.update(oZapis);

    //     $('#idOsiguranjaosig').val('');
    //     $('#klijentidosig').val('');
    // }


function ModalAzurirajKlijenta(sKlijentKey) {
    
    var oKlijentRef = oDb.ref('klijenti/' + sKlijentKey);
    oKlijentRef.once('value', function (oOdgovorPosluzitelja) {
        var oKlijent = oOdgovorPosluzitelja.val();
        console.log(oKlijent);
        //Popunjavanje elemenata forme za ure�ivanje
        $('#idKlijentaEdit').val(oKlijent.IDKlijent);
        $('#OIBklijentaEdit').val(oKlijent.OIB);
        $('#DatumRodenjaklijentaEdit').val(oKlijent.datrod);
        $('#ImeklijentaEdit').val(oKlijent.ime);
        $('#PrezimeklijentaEdit').val(oKlijent.prezime);

        $('#ModalAzurirajKlijenta').attr('onclick', 'SpremiAzuriraniKlijent("' + sKlijentKey + '")');

        $('#azuriraj-klijenta').modal('show');
    });
    
}



function ModalAzurirajOsiguranje(sPoliceKey) {
    var oPoliceRef = oDb.ref('PoliceOsi/' + sPoliceKey);
    oPoliceRef.on('value', function (oOdgovorPosluzitelja) {
            var oPolice = oOdgovorPosluzitelja.val();
            console.log(sPoliceKey);
            //Popunjavanje elemenata forme za ure�ivanje
            // $('#klijentidosigEdit').val(oKlijent.ime);
            $('#TipkaAzurirajOsiguranje').attr('onclick', 'SpremiAzuriranoOsiguranje("' + sPoliceKey + '")');
            $('#azuriraj-osiguranje').modal('show');
    });
}

function ModalProduziOsiguranje(sPoliceKey) {
    var today = new Date();
    
    var oPoliceRef = oDb.ref('PoliceOsi/' + sPoliceKey);
    oPoliceRef.on('value', function (oOdgovorPosluzitelja) {
            var oPolice = oOdgovorPosluzitelja.val();
            console.log(sPoliceKey);
            //Popunjavanje elemenata forme za ure�ivanje
            // $('#klijentidosigEdit').val(oKlijent.ime);
            $('#TipkaAktivirajOsiguranje').attr('onclick', 'ProduziOsiguranje("' + sPoliceKey + '")');
            $('#produzi-osiguranje').modal('show');
    });
}

function ProduziOsiguranje(sPoliceKey){
    var s= confirm('Jeste li sigurni da želite ponovno aktivirati policu?');
    if(s==true){
    var stiposig = $('#TipDropdownosigExtend').val();
    var osiguranjeod = $('#datumOdosigExtend').val();
    var osiguranjedo = $('#datumDoosigExtend').val();
    console.log(sPoliceKey);
    oDbPolice.child(sPoliceKey).update({
        VrstaOsig: stiposig,
        od: osiguranjedo,
        do: osiguranjeod
    });
    dodajAktivnost(7, Odabir(stiposig));
}
}



function SpremiAzuriraniKlijent(sKlijentKey) {
    var s= confirm('Jeste li sigurni da želite ažurirati klijenta?');
    if(s==true){
    
    var oKlijentRef = oDb.ref('klijenti/' + sKlijentKey);
    var klijentid = $('#idKlijentaEdit').val();
    var klijentoib = $('#OIBklijentaEdit').val();
    var klijentdatum = $('#DatumRodenjaklijentaEdit').val();
    var klijentime = $('#ImeklijentaEdit').val();
    var klijentprezime = $('#PrezimeklijentaEdit').val();
    var sImePrezKlijenta = "" + klijentime + " " + klijentprezime + "";

    var oKlijent = {
        IDKlijent: klijentid,
        OIB: klijentoib,
        datrod: klijentdatum,
        ime: klijentime,
        prezime: klijentprezime
    }
    oKlijentRef.update(oKlijent);
    
    dodajAktivnost(2, sImePrezKlijenta);
}
}

function SpremiAzuriranoOsiguranje(sPoliceKey) {
    var s= confirm('Jeste li sigurni da želite ažurirati policu?');
    if(s==true){
        //var oPoliceRef = oDb.ref('klijenti/' + sKlijentKey);

        //var sklijentid = sPoliceKey;
        var stiposig = $('#TipDropdownosigEdit').val();
        var osiguranjeod = $('#datumOdosigEdit').val();
        var osiguranjedo = $('#datumDoosigEdit').val();
        //var cijenaosig = $('#CijenaOsigEdit').val();
        console.log(sPoliceKey);
        oDbPolice.child(sPoliceKey).update({
            VrstaOsig: stiposig,
            do: osiguranjedo,
            od: osiguranjeod,
            //Cijena: cijenaosig
        });
        
/*var oPolica =
        {
            KlijentID: sklijentid,
            VrstaOsig: stiposig,
            od: osiguranjedo,
            do: osiguranjeod
        };
        oPoliceRef.update(oPolica);*/
        dodajAktivnost(5, Odabir(stiposig));
    }
}

function TipOsiguranjaDropdown(dropid) {
    
    var oSelect = $(dropid);
    oSelect.find('select');
    oSelect.empty();
    SveVrsteOsig.forEach(SvePolice => {
        var sSelect = '<option value="' + SvePolice.IDVrsta + '">' + SvePolice.Vrsta + '</option>';//auto osiguranje: 1, stambeno:2 , zivotno: 3
        oSelect.append(sSelect);
    });   
    
}
function KojiJeBtn(){
    var dobiveniId = Odabir("TipDropdownosig");
    if(dobiveniId == 1){
        console.log('uso u if');
        document.getElementById('dodatni-modal-auto').className = "modal-content auti otvoren";
        document.getElementById('dodatni-modal-stan').className = "modal-content stan";
        document.getElementById('dodatni-modal-zivot').className = "modal-content zivot";
        //formControl.classList.add('');
    }
    if(dobiveniId == 2){
        console.log('uso u if');
        document.getElementById('dodatni-modal-stan').className = "modal-content stan otvoren";
        document.getElementById('dodatni-modal-auto').className = "modal-content auti";
        document.getElementById('dodatni-modal-zivot').className = "modal-content zivot";
        //formControl.classList.add('');
    }
    if(dobiveniId == 3){
        console.log('uso u if');
        document.getElementById('dodatni-modal-zivot').className = "modal-content zivot otvoren";
        document.getElementById('dodatni-modal-auto').className = "modal-content auti";
        document.getElementById('dodatni-modal-stan').className = "modal-content stan";
        //formControl.classList.add('');
    }
    
}

function TipVozilaDropdown(dropid) {
    var oSelect = $(dropid);
    oSelect.find('select');
    oSelect.empty();
    SviTipVoz.forEach(SviAutomobili => {
        var sSelect = '<option value="' + SviAutomobili.tip + '">' + SviAutomobili.tip + '</option>';
        oSelect.append(sSelect);
    });
    
}

function TipStambDropdown(dropid) {
    var oSelect = $(dropid);
    oSelect.find('select');
    oSelect.empty();
    SviTipStambProstor.forEach(SviStambProstor => {
        var sSelect = '<option value="' + SviStambProstor.vrsta + '">' + SviStambProstor.vrsta + '</option>';
        oSelect.append(sSelect);
    });
    
}

function TipOdgDaNeKronDropdown(dropid) {
    var oSelect = $(dropid);
    oSelect.find('select');
    oSelect.empty();
    SviOdgDaNe.forEach(SviZivotnoOsig => {
        var sSelect = '<option value="' + SviZivotnoOsig.kronBolesti + '">' + SviZivotnoOsig.odgovor + '</option>';
        oSelect.append(sSelect);
    });
    
}


function ObrisiKlijenta(sKlijentKey) {

    var s= confirm('Jeste li sigurni da želite obrisati klijenta?');
    if(s==true){
    var obrisaniKlijentKey = '';
    var sImePrezKlijenta ='';
    oDbKlijenti.on('value',function(){
    SviKlijenti.forEach(function(x){
        if (sKlijentKey == x.IDKlijent) {
            obrisaniKlijentKey =  x.IDKlijent;
            sImePrezKlijenta = x.ime + " " + x.prezime;
        }
        
    });
});
    var oKlijentRef = oDb.ref('klijenti/' + sKlijentKey);
    SvePolice.forEach(function(polica){
        if(sKlijentKey == polica.KlijentID){
            oDbPolice.orderByChild('KlijentID').equalTo(polica.KlijentID).on('value',function(snapshot){
                snapshot.forEach(function(child){ 
                  UserId = child.key;
                  });
            });
            oDbPolice.child(UserId).remove();
        }
    });
    console.log(sImePrezKlijenta);
    oKlijentRef.remove();
    dodajAktivnost(3, sImePrezKlijenta);
    
}
    
}

function ObrisiPolicuOsiguranja(sPoliceKey) {
    var s= confirm('Jeste li sigurni da želite obrisati policu?');
    if(s==true){
    // for (var i = 0; i < SvePolice.length; i++) {
    //     if (sPoliceKey == SvePolice[i].sPoliceKey) {
    //         obrisanaPolicaKey = SvePolice[i].sPoliceKey;
    //     }
    // }
    var oPolicaRef = oDb.ref('PolicaOsi/' + sPoliceKey);
    SviAutomobili.forEach(function(auto){
        if(sPoliceKey == auto.osigID){
            oDbAutomobil.orderByChild('osigID').equalTo(auto.osigID).on('value',function(snapshot){
                snapshot.forEach(function(child){ 
                  UserId = child.key;
                  });
            });
            oDbAutomobil.child(UserId).remove();
        }
    });
    SviStambProstor.forEach(function(stan){
        if(sPoliceKey == stan.osigID){
            oDbStambProst.orderByChild('osigID').equalTo(stan.osigID).on('value',function(snapshot){
                snapshot.forEach(function(child){ 
                  UserId = child.key;
                  });
            });
            oDbStambProst.child(UserId).remove();
        }
    });
    SviZivotnoOsig.forEach(function(zivo){
        if(sPoliceKey == zivo.osigID){
            oDbZivotno.orderByChild('osigID').equalTo(zivo.osigID).on('value',function(snapshot){
                snapshot.forEach(function(child){ 
                  UserId = child.key;
                  });
            });
            oDbZivotno.child(UserId).remove();
        }
    });
    oPolicaRef.remove();
    
    /*$("a[data-target=#tablica-po-osiguranjima]").click(function(ev) {
        ev.preventDefault();
        var target = $(this).attr("href");
    
        // load the url and show modal on success
        $("#tablica-po-osiguranjima .modal-body").load(target, function() { 
             $("#tablica-po-osiguranjima").modal("show"); 
        });
    });*/
}
}

function dajOsiguranje(osKey) {
    var name = '';
    SveVrsteOsig.forEach(oVrstaPolice => {
        if (osKey == oVrstaPolice.vrstepoliceKey) {
            name = oVrstaPolice.Vrsta;
        }
    });
    return name;
}

function dajKlijentaIme(kiKey) {
    var kime = '';
    SviKlijenti.forEach(oKlijenti => {
        if (kiKey == oKlijenti.klijentKey) {
            kime = oKlijenti.ime;
        }
    });
    return kime;

}

function dajKlijentaPrezime(kpKey) {
    var kprez = '';
    SviKlijenti.forEach(oKlijenti => {
        if (kpKey == oKlijenti.klijentKey) {
            kprez = oKlijenti.prezime;
        }
    });
    return kprez;

}

function dajKlijentaOib(koKey) {
    var koib = '';
    SviKlijenti.forEach(oKlijenti => {
        if (koKey == oKlijenti.klijentKey) {
            koib = oKlijenti.OIB;
        }
    });
    return koib;
}

function dajDatumDoPolice(ddKey) {
    var ddo = '';
    SvePolice.forEach(oPolice => {
        if (ddKey == oPolice.policaKey) {
            ddo = oPolice.Do;
        }
    });
    return ddo;
}

function Odabir(DdId) {
    var x = document.getElementById(DdId);
    var podatak = x.value;
    return podatak;
}

function DatePicekrFunction(){
    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var enddate = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
    $('#datumOdosig').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        startDate: today,
        endDate: today,
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#datumOdosig').datepicker('setDate', today)
    $('#datumOdosig').attr("readOnly",true)

    $('#datumDoosig').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        startDate: enddate,
        endDate: enddate,
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#datumDoosig').datepicker('setDate', enddate)
    $('#datumDoosig').attr("readOnly",true)

    $('#datumOdosigEdit').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#datumOdosigEdit').datepicker('setDate', today)
    $('#datumOdosigEdit').attr("readOnly",true)

    $('#datumDoosigEdit').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#datumDoosigEdit').datepicker('setDate', enddate)
    $('#datumDoosigEdit').attr("readOnly",true)

    $('#datumOdosigExtend').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#datumOdosigExtend').datepicker('setDate', today)
    $('#datumOdosigExtend').attr("readOnly",true)

    $('#datumDoosigExtend').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#datumDoosigExtend').datepicker('setDate', enddate)
    $('#datumDoosigExtend').attr("readOnly",true)

    $('#godVozilo').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        startDate: "-40y",
        endDate: today,
        format: 'yyyy',
        orientation: "top"
    });
    $('#godVozilo').datepicker('setDate', today)
    $('#godVozilo').attr("readOnly",true)
    
    $('#godIzgradnje').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        endDate: today,
        format: 'yyyy',
        orientation: "top"
    });
    $('#godIzgradnje').datepicker('setDate', today)
    $('#godIzgradnje').attr("readOnly",true)

    $('#DatumRodenjaklijenta').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        endDate: today,
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#DatumRodenjaklijenta').datepicker('setDate', today)
    $('#DatumRodenjaklijenta').attr("readOnly",true)

    $('#DatumRodenjaklijentaEdit').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: 'hr',
        endDate: today,
        format: 'dd/mm/yyyy',
        orientation: "top"
    });
    $('#DatumRodenjaklijentaEdit').datepicker('setDate', today)
    $('#DatumRodenjaklijentaEdit').attr("readOnly",true)
}
