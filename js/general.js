function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function mesLetras(mes)
{
    var mesLetra = "";
    switch(mes)
    {
        case 1:
            mesLetra = "January";
            break;
        case 2:
            mesLetra = "February";
            break;
        case 3:
            mesLetra = "March";
            break;
        case 4:
            mesLetra = "April";
            break;
        case 5:
            mesLetra = "May";
            break;
        case 6:
            mesLetra = "June";
            break;
        case 7:
            mesLetra = "July";
            break;
        case 8:
            mesLetra = "August";
            break;
        case 9:
            mesLetra = "September";
            break;
        case 10:
            mesLetra = "October";
            break;
        case 11:
            mesLetra = "November";
            break;
        case 12:
            mesLetra = "December";
            break;
        default:
            break;
    }

    return mesLetra;
}

function findeMes(mes)
{
    var fin = "";
    switch(mes)
    {
        case 1:
            fin = "31";
            break;
        case 2:
            fin = "29";
            break;
        case 3:
            fin = "31";
            break;
        case 4:
            fin = "30";
            break;
        case 5:
            fin = "31";
            break;
        case 6:
            fin = "30";
            break;
        default:
            break;
    }

    return fin;
}

function mesFechas(mes)
{
    var mesFecha = "";

    if(mes < 10)
    {
        mesFecha = "0" + mes;
    }
    else
    {
        mesFecha = mes;
    }
    
    return mesFecha;
}
