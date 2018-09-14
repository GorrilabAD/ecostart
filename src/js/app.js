//
// var lang = {
//
//    available: ["ru", "en"],
//    systemLang: (navigator.language) ? navigator.language : navigator.userLanguage,
//    current: localStorage.getItem("lang") ? localStorage.getItem("lang") : null,
//    init() {
//        if(this.current === null) {
//            var sys = this.systemLang.split('-')[0];
//            if(this.available[sys] === "undefined") {
//                this.current = "en";
//            } else {
//                this.current = sys;
//            }
//            localStorage.setItem("lang", this.current);
//        }
//
//        this.load();
//
//     },
//     load() {
//        var that = this;
//
//        $.ajax({
//            method: "GET",
//            url: "/static/assets/json/lang/"+this.current+".json",
//            success: function(r) {
//                 that.data = r;
//             }
//        });
//     },
//     change(l) {
//         if(this.available[l] !== "undefined") {
//             localStorage.setItem("lang", l);
//             this.current = l;
//             this.load();
//         }
//     },
//     get(group, value) {
//         if(typeof(this.data[group]) !== "undefined") {
//            if(typeof this.data[group][value] !== "undefined") {
//
//                if(group === "titles") {
//                    return this.data[group][value] + " | EcoStart";
//                }
//
//                return this.data[group][value];
//
//            } else {
//                if(group === "titles") {
//                    return value + " | INCERIO";
//                }
//                return value;
//            }
//         } else {
//             if(group === "titles") {
//                    return value + " | INCERIO";
//             }
//             return value;
//         }
//
//     },
//     data: {}
//
// }
//
// lang.init();
