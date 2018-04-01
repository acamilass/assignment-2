class UtilService {
    constructor(){
        throw new Error("Não é possível criar uma instância dessa classe");
    }

    static get dataHora() {
        var d = new Date();   

        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +             
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

    static get ip() {         
        let http = new XMLHttpRequest;           
        http.open("get", "https://api.ipify.org/?format=jsonp&callback", false);          
        http.send();         
        let ip = http.responseText.split('"')[3];         
        return ip;      
    }
}