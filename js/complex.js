function Complex(mes)
{
    document.getElementById("loadingComplex").style.display = "";
    setTimeout(hideLoaderComplex, 5000);
    setTimeout(ShowDataComplex, 5500, mes);
}

function Complexto(mes)
{

    idx = document.getElementsByName("idxs")[0].value;
    document.getElementById("loadingComplex").style.display = "";
    setTimeout(hideLoaderComplex, 5000);
    setTimeout(ShowDataComplexTo, 5500, idx);
}

function hideLoaderComplex()
{
    document.getElementById("loadingComplex").style.display = "none";
}

function ShowDataComplex(mes)
{
    var array=[];
    console.log(mes,'fecth blockchain');
    var proxy = "https://cors-anywhere.herokuapp.com/";
    var url='http://smartcm.eastus.cloudapp.azure.com:3000/v0/csv/'
    fetch(proxy+url)
    .then((response) => {
        return response.json()
      })
      .then((data) => {
        array=data;
        console.log('array =>responses',array)

    var texto = "";
    var textoMLA = "<h5><b>MLA Conditions</b></h5>";
    var textoContract = "<h5><b>Contract Information</b></h5>";

    if(mes == 1)
    {
        console.log('array =>responses BTS Land Contract',array[4])
        textoContract = textoContract + 
        "<ul>" + 
        "<li>BTS Land Contract</li>" +
        "<li>Site ID:"+ array[4].idx+"</li>" +
        "<li>Site Name: "+array[4].sitioAtc+"</li>" +
        "<li>Site Number:"+ array[4].idx+"</li>" +
        "<li>Site Address:"+ array[4].dirAtc+"</li>" +
        "<li>Lanlord:"+ array[4].landLord+"</li>" +
        "<li>Lanlord Tax ID:"+ array[4].taxID+"</li>" +
        "<li>Rent Amount:"+ array[4].rent+"</li>" +
        "<li>Latitude:"+ array[4].lati+"</li>" +
        "<li>Longitude:"+ array[4].long+"</li>" +
        "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
        "</ul>";
textoMLA = textoMLA +
        "<ul>" + 
        "<li>Annual Increment: "+ array[4].incrementAnn+"</li>" +
        "<li>Payment frequency: "+ array[4].PAYMENT+"</li>" +
        "</ul>";
        texto = texto + "<input type='button' class='boton_verde' value='Generate AP' onclick=\"javascript:GenerateAPComplex(" + mes + ")\"/>";
    }
    else
    {
        if(mes == 2)
        {
            console.log('array =>responses BTS Tenant Contract' ,array[3])
            textoContract = textoContract + 
                      "<ul>" + 
                    "<li>BTS Tenant Contract</li>" +
                    "<li>Site ID:"+ array[3].idx+"</li>" +
                    "<li>Siterra ID:"+ array[3].idx+"</li>" +
                    "<li>Site Name: "+ array[3].nameSite+"</li>" +
                    "<li>Site Type: "+ array[3].siteType+"</li>" +
                    "<li>Tower heigth:"+ array[3].height+"</li>" +
                    "<li>Rent Amount:"+ array[3].rentAmount+"</li>" +
                    "<li>Land Rent Amount:"+ array[3].landRent+"</li>" +
                    "<li>Latitude:"+ array[3].latitud+"</li>" +
                    "<li>Longitude:"+ array[3].longitud+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Client:"+ array[3].client+"</li>" +
                    "<li>Annual Increment: INPC <br/>"+ array[3].AnnIncrement+"</li>" +
                    "<li>Payment frequency:"+ array[3].Payment+"</li>" +
                    "<li>Date of increment: "+ array[3].dateIncrement+"</li>" +
                    "</ul>";
        }

        if(mes == 3)
        {
            console.log('array =>responses Collocation Contract',array[7])
            textoContract = textoContract + 
            "<ul>" + 
            "<li>Collocation Contract</li>" +
            "<li>Site ID: "+ array[7].idx+"</li>" +
            "<li>Site Number: "+ array[7].siteNumber+"</li>" +
            "<li>Site Name:  "+ array[7].siteName+"</li>" +
            "<li>Contact Name:  "+ array[7].contact+"</li>" +
            "<li>Site Address: "+ array[7].siteAdrres+"</li>" +
            "<li>Site Type: "+ array[7].siteType+"</li>" +
            "<li>Antenna Type: "+ array[7].AntenaType+"</li>" +
            "<li>Heigth:  "+ array[7].heigth+"</li>" +
            "<li>Rent Amount: "+ array[7].rentAmount+"</li>" +
            "<li>Latitude:  "+ array[7].latitud+"</li>" +
            "<li>Longitude:  "+ array[7].longitud+"</li>" +
            "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
            "</ul>";
    textoMLA = textoMLA +
            "<ul>" + 
            "<li>Client:  "+ array[7].client+"</li>" +
            "<li>Annual Increment: INPC <br/>  "+ array[7].anualIncre+"</li>" +
            "<li>Payment frequency: "+ array[7].paymentFrecue+"</li>" +
            "<li>Date of increment:  "+ array[7].dateIncre+"</li>" +
            "</ul>";
        }

        if(mes == 4)
        {
            console.log('array =>responses  Rent Decrease Contract ',array[0])
            textoContract = textoContract + 
                    "<ul>" + 
                    "<li>Rent Decrease Contract</li>" +
                    "<li>Site ID:"+ array[0].idx+"</li>" +
                    "<li>Site Name: "+ array[0].siteName+"</li>" +
                    "<li>Lanlord:"+ array[0].landLord+"</li>" +
                    "<li>Negotiation "+ array[0].negocType+"</li>" +
                    "<li>Reduction Percentage:"+ array[0].reduction+"</li>" +
                    "<li>Rent Amount:"+ array[0].rentAmount+"</li>" +
                    "<li>Latitude:"+ array[0].latid+"</li>" +
                    "<li>Longitude: "+ array[0].longi+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Annual Increment:"+ array[0].anualIncre+"</li>" +
                    "<li>Payment frequency:"+ array[0].payment+"</li>" +
                    "</ul>";
        }

        if(mes == 5)
        {
            console.log('array =>responses Additional Equipment Contract ',array[5])
            textoContract = textoContract + 
                    "<ul>" + 
                    "<li>Additional Equipment Contract</li>" +
                    "<li>Site ID: "+ array[5].idx+"</li>" +
                    "<li>Site Name: "+ array[5].siteName+"</li>" +
                    "<li>Site Address: "+ array[5].siteAdrres+"</li>" +
                    "<li>Site Number: "+ array[5].siteNumber+"</li>" +
                    "<li>Contact Name: "+ array[5].contactName+"</li>" +
                    "<li>Rent Amount:"+ array[5].rentAmount+"</li>" +
                    "<li>Latitude: "+ array[5].latitud+"</li>" +
                    "<li>Longitude:"+ array[5].longitud+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Client"+ array[5].payment+"</li>" +
                    "<li>Annual Increment: INPC <br/>"+ array[5].anualIncre+"</li>" +
                    "<li>Payment frequency: "+ array[5].PaymentFrec+"</li>" +
                    "<li>Date of increment: "+ array[5].DateIncre+"</li>" +
                    "</ul>";
        }

        if(mes == 6)
        {
            console.log('array =>responses Tower Integrity Contract ',array[1])
            textoContract = textoContract + 
                    "<ul>" + 
                    "<li>Tower Integrity Contract</li>" +
                    "<li>Site Name:  "+ array[1].siteName+"</li>" +
                    "<li>Site Type: "+ array[1].siteType+"</li>" +
                    "<li>Tower height:  "+ array[1].towerHeigth+"</li>" +
                    "<li>Additional equipment:"+ array[1].Addequipment+"</li>" +
                    "<li>Height: "+ array[1].Heigth+"</li>" +
                    "<li>Rent Amount:"+ array[1].rentAmount+"</li>" +
                    "<li>Latitude:"+ array[1].latitude+"</li>" +
                    "<li>Longitude:"+ array[1].longitude+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Client:"+ array[1].client+"</li>" +
                    "<li>Payment frequency:"+ array[1].payment+"</li>" +
                    "<li>Date of increment:"+ array[1].date+"</li>" +
                    "</ul>";
        }
        texto = texto + "<input type='button' class='boton_verde' value='Generate AP' onclick='javascript:GenerateAPComplex(" + mes + ")'/> &nbsp;" +
                        "<input type='button' class='boton_azul' value='Generate AR' onclick='javascript:GenerateARComplex(" + mes + ")'/>";
    }

    document.getElementById("infoContractComplex").innerHTML = textoContract;
    document.getElementById("infoMLAComplex").innerHTML = textoMLA;
    document.getElementById("actionsComplex").innerHTML = texto;
})
}

function ShowDataComplexTo(idx)
{
    var array=[];
    var type=null;
    console.log(idx,'fecth blockchain');
    var f = new Date();
    var mes = (f.getMonth() +1);
    var proxy = "https://cors-anywhere.herokuapp.com/";
    var url='http://smartcm.eastus.cloudapp.azure.com:3000/v0/csv/'
    fetch(proxy+url+idx)
    .then((response) => {
        return response.json()
      })
      .then((data) => {
        array=data;
        type=array[0].mes;
        console.log(type,'array =>responses',array)
        console.log('array =>type',type)

    var texto = "";
    var textoMLA = "<h5><b>MLA Conditions</b></h5>";
    var textoContract = "<h5><b>Contract Information</b></h5>";

    if(type == 1)
    {
        console.log('array =>responses BTS Land Contract',array[0])
        textoContract = textoContract + 
        "<ul>" + 
        "<li>BTS Land Contract</li>" +
        "<li>Site ID:"+ array[0].idx+"</li>" +
        "<li>Site Name: "+array[0].sitioAtc+"</li>" +
        "<li>Site Number:"+ array[0].idx+"</li>" +
        "<li>Site Address:"+ array[0].dirAtc+"</li>" +
        "<li>Lanlord:"+ array[0].landLord+"</li>" +
        "<li>Lanlord Tax ID:"+ array[0].taxID+"</li>" +
        "<li>Rent Amount:"+ array[0].rent+"</li>" +
        "<li>Latitude:"+ array[0].lati+"</li>" +
        "<li>Longitude:"+ array[0].long+"</li>" +
        "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
        "</ul>";
textoMLA = textoMLA +
        "<ul>" + 
        "<li>Annual Increment: "+ array[0].incrementAnn+"</li>" +
        "<li>Payment frequency: "+ array[0].PAYMENT+"</li>" +
        "</ul>";
        texto = texto + "<input type='button' class='boton_verde' value='Generate AP' onclick=\"javascript:GenerateAPComplex(" + mes + ")\"/>";
    }
    else
    {
        if(type == 2)
        {
            console.log('array =>responses BTS Tenant Contract' ,array[0])
            textoContract = textoContract + 
                      "<ul>" + 
                    "<li>BTS Tenant Contract</li>" +
                    "<li>Site ID:"+ array[0].idx+"</li>" +
                    "<li>Siterra ID:"+ array[0].idx+"</li>" +
                    "<li>Site Name: "+ array[0].nameSite+"</li>" +
                    "<li>Site Type: "+ array[0].siteType+"</li>" +
                    "<li>Tower heigth:"+ array[0].height+"</li>" +
                    "<li>Rent Amount:"+ array[0].rentAmount+"</li>" +
                    "<li>Land Rent Amount:"+ array[0].landRent+"</li>" +
                    "<li>Latitude:"+ array[0].latitud+"</li>" +
                    "<li>Longitude:"+ array[0].longitud+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Client:"+ array[0].client+"</li>" +
                    "<li>Annual Increment: INPC <br/>"+ array[0].AnnIncrement+"</li>" +
                    "<li>Payment frequency:"+ array[0].Payment+"</li>" +
                    "<li>Date of increment: "+ array[0].dateIncrement+"</li>" +
                    "</ul>";
        }

        if(type == 3)
        {
            console.log('array =>responses Collocation Contract',array[0])
            textoContract = textoContract + 
            "<ul>" + 
            "<li>Collocation Contract</li>" +
            "<li>Site ID: "+ array[0].idx+"</li>" +
            "<li>Site Number: "+ array[0].siteNumber+"</li>" +
            "<li>Site Name:  "+ array[0].siteName+"</li>" +
            "<li>Contact Name:  "+ array[0].contact+"</li>" +
            "<li>Site Address: "+ array[0].siteAdrres+"</li>" +
            "<li>Site Type: "+ array[0].siteType+"</li>" +
            "<li>Antenna Type: "+ array[0].AntenaType+"</li>" +
            "<li>Heigth:  "+ array[0].heigth+"</li>" +
            "<li>Rent Amount: "+ array[0].rentAmount+"</li>" +
            "<li>Latitude:  "+ array[0].latitud+"</li>" +
            "<li>Longitude:  "+ array[0].longitud+"</li>" +
            "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
            "</ul>";
    textoMLA = textoMLA +
            "<ul>" + 
            "<li>Client:  "+ array[0].client+"</li>" +
            "<li>Annual Increment: INPC <br/>  "+ array[0].anualIncre+"</li>" +
            "<li>Payment frequency: "+ array[0].paymentFrecue+"</li>" +
            "<li>Date of increment:  "+ array[0].dateIncre+"</li>" +
            "</ul>";
        }

        if(type == 4)
        {
            console.log(type,'array =>responses  Rent Decrease Contract ',array[0])
            textoContract = textoContract + 
                    "<ul>" + 
                    "<li>Rent Decrease Contract</li>" +
                    "<li>Site ID:"+ array[0].idx+"</li>" +
                    "<li>Site Name: "+ array[0].siteName+"</li>" +
                    "<li>Lanlord:"+ array[0].landLord+"</li>" +
                    "<li>Negotiation "+ array[0].negocType+"</li>" +
                    "<li>Reduction Percentage:"+ array[0].reduction+"</li>" +
                    "<li>Rent Amount:"+ array[0].rentAmount+"</li>" +
                    "<li>Latitude:"+ array[0].latid+"</li>" +
                    "<li>Longitude: "+ array[0].longi+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Annual Increment:"+ array[0].anualIncre+"</li>" +
                    "<li>Payment frequency:"+ array[0].payment+"</li>" +
                    "</ul>";
        }

        if(type == 5)
        {
            console.log('array =>responses Additional Equipment Contract ',array[0])
            textoContract = textoContract + 
                    "<ul>" + 
                    "<li>Additional Equipment Contract</li>" +
                    "<li>Site ID: "+ array[0].idx+"</li>" +
                    "<li>Site Name: "+ array[0].siteName+"</li>" +
                    "<li>Site Address: "+ array[0].siteAdrres+"</li>" +
                    "<li>Site Number: "+ array[0].siteNumber+"</li>" +
                    "<li>Contact Name: "+ array[0].contactName+"</li>" +
                    "<li>Rent Amount:"+ array[0].rentAmount+"</li>" +
                    "<li>Latitude: "+ array[0].latitud+"</li>" +
                    "<li>Longitude:"+ array[0].longitud+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Client"+ array[0].payment+"</li>" +
                    "<li>Annual Increment: INPC <br/>"+ array[0].anualIncre+"</li>" +
                    "<li>Payment frequency: "+ array[0].PaymentFrec+"</li>" +
                    "<li>Date of increment: "+ array[0].DateIncre+"</li>" +
                    "</ul>";
        }

        if(type == 6)
        {
            console.log('array =>responses Tower Integrity Contract ',array[0])
            textoContract = textoContract + 
                    "<ul>" + 
                    "<li>Tower Integrity Contract</li>" +
                    "<li>Site Name:  "+ array[0].siteName+"</li>" +
                    "<li>Site Type: "+ array[0].siteType+"</li>" +
                    "<li>Tower height:  "+ array[0].towerHeigth+"</li>" +
                    "<li>Additional equipment:"+ array[0].Addequipment+"</li>" +
                    "<li>Height: "+ array[0].Heigth+"</li>" +
                    "<li>Rent Amount:"+ array[0].rentAmount+"</li>" +
                    "<li>Latitude:"+ array[0].latitude+"</li>" +
                    "<li>Longitude:"+ array[0].longitude+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Client:"+ array[0].client+"</li>" +
                    "<li>Payment frequency:"+ array[0].payment+"</li>" +
                    "<li>Date of increment:"+ array[0].date+"</li>" +
                    "</ul>";
        }
        if(type == 7)
        {
            console.log(type,'array  idx=> Collocation Contract',array[0])
            textoContract = textoContract + 
                    "<ul>" + 
                    "<li>Collocation Contract</li>" +
                    "<li>Site ID: "+ array[0].idx+"</li>" +
                    "<li>Site Number: "+ array[0].siteNumber+"</li>" +
                    "<li>Site Name:  "+ array[0].siteName+"</li>" +
                    "<li>Contact Name:  "+ array[0].contact+"</li>" +
                    "<li>Site Address: "+ array[0].siteAdrres+"</li>" +
                    "<li>Site Type: "+ array[0].siteType+"</li>" +
                    "<li>Antenna Type: "+ array[0].AntenaType+"</li>" +
                    "<li>Heigth:  "+ array[0].heigth+"</li>" +
                    "<li>Rent Amount: "+ array[0].rentAmount+"</li>" +
                    "<li>Latitude:  "+ array[0].latitud+"</li>" +
                    "<li>Longitude:  "+ array[0].longitud+"</li>" +
                    "<li><a href='https://maps.google.com/?q=19.681975,-103.25675' target='_blank'>See on Maps</a></li>" +
                    "</ul>";
            textoMLA = textoMLA +
                    "<ul>" + 
                    "<li>Client:  "+ array[0].client+"</li>" +
                    "<li>Payment frequency: "+ array[0].paymentFrecue+"</li>" +
                    "<li>Date of increment:  "+ array[0].dateIncre+"</li>" +
                    "</ul>";
        }
        texto = texto + "<input type='button' class='boton_verde' value='Generate AP' onclick='javascript:GenerateAPComplex(" + mes + ")'/> &nbsp;" +
                        "<input type='button' class='boton_azul' value='Generate AR' onclick='javascript:GenerateARComplex(" + mes + ")'/>";
    }

    document.getElementById("infoContractComplex").innerHTML = textoContract;
    document.getElementById("infoMLAComplex").innerHTML = textoMLA;
    document.getElementById("actionsComplex").innerHTML = texto;
})
}

function GenerateAPComplex(mes)
{
    var headersAP = {
        LAND_ASSET_NUMBER: 'LAND_ASSET_NUMBER',
        LEASE_NUMBER: 'LEASE_NUMBER',	
        LANDLORD: 'LANDLORD',	
        ALTERNATE_PAYEE: 'ALTERNATE_PAYEE',	
        PAYMENT_AMOUNT: 'PAYMENT_AMOUNT',	
        INVOICE_DATE: 'INVOICE_DATE',	
        CURRENCY_CODE: 'INVOICE_DATE',	
        COUNTRY: 'COUNTRY',	
        ATC_LEGAL_ENTITY: 'ATC_LEGAL_ENTITY',	
        PAYMENT_FREQUENCY: 'PAYMENT_FREQUENCY',	
        PAYEMNT_TERM: 'PAYMENT_TERM'
    };

    var items = [];

    if(mes < 3)
    {
        items = [{
            LAND_ASSET_NUMBER: '176778_L',
            LEASE_NUMBER: '1',
            LANDLORD: 'ALICIA BERUMEN ALONSO',
            ALTERNATE_PAYEE: ' ',
            PAYMENT_AMOUNT: '12889.92',
            INVOICE_DATE: '01/' + mesFechas(mes) + '/2020',
            CURRENCY_CODE: 'MXN',
            COUNTRY: 'MXN',
            ATC_LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
            PAYMENT_FREQUENCY: 'MON',
            PAYEMNT_TERM: 'NET30'        
        }];
    }
    else 
    {
        mes = mes - 1;
        items = [{
            LAND_ASSET_NUMBER: '176778_L',
            LEASE_NUMBER: '1',
            LANDLORD: 'Juan Alberto Rodriguez Corro',
            ALTERNATE_PAYEE: ' ',
            PAYMENT_AMOUNT: '16240',
            INVOICE_DATE: '01/' + mesFechas(mes) + '/2020',
            CURRENCY_CODE: 'MXN',
            COUNTRY: 'MXN',
            ATC_LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
            PAYMENT_FREQUENCY: 'MON',
            PAYEMNT_TERM: 'NET30'        
        }];
    } 

    var itemsFormatted = [];

    items.forEach((item) => {
        itemsFormatted.push({
            LAND_ASSET_NUMBER: item.LAND_ASSET_NUMBER,
            LEASE_NUMBER: item.LEASE_NUMBER,
            LANDLORD: item.LANDLORD,
            ALTERNATE_PAYEE: item.ALTERNATE_PAYEE,
            PAYMENT_AMOUNT: item.PAYMENT_AMOUNT,
            INVOICE_DATE: item.INVOICE_DATE,
            CURRENCY_CODE: item.CURRENCY_CODE,
            COUNTRY: item.COUNTRY,
            ATC_LEGAL_ENTITY: item.ATC_LEGAL_ENTITY,
            PAYMENT_FREQUENCY: item.PAYMENT_FREQUENCY,
            PAYEMNT_TERM: item.PAYEMNT_TERM
        });
    });

    var fileTitle = "AP" + mesLetras(mes) + "2020";

    exportCSVFile(headersAP, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}

function GenerateARComplex(mes)
{
    var headersAR = {
        ASSET_NUMBER: 'ASSET_NUMBER',	
        LEASE_NUMBER: 'LEASE_NUMBER',
        CUSTOMER_NAME: 'CUSTOMER_NAME',
        CUSTOMER_TAX_ID: 'CUSTOMER_TAX_ID',
        BILL_TO: 'BILL_TO',
        SHIP_TO: 'SHIP_TO',
        TRANSACTION_TYPE: 'TRANSACTION_TYPE',
        BILL_AMOUNT: 'BILL_AMOUNT',
        BILL_DATE: 'BILL_DATE',	
        CURRENCY_CODE: 'CURRENCY_CODE',
        BILLING_CITY: 'BILLING_CITY',
        BILLING_PURPOSE: 'BILLING_PURPOSE',
        BILLING_TYPE: 'BILLING_TYPE',
        CHARGE_PERIOD_START_DATE:'CHARGE_PERIOD_START_DATE',
        CHARGE_PERIOD_END_DATE: 'CHARGE_PERIOD_END_DATE',
        CHARGE_TYPE: 'CHARGE_TYPE',
        COUNTRY: 'COUNTRY',
        LEGAL_ENTITY: 'LEGAL_ENTITY',
        BILLING_FREQUENCY: 'BILLING_FREQUENCY',
        PAYMENT_TERM: 'PAYMENT_TERM'
    };

    var items = [];

    switch(mes)
    {
        case 2: 
            items = [
                {
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '12266578',
                    CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                    CUSTOMER_TAX_ID: 'CNM980114PI2',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '18284.43',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'MXN',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'None',
                    BILLING_TYPE: 'Base Rent',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30'
                },
                { 
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '12266578',
                    CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                    CUSTOMER_TAX_ID: 'CNM980114PI2',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '17034.96',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'MXN',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'Terreno',
                    BILLING_TYPE: 'Pass-Thru',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30' 
                }
            ];
            break;
        case 3:
            items = [
                {
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '12266578',
                    CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                    CUSTOMER_TAX_ID: 'CNM980114PI2',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '18284.43',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'MXN',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'None',
                    BILLING_TYPE: 'Base Rent',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30'
                },
                { 
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '12266578',
                    CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                    CUSTOMER_TAX_ID: 'CNM980114PI2',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '17034.96',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'MXN',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'Terreno',
                    BILLING_TYPE: 'Pass-Thru',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30' 
                },
                { 
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '382',
                    CUSTOMER_NAME: 'AXTEL SAB DE CV',
                    CUSTOMER_TAX_ID: 'AXT940727FP8',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '81.17',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'USD',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'Microonda 1',
                    BILLING_TYPE: 'Colocacion 1',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30' 
                },
                { 
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '382',
                    CUSTOMER_NAME: 'AXTEL SAB DE CV',
                    CUSTOMER_TAX_ID: 'AXT940727FP8',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '425.87',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'USD',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'Terreno',
                    BILLING_TYPE: 'Pass-Thru',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30' 
                }
            ];
            break;
        case 4:
            mes = mes - 1;
            items = [
                {
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '12266578',
                    CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                    CUSTOMER_TAX_ID: 'CNM980114PI2',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '18284.43',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'MXN',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'None',
                    BILLING_TYPE: 'Base Rent',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30'
                },
                { 
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '12266578',
                    CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                    CUSTOMER_TAX_ID: 'CNM980114PI2',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '17034.96',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'MXN',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'Terreno',
                    BILLING_TYPE: 'Pass-Thru',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30' 
                },
                { 
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '382',
                    CUSTOMER_NAME: 'AXTEL SAB DE CV',
                    CUSTOMER_TAX_ID: 'AXT940727FP8',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '81.17',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'USD',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'Microonda 1',
                    BILLING_TYPE: 'Colocacion 1',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30' 
                },
                { 
                    ASSET_NUMBER: '176778',
                    LEASE_NUMBER: '382',
                    CUSTOMER_NAME: 'AXTEL SAB DE CV',
                    CUSTOMER_TAX_ID: 'AXT940727FP8',
                    BILL_TO: 'bill_to',
                    SHIP_TO: 'ship_to',
                    TRANSACTION_TYPE: 'Property TowerRent',
                    BILL_AMOUNT: '425.87',
                    BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                    CURRENCY_CODE: 'USD',
                    BILLING_CITY: 'Zapopan',
                    BILLING_PURPOSE: 'Terreno',
                    BILLING_TYPE: 'Pass-Thru',
                    CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                    CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                    CHARGE_TYPE: 'Recurring',
                    COUNTRY: 'Mexico',
                    LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                    BILLING_FREQUENCY: 'MON',
                    PAYMENT_TERM: 'NET30' 
                }
            ];
            break;
        case 5:
            mes = mes -1
            items = [
                    {
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '12266578',
                        CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                        CUSTOMER_TAX_ID: 'CNM980114PI2',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '18284.43',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'MXN',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'None',
                        BILLING_TYPE: 'Base Rent',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30'
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '12266578',
                        CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                        CUSTOMER_TAX_ID: 'CNM980114PI2',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '17034.96',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'MXN',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Terreno',
                        BILLING_TYPE: 'Pass-Thru',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '382',
                        CUSTOMER_NAME: 'AXTEL SAB DE CV',
                        CUSTOMER_TAX_ID: 'AXT940727FP8',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '81.17',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'USD',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Microonda 1',
                        BILLING_TYPE: 'Colocacion 1',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '382',
                        CUSTOMER_NAME: 'AXTEL SAB DE CV',
                        CUSTOMER_TAX_ID: 'AXT940727FP8',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '425.87',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'USD',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Terreno',
                        BILLING_TYPE: 'Pass-Thru',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    }
            ];
            break;
        case 6:
            mes = mes - 1;
            items = [
                    {
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '12266578',
                        CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                        CUSTOMER_TAX_ID: 'CNM980114PI2',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '18284.43',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'MXN',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'None',
                        BILLING_TYPE: 'Base Rent',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30'
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '12266578',
                        CUSTOMER_NAME: 'AT&T COMUNICACIONES DIGITALES S DE RL DE CV',
                        CUSTOMER_TAX_ID: 'CNM980114PI2',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '17034.96',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'MXN',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Terreno',
                        BILLING_TYPE: 'Pass-Thru',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '382',
                        CUSTOMER_NAME: 'AXTEL SAB DE CV',
                        CUSTOMER_TAX_ID: 'AXT940727FP8',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '81.17',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'USD',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Microonda 1',
                        BILLING_TYPE: 'Colocacion 1',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '382',
                        CUSTOMER_NAME: 'AXTEL SAB DE CV',
                        CUSTOMER_TAX_ID: 'AXT940727FP8',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '425.87',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'USD',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Terreno',
                        BILLING_TYPE: 'Pass-Thru',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '382',
                        CUSTOMER_NAME: 'AXTEL SAB DE CV',
                        CUSTOMER_TAX_ID: 'AXT940727FP8',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '573.82',
                        BILL_DATE: '01/03/2020',
                        CURRENCY_CODE: 'USD',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Microonda 2',
                        BILLING_TYPE: 'Adicional',
                        CHARGE_PERIOD_START_DATE: '01/03/2020',
                        CHARGE_PERIOD_END_DATE:  '31/03/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '382',
                        CUSTOMER_NAME: 'AXTEL SAB DE CV',
                        CUSTOMER_TAX_ID: 'AXT940727FP8',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '573.82',
                        BILL_DATE: '01/04/2020',
                        CURRENCY_CODE: 'USD',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Microonda 2',
                        BILLING_TYPE: 'Adicional',
                        CHARGE_PERIOD_START_DATE: '01/04/2020',
                        CHARGE_PERIOD_END_DATE: '30/04/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    },
                    { 
                        ASSET_NUMBER: '176778',
                        LEASE_NUMBER: '382',
                        CUSTOMER_NAME: 'AXTEL SAB DE CV',
                        CUSTOMER_TAX_ID: 'AXT940727FP8',
                        BILL_TO: 'bill_to',
                        SHIP_TO: 'ship_to',
                        TRANSACTION_TYPE: 'Property TowerRent',
                        BILL_AMOUNT: '573.82',
                        BILL_DATE: '01/' + mesFechas(mes) + '/2020',
                        CURRENCY_CODE: 'USD',
                        BILLING_CITY: 'Zapopan',
                        BILLING_PURPOSE: 'Microonda 2',
                        BILLING_TYPE: 'Adicional',
                        CHARGE_PERIOD_START_DATE: '01/' + mesFechas(mes) + '/2020',
                        CHARGE_PERIOD_END_DATE:  findeMes(mes) + '/' + mesFechas(mes)  + '/2020',
                        CHARGE_TYPE: 'Recurring',
                        COUNTRY: 'Mexico',
                        LEGAL_ENTITY: '401 - MATC Digital S. de R.L. de C.V.',
                        BILLING_FREQUENCY: 'MON',
                        PAYMENT_TERM: 'NET30' 
                    }
            ];
            break;
        default:
            break;
    }

    var itemsFormatted = [];

    items.forEach((item) => {
        itemsFormatted.push({
            ASSET_NUMBER: item.ASSET_NUMBER,
            LEASE_NUMBER: item.LEASE_NUMBER,
            CUSTOMER_NAME: item.CUSTOMER_NAME,
            CUSTOMER_TAX_ID: item.CUSTOMER_TAX_ID,
            BILL_TO: item.BILL_TO,
            SHIP_TO: item.SHIP_TO,
            TRANSACTION_TYPE: item.TRANSACTION_TYPE,
            BILL_AMOUNT: item.BILL_AMOUNT,
            BILL_DATE: item.BILL_DATE,
            CURRENCY_CODE: item.CURRENCY_CODE,
            BILLING_CITY: item.BILLING_CITY,
            BILLING_PURPOSE: item.BILLING_PURPOSE,
            BILLING_TYPE: item.BILLING_TYPE,
            CHARGE_PERIOD_START_DATE: item.CHARGE_PERIOD_START_DATE,
            CHARGE_PERIOD_END_DATE: item.CHARGE_PERIOD_END_DATE,
            CHARGE_TYPE: item.CHARGE_TYPE,
            COUNTRY: item.COUNTRY,
            LEGAL_ENTITY: item.LEGAL_ENTITY,
            BILLING_FREQUENCY: item.BILLING_FREQUENCY,
            PAYMENT_TERM: item.PAYMENT_TERM
        });
    });

    var fileTitle = "AR" + mesLetras(mes) + "2020";

    exportCSVFile(headersAR, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}