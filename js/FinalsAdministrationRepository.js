var aAktivnostList = [];

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
    $(document).ready(function () {
        PopuniTablicuAktivnosti();
    });
});

function PopuniTablicuAktivnosti() {
    var oTablica = $('#povijestAktivnosti');
    var nRbr = 1;
    oTablica.find('tbody').empty();
    oDbAktivnosti.on('value',function(){    
        aAktivnostList.forEach(function(oAktivnost) {
        var sRow = '<tr><td>' + nRbr++ + '</td><td>' + dajRadnju(oAktivnost.radnja) + '</td><td>' + oAktivnost.dateTime + '</td><td>' + oAktivnost.naziv + '</td><td><span><button class="btn btn-danger" data-toggle="modal" onclick="ObrisiAktivnost(\'' + oAktivnost.aktivnostKey + '\')"><span class="glyphicon glyphicon-remove"></span></button></span></td></tr>';
        oTablica.find('tbody').append(sRow);
    });
});
}


function ObrisiAktivnost(mKey) {
    var s= confirm('Jeste li sigurni da želite aktivnost?');
    if(s==true){
    var oAktivnostRef = oDb.ref('aktivnosti/' + mKey);
    oAktivnostRef.remove();
    }
}


function dajRadnju(id) {
    switch (parseInt(id)) {
        case 1:
            return "Dodavanje klijenta";
            break;
        case 2:
            return "Azuriranje klijenta";
            break;
        case 3:
            return "Brisanje klijenta";
            break;
        case 4:
            return "Dodavanje osiguranja"; 
            break; 
        case 5:
            return "Azuriranje osiguranja"; 
            break;
        case 6:
            return "Brisanje osiguranja"; 
            break;
        case 7:
            return "Produljenje osiguranja";
            break;     
    }
}