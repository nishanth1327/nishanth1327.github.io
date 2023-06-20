document.getElementById('cnvtbtn').addEventListener('click',function(){
    const input=document.getElementById('input').value.trim();
    if(input=== ''){
        return;
    }
    const md5Hash=CryptoJS.MD5(input).toString();
    const sha1Hash=CryptoJS.SHA1(input).toString();
    const sha256Hash=CryptoJS.SHA256(input).toString();

    const output=document.getElementById('output');
    output.innerText=`MD5: ${md5Hash}\n\nSHA-1: ${sha1Hash}\n\nSHA-256: ${sha256Hash}`;
});