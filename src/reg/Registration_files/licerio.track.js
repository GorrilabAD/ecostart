
var LicerioApi =  {
    apiUrl: "http://webm.licerio.org/api",
    sourceName: "lcrtrk",
    cookieName: "lcrtrk",
    cookieDays: 30,
    apiId: null,
    init(apiId) {
        this.apiId = apiId;
        var trk = this.getQueryVariable(this.sourceName);
        if(trk) {
            this.setCookie(this.cookieName, trk, this.cookieDays);
        }
    },
    currency: {
       LCR: "LCR",
       ETH: "ETH",
       BTC: "BTC",
       LTC: "LTC",
       DASH: "DASH",
       DOGE: "DOGE"
    },
    getCookie (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;

    },
    setCookie (name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
      },
      getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
              var pair = vars[i].split("=");
              if (pair[0] == variable) {
                return pair[1];
              }
            } 
            return false;
     },
     httpInterface() {
          var xmlhttp;
            try {
              xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
              try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
              } catch (E) {
                xmlhttp = false;
              }
            }
            if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
              xmlhttp = new XMLHttpRequest();
            }
            return xmlhttp;
    },
    createLead(aim) {
            var req = this.httpInterface();
            var trk = this.getCookie(this.cookieName);
            if(!trk) { return false }
            req.open("GET", this.apiUrl + "/lead/create/?api_id=" + this.apiId + "&aim_id=" + aim + "&track_id=" + trk);
            req.send(null);
    },
    approve() {
            var req = this.httpInterface();
            var trk = this.getCookie(this.cookieName);   
            if(!trk) { return false }
            req.open("GET", this.apiUrl + "/lead/approve/?api_id=" + this.apiId + "&track_id=" + trk);
            req.send(null);
    }
}