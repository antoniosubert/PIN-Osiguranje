
var app_fireBase = {};

//inicijalizacija baze podataka(firebase-a)
const firebaseConfig = {
  apiKey: "AIzaSyCUiKKj9g6bdzOuFBY4TXbFsdHc9270blg",
  authDomain: "pin-osiguranje.firebaseapp.com",
  databaseURL: "https://pin-osiguranje-default-rtdb.firebaseio.com",
  projectId: "pin-osiguranje",
  storageBucket: "pin-osiguranje.appspot.com",
  messagingSenderId: "681393174908",
  appId: "1:681393174908:web:df837436d2e42e1c8cccf9",
  measurementId: "G-1PDMNS2640"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//kreiranje objekta firebase baze
app_fireBase = firebase;
var oDb = firebase.database();

var oDbKlijenti = oDb.ref('klijenti');
var oDbPolice = oDb.ref('PolicaOsi');
var oDbVrstaPolice = oDb.ref('VrstaOsig');
var oDbAutomobil = oDb.ref('automobil');
var oDbTipVozila = oDb.ref('VrsteVozila');
var oDbStambProst = oDb.ref('StambProst');
var oDbTipStambProst = oDb.ref('TipStambProst');
var oDbZivotno = oDb.ref('Zivotno');
var oDbOdgDaNe = oDb.ref('OdgDaNe');
var oDbAktivnosti = oDb.ref('aktivnosti');

/*
var SviKlijenti = [];
var SvePolice = [];
var SveVrsteOsig = [];
var SviAutomobili = [];
var SviTipVoz = [];
var SviStambProstor = [];
var SviTipStambProstor = [];
var SviZivotnoOsig = [];
*/

/*class Klijent{
  constructor(IDKlijent, ime, prezime, datrod, OIB){
    this.IDKlijent = IDKlijent;
    this.ime = ime;
    this.prezime = prezime;
    this.datrod = datrod;
    this.OIB = OIB;
  }
}

class PoliceOsig{
  constructor(IDOsig, VrstaOsig, Aktivno, KlijentID){
    this.IDOsig = IDOsig;
    this.VrstaOsig = VrstaOsig;
    this.Aktivno = Aktivno;
    this.KlijentID = KlijentID;
  }
}

class VrstaOsigur{
  constructor(IDVrsta, Vrsta){
    this.IDVrsta = IDVrsta;
    this.Vrsta = Vrsta;
  }
}

class Automobili{
  constructor(id, godiste, snaga, tip){
    this.id = id;
    this.godiste = godiste;
    this.snaga = snaga;
    this.tip = tip;
  }
}

class TipVozila{
  constructor(id, tip){
    this.id = id;
    this.tip = tip;
  }
}

class StambProstor{
  constructor(id, vrsta, velicina, godizgr){
    this.id = id;
    this.vrsta = vrsta;
    this.velicina = velicina;
    this.godizgr = godizgr;
  }
}

class TipStambProstor{
  constructor(id, vrsta){
    this.id = id;
    this.vrsta = vrsta;
  }
}

class ZivotnoOsig{
  constructor(id, brojdjec, bolesti, prihod){
    this.id = id;
    this.brojdjec = brojdjec;
    this.bolesti = bolesti;
    this.prihod = prihod;
  }
}

function DohvacanjeKlijenata() {
  oDbKlijenti.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oKlijentiSnapshot){
      var oKlijenti = oKlijentiSnapshot.val();
      const klijent = new Klijent(oKlijenti.IDKlijent, oKlijenti.ime, oKlijenti.prezime, oKlijenti.datrod, oKlijenti.OIB);
        SviKlijenti.push(klijent);
        //console.log(SviKlijenti[0]);

    });
  });
}

function DohvacanjePoliceOsig() {
  oDbPolice.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oPoliceSnapshot){
      var oPolice = oPoliceSnapshot.val();
      const police = new PoliceOsig(oPolice.IDOsig, oPolice.VrstaOsig, oPolice.Aktivno, oPolice.KlijentID);
        SvePolice.push(police);
    });
  });
}

function DohvacanjeVrsteOsig() {
  oDbVrstaPolice.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oVrstaPoliceSnapshot){
      var oVrstaPolice = oVrstaPoliceSnapshot.val();
      const vrsta_police = new VrstaOsigur(oVrstaPolice.IDVrsta, oVrstaPolice.Vrsta);
        SveVrsteOsig.push(vrsta_police);
    });
  });
}

function DohvacanjeAutomobila() {
  oDbAutomobil.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oAutomobilSnapshot){
      var oAutomobil = oAutomobilSnapshot.val();
      const automobil = new Automobili(oAutomobil.id, oAutomobil.godiste, oAutomobil.snaga, oAutomobil.tip);
        SviAutomobili.push(automobil);
    });
  });
}

function DohvacanjeTipVozila() {
  oDbTipVozila.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oTipVozilaSnapshot){
      var oTipVozila = oTipVozilaSnapshot.val();
      const tip_vozila = new TipVozila(oTipVozila.id, oTipVozila.tip);
        SviTipVoz.push(tip_vozila);
    });
  });
}

function DohvacanjeStambProstor() {
  oDbStambProst.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oStambProstSnapshot){
      var oStambProst = oStambProstSnapshot.val();
      const stambeni_prostor = new StambProstor(oStambProst.id, oStambProst.vrsta, oStambProst.velicina, oStambProst.godizgr);
        SviStambProstor.push(stambeni_prostor);
    });
  });
}

function DohvacanjeTipStambProstor() {
  oDbTipStambProst.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oTipStambProstSnapshot){
      var oTipStambProst = oTipStambProstSnapshot.val();
      const tip_stambeni_prostor = new TipStambProstor(oTipStambProst.id, oTipStambProst.vrsta);
        SviTipStambProstor.push(tip_stambeni_prostor);
    });
  });
}

function DohvacanjeZivotnoOsig() {
  oDbZivotno.on('value', function (oOdgovorPosluzitelja) {
    oOdgovorPosluzitelja.forEach(function(oZivotnoSnapshot){
      var oZivotno = oZivotnoSnapshot.val();
      const zivotno = new ZivotnoOsig(oZivotno.id, oZivotno.brojdjec, oZivotno.bolesti, oZivotno.prihod);
        SviZivotnoOsig.push(zivotno);
    });
  });
}*/


