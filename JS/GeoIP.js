/**
 * generic script example
 * Reference: https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/geo_location.js
 * 
 * [script]
 * generic script-path=https://raw.githubusercontent.com/Loon0x00/LoonExampleConfig/master/Script/generic_example.js,tag=GeoLocation,timeout=10,img-url=location.fill.viewfinder.system
*/

// $environment.params with input params
console.log($environment.params);
var url = "https://api.ip.sb/geoip";

var inputParams = $environment.params;
var nodeName = inputParams.node;

/**
 * node: Specify network activity on this node
 */
var requestParams = {
    "url":url,
    "node":nodeName
}

var message = ""
const paras = ["ip","isp","country_code","city"];
const paran = ["IP","ISP","ε°εΊ","εεΈ"];

$httpClient.get(requestParams, (error, response, data) => {
    if (error) {
        message = "</br></br>π ζ₯θ―’θΆζΆ"
        message = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: bold;">` + message + `</p>`
        $done({"title": "π IP.SB ζ₯θ―’η»ζ", "htmlMessage": message});
    } else {
        console.log(data);
        message = data ? json2info(data, paras) : "";
        $done({"title": "    π IP.SB ζ₯θ―’η»ζ", "htmlMessage": message});
    }
})

function json2info(cnt, paras) {
    var res = "------------------------------";
    cnt = JSON.parse(cnt);
    console.log(cnt);
    for (i = 0;i < paras.length; i ++) {
        cnt[paras[i]] = paras[i] == "country_code" ? cnt[paras[i]] + " β¦" + flags.get(cnt[paras[i]].toUpperCase()) + "β§" : cnt[paras[i]];
        res = cnt[paras[i]] ? res + "</br><b>" + "<font  color=>" + paran[i] + "</font> : " + "</b>"+ "<font  color=>" + cnt[paras[i]] + "</font></br>" : res;
    }
    res = res + "------------------------------" + "</br>" + "<font color=#6959CD>" + "<b>θηΉ</b> β " + $environment.params.node + "</font>";
    res = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + res + `</p>`;
    return res;
}

var flags = new Map([[ "AC" , "π¦π¨" ] ,["AE","π¦πͺ"], [ "AF" , "π¦π«" ] , [ "AI" , "π¦π?" ] , [ "AL" , "π¦π±" ] , [ "AM" , "π¦π²" ] , [ "AQ" , "π¦πΆ" ] , [ "AR" , "π¦π·" ] , [ "AS" , "π¦πΈ" ] , [ "AT" , "π¦πΉ" ] , [ "AU" , "π¦πΊ" ] , [ "AW" , "π¦πΌ" ] , [ "AX" , "π¦π½" ] , [ "AZ" , "π¦πΏ" ] , ["BA", "π§π¦"], [ "BB" , "π§π§" ] , [ "BD" , "π§π©" ] , [ "BE" , "π§πͺ" ] , [ "BF" , "π§π«" ] , [ "BG" , "π§π¬" ] , [ "BH" , "π§π­" ] , [ "BI" , "π§π?" ] , [ "BJ" , "π§π―" ] , [ "BM" , "π§π²" ] , [ "BN" , "π§π³" ] , [ "BO" , "π§π΄" ] , [ "BR" , "π§π·" ] , [ "BS" , "π§πΈ" ] , [ "BT" , "π§πΉ" ] , [ "BV" , "π§π»" ] , [ "BW" , "π§πΌ" ] , [ "BY" , "π§πΎ" ] , [ "BZ" , "π§πΏ" ] , [ "CA" , "π¨π¦" ] , [ "CF" , "π¨π«" ] , [ "CH" , "π¨π­" ] , [ "CK" , "π¨π°" ] , [ "CL" , "π¨π±" ] , [ "CM" , "π¨π²" ] , [ "CN" , "π¨π³" ] , [ "CO" , "π¨π΄" ] , [ "CP" , "π¨π΅" ] , [ "CR" , "π¨π·" ] , [ "CU" , "π¨πΊ" ] , [ "CV" , "π¨π»" ] , [ "CW" , "π¨πΌ" ] , [ "CX" , "π¨π½" ] , [ "CY" , "π¨πΎ" ] , [ "CZ" , "π¨πΏ" ] , [ "DE" , "π©πͺ" ] , [ "DG" , "π©π¬" ] , [ "DJ" , "π©π―" ] , [ "DK" , "π©π°" ] , [ "DM" , "π©π²" ] , [ "DO" , "π©π΄" ] , [ "DZ" , "π©πΏ" ] , [ "EA" , "πͺπ¦" ] , [ "EC" , "πͺπ¨" ] , [ "EE" , "πͺπͺ" ] , [ "EG" , "πͺπ¬" ] , [ "EH" , "πͺπ­" ] , [ "ER" , "πͺπ·" ] , [ "ES" , "πͺπΈ" ] , [ "ET" , "πͺπΉ" ] , [ "EU" , "πͺπΊ" ] , [ "FI" , "π«π?" ] , [ "FJ" , "π«π―" ] , [ "FK" , "π«π°" ] , [ "FM" , "π«π²" ] , [ "FO" , "π«π΄" ] , [ "FR" , "π«π·" ] , [ "GA" , "π¬π¦" ] , [ "GB" , "π¬π§" ] , [ "HK" , "π­π°" ] ,["HU","π­πΊ"], [ "ID" , "π?π©" ] , [ "IE" , "π?πͺ" ] , [ "IL" , "π?π±" ] , [ "IM" , "π?π²" ] , [ "IN" , "π?π³" ] , [ "IS" , "π?πΈ" ] , [ "IT" , "π?πΉ" ] , [ "JP" , "π―π΅" ] , [ "KR" , "π°π·" ] , [ "LU" , "π±πΊ" ] , [ "MO" , "π²π΄" ] , [ "MX" , "π²π½" ] , [ "MY" , "π²πΎ" ] , [ "NL" , "π³π±" ] , [ "PH" , "π΅π­" ] , [ "RO" , "π·π΄" ] , [ "RS" , "π·πΈ" ] , [ "RU" , "π·πΊ" ] , [ "RW" , "π·πΌ" ] , [ "SA" , "πΈπ¦" ] , [ "SB" , "πΈπ§" ] , [ "SC" , "πΈπ¨" ] , [ "SD" , "πΈπ©" ] , [ "SE" , "πΈπͺ" ] , [ "SG" , "πΈπ¬" ] , [ "TH" , "πΉπ­" ] , [ "TN" , "πΉπ³" ] , [ "TO" , "πΉπ΄" ] , [ "TR" , "πΉπ·" ] , [ "TV" , "πΉπ»" ] , [ "TW" , "π¨π³" ] , [ "UK" , "π¬π§" ] , [ "UM" , "πΊπ²" ] , [ "US" , "πΊπΈ" ] , [ "UY" , "πΊπΎ" ] , [ "UZ" , "πΊπΏ" ] , [ "VA" , "π»π¦" ] , [ "VE" , "π»πͺ" ] , [ "VG" , "π»π¬" ] , [ "VI" , "π»π?" ] , [ "VN" , "π»π³" ] , [ "ZA" , "πΏπ¦"]])
