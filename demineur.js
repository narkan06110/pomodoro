
    var speed = document.getElementById("minuteur").innerHTML;
    var moustach = speed.split(":")

    var min = moustach[0];
    var minDivid = 0;
    var minTampon = moustach[0]

    var sec = moustach[1];
    var secDivid = 0;
    var secTampon = moustach[1];
    var secDividArray = [];

    var tampon = 0;
    var gate = true;

    //call à chaque intervalle de la fonction keenu
    //sert à décrementer les variable min et sec
    //et à incrementer les variable de division par 5
    function reevs(x) {
        if(x==0){
            x=59;
            min-=1;
            if(gate == true){
                secDivid = secDivid + (1/5);
                if (secDivid>=60) {
                    minDivid+=1;
                    secDivid = 0;
                }
            }
        }
        else{
            x-=1;
            if(gate == true){
                secDivid = secDivid + (1/5);
                if (secDivid>=60) {
                    minDivid+=1;
                    secDivid = 0;
                }
            }
        }
        return sec = x;
    };

    function keenu() {
        reevs(sec);
        document.getElementById("minuteur").innerHTML = ""+min+":"+sec;
        if (min == 0 && sec == 0) {
            if(gate == true){
                if (secDivid != 0) {
                    var secDividString = secDivid.toString();
                    var secDividArray = secDividString.split(".");
                    var secDividModuloArray = secDividArray[1].split("");
                    if (secDividModuloArray[0]>=5) {
                        secDivid+=1;
                        if (secDivid>=60) {
                            minDivid+=1;
                            secDivid = 0;
                        }    
                    }
                }
                var secDividString = secDivid.toString();
                var secDividArray = secDividString.split(".");
                sec = secDividArray[0];
                secDivid = 0;
                min = minDivid;
                minDivid = 0;
                gate = false;    
            }
            console.log(""+min+":"+sec);
            if (min == 0 && sec == 0) {
                sec = secTampon;
                min = minTampon;
                tampon+=1;
                gate = true;
                if (tampon==4) {
                    clearInterval(bombe);
                }
            }
        };
    };
    var bombe = setInterval(keenu,1000);
