$('style').append(
    `.modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 942px;
    }
    
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    
    #modalFilters select {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    
    #modalFilters .modalRow {
        padding-top:15px;
    }

    @media only screen and (max-width: 998px){
        .modal-content {
            width:92%;
        }
    }

    @media only screen and (min-width:1600px){
        .selCont{
            width:23%;
        }
    }

    @media only screen and (max-width: 1599px) {
        .selCont{
            width:48%;
        }
    }

    @media only screen and (max-width: 668px) {
        .selCont{
            width:100%;
        }
    }

    .selCont{
        display: inline-flex;
        margin-bottom:15px;
        margin-right:1%;
    }
    
    #modalFilters #btnSearch, #btnAgain {
        display: inline-block;
        border:1px solid #bfbfbf;
        color: #8c8c8c;
        border-radius: 5px 5px 5px 5px;
        -webkit-border-radius: 5px 5px 5px 5px;
        -moz-border-radius: 5px 5px 5px 5px;
        font-family: Verdana;
        width: auto;
        height: auto;
        font-size: 12px;
        padding: 6px 40px;
        box-shadow: inset 0 1px 0 0 #fff,inset 0 -1px 0 0 #d9d9d9,inset 0 0 0 1px #f2f2f2,0 2px 4px 0 #f2f2f2;
        -moz-box-shadow: inset 0 1px 0 0 #fff,inset 0 -1px 0 0 #d9d9d9,inset 0 0 0 1px #f2f2f2,0 2px 4px 0 #f2f2f2;
        -webkit-box-shadow: inset 0 1px 0 0 #fff,inset 0 -1px 0 0 #d9d9d9,inset 0 0 0 1px #f2f2f2,0 2px 4px 0 #f2f2f2;
        text-shadow: 0 1px 0 #fff;
        background-image: linear-gradient(to top, #f2f2f2, #f2f2f2);
        background-color: #f2f2f2;
    }

    #btnSearch:hover, #btnAgain:hover, #btnSearch:active, #btnAgain:active{
        border:1px solid #8c8c8c;
        color: #8c8c8c;
        box-shadow: inset 0 1px 0 0 #ffffff,inset 0 -1px 0 0 #d9d9d9,inset 0 0 0 1px #f2f2f2;
        -moz-box-shadow: inset 0 1px 0 0 #ffffff,inset 0 -1px 0 0 #d9d9d9,inset 0 0 0 1px #f2f2f2;
        -webkit-box-shadow: inset 0 1px 0 0 #ffffff,inset 0 -1px 0 0 #d9d9d9,inset 0 0 0 1px #f2f2f2;
        background-color: #f2f2f2;
    } 
    
    .sub-text3, .sub-text4{
        margin: 10px auto;
    }

    #mt-content-cell > div > div.fframe{
        display:none;
    }
    `
);

$('body').append(
    `<div id="modalFilters" class="modal" style="opacity:0">
        <div class="modal-content">
            <div class="modalRow">
                <div class="selCont">
                    <select name="genre" id="genre"><option value="">Todos los géneros</option><option value="AC">Acción</option><option value="AN">Animación</option><option value="AV">Aventuras</option><option value="BE">Bélico</option><option value="C-F">Ciencia ficción</option><option value="F-N">Cine negro</option><option value="CO">Comedia</option><option value="DESC">Desconocido</option><option value="DO">Documental</option><option value="DR">Drama</option><option value="FAN">Fantástico</option><option value="INF">Infantil</option><option value="INT">Intriga</option><option value="MU">Musical</option><option value="RO">Romance</option><option value="TV_SE">Serie de TV</option><option value="TE">Terror</option><option value="TH">Thriller</option><option value="WE">Western</option></select>
                </div>
                <div class="selCont">
                    <select name="country" id="country"><option value="">Todos los países</option><option value="AF">Afganistán</option><option value="AL">Albania</option><option value="DE">Alemania</option><option value="FD">Alemania del Este (RDA)</option><option value="FF">Alemania del Oeste (RFA)</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AG">Antigua y Barbuda</option><option value="SA">Arabia Saudí</option><option value="DZ">Argelia</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrein</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BE">Bélgica</option><option value="BZ">Belize</option><option value="BJ">Benín</option><option value="BY">Bielorrusia</option><option value="BO">Bolivia</option><option value="BA">Bosnia y Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brasil</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="BT">Bután</option><option value="CV">Cabo Verde</option><option value="KH">Camboya</option><option value="CM">Camerún</option><option value="CA">Canadá</option><option value="TD">Chad</option><option value="ZX">Checoslovaquia</option><option value="CL">Chile</option><option value="CN">China</option><option value="CY">Chipre</option><option value="CO">Colombia</option><option value="KM">Comores</option><option value="CG">Congo</option><option value="KK">Corea</option><option value="KP">Corea del Norte</option><option value="KR">Corea del Sur</option><option value="CI">Costa de Marfil</option><option value="CR">Costa Rica</option><option value="HR">Croacia</option><option value="CU">Cuba</option><option value="DK">Dinamarca</option><option value="DM">Dominica</option><option value="EC">Ecuador</option><option value="EG">Egipto</option><option value="SV">El Salvador</option><option value="AE">Emiratos Árabes</option><option value="ER">Eritrea</option><option value="SK">Eslovaquia</option><option value="SI">Eslovenia</option><option value="ES">España</option><option value="US">Estados Unidos</option><option value="EE">Estonia</option><option value="ET">Etiopía</option><option value="FJ">Fidji</option><option value="PH">Filipinas</option><option value="FI">Finlandia</option><option value="FR">Francia</option><option value="GA">Gabón</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="GH">Ghana</option><option value="GD">Granada</option><option value="GR">Grecia</option><option value="GL">Groenlandia</option><option value="GT">Guatemala</option><option value="GN">Guinea</option><option value="GW">Guinea Bissau</option><option value="GQ">Guinea Ecuatorial</option><option value="GY">Guyana</option><option value="HT">Haití</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungría</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IQ">Irak</option><option value="IR">Irán</option><option value="IE">Irlanda</option><option value="IS">Islandia</option><option value="IL">Israel</option><option value="IT">Italia</option><option value="JM">Jamaica</option><option value="JP">Japón</option><option value="JO">Jordania</option><option value="KZ">Kazajstán</option><option value="KE">Kenia</option><option value="KG">Kirguistán</option><option value="KO">Kosovo</option><option value="KW">Kuwait</option><option value="LA">Laos</option><option value="LS">Lesotho</option><option value="LE">Letonia</option><option value="LB">Líbano</option><option value="LR">Liberia</option><option value="LY">Libia</option><option value="LI">Liechtenstein</option><option value="LT">Lituania</option><option value="LU">Luxemburgo</option><option value="MO">Macao</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MY">Malasia</option><option value="MW">Malawi</option><option value="MV">Maldivas</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MA">Marruecos</option><option value="MH">Marshall (Islas)</option><option value="MU">Mauricio (Isla)</option><option value="MR">Mauritania</option><option value="MX">México</option><option value="FM">Micronesia</option><option value="MD">Moldavia</option><option value="MC">Mónaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MZ">Mozambique</option><option value="MM">Myanmar - Birmania</option><option value="NA">Namibia</option><option value="NP">Nepal</option><option value="NI">Nicaragua</option><option value="NE">Níger</option><option value="NG">Nigeria</option><option value="NO">Noruega</option><option value="NZ">Nueva Zelanda</option><option value="OM">Omán</option><option value="NL">Países Bajos (Holanda)</option><option value="PW">Palau</option><option value="PS">Palestina</option><option value="PA">Panamá</option><option value="PG">Papuasia Nueva Guinea</option><option value="PK">Paquistán</option><option value="PY">Paraguay</option><option value="PE">Perú</option><option value="PL">Polonia</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="GB">Reino Unido</option><option value="EH">Rep. Árabe Saharaui Democrática</option><option value="CF">Rep. Centroafricana</option><option value="DO">Rep. Dominicana</option><option value="CZ">República Checa</option><option value="CD">República del Congo</option><option value="RW">Ruanda</option><option value="RO">Rumanía</option><option value="RU">Rusia</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Santo Tomé y Príncipe</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="RR">Serbia y Montenegro</option><option value="SC">Seychelles</option><option value="SL">Sierra Leona</option><option value="SG">Singapur</option><option value="SY">Siria</option><option value="SO">Somalia</option><option value="LK">Sri Lanka</option><option value="ZA">Sudáfrica</option><option value="SD">Sudán</option><option value="SS">Sudán del Sur</option><option value="SE">Suecia</option><option value="CH">Suiza</option><option value="SR">Surinam</option><option value="SZ">Swazilandia</option><option value="TH">Tailandia</option><option value="TW">Taiwán</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TL">Timor Oriental</option><option value="TG">Togo</option><option value="TT">Trinidad y Tobago</option><option value="TN">Túnez</option><option value="TM">Turkmenistán</option><option value="TR">Turquía</option><option value="UA">Ucrania</option><option value="UG">Uganda</option><option value="ZY">Unión Soviética (URSS)</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="YE">Yemen</option><option value="YU">Yugoslavia</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select>
                </div>
                <div class="selCont">
                    <select name="fromyear" id="fromyear"><option value="">Desde el año...</option><option>2018</option><option>2017</option><option>2016</option><option>2015</option><option>2014</option><option>2013</option><option>2012</option><option>2011</option><option>2010</option><option>2009</option><option>2008</option><option>2007</option><option>2006</option><option>2005</option><option>2004</option><option>2003</option><option>2002</option><option>2001</option><option>2000</option><option>1999</option><option>1998</option><option>1997</option><option>1996</option><option>1995</option><option>1994</option><option>1993</option><option>1992</option><option>1991</option><option>1990</option><option>1989</option><option>1988</option><option>1987</option><option>1986</option><option>1985</option><option>1984</option><option>1983</option><option>1982</option><option>1981</option><option>1980</option><option>1979</option><option>1978</option><option>1977</option><option>1976</option><option>1975</option><option>1974</option><option>1973</option><option>1972</option><option>1971</option><option>1970</option><option>1969</option><option>1968</option><option>1967</option><option>1966</option><option>1965</option><option>1964</option><option>1963</option><option>1962</option><option>1961</option><option>1960</option><option>1959</option><option>1958</option><option>1957</option><option>1956</option><option>1955</option><option>1954</option><option>1953</option><option>1952</option><option>1951</option><option>1950</option><option>1949</option><option>1948</option><option>1947</option><option>1946</option><option>1945</option><option>1944</option><option>1943</option><option>1942</option><option>1941</option><option>1940</option><option>1939</option><option>1938</option><option>1937</option><option>1936</option><option>1935</option><option>1934</option><option>1933</option><option>1932</option><option>1931</option><option>1930</option><option>1929</option><option>1928</option><option>1927</option><option>1926</option><option>1925</option><option>1924</option><option>1923</option><option>1922</option><option>1921</option><option>1920</option><option>1919</option><option>1918</option><option>1917</option><option>1916</option><option>1915</option><option>1914</option><option>1913</option><option>1912</option><option>1911</option><option>1910</option><option>1909</option><option>1908</option><option>1907</option><option>1906</option><option>1905</option><option>1904</option><option>1903</option><option>1902</option><option>1901</option><option>1900</option></select>
                </div>
                <div class="selCont">
                    <select name="toyear" id="toyear"><option value="">Hasta el año...</option><option>2018</option><option>2017</option><option>2016</option><option>2015</option><option>2014</option><option>2013</option><option>2012</option><option>2011</option><option>2010</option><option>2009</option><option>2008</option><option>2007</option><option>2006</option><option>2005</option><option>2004</option><option>2003</option><option>2002</option><option>2001</option><option>2000</option><option>1999</option><option>1998</option><option>1997</option><option>1996</option><option>1995</option><option>1994</option><option>1993</option><option>1992</option><option>1991</option><option>1990</option><option>1989</option><option>1988</option><option>1987</option><option>1986</option><option>1985</option><option>1984</option><option>1983</option><option>1982</option><option>1981</option><option>1980</option><option>1979</option><option>1978</option><option>1977</option><option>1976</option><option>1975</option><option>1974</option><option>1973</option><option>1972</option><option>1971</option><option>1970</option><option>1969</option><option>1968</option><option>1967</option><option>1966</option><option>1965</option><option>1964</option><option>1963</option><option>1962</option><option>1961</option><option>1960</option><option>1959</option><option>1958</option><option>1957</option><option>1956</option><option>1955</option><option>1954</option><option>1953</option><option>1952</option><option>1951</option><option>1950</option><option>1949</option><option>1948</option><option>1947</option><option>1946</option><option>1945</option><option>1944</option><option>1943</option><option>1942</option><option>1941</option><option>1940</option><option>1939</option><option>1938</option><option>1937</option><option>1936</option><option>1935</option><option>1934</option><option>1933</option><option>1932</option><option>1931</option><option>1930</option><option>1929</option><option>1928</option><option>1927</option><option>1926</option><option>1925</option><option>1924</option><option>1923</option><option>1922</option><option>1921</option><option>1920</option><option>1919</option><option>1918</option><option>1917</option><option>1916</option><option>1915</option><option>1914</option><option>1913</option><option>1912</option><option>1911</option><option>1910</option><option>1909</option><option>1908</option><option>1907</option><option>1906</option><option>1905</option><option>1904</option><option>1903</option><option>1902</option><option>1901</option><option>1900</option></select>
                </div>
                <div class="selCont">
                    <select name="minNote" id="minNote"><option value="">Nota mínima</option><option value="8">8</option><option value="7.5">7,5</option><option value="7">7</option><option value="6.5">6,5</option><option value="6">6</option><option value="5.5">5,5</option><option value="5">5</option><option value="0">Cualquiera</option></select>
                </div>
                <div class="selCont">
                    <select name="minVotes" id="minVotes"><option value="">Mínimo de votos</option><option value="10000">10.000</option><option value="15000">15.000</option><option value="20000">20.000</option><option value="25000">25.000</option><option value="30000">30.000</option><option value="50000">50.000</option><option value="100000">100.000</option></select>
                </div>
                <div class="selCont">
                    <div class="sub-text3">
                        <input class="magic-checkbox" type="checkbox" name="notvse" id="notvse" value="1" checked=""><label for="notvse">Excluir Series de TV</label>
                    </div>
                </div>
                <div class="selCont">
                    <div class="sub-text4">
                        <input class="magic-checkbox" type="checkbox" name="nodoc" id="nodoc" value="1" checked=""><label for="nodoc">Excluir Documentales</label>
                    </div>
                </div>
                <div style="margin: 15px auto;text-align:center;">
                    <button id="btnSearch">Aplicar filtros</button>
                </div>
            </div>
        </div>
    </div>
  
    <div id="modalLoadingMovies" class="modal">       
        <div class="modal-content">
            <span class="close" style="display:none;">&times;</span>
            <p style="text-align: center;font-size: 14px;">Cargando listado de películas, pulse fuera de este cuadro cuando quiera finalizar.</p>
        </div>
    </div>`
);

$('#mt-content-cell > div.z-top-movies > div.fframe').remove();

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var toggleModal = function(modal, event) {
    $(modal).animate( { opacity:(event == "show" ? 1 : 0) }, 350);
    (event == "show" ? $(modal).fadeIn(350) : $(modal).fadeOut(350));
}

var doa = false;
if (window.location.href.indexOf("&dOA") == -1)
    doa = true;

function init(){

    if (doa) {
        $('body > .cpanel').animate({ opacity: 0 }, 350)
        toggleModal('#modalFilters', 'show');

        function getSelectedText(elementId) {
            var elt = document.getElementById(elementId);
            if (elt.selectedIndex == -1)
                return null;

            return elt.options[elt.selectedIndex].text;
        }

        $('#btnSearch').click( () => window.location = "https://www.filmaffinity.com/es/topgen?genre=" + $('#genre').val() 
            + "&fromyear=" + getSelectedText('fromyear')
            + "&toyear=" + getSelectedText('toyear')
            + "&country=" + $('#country').val()
            + ($('#nodoc').is(':checked') ? "&nodoc" : "")
            + ($('#notvse').is(':checked') ? "&notvse" : "")
            + "&minNote=" + $('#minNote').val()
            + "&minVotes=" + $('#minVotes').val()
            + "&dOA"); // dont Open (modal) Again
            
    }
    else
    {
        toggleModal('#modalLoadingMovies', 'show');
        $('body > .cpanel').animate({ opacity: 1 }, 700)

        var lastNote = parseFloat($('.avg-rating').last().text().replace(',','.'));
        var minNoteRequest = getUrlParameter('minNote');
        var minVotesRequest = getUrlParameter('minVotes');

        var interval = setInterval(() => {
            if (lastNote >= minNoteRequest) {
                $('html,body').animate({ scrollTop : $(document).height() }, 500);
                $('#load-more-bt').click();
                lastNote = parseFloat($('.avg-rating').last().text().replace(',','.'));
            } else {
                clearInterval(interval);
                deleteMovies();
                toggleModal('#modalLoadingMovies', 'hide');
            }
        }, 1000);

        window.onclick = function(event) {
            if ($('#modalFilters').is(':visible') ||$ ('#modalLoadingMovies').is(':visible')) {
                lastNote = minNoteRequest-1;
            }
        }

        function deleteMovies() {        
            console.log("DEL");   
            $('.rat-count').each(function() {
                if (parseInt($(this).text().replace('.','')) < minVotesRequest ||
                 $(this).parent().find('.avg-rating').text().replace(',','.') < minNoteRequest ||
                 (window.location.href.indexOf('notvse') > -1 && $(this).parent().parent().find('.mc-title > a').text().indexOf('(TV)') > -1))
                    $(this).parent().parent().parent()[0].remove();                    
            })
            $('html,body').animate({scrollTop : 0}, 1000);
            $('#load-more-div').remove();
            $('#main-title').after(`<div style="margin: 15px;text-align: center;">
                <button id="btnAgain" style="color:#3c3c3c;">Abrir panel de filtros</button>
            </div>`);
           $('#btnAgain').click(() => { $('body > .cpanel').animate({ opacity: 0 }, 350), doa = true, init() } );
        }
    }
}

init();