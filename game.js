setTimeout(function() {
    //var x0 = 500;
    console.log(document.cookie);
    var exdays = 1000;

    function setCookie(cname, cvalue) {
        localStorage.setItem(cname,cvalue)
    }

    function getCookie(cname) {
        
        return localStorage.getItem(cname)
    }
    var input = document.getElementById("slider");
    
    var sqsizeD = window.innerHeight * 0.064;;
    var sqsize;
    // console.log(window.innerWidth);
    var zoomC = 150;
    var ZoomI = parseInt(zoomC, 10);
    if (zoomC != "") {
        SetCzoom();
    } else {
        sqsize = sqsizeD;
        var w = sqsize * 8;
        var x0 = window.innerWidth / 2 - w / 2;
        // var y0 = 200;
        var y0 = sqsize * 3;
        var x1 = w;
        var y1 = w;
    }
    var AnCo, KeyCO, ColCo, AnCoD, KeyCOD, ColCoD;
    var keyORnot, ColorSet, Animation, AnOn = 0;
    AnCo = getCookie("Ani");
    if (AnCo != "") {
        Animation = parseInt(AnCo, 10);
    } else {
        Animation = 1;
    }
    KeyCO = getCookie("KeyB");
    if (KeyCO != "") {
        keyORnot = parseInt(KeyCO, 10);
    } else {
        keyORnot = 0;
    }
    ColCo = getCookie("ColC");
    if (ColCo != "") {
        ColorSet = parseInt(ColCo, 10);
    } else {
        ColorSet = 0;
    }
    /*
    if (ColorSet == 1)
        LoadCOLSet();
         if (ColorSet == 0)
             LoadSTSet();
    */
    var button1 = document.getElementById("KeyboardO");
    var myInputs = document.getElementsByClassName("keyB");
    if (keyORnot == 0) {
        button1.innerText = "Keyboard";
        //  document.getElementById("pieces").style.display = "none";
        // RemoveInputListen();
        if (ColorSet == 0) {
            LoadSTSet();
        } else {
            LoadCOLSet();
        }
    } else {
        button1.innerText = "No Keyboard";
        document.getElementById("pieces").style.display = "block";
        AddInputListen();
        if (ColorSet == 0) {
            LoadSTSet();
        } else {
            LoadCOLSet();
        }
    }
    var button = document.getElementById("animationO");
    if (Animation == 0) {
        button.innerText = "Turn on animation";
    }
    /* else
       {
           button.innerText = "Turn off animation";
       } */
    var pFKc, pLKc, pRKc, qKc, roLc, roRc, knLc, knRc, biKc, kingKc;
    var pFK, pLK, pRK, qK, roL, roR, knL, knR, biK, kingK;
    pFKc = getCookie("pawn");
    if (pFKc != "") {
        if (pFKc == "Space") {
            pFK = " ";
        } else {
            pFK = pFKc;
        }
        document.getElementById("Kpawnu").value = pFKc;
    } else {
        pFK = "w";
    }
    pLKc = getCookie("pawnl");
    if (pLKc != "") {
        if (pLKc == "Space") {
            pLK = " ";
        } else {
            pLK = pLKc;
        }
        document.getElementById("Kpawnl").value = pLKc;
    } else {
        pLK = "q";
    }
    pRKc = getCookie("pawnr");
    if (pRKc != "") {
        if (pRKc == "Space") {
            pRK = " ";
        } else {
            pRK = pRKc;
        }
        document.getElementById("Kpawnr").value = pRKc;
    } else {
        pRK = "e";
    }
    qKc = getCookie("queen");
    if (qKc != "") {
        if (qKc == "Space") {
            qK = " ";
        } else {
            qK = qKc;
        }
        document.getElementById("Kqueen").value = qKc;
    } else {
        qK = "s";
    }
    roLc = getCookie("rookl");
    if (roLc != "") {
        if (roLc == "Space") {
            roL = " ";
        } else {
            roL = roLc;
        }
        document.getElementById("Krookl").value = roLc;
    } else {
        roL = "1";
    }
    roRc = getCookie("rookr");
    if (roRc != "") {
        if (roRc == "Space") {
            roR = " ";
        } else {
            roR = roRc;
        }
        document.getElementById("Krookr").value = roRc;
    } else {
        roR = "3";
    }
    knLc = getCookie("knightl");
    if (knLc != "") {
        if (knLc == "Space") {
            knL = " ";
        } else {
            knL = knLc;
        }
        document.getElementById("Kknightl").value = knLc;
    } else {
        knL = "a";
    }
    knRc = getCookie("knightr");
    if (knRc != "") {
        if (knRc == "Space") {
            knR = " ";
        } else {
            knR = knRc;
        }
        document.getElementById("Kknightr").value = knRc;
    } else {
        knR = "d";
    }
    biKc = getCookie("bishop");
    if (biKc != "") {
        if (biKc == "Space") {
            biK = " ";
        } else {
            biK = biKc;
        }
        document.getElementById("Kbishop").value = biKc;
    } else {
        biK = " ";
    }
    kingKc = getCookie("king");
    if (kingKc != "") {
        if (kingKc == "Space") {
            kingK = " ";
        } else {
            kingK = kingKc;
        }
        document.getElementById("Kking").value = kingKc;
    } else {
        kingK = "Shift";
    }
    /*

    pFK = "w";    //pawn forward
    pLK = "q";     //pawn takes to the left
    pRK = "e";   //pawn takes to the right
    qK = "s";   //queen
    roL = "1";   //left rook
    roR = "3";   //right rook
    knL = "a";   //left knight
    knR = "d";   //right knight
    biK = " ";   //bishop
    kingK = "Shift";   //king
    */
    //  var button1 = document.createElement("button");
    //button1.innerText = "Keyboard";
    // button1.setAttribute("id", "Keyboard");
    //document.body.appendChild(button1);
    /*
    button1.style.background = "#530061";
    button1.style.border = "none";
    button1.style.width = sqsize*1.9+"px";
    button1.style.height = sqsize/2+"px";
    button1.style.color = "white";
    button1.style.fontSize = sqsize/4.5+"px";
    button1.style.fontFamily = "verdana";
    button1.style.fontWeight = "600";
    */
    // button1.style.marginTop = sqsize+y0+w+"px";
    //  button1.style.marginLeft = x0+"px";
    // 3. Add event handler
    button1.addEventListener("click", function(e) {
        e.preventDefault();
        if (keyORnot == 1) {
            button1.innerText = "Keyboard";
            keyORnot = 0;
            document.getElementById("pieces").style.display = "none";
            RemoveInputListen();
            if (ColorSet == 0) {
                LoadSTSet();
            } else {
                LoadCOLSet();
            }
            setCookie("KeyB", "0");
            /* if (BPc == 12 || BPc == 13 || BPc == 14 ||BPc == 4 ||BPc == 5 ||BPc == 6)
                 {
                     context1.clearRect(0, 0, canvas1.width, canvas1.height);
                 PawnST();
                 }*/
        } else {
            button1.innerText = "No Keyboard";
            keyORnot = 1;
            document.getElementById("pieces").style.display = "block";
            AddInputListen();
            if (ColorSet == 0) {
                LoadSTSet();
            } else {
                LoadCOLSet();
            }
            setCookie("KeyB", "1");
            /*
        if (BPc == 12 || BPc == 4)
        {
            context1.clearRect(0, 0, canvas1.width, canvas1.height);
            ArrX = []; ArrY = [];
            PawnW();
        }
            else if (BPc == 13 ||BPc == 5)
            {context1.clearRect(0, 0, canvas1.width, canvas1.height);
               ArrX = []; ArrY = [];
             PawnL();
            }
                else if (BPc == 14 ||BPc == 6)
                {context1.clearRect(0, 0, canvas1.width, canvas1.height);
                    ArrX = []; ArrY = [];
                 PawnR();
                }
*/
        }
        button1.blur();
    });
    //var button = document.createElement("button");
    //button.innerText = "Turn off animation";
    // button.setAttribute("id", "Animation");
    // 2. Append somewhere
    //var body = document.getElementsByTagName("body")[0];
    //body.appendChild(button);
    //document.body.appendChild(button);
    // button1.appendChild(button);
    // button.style.background = "#530061";
    // button.style.border = "none";
    //  button.style.width = sqsize*3+"px";
    // button.style.height = sqsize/2+"px";
    // button.style.color = "white";
    // button.style.fontSize = sqsize/4.5+"px";
    // button.style.fontFamily = "verdana";
    // button.style.fontWeight = "600";
    //button.style.marginTop = sqsize+"px";
    // button.style.marginLeft = sqsize/2+"px";
    // 3. Add event handler
    button.addEventListener("click", function() {
        if (Animation == 1) {
            button.innerText = "Turn on animation";
            Animation = 0;
            setCookie("Ani", "0");
        } else {
            button.innerText = "Turn off animation";
            Animation = 1;
            setCookie("Ani", "1");
        }
        button.blur();
    });

    function SetCzoom() {
        sqsize = sqsizeD * ZoomI / 100;
        w = sqsize * 8;
        x0 = window.innerWidth / 2 - w / 2;
        // var y0 = 200;
        //y0 = sqsize*3;
        y0 = sqsizeD * 3 - sqsize * (ZoomI - 50) / 160;
        x1 = w;
        y1 = w;
        input.value = ZoomI;
    }
    input.addEventListener("input", function() {
        sqsize = sqsizeD * input.value / 100;
        w = sqsize * 8;
        x0 = window.innerWidth / 2 - w / 2;
        // var y0 = 200;
        //y0 = sqsize*3;
        y0 = sqsizeD * 3 - sqsize * (input.value - 50) / 160;
        x1 = w;
        y1 = w;
        contextS.clearRect(0, 0, canvasS.width, canvasS.height);
        drawTime(TimeL);
        drawScore();
        DrawBase();
        canvasPointers();
        DrawApiece();
        drawDest(destX, destY);
        setCookie("Zoom", input.value);
        input.blur();
    });
    //  input.style.zIndex=100000;
    //document.getElementsByTagName('head')[0].appendChild(input);
    //document.body.appendChild(input);
    // var fSettings = document.createElement("form");
    //document.body.appendChild(fSettings);
    /*
    console.log(document.cookie);
    document.cookie = input.value; */
    var whatP;
    var focusK = 0;
    var storeK;

    function AddInputListen() {
        for (var kk = 0; kk < myInputs.length; ++kk) {
            myInputs[kk].addEventListener('keydown', InputDown, false);
            myInputs[kk].addEventListener('focus', InputFocus, false);
            myInputs[kk].addEventListener('blur', InputBlur, false);
        }
    }

    function InputDown(event) {
        event.preventDefault();
        storeK = event.key;
        AssignKeys(this.id);
    }

    function InputFocus(event) {
        focusK = 1;
        console.log(focusK);
    }

    function InputBlur(event) {
        focusK = 0;
        console.log(focusK);
    }

    function RemoveInputListen() {
        for (var kk = 0; kk < myInputs.length; ++kk) {
            myInputs[kk].removeEventListener('keydown', InputDown);
            myInputs[kk].removeEventListener('focus', InputFocus);
            myInputs[kk].removeEventListener('blur', InputBlur);
        }
    }

    function AssignKeys(idK) {
        //document.getElementById(idK).value = "";
        if (storeK == " ") {
            document.getElementById(idK).value = "Space";
        } else {
            document.getElementById(idK).value = storeK;
        }
        // console.log(idK);
        if (idK == "Kpawnu") {
            pFK = storeK;
            if (storeK == " ") {
                setCookie("pawn", "Space");
            } else {
                setCookie("pawn", pFK);
            }
        }
        if (idK == "Kpawnl") {
            pLK = storeK;
            if (storeK == " ") {
                setCookie("pawnl", "Space");
            } else {
                setCookie("pawnl", pLK);
            }
        }
        if (idK == "Kpawnr") {
            pRK = storeK;
            if (storeK == " ") {
                setCookie("pawnr", "Space");
            } else {
                setCookie("pawnr", pRK);
            }
        }
        if (idK == "Kqueen") {
            qK = storeK;
            if (storeK == " ") {
                setCookie("queen", "Space");
            } else {
                setCookie("queen", qK);
            }
        }
        if (idK == "Krookl") {
            roL = storeK;
            if (storeK == " ") {
                setCookie("rookl", "Space");
            } else {
                setCookie("rookl", roL);
            }
        }
        if (idK == "Krookr") {
            roR = storeK;
            if (storeK == " ") {
                setCookie("rookr", "Space");
            } else {
                setCookie("rookr", roR);
            }
        }
        if (idK == "Kknightl") {
            knL = storeK;
            if (storeK == " ") {
                setCookie("knightl", "Space");
            } else {
                setCookie("knightl", knL);
            }
        }
        if (idK == "Kknightr") {
            knR = storeK;
            if (storeK == " ") {
                setCookie("knightr", "Space");
            } else {
                setCookie("knightr", knR);
            }
        }
        if (idK == "Kbishop") {
            biK = storeK;
            if (storeK == " ") {
                setCookie("bishop", "Space");
            } else {
                setCookie("bishop", biK);
            }
        }
        if (idK == "Kking") {
            kingK = storeK;
            if (storeK == " ") {
                setCookie("king", "Space");
            } else {
                setCookie("king", kingK);
            }
        }
        fixKeys();
        console.log(pFK, pLK, pRK, qK, roL, roR, knL, knR, biK, kingK);
    }

    function fixKeys() {
        if (BPc == 1) //White bishop
        {
            whatP = biK;
        }
        if (BPc == 2) //White queen
        {
            whatP = qK;
        }
        if (BPc == 3) //White king
        {
            whatP = kingK;
        }
        if (BPc == 4) //White pawnW
        {
            whatP = pFK;
        }
        if (BPc == 5) //White pawnL
        {
            whatP = pLK;
        }
        if (BPc == 6) //White pawnR
        {
            whatP = pRK;
        }
        if (BPc == 7) //White knightL
        {
            whatP = knL;
        }
        if (BPc == 8) //White RookL
        {
            whatP = roL;
        }
        if (BPc == 9) //Black bishop
        {
            whatP = biK;
        }
        if (BPc == 10) //Black queen
        {
            whatP = qK;
        }
        if (BPc == 11) //Black king
        {
            whatP = kingK;
        }
        if (BPc == 12) //Black pawnW
        {
            whatP = pFK;
        }
        if (BPc == 13) //Black pawnL
        {
            whatP = pLK;
        }
        if (BPc == 14) //Black pawnR
        {
            whatP = pRK;
        }
        if (BPc == 15) //Black KnightL
        {
            whatP = knL;
        }
        if (BPc == 16) //Black RookL
        {
            whatP = roL;
        }
        if (BPc == 17) //Black KnightR
        {
            whatP = knR;
        }
        if (BPc == 18) //Black RookR
        {
            whatP = roR;
        }
        if (BPc == 19) //White knightR
        {
            whatP = knR;
        }
        if (BPc == 20) //White RookR
        {
            whatP = roR;
        }
    }
    /*
         var pFK = "w",    //pawn forward
    pLK = "q",     //pawn takes to the left
    pRK = "e",   //pawn takes to the right
    qK = "s",   //queen
    roL = "1",   //left rook
    roR = "3",   //right rook
    knL = "a",   //left knight
    knR = "d",   //right knight
    biK = " ",   //bishop
    kingK = "Shift";   //king
    */
    /*
    var imgRW=new Image();
    imgRW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7ZmlsbDojRkZGRkZGO3N0cm9rZTojOUUwRUMxO3N0cm9rZS13aWR0aDo1O30uc3Q3e2ZpbGw6I0ZGMDAwMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzOWgyN3YtM0g5VjM5eiBNMTIsMzZ2LTRoMjF2NEgxMnogTTExLDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNCwxNGwtMywzSDE0bC0zLTMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMzEsMTd2MTIuNUgxNFYxNyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMSwyOS41bDEuNSwyLjVoLTIwbDEuNS0yLjUiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTEsMTRoMjMiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyMi41LDQuMyA1LjMsMzkuNSAzOS44LDM5LjUgIi8+PHJlY3QgeD0iOSIgeT0iNS41IiBjbGFzcz0ic3Q2IiB3aWR0aD0iMjciIGhlaWdodD0iMzUiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNiIgY3k9IjM0LjUiIHI9IjguNSIvPjwvc3ZnPg==";

    var imgKW=new Image();
    imgKW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzNCQUEwMDtzdHJva2Utd2lkdGg6MS44NzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDh7ZmlsbDojRkYwMDAwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMiwxMGMxMC41LDEsMTYuNSw4LDE2LDI5SDE1YzAtOSwxMC02LjUsOC0yMSIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNCwxOGMwLjQsMi45LTUuNSw3LjQtOCw5Yy0zLDItMi44LDQuMy01LDRjLTEtMC45LDEuNC0zLDAtM2MtMSwwLDAuMiwxLjItMSwyYy0xLDAtNCwxLTQtNGMwLTIsNi0xMiw2LTEyczEuOS0xLjksMi0zLjVjLTAuNy0xLTAuNS0yLTAuNS0zYzEtMSwzLDIuNSwzLDIuNWgyYzAsMCwwLjgtMiwyLjUtM2MxLDAsMSwzLDEsMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05LjUsMjUuNUM5LjUsMjUuOCw5LjMsMjYsOSwyNnMtMC41LTAuMi0wLjUtMC41UzguNywyNSw5LDI1UzkuNSwyNS4yLDkuNSwyNS41eiBNMTQuOSwxNS43Yy0wLjQsMC43LTAuOSwxLjItMS4yLDEuMWMtMC4yLTAuMS0wLjEtMC44LDAuMy0xLjVsMCwwYzAuNC0wLjcsMC45LTEuMiwxLjItMS4xQzE1LjUsMTQuMywxNS40LDE1LDE0LjksMTUuN0wxNC45LDE1Ljd6Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTI0LjUsMTAuNEwyNCwxMS44bDAuNSwwLjFjMy4xLDEsNS42LDIuNSw3LjksNi44czMuMywxMC4zLDIuOCwyMC4ydjAuNWgyLjN2LTAuNWMwLjUtMTAuMS0wLjktMTYuOC0zLjMtMjEuM1MyOC40LDExLDI1LDEwLjRDMjUuMSwxMC41LDI0LjYsMTAuNCwyNC41LDEwLjR6Ii8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iNy4yLDguOSAzOC41LDguOSAzOC41LDQwLjQgMjIuMSw0MC40IDIyLjEsMjQgNy4yLDI0ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjUuOSw0MS4yIDM4LjIsNDEuMiAzOC4yLDUuMiA0LjIsNS4yIDQuMiwyMSAxMC4zLDIxIDEwLjMsMTUuNiAyMy42LDE1LjYgMjMuNiw0MS4yICIvPjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMjUuOSw0MCAzOC4yLDQwIDM4LjIsNiA0LjIsNiA0LjIsMjAuOSAxMC4zLDIwLjkgMTAuMywxNS44IDIzLjYsMTUuOCAyMy42LDQwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iNS40LDcuMyA1LjQsMTkuNSA5LjEsMTkuNSA5LjEsMTQuNyAyNC45LDE0LjcgMjQuOSwzOC44IDM3LjIsMzguOCAzNy4yLDguOSAzNy4yLDcuMyAiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSIzNiIgY3k9IjM0LjUiIHI9IjguNSIvPjwvc3ZnPg==";

    var imgRB=new Image();
    imgRB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7c3Ryb2tlOiNDRDAwRkY7c3Ryb2tlLXdpZHRoOjIuMTE4O30uc3Q3e2ZpbGw6I0ZGMDAwMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzcuOCwzNlY5aC0zdjI3SDM3Ljh6IE0zNC44LDMzaC00VjEyaDRWMzN6IE0xMi44LDM0aC01di00aDJ2LTVoLTJ2LTVoMnYtNWgtMnYtNGg1Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTEyLjgsMTFsMywzdjE3bC0zLDMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTUuOCwxNGgxMi41djE3SDE1LjgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjguMywxNGwyLjUtMS41djIwTDI4LjMsMzEiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTIuOCwzNFYxMSIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjMuMSwyMi41IDM4LjMsMzkuOCAzOC4zLDUuMyAiLz48cmVjdCB4PSI0LjYiIHk9IjExIiBjbGFzcz0ic3Q2IiB3aWR0aD0iMzYiIGhlaWdodD0iMjMiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNi41IiBjeT0iMzYuNSIgcj0iOC41Ii8+PC9zdmc+";

    var imgKB=new Image();
    imgKB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojM0JBQTAwO3N0cm9rZS13aWR0aDoxLjg3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0OHtmaWxsOiNGRjAwMDA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLjQsMzYuMWMtMTAuNS0xLTE2LjUtOC0xNi0yOWgyM2MwLDktMTAsNi41LTgsMjEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjAuNCwyOC4xYy0wLjQtMi45LDUuNS03LjQsOC05YzMtMiwyLjgtNC4zLDUtNGMxLDAuOS0xLjQsMywwLDNjMSwwLTAuMi0xLjIsMS0yYzEsMCw0LTEsNCw0YzAsMi02LDEyLTYsMTJzLTEuOSwxLjktMiwzLjVjMC43LDEsMC41LDIsMC41LDNjLTEsMS0zLTIuNS0zLTIuNWgtMmMwLDAtMC44LDItMi41LDNjLTEsMC0xLTMtMS0zIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTM0LjgsMjAuNmMwLTAuMywwLjItMC41LDAuNS0wLjVjMC4zLDAsMC41LDAuMiwwLjUsMC41cy0wLjIsMC41LTAuNSwwLjVDMzUsMjEuMSwzNC44LDIwLjksMzQuOCwyMC42eiBNMjkuNSwzMC40YzAuNC0wLjcsMC45LTEuMiwxLjItMS4xYzAuMiwwLjEsMC4xLDAuOC0wLjMsMS41bDAsMGMtMC40LDAuNy0wLjksMS4yLTEuMiwxLjFDMjguOSwzMS44LDI5LDMxLjEsMjkuNSwzMC40TDI5LjUsMzAuNHoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTkuOSwzNS43bDAuNS0xLjRsLTAuNS0wLjFjLTMuMS0xLTUuNi0yLjUtNy45LTYuOFM4LjYsMTcuMSw5LjEsNy4yVjYuN0g2Ljh2MC41QzYuMywxNy4zLDcuOCwyNCwxMC4xLDI4LjVzNS44LDYuNiw5LjIsNy4yQzE5LjMsMzUuNiwxOS44LDM1LjcsMTkuOSwzNS43eiIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjM3LjIsMzcuMiA1LjgsMzcuMiA1LjgsNS43IDIyLjMsNS43IDIyLjMsMjIuMSAzNy4yLDIyLjEgIi8+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIxOC41LDQuOSA2LjEsNC45IDYuMSw0MC45IDQwLjIsNDAuOSA0MC4yLDI1LjEgMzQsMjUuMSAzNCwzMC41IDIwLjgsMzAuNSAyMC44LDQuOSAiLz48cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjE4LjUsNi4xIDYuMSw2LjEgNi4xLDQwLjEgNDAuMSw0MC4xIDQwLjEsMjUuMiAzNCwyNS4yIDM0LDMwLjMgMjAuOCwzMC4zIDIwLjgsNi4xICIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMzguOSwzOC44IDM4LjksMjYuNiAzNS4zLDI2LjYgMzUuMywzMS40IDE5LjQsMzEuNCAxOS40LDcuMyA3LjIsNy4zIDcuMiwzNy4yIDcuMiwzOC44ICIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjM2LjUiIGN5PSIzNi41IiByPSI4LjUiLz48L3N2Zz4=";

    var imgPaB=new Image();
    imgPaB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Qxe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjg0NTI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjUsOWMtMi4yLDAtNCwxLjgtNCw0YzAsMC45LDAuMywxLjcsMC44LDIuNGMtMiwxLjEtMy4zLDMuMi0zLjMsNS42YzAsMiwwLjksMy44LDIuNCw1Yy0zLDEuMS03LjQsNS42LTcuNCwxMy41aDIzYzAtNy45LTQuNC0xMi40LTcuNC0xMy41YzEuNS0xLjIsMi40LTMsMi40LTVjMC0yLjQtMS4zLTQuNS0zLjMtNS42YzAuNS0wLjcsMC44LTEuNSwwLjgtMi40QzI2LjUsMTAuOCwyNC43LDksMjIuNSw5eiIvPjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzAuMiwzOC44IDI3LDM5LjggMTcuMywxMS44IDIwLjUsMTAuOCAiLz48Y2lyY2xlIGN4PSIxNy4zIiBjeT0iNi41IiByPSIyLjgiLz48L3N2Zz4=";

    var imgPaW=new Image();
    imgPaW.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAC8CAMAAAD1lzSZAAABgFBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMEBAQHBwcICAgKCgoODg4TExMUFBQZGRkaGhodHR0mJiYpKSkqKiorKystLS0wMDAxMTEyMjI6Ojo7OztAQEBBQUFNTU1SUlJYWFhZWVlgYGBjY2NpaWlsbGx9fX2Hh4eLi4uOjo6SkpKYmJicnJygoKCmpqaoqKipqamqqqqysrK1tbW9vb3ExMTNzc3R0dHU1NTZ2dni4uLk5OTl5eXs7Ozz8/P09PT19fX7+/v8/Pz9/f3+/v7///+8ZappAAAAPnRSTlMAAAIGBwkKCwwNDhESFhkbJCksLS5CQ0hMUVlmbHB0eHyFh6Cjsre7vcDExcfI1N3g4eLk5+rx8/X4+fz9/k1u7FwAAAIfSURBVHgB7d3HkxJBFIDxdoOuurpgxhwUA2YQA9oo5pyzYsYgillBsf91q+zpmZ6COVge9nXV9x3fXH6Hqa6edxk1I+DAgwf/76lUOjOVCnzYePDgwYM3cdOPBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw/+Ssj4JyHjvwSMv2kCxI8XLbST2H86/DLh+OUHrbNlkn44/N5Jyfix7RHzqfH6rl1bZ8vFT1WtsfHa+H2tx/qdi6TiCzUrPN0xqX7f0XG1TXmJ+LmlyHfG2r2+3dJelZUTwvDzi8526bMZqPf4lM8/vG3JiBx8bncMe9Q3w+q+vH3C91dXjQrBz0lQ516ZjLovrvn6HeNC8KOVBHW5naX/+MCz7xoT89qUPNb1d1n6Zw3tOrJAicFv1F5X32Tg31/QrjVKDn4kv2F/oj92o/1rGL6po/YslHbOT67dl/jPvx2g9+66G05O5PVgYkXZ6esP+ybdffvg0FK5t8p5mx2/mbY/t9PyLNEfI1si/MmU/dPRv8MDM5Vo/PoIf9y398/aE3Kxko0vRPiGj79nZ6uVcPxUhK979pYdrQtx6WQuBrwx+8C6Dzx48ODBZwcePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw+e/8OCBw8ePHipgf//wIMHD/4P9f6sp10aRgcAAAAASUVORK5CYII=";

    var imgBB=new Image();
    imgBB.src = "data:image/png;base64,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";

    var imgBW=new Image();
    imgBW.src = "data:image/png;base64,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";


    var imgQB=new Image();
    imgQB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTt9LnN0MntkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDR7ZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojRUNFQ0VDO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC40MzI0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2Rpc3BsYXk6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zNDkzO3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojMDBGOUZGO3N0cm9rZS13aWR0aDoxLjk0NzQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDh7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PGcgY2xhc3M9InN0MSI+PGNpcmNsZSBjeD0iNiIgY3k9IjEyIiByPSIyLjgiLz48Y2lyY2xlIGN4PSIxNCIgY3k9IjkiIHI9IjIuOCIvPjxjaXJjbGUgY3g9IjIyLjUiIGN5PSI4IiByPSIyLjgiLz48Y2lyY2xlIGN4PSIzMSIgY3k9IjkiIHI9IjIuOCIvPjxjaXJjbGUgY3g9IjM5IiBjeT0iMTIiIHI9IjIuOCIvPjwvZz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNOSwyNmM4LjUtMS41LDIxLTEuNSwyNywwbDIuNS0xMi41TDMxLDI1bC0wLjMtMTQuMWwtNS4yLDEzLjZsLTMtMTQuNWwtMywxNC41bC01LjItMTMuNkwxNCwyNUw2LjUsMTMuNUw5LDI2eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05LDI2YzAsMiwxLjUsMiwyLjUsNGMxLDEuNSwxLDEsMC41LDMuNWMtMS41LDEtMS41LDIuNS0xLjUsMi41QzksMzcuNSwxMSwzOC41LDExLDM4LjVjNi41LDEsMTYuNSwxLDIzLDBjMCwwLDEuNS0xLDAtMi41YzAsMCwwLjUtMS41LTEtMi41Yy0wLjUtMi41LTAuNS0yLDAuNS0zLjVjMS0yLDIuNS0yLDIuNS00QzI3LjUsMjQuNSwxNy41LDI0LjUsOSwyNnoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTEsMzguNWM3LjQsMi42LDE1LjYsMi42LDIzLDAiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTEsMjljNy40LTIuNiwxNS42LTIuNiwyMywwIE0xMi41LDMxLjVoMjAgTTExLjUsMzQuNWM3LjEsMi40LDE0LjksMi40LDIyLDAgTTEwLjUsMzcuNWM3LjcsMi44LDE2LjMsMi44LDI0LDAiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyMi41LDQuMyA1LjMsMzkuNSAzOS44LDM5LjUgIi8+PHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIzNCwzOS41IDIyLjUsMzMuNiAxMC45LDM5LjUgMTMuMiwyNi45IDMuOSwxOCAxNi43LDE2LjIgMjIuNSw0LjggMjguMywxNi4yIDQxLjIsMTguMSAzMS44LDI2LjkgIi8+PHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxOS44LDQyLjggMTUsMzAuNyAyLjQsMjcuNyAxMi4zLDE5LjYgMTEuMSw2LjggMjIsMTMuOSAzMy45LDkgMzAuNywyMS40IDM5LjMsMzEuMyAyNi40LDMxLjkgIi8+PHBvbHlnb24gY2xhc3M9InN0NyIgcG9pbnRzPSIzNC4zLDM3LjEgMjUuOCwzMS4xIDIyLjksNDAuNyAxOS44LDMxLjEgMTEuNSwzNy4zIDE0LjksMjcuNyA0LjQsMjguMSAxMy4xLDIyLjMgNC4zLDE2LjYgMTQuOCwxNi44IDExLjIsNy40IDE5LjcsMTMuNCAyMi42LDMuNyAyNS43LDEzLjQgMzQsNy4yIDMwLjYsMTYuNyA0MS4xLDE2LjQgMzIuNCwyMi4yIDQxLjMsMjcuOCAzMC43LDI3LjcgIi8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iMS45IiBjeT0iMTYiIHI9IjAuOSIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjQzLjQiIGN5PSIyOC41IiByPSIwLjkiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSIzNS45IiBjeT0iMzkuMSIgcj0iMC45Ii8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iNDMuMSIgY3k9IjE1LjciIHI9IjAuOSIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjM1LjkiIGN5PSI0LjYiIHI9IjAuOSIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjIyLjkiIGN5PSI0My4zIiByPSIwLjkiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSI5LjgiIGN5PSIzOS42IiByPSIwLjkiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSIxLjkiIGN5PSIyOSIgcj0iMC45Ii8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iMjIuNyIgY3k9IjEuOSIgcj0iMC45Ii8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iOS41IiBjeT0iNS41IiByPSIwLjkiLz48L3N2Zz4=";

    var imgQW=new Image();
    imgQW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0NHtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDVBNUU7c3Ryb2tlLXdpZHRoOjEuNDE5ODtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMEUxRkY7c3Ryb2tlLXdpZHRoOjIuMzc2O3N0cm9rZS1taXRlcmxpbWl0OjEwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04LDEyYzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlM4LDEwLjksOCwxMnogTTI0LjUsNy41YzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlMyNC41LDYuNCwyNC41LDcuNXogTTQxLDEyYzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlM0MSwxMC45LDQxLDEyeiBNMTYsOC41YzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlMxNiw3LjQsMTYsOC41eiBNMzMsOWMwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMnMwLjktMiwyLTJDMzIuMSw3LDMzLDcuOSwzMyw5eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05LDI2YzguNS0xLjUsMjEtMS41LDI3LDBsMi0xMmwtNywxMVYxMWwtNS41LDEzLjVsLTMtMTVsLTMsMTVsLTUuNS0xNFYyNUw3LDE0TDksMjZ6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTksMjZjMCwyLDEuNSwyLDIuNSw0YzEsMS41LDEsMSwwLjUsMy41Yy0xLjUsMS0xLjUsMi41LTEuNSwyLjVDOSwzNy41LDExLDM4LjUsMTEsMzguNWM2LjUsMSwxNi41LDEsMjMsMGMwLDAsMS41LTEsMC0yLjVjMCwwLDAuNS0xLjUtMS0yLjVjLTAuNS0yLjUtMC41LTIsMC41LTMuNWMxLTIsMi41LTIsMi41LTRDMjcuNSwyNC41LDE3LjUsMjQuNSw5LDI2eiIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMS41LDMwYzMuNS0xLDE4LjUtMSwyMiwwIE0xMiwzMy41YzYtMSwxNS0xLDIxLDAiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIzNC45LDM3LjkgMjYsMzEuNSAyMi45LDQxLjcgMTkuNiwzMS41IDEwLjksMzguMiAxNC41LDI4LjEgMy4zLDI4LjUgMTIuNSwyMi4zIDMuMywxNi40IDE0LjQsMTYuNiAxMC42LDYuNiAxOS41LDEzIDIyLjYsMi43IDI1LjksMTMgMzQuNiw2LjQgMzEsMTYuNCA0Mi4yLDE2LjEgMzMsMjIuMiA0Mi4zLDI4LjEgMzEuMSwyNy45ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjkuNiwzMS4xIDI0LjYsMjcuNSAyMi45LDMzLjIgMjEsMjcuNSAxNi4xLDMxLjIgMTguMSwyNS41IDExLjgsMjUuNyAxNywyMi4zIDExLjgsMTguOSAxOC4xLDE5LjEgMTUuOSwxMy40IDIwLjksMTcgMjIuNywxMS4yIDI0LjUsMTcgMjkuNSwxMy4zIDI3LjQsMTguOSAzMy43LDE4LjcgMjguNSwyMi4yIDMzLjgsMjUuNSAyNy41LDI1LjQgIi8+PC9zdmc+";

    var imgKiB=new Image();
    imgKiB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTt9LnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDR7ZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNzM2ODtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NntzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjIuNSwxMS42VjYgTTIwLDhoNSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMi41LDI1YzAsMCw0LjUtNy41LDMtMTAuNWMwLDAtMS0yLjUtMy0yLjVzLTMsMi41LTMsMi41QzE4LDE3LjUsMjIuNSwyNSwyMi41LDI1Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTExLjUsMzdjNS41LDMuNSwxNS41LDMuNSwyMSwwdi03YzAsMCw5LTQuNSw2LTEwLjVjLTQtNi41LTEzLjUtMy41LTE2LDRWMjd2LTMuNWMtMy41LTcuNS0xMy0xMC41LTE2LTRjLTMsNiw1LDEwLDUsMTBWMzd6Ii8+PHBhdGggY2xhc3M9InN0NCIgZD0iTTExLjUsMzBjNS41LTMsMTUuNS0zLDIxLDAgTTExLjUsMzMuNWM1LjUtMywxNS41LTMsMjEsMCBNMTEuNSwzN2M1LjUtMywxNS41LTMsMjEsMCIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjMzLDM1LjUgMjUuNSwzMC4xIDIyLjksMzguNyAyMC4xLDMwLjEgMTIuNywzNS43IDE1LjgsMjcuMiA2LjMsMjcuNSAxNC4xLDIyLjMgNi4zLDE3LjMgMTUuNywxNy41IDEyLjUsOSAyMCwxNC40IDIyLjYsNS43IDI1LjQsMTQuNCAzMi44LDguOCAyOS43LDE3LjMgMzkuMiwxNyAzMS40LDIyLjIgMzkuMywyNy4yIDI5LjgsMjcgIi8+PGNpcmNsZSBjbGFzcz0ic3Q2IiBjeD0iMjIuOCIgY3k9IjIyLjIiIHI9IjE3LjMiLz48cmVjdCB4PSI3LjQiIHk9IjEwLjMiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzMxNyAwLjY4MTcgLTAuNjgxNyAwLjczMTcgMTAuODg5MyAtNC44MDY5KSIgd2lkdGg9IjguNCIgaGVpZ2h0PSIyLjMiLz48cmVjdCB4PSI3LjkiIHk9IjMyLjUiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjgxNyAtMC43MzE3IDAuNzMxNyAwLjY4MTcgLTIwLjczIDE5LjUxNTIpIiB3aWR0aD0iOC40IiBoZWlnaHQ9IjIuMyIvPjxyZWN0IHg9IjI5LjQiIHk9IjkuNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC42ODE3IC0wLjczMTcgMC43MzE3IDAuNjgxNyAzLjAwNzkgMjcuOTAzNykiIHdpZHRoPSI4LjQiIGhlaWdodD0iMi4zIi8+PHJlY3QgeD0iMjkuOSIgeT0iMzIuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzE3IDAuNjgxNyAtMC42ODE3IDAuNzMxNyAzMi4wMzMyIC0xNC4yMTA3KSIgd2lkdGg9IjguNCIgaGVpZ2h0PSIyLjMiLz48L3N2Zz4=";

    var imgKiW=new Image();
    imgKiW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTt9LnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDR7ZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNzM2ODtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NntmaWxsOiNGRkZGRkY7c3Ryb2tlOiM0RjRGNEY7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLjUsMTEuNlY2IE0yMCw4aDUiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjIuNSwyNWMwLDAsNC41LTcuNSwzLTEwLjVjMCwwLTEtMi41LTMtMi41cy0zLDIuNS0zLDIuNUMxOCwxNy41LDIyLjUsMjUsMjIuNSwyNSIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMS41LDM3YzUuNSwzLjUsMTUuNSwzLjUsMjEsMHYtN2MwLDAsOS00LjUsNi0xMC41Yy00LTYuNS0xMy41LTMuNS0xNiw0VjI3di0zLjVjLTMuNS03LjUtMTMtMTAuNS0xNi00Yy0zLDYsNSwxMCw1LDEwVjM3eiIvPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMS41LDMwYzUuNS0zLDE1LjUtMywyMSwwIE0xMS41LDMzLjVjNS41LTMsMTUuNS0zLDIxLDAgTTExLjUsMzdjNS41LTMsMTUuNS0zLDIxLDAiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIzMywzNS41IDI1LjUsMzAuMSAyMi45LDM4LjcgMjAuMSwzMC4xIDEyLjcsMzUuNyAxNS44LDI3LjIgNi4zLDI3LjUgMTQuMSwyMi4zIDYuMywxNy4zIDE1LjcsMTcuNSAxMi41LDkgMjAsMTQuNCAyMi42LDUuNyAyNS40LDE0LjQgMzIuOCw4LjggMjkuNywxNy4zIDM5LjIsMTcgMzEuNCwyMi4yIDM5LjMsMjcuMiAyOS44LDI3ICIvPjxjaXJjbGUgY2xhc3M9InN0NiIgY3g9IjIyLjgiIGN5PSIyMi4yIiByPSIxNy4zIi8+PC9zdmc+";

    var imgKNB=new Image();
    imgKNB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojM0JBQTAwO3N0cm9rZS13aWR0aDoxLjg3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0OHtkaXNwbGF5Om5vbmU7ZmlsbDojRkYwMDAwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMi40LDM2LjFjLTEwLjUtMS0xNi41LTgtMTYtMjloMjNjMCw5LTEwLDYuNS04LDIxIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIwLjQsMjguMWMtMC40LTIuOSw1LjUtNy40LDgtOWMzLTIsMi44LTQuMyw1LTRjMSwwLjktMS40LDMsMCwzYzEsMC0wLjItMS4yLDEtMmMxLDAsNC0xLDQsNGMwLDItNiwxMi02LDEycy0xLjksMS45LTIsMy41YzAuNywxLDAuNSwyLDAuNSwzYy0xLDEtMy0yLjUtMy0yLjVoLTJjMCwwLTAuOCwyLTIuNSwzYy0xLDAtMS0zLTEtMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNC44LDIwLjZjMC0wLjMsMC4yLTAuNSwwLjUtMC41YzAuMywwLDAuNSwwLjIsMC41LDAuNXMtMC4yLDAuNS0wLjUsMC41QzM1LDIxLjEsMzQuOCwyMC45LDM0LjgsMjAuNnogTTI5LjUsMzAuNGMwLjQtMC43LDAuOS0xLjIsMS4yLTEuMWMwLjIsMC4xLDAuMSwwLjgtMC4zLDEuNWwwLDBjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xQzI4LjksMzEuOCwyOSwzMS4xLDI5LjUsMzAuNEwyOS41LDMwLjR6Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTE5LjksMzUuN2wwLjUtMS40bC0wLjUtMC4xYy0zLjEtMS01LjYtMi41LTcuOS02LjhTOC42LDE3LjEsOS4xLDcuMlY2LjdINi44djAuNUM2LjMsMTcuMyw3LjgsMjQsMTAuMSwyOC41czUuOCw2LjYsOS4yLDcuMkMxOS4zLDM1LjYsMTkuOCwzNS43LDE5LjksMzUuN3oiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIzNy4yLDM3LjIgNS44LDM3LjIgNS44LDUuNyAyMi4zLDUuNyAyMi4zLDIyLjEgMzcuMiwyMi4xICIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMTguNSw0LjkgNi4xLDQuOSA2LjEsNDAuOSA0MC4yLDQwLjkgNDAuMiwyNS4xIDM0LDI1LjEgMzQsMzAuNSAyMC44LDMwLjUgMjAuOCw0LjkgIi8+PHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxOC41LDYuMSA2LjEsNi4xIDYuMSw0MC4xIDQwLjEsNDAuMSA0MC4xLDI1LjIgMzQsMjUuMiAzNCwzMC4zIDIwLjgsMzAuMyAyMC44LDYuMSAiLz48cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9IjM4LjksMzguOCAzOC45LDI2LjYgMzUuMywyNi42IDM1LjMsMzEuNCAxOS40LDMxLjQgMTkuNCw3LjMgNy4yLDcuMyA3LjIsMzcuMiA3LjIsMzguOCAiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSI4LjQiIGN5PSIxMS42IiByPSI4LjUiLz48L3N2Zz4=";

    var imgKNW=new Image();
    imgKNW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMzMUE4MDA7c3Ryb2tlLXdpZHRoOjMuMjA3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NntkaXNwbGF5Om5vbmU7ZmlsbDojRkYwMDAwO30uc3Q3e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q4e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzNCQUEwMDtzdHJva2Utd2lkdGg6MS44NzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLDEwYzEwLjUsMSwxNi41LDgsMTYsMjlIMTVjMC05LDEwLTYuNSw4LTIxIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTI0LDE4YzAuNCwyLjktNS41LDcuNC04LDljLTMsMi0yLjgsNC4zLTUsNGMtMS0wLjksMS40LTMsMC0zYy0xLDAsMC4yLDEuMi0xLDJjLTEsMC00LDEtNC00YzAtMiw2LTEyLDYtMTJzMS45LTEuOSwyLTMuNWMtMC43LTEtMC41LTItMC41LTNjMS0xLDMsMi41LDMsMi41aDJjMCwwLDAuOC0yLDIuNS0zYzEsMCwxLDMsMSwzIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTkuNSwyNS41QzkuNSwyNS44LDkuMywyNiw5LDI2cy0wLjUtMC4yLTAuNS0wLjVTOC43LDI1LDksMjVTOS41LDI1LjIsOS41LDI1LjV6IE0xNC45LDE1LjdjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xYy0wLjItMC4xLTAuMS0wLjgsMC4zLTEuNWwwLDBjMC40LTAuNywwLjktMS4yLDEuMi0xLjFDMTUuNSwxNC4zLDE1LjQsMTUsMTQuOSwxNS43TDE0LjksMTUuN3oiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjQuNSwxMC40TDI0LDExLjhsMC41LDAuMWMzLjEsMSw1LjYsMi41LDcuOSw2LjhzMy4zLDEwLjMsMi44LDIwLjJ2MC41aDIuM3YtMC41YzAuNS0xMC4xLTAuOS0xNi44LTMuMy0yMS4zUzI4LjQsMTEsMjUsMTAuNEMyNS4xLDEwLjUsMjQuNiwxMC40LDI0LjUsMTAuNHoiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSI3LjIsOC45IDM4LjUsOC45IDM4LjUsNDAuNCAyMi4xLDQwLjQgMjIuMSwyNCA3LjIsMjQgIi8+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyNS45LDQxLjIgMzguMiw0MS4yIDM4LjIsNS4yIDQuMiw1LjIgNC4yLDIxIDEwLjMsMjEgMTAuMywxNS42IDIzLjYsMTUuNiAyMy42LDQxLjIgIi8+PGNpcmNsZSBjbGFzcz0ic3Q2IiBjeD0iMzQuMSIgY3k9IjMxLjUiIHI9IjguNCIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMjUuOSw0MCAzOC4yLDQwIDM4LjIsNiA0LjIsNiA0LjIsMjAuOSAxMC4zLDIwLjkgMTAuMywxNS44IDIzLjYsMTUuOCAyMy42LDQwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDgiIHBvaW50cz0iNS40LDcuMyA1LjQsMTkuNSA5LjEsMTkuNSA5LjEsMTQuNyAyNC45LDE0LjcgMjQuOSwzOC44IDM3LjIsMzguOCAzNy4yLDguOSAzNy4yLDcuMyAiLz48L3N2Zz4=";

    var imgRNB=new Image();
    imgRNB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7c3Ryb2tlOiNDRDAwRkY7c3Ryb2tlLXdpZHRoOjIuMTE4O308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNy44LDM2VjloLTN2MjdIMzcuOHogTTM0LjgsMzNoLTRWMTJoNFYzM3ogTTEyLjgsMzRoLTV2LTRoMnYtNWgtMnYtNWgydi01aC0ydi00aDUiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTIuOCwxMWwzLDN2MTdsLTMsMyIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNS44LDE0aDEyLjV2MTdIMTUuOCIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yOC4zLDE0bDIuNS0xLjV2MjBMMjguMywzMSIvPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMi44LDM0VjExIi8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMy4xLDIyLjUgMzguMywzOS44IDM4LjMsNS4zICIvPjxyZWN0IHg9IjQuNiIgeT0iMTEiIGNsYXNzPSJzdDYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyMyIvPjwvc3ZnPg==";

    var imgRNW=new Image();
    imgRNW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7ZmlsbDojRkZGRkZGO3N0cm9rZTojOUUwRUMxO3N0cm9rZS13aWR0aDo1O308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05LDM5aDI3di0zSDlWMzl6IE0xMiwzNnYtNGgyMXY0SDEyeiBNMTEsMTRWOWg0djJoNVY5aDV2Mmg1VjloNHY1Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTM0LDE0bC0zLDNIMTRsLTMtMyIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0zMSwxN3YxMi41SDE0VjE3Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTMxLDI5LjVsMS41LDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMSwxNGgyMyIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjIyLjUsNC4zIDUuMywzOS41IDM5LjgsMzkuNSAiLz48cmVjdCB4PSI5IiB5PSI1LjUiIGNsYXNzPSJzdDYiIHdpZHRoPSIyNyIgaGVpZ2h0PSIzNSIvPjwvc3ZnPg==";
    */
    var imgRW, imgKW, imgRB, imgKB, imgPaB, imgPaW, imgBB, imgBW, imgQB, imgQW, imgKiB, imgKiW, imgKNB, imgKNW, imgRNB, imgRNW;

    function LoadCOLSet() {
        imgPaB = new Image();
        imgPaB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Qxe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjg0NTI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjUsOWMtMi4yLDAtNCwxLjgtNCw0YzAsMC45LDAuMywxLjcsMC44LDIuNGMtMiwxLjEtMy4zLDMuMi0zLjMsNS42YzAsMiwwLjksMy44LDIuNCw1Yy0zLDEuMS03LjQsNS42LTcuNCwxMy41aDIzYzAtNy45LTQuNC0xMi40LTcuNC0xMy41YzEuNS0xLjIsMi40LTMsMi40LTVjMC0yLjQtMS4zLTQuNS0zLjMtNS42YzAuNS0wLjcsMC44LTEuNSwwLjgtMi40QzI2LjUsMTAuOCwyNC43LDksMjIuNSw5eiIvPjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzAuMiwzOC44IDI3LDM5LjggMTcuMywxMS44IDIwLjUsMTAuOCAiLz48Y2lyY2xlIGN4PSIxNy4zIiBjeT0iNi41IiByPSIyLjgiLz48L3N2Zz4=";
        imgPaW = new Image();
        imgPaW.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAC8CAMAAAD1lzSZAAABgFBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMEBAQHBwcICAgKCgoODg4TExMUFBQZGRkaGhodHR0mJiYpKSkqKiorKystLS0wMDAxMTEyMjI6Ojo7OztAQEBBQUFNTU1SUlJYWFhZWVlgYGBjY2NpaWlsbGx9fX2Hh4eLi4uOjo6SkpKYmJicnJygoKCmpqaoqKipqamqqqqysrK1tbW9vb3ExMTNzc3R0dHU1NTZ2dni4uLk5OTl5eXs7Ozz8/P09PT19fX7+/v8/Pz9/f3+/v7///+8ZappAAAAPnRSTlMAAAIGBwkKCwwNDhESFhkbJCksLS5CQ0hMUVlmbHB0eHyFh6Cjsre7vcDExcfI1N3g4eLk5+rx8/X4+fz9/k1u7FwAAAIfSURBVHgB7d3HkxJBFIDxdoOuurpgxhwUA2YQA9oo5pyzYsYgillBsf91q+zpmZ6COVge9nXV9x3fXH6Hqa6edxk1I+DAgwf/76lUOjOVCnzYePDgwYM3cdOPBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw/+Ssj4JyHjvwSMv2kCxI8XLbST2H86/DLh+OUHrbNlkn44/N5Jyfix7RHzqfH6rl1bZ8vFT1WtsfHa+H2tx/qdi6TiCzUrPN0xqX7f0XG1TXmJ+LmlyHfG2r2+3dJelZUTwvDzi8526bMZqPf4lM8/vG3JiBx8bncMe9Q3w+q+vH3C91dXjQrBz0lQ516ZjLovrvn6HeNC8KOVBHW5naX/+MCz7xoT89qUPNb1d1n6Zw3tOrJAicFv1F5X32Tg31/QrjVKDn4kv2F/oj92o/1rGL6po/YslHbOT67dl/jPvx2g9+66G05O5PVgYkXZ6esP+ybdffvg0FK5t8p5mx2/mbY/t9PyLNEfI1si/MmU/dPRv8MDM5Vo/PoIf9y398/aE3Kxko0vRPiGj79nZ6uVcPxUhK979pYdrQtx6WQuBrwx+8C6Dzx48ODBZwcePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw8ePHjw4MGDBw+e/8OCBw8ePHipgf//wIMHD/4P9f6sp10aRgcAAAAASUVORK5CYII=";
        imgBB = new Image();
        imgBB.src = "data:image/png;base64,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";
        imgBW = new Image();
        imgBW.src = "data:image/png;base64,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";
        imgQB = new Image();
        imgQB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTt9LnN0MntkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDR7ZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojRUNFQ0VDO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC40MzI0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2Rpc3BsYXk6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zNDkzO3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojMDBGOUZGO3N0cm9rZS13aWR0aDoxLjk0NzQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDh7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PGcgY2xhc3M9InN0MSI+PGNpcmNsZSBjeD0iNiIgY3k9IjEyIiByPSIyLjgiLz48Y2lyY2xlIGN4PSIxNCIgY3k9IjkiIHI9IjIuOCIvPjxjaXJjbGUgY3g9IjIyLjUiIGN5PSI4IiByPSIyLjgiLz48Y2lyY2xlIGN4PSIzMSIgY3k9IjkiIHI9IjIuOCIvPjxjaXJjbGUgY3g9IjM5IiBjeT0iMTIiIHI9IjIuOCIvPjwvZz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNOSwyNmM4LjUtMS41LDIxLTEuNSwyNywwbDIuNS0xMi41TDMxLDI1bC0wLjMtMTQuMWwtNS4yLDEzLjZsLTMtMTQuNWwtMywxNC41bC01LjItMTMuNkwxNCwyNUw2LjUsMTMuNUw5LDI2eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05LDI2YzAsMiwxLjUsMiwyLjUsNGMxLDEuNSwxLDEsMC41LDMuNWMtMS41LDEtMS41LDIuNS0xLjUsMi41QzksMzcuNSwxMSwzOC41LDExLDM4LjVjNi41LDEsMTYuNSwxLDIzLDBjMCwwLDEuNS0xLDAtMi41YzAsMCwwLjUtMS41LTEtMi41Yy0wLjUtMi41LTAuNS0yLDAuNS0zLjVjMS0yLDIuNS0yLDIuNS00QzI3LjUsMjQuNSwxNy41LDI0LjUsOSwyNnoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTEsMzguNWM3LjQsMi42LDE1LjYsMi42LDIzLDAiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTEsMjljNy40LTIuNiwxNS42LTIuNiwyMywwIE0xMi41LDMxLjVoMjAgTTExLjUsMzQuNWM3LjEsMi40LDE0LjksMi40LDIyLDAgTTEwLjUsMzcuNWM3LjcsMi44LDE2LjMsMi44LDI0LDAiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyMi41LDQuMyA1LjMsMzkuNSAzOS44LDM5LjUgIi8+PHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIzNCwzOS41IDIyLjUsMzMuNiAxMC45LDM5LjUgMTMuMiwyNi45IDMuOSwxOCAxNi43LDE2LjIgMjIuNSw0LjggMjguMywxNi4yIDQxLjIsMTguMSAzMS44LDI2LjkgIi8+PHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxOS44LDQyLjggMTUsMzAuNyAyLjQsMjcuNyAxMi4zLDE5LjYgMTEuMSw2LjggMjIsMTMuOSAzMy45LDkgMzAuNywyMS40IDM5LjMsMzEuMyAyNi40LDMxLjkgIi8+PHBvbHlnb24gY2xhc3M9InN0NyIgcG9pbnRzPSIzNC4zLDM3LjEgMjUuOCwzMS4xIDIyLjksNDAuNyAxOS44LDMxLjEgMTEuNSwzNy4zIDE0LjksMjcuNyA0LjQsMjguMSAxMy4xLDIyLjMgNC4zLDE2LjYgMTQuOCwxNi44IDExLjIsNy40IDE5LjcsMTMuNCAyMi42LDMuNyAyNS43LDEzLjQgMzQsNy4yIDMwLjYsMTYuNyA0MS4xLDE2LjQgMzIuNCwyMi4yIDQxLjMsMjcuOCAzMC43LDI3LjcgIi8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iMS45IiBjeT0iMTYiIHI9IjAuOSIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjQzLjQiIGN5PSIyOC41IiByPSIwLjkiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSIzNS45IiBjeT0iMzkuMSIgcj0iMC45Ii8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iNDMuMSIgY3k9IjE1LjciIHI9IjAuOSIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjM1LjkiIGN5PSI0LjYiIHI9IjAuOSIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjIyLjkiIGN5PSI0My4zIiByPSIwLjkiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSI5LjgiIGN5PSIzOS42IiByPSIwLjkiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSIxLjkiIGN5PSIyOSIgcj0iMC45Ii8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iMjIuNyIgY3k9IjEuOSIgcj0iMC45Ii8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iOS41IiBjeT0iNS41IiByPSIwLjkiLz48L3N2Zz4=";
        imgQW = new Image();
        imgQW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0NHtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDVBNUU7c3Ryb2tlLXdpZHRoOjEuNDE5ODtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMEUxRkY7c3Ryb2tlLXdpZHRoOjIuMzc2O3N0cm9rZS1taXRlcmxpbWl0OjEwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04LDEyYzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlM4LDEwLjksOCwxMnogTTI0LjUsNy41YzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlMyNC41LDYuNCwyNC41LDcuNXogTTQxLDEyYzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlM0MSwxMC45LDQxLDEyeiBNMTYsOC41YzAsMS4xLTAuOSwyLTIsMnMtMi0wLjktMi0yczAuOS0yLDItMlMxNiw3LjQsMTYsOC41eiBNMzMsOWMwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMnMwLjktMiwyLTJDMzIuMSw3LDMzLDcuOSwzMyw5eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05LDI2YzguNS0xLjUsMjEtMS41LDI3LDBsMi0xMmwtNywxMVYxMWwtNS41LDEzLjVsLTMtMTVsLTMsMTVsLTUuNS0xNFYyNUw3LDE0TDksMjZ6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTksMjZjMCwyLDEuNSwyLDIuNSw0YzEsMS41LDEsMSwwLjUsMy41Yy0xLjUsMS0xLjUsMi41LTEuNSwyLjVDOSwzNy41LDExLDM4LjUsMTEsMzguNWM2LjUsMSwxNi41LDEsMjMsMGMwLDAsMS41LTEsMC0yLjVjMCwwLDAuNS0xLjUtMS0yLjVjLTAuNS0yLjUtMC41LTIsMC41LTMuNWMxLTIsMi41LTIsMi41LTRDMjcuNSwyNC41LDE3LjUsMjQuNSw5LDI2eiIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMS41LDMwYzMuNS0xLDE4LjUtMSwyMiwwIE0xMiwzMy41YzYtMSwxNS0xLDIxLDAiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIzNC45LDM3LjkgMjYsMzEuNSAyMi45LDQxLjcgMTkuNiwzMS41IDEwLjksMzguMiAxNC41LDI4LjEgMy4zLDI4LjUgMTIuNSwyMi4zIDMuMywxNi40IDE0LjQsMTYuNiAxMC42LDYuNiAxOS41LDEzIDIyLjYsMi43IDI1LjksMTMgMzQuNiw2LjQgMzEsMTYuNCA0Mi4yLDE2LjEgMzMsMjIuMiA0Mi4zLDI4LjEgMzEuMSwyNy45ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjkuNiwzMS4xIDI0LjYsMjcuNSAyMi45LDMzLjIgMjEsMjcuNSAxNi4xLDMxLjIgMTguMSwyNS41IDExLjgsMjUuNyAxNywyMi4zIDExLjgsMTguOSAxOC4xLDE5LjEgMTUuOSwxMy40IDIwLjksMTcgMjIuNywxMS4yIDI0LjUsMTcgMjkuNSwxMy4zIDI3LjQsMTguOSAzMy43LDE4LjcgMjguNSwyMi4yIDMzLjgsMjUuNSAyNy41LDI1LjQgIi8+PC9zdmc+";
        imgKiB = new Image();
        imgKiB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTt9LnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDR7ZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNzM2ODtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NntzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjIuNSwxMS42VjYgTTIwLDhoNSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMi41LDI1YzAsMCw0LjUtNy41LDMtMTAuNWMwLDAtMS0yLjUtMy0yLjVzLTMsMi41LTMsMi41QzE4LDE3LjUsMjIuNSwyNSwyMi41LDI1Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTExLjUsMzdjNS41LDMuNSwxNS41LDMuNSwyMSwwdi03YzAsMCw5LTQuNSw2LTEwLjVjLTQtNi41LTEzLjUtMy41LTE2LDRWMjd2LTMuNWMtMy41LTcuNS0xMy0xMC41LTE2LTRjLTMsNiw1LDEwLDUsMTBWMzd6Ii8+PHBhdGggY2xhc3M9InN0NCIgZD0iTTExLjUsMzBjNS41LTMsMTUuNS0zLDIxLDAgTTExLjUsMzMuNWM1LjUtMywxNS41LTMsMjEsMCBNMTEuNSwzN2M1LjUtMywxNS41LTMsMjEsMCIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjMzLDM1LjUgMjUuNSwzMC4xIDIyLjksMzguNyAyMC4xLDMwLjEgMTIuNywzNS43IDE1LjgsMjcuMiA2LjMsMjcuNSAxNC4xLDIyLjMgNi4zLDE3LjMgMTUuNywxNy41IDEyLjUsOSAyMCwxNC40IDIyLjYsNS43IDI1LjQsMTQuNCAzMi44LDguOCAyOS43LDE3LjMgMzkuMiwxNyAzMS40LDIyLjIgMzkuMywyNy4yIDI5LjgsMjcgIi8+PGNpcmNsZSBjbGFzcz0ic3Q2IiBjeD0iMjIuOCIgY3k9IjIyLjIiIHI9IjE3LjMiLz48cmVjdCB4PSI3LjQiIHk9IjEwLjMiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzMxNyAwLjY4MTcgLTAuNjgxNyAwLjczMTcgMTAuODg5MyAtNC44MDY5KSIgd2lkdGg9IjguNCIgaGVpZ2h0PSIyLjMiLz48cmVjdCB4PSI3LjkiIHk9IjMyLjUiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjgxNyAtMC43MzE3IDAuNzMxNyAwLjY4MTcgLTIwLjczIDE5LjUxNTIpIiB3aWR0aD0iOC40IiBoZWlnaHQ9IjIuMyIvPjxyZWN0IHg9IjI5LjQiIHk9IjkuNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC42ODE3IC0wLjczMTcgMC43MzE3IDAuNjgxNyAzLjAwNzkgMjcuOTAzNykiIHdpZHRoPSI4LjQiIGhlaWdodD0iMi4zIi8+PHJlY3QgeD0iMjkuOSIgeT0iMzIuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzE3IDAuNjgxNyAtMC42ODE3IDAuNzMxNyAzMi4wMzMyIC0xNC4yMTA3KSIgd2lkdGg9IjguNCIgaGVpZ2h0PSIyLjMiLz48L3N2Zz4=";
        imgKiW = new Image();
        imgKiW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTt9LnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDR7ZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNzM2ODtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NntmaWxsOiNGRkZGRkY7c3Ryb2tlOiM0RjRGNEY7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLjUsMTEuNlY2IE0yMCw4aDUiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjIuNSwyNWMwLDAsNC41LTcuNSwzLTEwLjVjMCwwLTEtMi41LTMtMi41cy0zLDIuNS0zLDIuNUMxOCwxNy41LDIyLjUsMjUsMjIuNSwyNSIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMS41LDM3YzUuNSwzLjUsMTUuNSwzLjUsMjEsMHYtN2MwLDAsOS00LjUsNi0xMC41Yy00LTYuNS0xMy41LTMuNS0xNiw0VjI3di0zLjVjLTMuNS03LjUtMTMtMTAuNS0xNi00Yy0zLDYsNSwxMCw1LDEwVjM3eiIvPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMS41LDMwYzUuNS0zLDE1LjUtMywyMSwwIE0xMS41LDMzLjVjNS41LTMsMTUuNS0zLDIxLDAgTTExLjUsMzdjNS41LTMsMTUuNS0zLDIxLDAiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIzMywzNS41IDI1LjUsMzAuMSAyMi45LDM4LjcgMjAuMSwzMC4xIDEyLjcsMzUuNyAxNS44LDI3LjIgNi4zLDI3LjUgMTQuMSwyMi4zIDYuMywxNy4zIDE1LjcsMTcuNSAxMi41LDkgMjAsMTQuNCAyMi42LDUuNyAyNS40LDE0LjQgMzIuOCw4LjggMjkuNywxNy4zIDM5LjIsMTcgMzEuNCwyMi4yIDM5LjMsMjcuMiAyOS44LDI3ICIvPjxjaXJjbGUgY2xhc3M9InN0NiIgY3g9IjIyLjgiIGN5PSIyMi4yIiByPSIxNy4zIi8+PC9zdmc+";
        imgKNB = new Image();
        imgKNB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojM0JBQTAwO3N0cm9rZS13aWR0aDoxLjg3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0OHtkaXNwbGF5Om5vbmU7ZmlsbDojRkYwMDAwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMi40LDM2LjFjLTEwLjUtMS0xNi41LTgtMTYtMjloMjNjMCw5LTEwLDYuNS04LDIxIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIwLjQsMjguMWMtMC40LTIuOSw1LjUtNy40LDgtOWMzLTIsMi44LTQuMyw1LTRjMSwwLjktMS40LDMsMCwzYzEsMC0wLjItMS4yLDEtMmMxLDAsNC0xLDQsNGMwLDItNiwxMi02LDEycy0xLjksMS45LTIsMy41YzAuNywxLDAuNSwyLDAuNSwzYy0xLDEtMy0yLjUtMy0yLjVoLTJjMCwwLTAuOCwyLTIuNSwzYy0xLDAtMS0zLTEtMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNC44LDIwLjZjMC0wLjMsMC4yLTAuNSwwLjUtMC41YzAuMywwLDAuNSwwLjIsMC41LDAuNXMtMC4yLDAuNS0wLjUsMC41QzM1LDIxLjEsMzQuOCwyMC45LDM0LjgsMjAuNnogTTI5LjUsMzAuNGMwLjQtMC43LDAuOS0xLjIsMS4yLTEuMWMwLjIsMC4xLDAuMSwwLjgtMC4zLDEuNWwwLDBjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xQzI4LjksMzEuOCwyOSwzMS4xLDI5LjUsMzAuNEwyOS41LDMwLjR6Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTE5LjksMzUuN2wwLjUtMS40bC0wLjUtMC4xYy0zLjEtMS01LjYtMi41LTcuOS02LjhTOC42LDE3LjEsOS4xLDcuMlY2LjdINi44djAuNUM2LjMsMTcuMyw3LjgsMjQsMTAuMSwyOC41czUuOCw2LjYsOS4yLDcuMkMxOS4zLDM1LjYsMTkuOCwzNS43LDE5LjksMzUuN3oiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIzNy4yLDM3LjIgNS44LDM3LjIgNS44LDUuNyAyMi4zLDUuNyAyMi4zLDIyLjEgMzcuMiwyMi4xICIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMTguNSw0LjkgNi4xLDQuOSA2LjEsNDAuOSA0MC4yLDQwLjkgNDAuMiwyNS4xIDM0LDI1LjEgMzQsMzAuNSAyMC44LDMwLjUgMjAuOCw0LjkgIi8+PHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxOC41LDYuMSA2LjEsNi4xIDYuMSw0MC4xIDQwLjEsNDAuMSA0MC4xLDI1LjIgMzQsMjUuMiAzNCwzMC4zIDIwLjgsMzAuMyAyMC44LDYuMSAiLz48cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9IjM4LjksMzguOCAzOC45LDI2LjYgMzUuMywyNi42IDM1LjMsMzEuNCAxOS40LDMxLjQgMTkuNCw3LjMgNy4yLDcuMyA3LjIsMzcuMiA3LjIsMzguOCAiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSI4LjQiIGN5PSIxMS42IiByPSI4LjUiLz48L3N2Zz4=";
        imgKNW = new Image();
        imgKNW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMzMUE4MDA7c3Ryb2tlLXdpZHRoOjMuMjA3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NntkaXNwbGF5Om5vbmU7ZmlsbDojRkYwMDAwO30uc3Q3e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q4e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzNCQUEwMDtzdHJva2Utd2lkdGg6MS44NzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLDEwYzEwLjUsMSwxNi41LDgsMTYsMjlIMTVjMC05LDEwLTYuNSw4LTIxIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTI0LDE4YzAuNCwyLjktNS41LDcuNC04LDljLTMsMi0yLjgsNC4zLTUsNGMtMS0wLjksMS40LTMsMC0zYy0xLDAsMC4yLDEuMi0xLDJjLTEsMC00LDEtNC00YzAtMiw2LTEyLDYtMTJzMS45LTEuOSwyLTMuNWMtMC43LTEtMC41LTItMC41LTNjMS0xLDMsMi41LDMsMi41aDJjMCwwLDAuOC0yLDIuNS0zYzEsMCwxLDMsMSwzIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTkuNSwyNS41QzkuNSwyNS44LDkuMywyNiw5LDI2cy0wLjUtMC4yLTAuNS0wLjVTOC43LDI1LDksMjVTOS41LDI1LjIsOS41LDI1LjV6IE0xNC45LDE1LjdjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xYy0wLjItMC4xLTAuMS0wLjgsMC4zLTEuNWwwLDBjMC40LTAuNywwLjktMS4yLDEuMi0xLjFDMTUuNSwxNC4zLDE1LjQsMTUsMTQuOSwxNS43TDE0LjksMTUuN3oiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjQuNSwxMC40TDI0LDExLjhsMC41LDAuMWMzLjEsMSw1LjYsMi41LDcuOSw2LjhzMy4zLDEwLjMsMi44LDIwLjJ2MC41aDIuM3YtMC41YzAuNS0xMC4xLTAuOS0xNi44LTMuMy0yMS4zUzI4LjQsMTEsMjUsMTAuNEMyNS4xLDEwLjUsMjQuNiwxMC40LDI0LjUsMTAuNHoiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSI3LjIsOC45IDM4LjUsOC45IDM4LjUsNDAuNCAyMi4xLDQwLjQgMjIuMSwyNCA3LjIsMjQgIi8+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyNS45LDQxLjIgMzguMiw0MS4yIDM4LjIsNS4yIDQuMiw1LjIgNC4yLDIxIDEwLjMsMjEgMTAuMywxNS42IDIzLjYsMTUuNiAyMy42LDQxLjIgIi8+PGNpcmNsZSBjbGFzcz0ic3Q2IiBjeD0iMzQuMSIgY3k9IjMxLjUiIHI9IjguNCIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMjUuOSw0MCAzOC4yLDQwIDM4LjIsNiA0LjIsNiA0LjIsMjAuOSAxMC4zLDIwLjkgMTAuMywxNS44IDIzLjYsMTUuOCAyMy42LDQwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDgiIHBvaW50cz0iNS40LDcuMyA1LjQsMTkuNSA5LjEsMTkuNSA5LjEsMTQuNyAyNC45LDE0LjcgMjQuOSwzOC44IDM3LjIsMzguOCAzNy4yLDguOSAzNy4yLDcuMyAiLz48L3N2Zz4=";
        imgRNB = new Image();
        imgRNB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7c3Ryb2tlOiNDRDAwRkY7c3Ryb2tlLXdpZHRoOjIuMTE4O308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNy44LDM2VjloLTN2MjdIMzcuOHogTTM0LjgsMzNoLTRWMTJoNFYzM3ogTTEyLjgsMzRoLTV2LTRoMnYtNWgtMnYtNWgydi01aC0ydi00aDUiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTIuOCwxMWwzLDN2MTdsLTMsMyIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNS44LDE0aDEyLjV2MTdIMTUuOCIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yOC4zLDE0bDIuNS0xLjV2MjBMMjguMywzMSIvPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMi44LDM0VjExIi8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMy4xLDIyLjUgMzguMywzOS44IDM4LjMsNS4zICIvPjxyZWN0IHg9IjQuNiIgeT0iMTEiIGNsYXNzPSJzdDYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyMyIvPjwvc3ZnPg==";
        imgRNW = new Image();
        imgRNW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7ZmlsbDojRkZGRkZGO3N0cm9rZTojOUUwRUMxO3N0cm9rZS13aWR0aDo1O308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05LDM5aDI3di0zSDlWMzl6IE0xMiwzNnYtNGgyMXY0SDEyeiBNMTEsMTRWOWg0djJoNVY5aDV2Mmg1VjloNHY1Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTM0LDE0bC0zLDNIMTRsLTMtMyIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0zMSwxN3YxMi41SDE0VjE3Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTMxLDI5LjVsMS41LDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMSwxNGgyMyIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjIyLjUsNC4zIDUuMywzOS41IDM5LjgsMzkuNSAiLz48cmVjdCB4PSI5IiB5PSI1LjUiIGNsYXNzPSJzdDYiIHdpZHRoPSIyNyIgaGVpZ2h0PSIzNSIvPjwvc3ZnPg==";
        if (keyORnot == 1) {
            /*imgRW=new Image();
            imgRW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7ZmlsbDojRkZGRkZGO3N0cm9rZTojOUUwRUMxO3N0cm9rZS13aWR0aDo1O30uc3Q3e2ZpbGw6I0ZGMDAwMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzOWgyN3YtM0g5VjM5eiBNMTIsMzZ2LTRoMjF2NEgxMnogTTExLDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNCwxNGwtMywzSDE0bC0zLTMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMzEsMTd2MTIuNUgxNFYxNyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMSwyOS41bDEuNSwyLjVoLTIwbDEuNS0yLjUiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTEsMTRoMjMiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyMi41LDQuMyA1LjMsMzkuNSAzOS44LDM5LjUgIi8+PHJlY3QgeD0iOSIgeT0iNS41IiBjbGFzcz0ic3Q2IiB3aWR0aD0iMjciIGhlaWdodD0iMzUiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNiIgY3k9IjM0LjUiIHI9IjguNSIvPjwvc3ZnPg==";

            imgKW=new Image();
            imgKW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzNCQUEwMDtzdHJva2Utd2lkdGg6MS44NzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDh7ZmlsbDojRkYwMDAwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMiwxMGMxMC41LDEsMTYuNSw4LDE2LDI5SDE1YzAtOSwxMC02LjUsOC0yMSIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNCwxOGMwLjQsMi45LTUuNSw3LjQtOCw5Yy0zLDItMi44LDQuMy01LDRjLTEtMC45LDEuNC0zLDAtM2MtMSwwLDAuMiwxLjItMSwyYy0xLDAtNCwxLTQtNGMwLTIsNi0xMiw2LTEyczEuOS0xLjksMi0zLjVjLTAuNy0xLTAuNS0yLTAuNS0zYzEtMSwzLDIuNSwzLDIuNWgyYzAsMCwwLjgtMiwyLjUtM2MxLDAsMSwzLDEsMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05LjUsMjUuNUM5LjUsMjUuOCw5LjMsMjYsOSwyNnMtMC41LTAuMi0wLjUtMC41UzguNywyNSw5LDI1UzkuNSwyNS4yLDkuNSwyNS41eiBNMTQuOSwxNS43Yy0wLjQsMC43LTAuOSwxLjItMS4yLDEuMWMtMC4yLTAuMS0wLjEtMC44LDAuMy0xLjVsMCwwYzAuNC0wLjcsMC45LTEuMiwxLjItMS4xQzE1LjUsMTQuMywxNS40LDE1LDE0LjksMTUuN0wxNC45LDE1Ljd6Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTI0LjUsMTAuNEwyNCwxMS44bDAuNSwwLjFjMy4xLDEsNS42LDIuNSw3LjksNi44czMuMywxMC4zLDIuOCwyMC4ydjAuNWgyLjN2LTAuNWMwLjUtMTAuMS0wLjktMTYuOC0zLjMtMjEuM1MyOC40LDExLDI1LDEwLjRDMjUuMSwxMC41LDI0LjYsMTAuNCwyNC41LDEwLjR6Ii8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iNy4yLDguOSAzOC41LDguOSAzOC41LDQwLjQgMjIuMSw0MC40IDIyLjEsMjQgNy4yLDI0ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjUuOSw0MS4yIDM4LjIsNDEuMiAzOC4yLDUuMiA0LjIsNS4yIDQuMiwyMSAxMC4zLDIxIDEwLjMsMTUuNiAyMy42LDE1LjYgMjMuNiw0MS4yICIvPjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMjUuOSw0MCAzOC4yLDQwIDM4LjIsNiA0LjIsNiA0LjIsMjAuOSAxMC4zLDIwLjkgMTAuMywxNS44IDIzLjYsMTUuOCAyMy42LDQwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iNS40LDcuMyA1LjQsMTkuNSA5LjEsMTkuNSA5LjEsMTQuNyAyNC45LDE0LjcgMjQuOSwzOC44IDM3LjIsMzguOCAzNy4yLDguOSAzNy4yLDcuMyAiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSIzNiIgY3k9IjM0LjUiIHI9IjguNSIvPjwvc3ZnPg==";

            imgRB=new Image();
            imgRB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7c3Ryb2tlOiNDRDAwRkY7c3Ryb2tlLXdpZHRoOjIuMTE4O30uc3Q3e2ZpbGw6I0ZGMDAwMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzcuOCwzNlY5aC0zdjI3SDM3Ljh6IE0zNC44LDMzaC00VjEyaDRWMzN6IE0xMi44LDM0aC01di00aDJ2LTVoLTJ2LTVoMnYtNWgtMnYtNGg1Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTEyLjgsMTFsMywzdjE3bC0zLDMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTUuOCwxNGgxMi41djE3SDE1LjgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjguMywxNGwyLjUtMS41djIwTDI4LjMsMzEiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTIuOCwzNFYxMSIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjMuMSwyMi41IDM4LjMsMzkuOCAzOC4zLDUuMyAiLz48cmVjdCB4PSI0LjYiIHk9IjExIiBjbGFzcz0ic3Q2IiB3aWR0aD0iMzYiIGhlaWdodD0iMjMiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNi41IiBjeT0iMzYuNSIgcj0iOC41Ii8+PC9zdmc+";

            imgKB=new Image();
            imgKB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojM0JBQTAwO3N0cm9rZS13aWR0aDoxLjg3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0OHtmaWxsOiNGRjAwMDA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLjQsMzYuMWMtMTAuNS0xLTE2LjUtOC0xNi0yOWgyM2MwLDktMTAsNi41LTgsMjEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjAuNCwyOC4xYy0wLjQtMi45LDUuNS03LjQsOC05YzMtMiwyLjgtNC4zLDUtNGMxLDAuOS0xLjQsMywwLDNjMSwwLTAuMi0xLjIsMS0yYzEsMCw0LTEsNCw0YzAsMi02LDEyLTYsMTJzLTEuOSwxLjktMiwzLjVjMC43LDEsMC41LDIsMC41LDNjLTEsMS0zLTIuNS0zLTIuNWgtMmMwLDAtMC44LDItMi41LDNjLTEsMC0xLTMtMS0zIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTM0LjgsMjAuNmMwLTAuMywwLjItMC41LDAuNS0wLjVjMC4zLDAsMC41LDAuMiwwLjUsMC41cy0wLjIsMC41LTAuNSwwLjVDMzUsMjEuMSwzNC44LDIwLjksMzQuOCwyMC42eiBNMjkuNSwzMC40YzAuNC0wLjcsMC45LTEuMiwxLjItMS4xYzAuMiwwLjEsMC4xLDAuOC0wLjMsMS41bDAsMGMtMC40LDAuNy0wLjksMS4yLTEuMiwxLjFDMjguOSwzMS44LDI5LDMxLjEsMjkuNSwzMC40TDI5LjUsMzAuNHoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTkuOSwzNS43bDAuNS0xLjRsLTAuNS0wLjFjLTMuMS0xLTUuNi0yLjUtNy45LTYuOFM4LjYsMTcuMSw5LjEsNy4yVjYuN0g2Ljh2MC41QzYuMywxNy4zLDcuOCwyNCwxMC4xLDI4LjVzNS44LDYuNiw5LjIsNy4yQzE5LjMsMzUuNiwxOS44LDM1LjcsMTkuOSwzNS43eiIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjM3LjIsMzcuMiA1LjgsMzcuMiA1LjgsNS43IDIyLjMsNS43IDIyLjMsMjIuMSAzNy4yLDIyLjEgIi8+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIxOC41LDQuOSA2LjEsNC45IDYuMSw0MC45IDQwLjIsNDAuOSA0MC4yLDI1LjEgMzQsMjUuMSAzNCwzMC41IDIwLjgsMzAuNSAyMC44LDQuOSAiLz48cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjE4LjUsNi4xIDYuMSw2LjEgNi4xLDQwLjEgNDAuMSw0MC4xIDQwLjEsMjUuMiAzNCwyNS4yIDM0LDMwLjMgMjAuOCwzMC4zIDIwLjgsNi4xICIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMzguOSwzOC44IDM4LjksMjYuNiAzNS4zLDI2LjYgMzUuMywzMS40IDE5LjQsMzEuNCAxOS40LDcuMyA3LjIsNy4zIDcuMiwzNy4yIDcuMiwzOC44ICIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjM2LjUiIGN5PSIzNi41IiByPSI4LjUiLz48L3N2Zz4=";
            */
            imgRW = new Image();
            imgRW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7ZmlsbDojRkZGRkZGO3N0cm9rZTojOUUwRUMxO3N0cm9rZS13aWR0aDo1O30uc3Q3e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRjAwMDA7fS5zdDh7ZmlsbDojRkYwMDAwO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05LDM5aDI3di0zSDlWMzl6IE0xMiwzNnYtNGgyMXY0SDEyeiBNMTEsMTRWOWg0djJoNVY5aDV2Mmg1VjloNHY1Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTM0LDE0bC0zLDNIMTRsLTMtMyIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0zMSwxN3YxMi41SDE0VjE3Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTMxLDI5LjVsMS41LDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMSwxNGgyMyIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjIyLjUsNC4zIDUuMywzOS41IDM5LjgsMzkuNSAiLz48cmVjdCB4PSI5IiB5PSI1LjUiIGNsYXNzPSJzdDYiIHdpZHRoPSIyNyIgaGVpZ2h0PSIzNSIvPjxjaXJjbGUgY2xhc3M9InN0NyIgY3g9IjM2IiBjeT0iMzQuNSIgcj0iOC41Ii8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iMzYiIGN5PSIzNiIgcj0iOC41Ii8+PC9zdmc+";
            imgKW = new Image();
            imgKW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzNCQUEwMDtzdHJva2Utd2lkdGg6MS44NzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDh7ZGlzcGxheTpub25lO2ZpbGw6I0ZGMDAwMDt9LnN0OXtmaWxsOiNGRjAwMDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLDEwYzEwLjUsMSwxNi41LDgsMTYsMjlIMTVjMC05LDEwLTYuNSw4LTIxIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTI0LDE4YzAuNCwyLjktNS41LDcuNC04LDljLTMsMi0yLjgsNC4zLTUsNGMtMS0wLjksMS40LTMsMC0zYy0xLDAsMC4yLDEuMi0xLDJjLTEsMC00LDEtNC00YzAtMiw2LTEyLDYtMTJzMS45LTEuOSwyLTMuNWMtMC43LTEtMC41LTItMC41LTNjMS0xLDMsMi41LDMsMi41aDJjMCwwLDAuOC0yLDIuNS0zYzEsMCwxLDMsMSwzIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTkuNSwyNS41QzkuNSwyNS44LDkuMywyNiw5LDI2cy0wLjUtMC4yLTAuNS0wLjVTOC43LDI1LDksMjVTOS41LDI1LjIsOS41LDI1LjV6IE0xNC45LDE1LjdjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xYy0wLjItMC4xLTAuMS0wLjgsMC4zLTEuNWwwLDBjMC40LTAuNywwLjktMS4yLDEuMi0xLjFDMTUuNSwxNC4zLDE1LjQsMTUsMTQuOSwxNS43TDE0LjksMTUuN3oiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjQuNSwxMC40TDI0LDExLjhsMC41LDAuMWMzLjEsMSw1LjYsMi41LDcuOSw2LjhzMy4zLDEwLjMsMi44LDIwLjJ2MC41aDIuM3YtMC41YzAuNS0xMC4xLTAuOS0xNi44LTMuMy0yMS4zUzI4LjQsMTEsMjUsMTAuNEMyNS4xLDEwLjUsMjQuNiwxMC40LDI0LjUsMTAuNHoiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSI3LjIsOC45IDM4LjUsOC45IDM4LjUsNDAuNCAyMi4xLDQwLjQgMjIuMSwyNCA3LjIsMjQgIi8+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyNS45LDQxLjIgMzguMiw0MS4yIDM4LjIsNS4yIDQuMiw1LjIgNC4yLDIxIDEwLjMsMjEgMTAuMywxNS42IDIzLjYsMTUuNiAyMy42LDQxLjIgIi8+PHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIyNS45LDQwIDM4LjIsNDAgMzguMiw2IDQuMiw2IDQuMiwyMC45IDEwLjMsMjAuOSAxMC4zLDE1LjggMjMuNiwxNS44IDIzLjYsNDAgIi8+PHBvbHlnb24gY2xhc3M9InN0NyIgcG9pbnRzPSI1LjQsNy4zIDUuNCwxOS41IDkuMSwxOS41IDkuMSwxNC43IDI0LjksMTQuNyAyNC45LDM4LjggMzcuMiwzOC44IDM3LjIsOC45IDM3LjIsNy4zICIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjM2IiBjeT0iMzQuNSIgcj0iOC41Ii8+PGNpcmNsZSBjbGFzcz0ic3Q5IiBjeD0iMzYiIGN5PSIzNiIgcj0iOC41Ii8+PC9zdmc+";
            imgRB = new Image();
            imgRB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7c3Ryb2tlOiNDRDAwRkY7c3Ryb2tlLXdpZHRoOjIuMTE4O30uc3Q3e2ZpbGw6I0ZGMDAwMDtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzcuOCwzNlY5aC0zdjI3SDM3Ljh6IE0zNC44LDMzaC00VjEyaDRWMzN6IE0xMi44LDM0aC01di00aDJ2LTVoLTJ2LTVoMnYtNWgtMnYtNGg1Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTEyLjgsMTFsMywzdjE3bC0zLDMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTUuOCwxNGgxMi41djE3SDE1LjgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjguMywxNGwyLjUtMS41djIwTDI4LjMsMzEiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTIuOCwzNFYxMSIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjMuMSwyMi41IDM4LjMsMzkuOCAzOC4zLDUuMyAiLz48cmVjdCB4PSI0LjYiIHk9IjExIiBjbGFzcz0ic3Q2IiB3aWR0aD0iMzYiIGhlaWdodD0iMjMiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNiIgY3k9IjM2IiByPSI4LjUiLz48L3N2Zz4=";
            imgKB = new Image();
            imgKB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojM0JBQTAwO3N0cm9rZS13aWR0aDoxLjg3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0OHtkaXNwbGF5Om5vbmU7ZmlsbDojRkYwMDAwO30uc3Q5e2ZpbGw6I0ZGMDAwMDtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjIuNCwzNi4xYy0xMC41LTEtMTYuNS04LTE2LTI5aDIzYzAsOS0xMCw2LjUtOCwyMSIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMC40LDI4LjFjLTAuNC0yLjksNS41LTcuNCw4LTljMy0yLDIuOC00LjMsNS00YzEsMC45LTEuNCwzLDAsM2MxLDAtMC4yLTEuMiwxLTJjMSwwLDQtMSw0LDRjMCwyLTYsMTItNiwxMnMtMS45LDEuOS0yLDMuNWMwLjcsMSwwLjUsMiwwLjUsM2MtMSwxLTMtMi41LTMtMi41aC0yYzAsMC0wLjgsMi0yLjUsM2MtMSwwLTEtMy0xLTMiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzQuOCwyMC42YzAtMC4zLDAuMi0wLjUsMC41LTAuNXMwLjUsMC4yLDAuNSwwLjVzLTAuMiwwLjUtMC41LDAuNVMzNC44LDIwLjksMzQuOCwyMC42eiBNMjkuNSwzMC40YzAuNC0wLjcsMC45LTEuMiwxLjItMS4xYzAuMiwwLjEsMC4xLDAuOC0wLjMsMS41bDAsMGMtMC40LDAuNy0wLjksMS4yLTEuMiwxLjFTMjksMzEuMSwyOS41LDMwLjRMMjkuNSwzMC40eiIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xOS45LDM1LjdsMC41LTEuNGwtMC41LTAuMWMtMy4xLTEtNS42LTIuNS03LjktNi44UzguNiwxNy4xLDkuMSw3LjJWNi43SDYuOHYwLjVjLTAuNSwxMC4xLDEsMTYuOCwzLjMsMjEuM3M1LjgsNi42LDkuMiw3LjJDMTkuMywzNS42LDE5LjgsMzUuNywxOS45LDM1Ljd6Ii8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iMzcuMiwzNy4yIDUuOCwzNy4yIDUuOCw1LjcgMjIuMyw1LjcgMjIuMywyMi4xIDM3LjIsMjIuMSAiLz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjE4LjUsNC45IDYuMSw0LjkgNi4xLDQwLjkgNDAuMiw0MC45IDQwLjIsMjUuMSAzNCwyNS4xIDM0LDMwLjUgMjAuOCwzMC41IDIwLjgsNC45ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMTguNSw2LjEgNi4xLDYuMSA2LjEsNDAuMSA0MC4xLDQwLjEgNDAuMSwyNS4yIDM0LDI1LjIgMzQsMzAuMyAyMC44LDMwLjMgMjAuOCw2LjEgIi8+PHBvbHlnb24gY2xhc3M9InN0NyIgcG9pbnRzPSIzOC45LDM4LjggMzguOSwyNi42IDM1LjMsMjYuNiAzNS4zLDMxLjQgMTkuNCwzMS40IDE5LjQsNy4zIDcuMiw3LjMgNy4yLDM3LjIgNy4yLDM4LjggIi8+PGNpcmNsZSBjbGFzcz0ic3Q4IiBjeD0iMzYuNSIgY3k9IjM2LjUiIHI9IjguNSIvPjxjaXJjbGUgY2xhc3M9InN0OSIgY3g9IjM2IiBjeT0iMzYiIHI9IjguNSIvPjwvc3ZnPg==";
        } else {
            imgRW = imgRNW;
            imgRB = imgRNB;
            imgKW = imgKNW;
            imgKB = imgKNB;
        }
    }

    function LoadSTSet() {
        /*
var imgRW=new Image();
imgRW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7fS5zdDN7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7fS5zdDR7ZmlsbDojM0VBRjRFO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjE4MjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LDM5aDI3di0zSDlWMzl6IE0xMiwzNnYtNGgyMXY0SDEyeiBNMTEsMTRWOWg0djJoNVY5aDV2Mmg1VjloNHY1Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM0LDE0bC0zLDNIMTRsLTMtMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMSwxN3YxMi41SDE0VjE3Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMxLDI5LjVsMS41LDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMSwxNGgyMyIvPjwvZz48cmVjdCB4PSIyOC44IiB5PSIyOCIgY2xhc3M9InN0NCIgd2lkdGg9IjEzLjgiIGhlaWdodD0iMTMuOCIvPjwvc3ZnPg==";
var imgKW=new Image();
imgKW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntmaWxsOiMzRUFGNEU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMTgyMTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLDEwYzEwLjUsMSwxNi41LDgsMTYsMjlIMTVjMC05LDEwLTYuNSw4LTIxIi8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI0LDE4YzAuNCwyLjktNS41LDcuNC04LDljLTMsMi0yLjgsNC4zLTUsNGMtMS0wLjksMS40LTMsMC0zYy0xLDAsMC4yLDEuMi0xLDJjLTEsMC00LDEtNC00YzAtMiw2LTEyLDYtMTJzMS45LTEuOSwyLTMuNWMtMC43LTEtMC41LTItMC41LTNjMS0xLDMsMi41LDMsMi41aDJjMCwwLDAuOC0yLDIuNS0zYzEsMCwxLDMsMSwzIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTkuNSwyNS41QzkuNSwyNS44LDkuMywyNiw5LDI2cy0wLjUtMC4yLTAuNS0wLjVTOC43LDI1LDksMjVTOS41LDI1LjIsOS41LDI1LjV6IE0xNC45LDE1LjdjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xYy0wLjItMC4xLTAuMS0wLjgsMC4zLTEuNWMwLDAsMCwwLDAsMGMwLjQtMC43LDAuOS0xLjIsMS4yLTEuMUMxNS41LDE0LjMsMTUuNCwxNSwxNC45LDE1LjdDMTQuOSwxNS43LDE0LjksMTUuNywxNC45LDE1Ljd6Ii8+PHJlY3QgeD0iMjguOCIgeT0iMjgiIGNsYXNzPSJzdDIiIHdpZHRoPSIxMy44IiBoZWlnaHQ9IjEzLjgiLz48L2c+PC9zdmc+";
var imgRB=new Image();
imgRB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qxe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7fS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRUNFQ0VDO3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Qze2ZpbGw6IzNFQUY0RTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4xODIxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9PC9zdHlsZT48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNOSwzOWgyN3YtM0g5VjM5eiBNMTIuNSwzMmwxLjUtMi41aDE3bDEuNSwyLjVIMTIuNXogTTEyLDM2di00aDIxdjRIMTJ6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LDI5LjV2LTEzaDE3djEzSDE0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNCwxNi41TDExLDE0aDIzbC0zLDIuNUgxNHogTTExLDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NUgxMXoiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTIsMzUuNWgyMSBNMTMsMzEuNWgxOSBNMTQsMjkuNWgxNyBNMTQsMTYuNWgxNyBNMTEsMTRoMjMiLz48L2c+PHJlY3QgeD0iMjguOCIgeT0iMjgiIGNsYXNzPSJzdDMiIHdpZHRoPSIxMy44IiBoZWlnaHQ9IjEzLjgiLz48L3N2Zz4=";
var imgKB=new Image();
imgKB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qxe2ZpbGw6I0VDRUNFQztzdHJva2U6I0VDRUNFQztzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntmaWxsOiNFQ0VDRUM7fS5zdDN7ZmlsbDojM0VBRjRFO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoxLjE4MjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMiwxMGMxMC41LDEsMTYuNSw4LDE2LDI5SDE1YzAtOSwxMC02LjUsOC0yMSIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNCwxOGMwLjQsMi45LTUuNSw3LjQtOCw5Yy0zLDItMi44LDQuMy01LDRjLTEtMC45LDEuNC0zLDAtM2MtMSwwLDAuMiwxLjItMSwyYy0xLDAtNCwxLTQtNGMwLTIsNi0xMiw2LTEyczEuOS0xLjksMi0zLjVjLTAuNy0xLTAuNS0yLTAuNS0zYzEtMSwzLDIuNSwzLDIuNWgyYzAsMCwwLjgtMiwyLjUtM2MxLDAsMSwzLDEsMyIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05LjUsMjUuNUM5LjUsMjUuOCw5LjMsMjYsOSwyNnMtMC41LTAuMi0wLjUtMC41UzguNywyNSw5LDI1UzkuNSwyNS4yLDkuNSwyNS41eiBNMTQuOSwxNS43Yy0wLjQsMC43LTAuOSwxLjItMS4yLDEuMWMtMC4yLTAuMS0wLjEtMC44LDAuMy0xLjVjMCwwLDAsMCwwLDBjMC40LTAuNywwLjktMS4yLDEuMi0xLjFDMTUuNSwxNC4zLDE1LjQsMTUsMTQuOSwxNS43QzE0LjksMTUuNywxNC45LDE1LjcsMTQuOSwxNS43eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNC41LDEwLjRsLTAuNSwxLjRsMC41LDAuMWMzLjEsMSw1LjYsMi41LDcuOSw2LjhzMy4zLDEwLjMsMi44LDIwLjJsMCwwLjVoMi4zbDAtMC41YzAuNS0xMC4xLTAuOS0xNi44LTMuMy0yMS4zcy01LjgtNi42LTkuMi03LjJDMjUuMSwxMC41LDI0LjYsMTAuNCwyNC41LDEwLjR6Ii8+PC9nPjxyZWN0IHg9IjI4LjgiIHk9IjI4IiBjbGFzcz0ic3QzIiB3aWR0aD0iMTMuOCIgaGVpZ2h0PSIxMy44Ii8+PC9zdmc+";
*/
        imgPaB = new Image();
        imgPaB.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PHBhdGggZD0iTTIyLjUgOWMtMi4yMSAwLTQgMS43OS00IDQgMCAuODkuMjkgMS43MS43OCAyLjM4QzE3LjMzIDE2LjUgMTYgMTguNTkgMTYgMjFjMCAyLjAzLjk0IDMuODQgMi40MSA1LjAzLTMgMS4wNi03LjQxIDUuNTUtNy40MSAxMy40N2gyM2MwLTcuOTItNC40MS0xMi40MS03LjQxLTEzLjQ3IDEuNDctMS4xOSAyLjQxLTMgMi40MS01LjAzIDAtMi40MS0xLjMzLTQuNS0zLjI4LTUuNjIuNDktLjY3Ljc4LTEuNDkuNzgtMi4zOCAwLTIuMjEtMS43OS00LTQtNHoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";
        imgPaW = new Image();
        imgPaW.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PHBhdGggZD0iTTIyLjUgOWMtMi4yMSAwLTQgMS43OS00IDQgMCAuODkuMjkgMS43MS43OCAyLjM4QzE3LjMzIDE2LjUgMTYgMTguNTkgMTYgMjFjMCAyLjAzLjk0IDMuODQgMi40MSA1LjAzLTMgMS4wNi03LjQxIDUuNTUtNy40MSAxMy40N2gyM2MwLTcuOTItNC40MS0xMi40MS03LjQxLTEzLjQ3IDEuNDctMS4xOSAyLjQxLTMgMi40MS01LjAzIDAtMi40MS0xLjMzLTQuNS0zLjI4LTUuNjIuNDktLjY3Ljc4LTEuNDkuNzgtMi4zOCAwLTIuMjEtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";
        imgBB = new Image();
        imgBB.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIGZpbGw9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNOSAzNmMzLjM5LS45NyAxMC4xMS40MyAxMy41LTIgMy4zOSAyLjQzIDEwLjExIDEuMDMgMTMuNSAyIDAgMCAxLjY1LjU0IDMgMi0uNjguOTctMS42NS45OS0zIC41LTMuMzktLjk3LTEwLjExLjQ2LTEzLjUtMS0zLjM5IDEuNDYtMTAuMTEuMDMtMTMuNSAxLTEuMzU0LjQ5LTIuMzIzLjQ3LTMtLjUgMS4zNTQtMS45NCAzLTIgMy0yeiIvPjxwYXRoIGQ9Ik0xNSAzMmMyLjUgMi41IDEyLjUgMi41IDE1IDAgLjUtMS41IDAtMiAwLTIgMC0yLjUtMi41LTQtMi41LTQgNS41LTEuNSA2LTExLjUtNS0xNS41LTExIDQtMTAuNSAxNC01IDE1LjUgMCAwLTIuNSAxLjUtMi41IDQgMCAwLS41LjUgMCAyeiIvPjxwYXRoIGQ9Ik0yNSA4YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAxIDEgNSAweiIvPjwvZz48cGF0aCBkPSJNMTcuNSAyNmgxME0xNSAzMGgxNW0tNy41LTE0LjV2NU0yMCAxOGg1IiBzdHJva2U9IiNlY2VjZWMiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48L2c+PC9zdmc+";
        imgBW = new Image();
        imgBW.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNOSAzNmMzLjM5LS45NyAxMC4xMS40MyAxMy41LTIgMy4zOSAyLjQzIDEwLjExIDEuMDMgMTMuNSAyIDAgMCAxLjY1LjU0IDMgMi0uNjguOTctMS42NS45OS0zIC41LTMuMzktLjk3LTEwLjExLjQ2LTEzLjUtMS0zLjM5IDEuNDYtMTAuMTEuMDMtMTMuNSAxLTEuMzU0LjQ5LTIuMzIzLjQ3LTMtLjUgMS4zNTQtMS45NCAzLTIgMy0yeiIvPjxwYXRoIGQ9Ik0xNSAzMmMyLjUgMi41IDEyLjUgMi41IDE1IDAgLjUtMS41IDAtMiAwLTIgMC0yLjUtMi41LTQtMi41LTQgNS41LTEuNSA2LTExLjUtNS0xNS41LTExIDQtMTAuNSAxNC01IDE1LjUgMCAwLTIuNSAxLjUtMi41IDQgMCAwLS41LjUgMCAyeiIvPjxwYXRoIGQ9Ik0yNSA4YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAxIDEgNSAweiIvPjwvZz48cGF0aCBkPSJNMTcuNSAyNmgxME0xNSAzMGgxNW0tNy41LTE0LjV2NU0yMCAxOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PC9nPjwvc3ZnPg==";
        imgQB = new Image();
        imgQB.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIHN0cm9rZT0ibm9uZSI+PGNpcmNsZSBjeD0iNiIgY3k9IjEyIiByPSIyLjc1Ii8+PGNpcmNsZSBjeD0iMTQiIGN5PSI5IiByPSIyLjc1Ii8+PGNpcmNsZSBjeD0iMjIuNSIgY3k9IjgiIHI9IjIuNzUiLz48Y2lyY2xlIGN4PSIzMSIgY3k9IjkiIHI9IjIuNzUiLz48Y2lyY2xlIGN4PSIzOSIgY3k9IjEyIiByPSIyLjc1Ii8+PC9nPjxwYXRoIGQ9Ik05IDI2YzguNS0xLjUgMjEtMS41IDI3IDBsMi41LTEyLjVMMzEgMjVsLS4zLTE0LjEtNS4yIDEzLjYtMy0xNC41LTMgMTQuNS01LjItMTMuNkwxNCAyNSA2LjUgMTMuNSA5IDI2eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNOSAyNmMwIDIgMS41IDIgMi41IDQgMSAxLjUgMSAxIC41IDMuNS0xLjUgMS0xLjUgMi41LTEuNSAyLjUtMS41IDEuNS41IDIuNS41IDIuNSA2LjUgMSAxNi41IDEgMjMgMCAwIDAgMS41LTEgMC0yLjUgMCAwIC41LTEuNS0xLTIuNS0uNS0yLjUtLjUtMiAuNS0zLjUgMS0yIDIuNS0yIDIuNS00LTguNS0xLjUtMTguNS0xLjUtMjcgMHoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTExIDM4LjVhMzUgMzUgMSAwIDAgMjMgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTEgMjlhMzUgMzUgMSAwIDEgMjMgMG0tMjEuNSAyLjVoMjBtLTIxIDNhMzUgMzUgMSAwIDAgMjIgMG0tMjMgM2EzNSAzNSAxIDAgMCAyNCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlY2VjZWMiLz48L2c+PC9zdmc+";
        imgQW = new Image();
        imgQW.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik04IDEyYTIgMiAwIDEgMS00IDAgMiAyIDAgMSAxIDQgMHptMTYuNS00LjVhMiAyIDAgMSAxLTQgMCAyIDIgMCAxIDEgNCAwek00MSAxMmEyIDIgMCAxIDEtNCAwIDIgMiAwIDEgMSA0IDB6TTE2IDguNWEyIDIgMCAxIDEtNCAwIDIgMiAwIDEgMSA0IDB6TTMzIDlhMiAyIDAgMSAxLTQgMCAyIDIgMCAxIDEgNCAweiIvPjxwYXRoIGQ9Ik05IDI2YzguNS0xLjUgMjEtMS41IDI3IDBsMi0xMi03IDExVjExbC01LjUgMTMuNS0zLTE1LTMgMTUtNS41LTE0VjI1TDcgMTRsMiAxMnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTkgMjZjMCAyIDEuNSAyIDIuNSA0IDEgMS41IDEgMSAuNSAzLjUtMS41IDEtMS41IDIuNS0xLjUgMi41LTEuNSAxLjUuNSAyLjUuNSAyLjUgNi41IDEgMTYuNSAxIDIzIDAgMCAwIDEuNS0xIDAtMi41IDAgMCAuNS0xLjUtMS0yLjUtLjUtMi41LS41LTIgLjUtMy41IDEtMiAyLjUtMiAyLjUtNC04LjUtMS41LTE4LjUtMS41LTI3IDB6IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xMS41IDMwYzMuNS0xIDE4LjUtMSAyMiAwTTEyIDMzLjVjNi0xIDE1LTEgMjEgMCIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=";
        imgKiB = new Image();
        imgKiB.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMi41IDExLjYzVjYiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjIuNSAyNXM0LjUtNy41IDMtMTAuNWMwIDAtMS0yLjUtMy0yLjVzLTMgMi41LTMgMi41Yy0xLjUgMyAzIDEwLjUgMyAxMC41IiBmaWxsPSIjMDAwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxwYXRoIGQ9Ik0xMS41IDM3YzUuNSAzLjUgMTUuNSAzLjUgMjEgMHYtN3M5LTQuNSA2LTEwLjVjLTQtNi41LTEzLjUtMy41LTE2IDRWMjd2LTMuNWMtMy41LTcuNS0xMy0xMC41LTE2LTQtMyA2IDUgMTAgNSAxMFYzN3oiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMjAgOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTMyIDI5LjVzOC41LTQgNi4wMy05LjY1QzM0LjE1IDE0IDI1IDE4IDIyLjUgMjQuNWwuMDEgMi4xLS4wMS0yLjFDMjAgMTggOS45MDYgMTQgNi45OTcgMTkuODVjLTIuNDk3IDUuNjUgNC44NTMgOSA0Ljg1MyA5IiBzdHJva2U9IiNlY2VjZWMiLz48cGF0aCBkPSJNMTEuNSAzMGM1LjUtMyAxNS41LTMgMjEgMG0tMjEgMy41YzUuNS0zIDE1LjUtMyAyMSAwbS0yMSAzLjVjNS41LTMgMTUuNS0zIDIxIDAiIHN0cm9rZT0iI2VjZWNlYyIvPjwvZz48L3N2Zz4=";
        imgKiW = new Image();
        imgKiW.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMi41IDExLjYzVjZNMjAgOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTIyLjUgMjVzNC41LTcuNSAzLTEwLjVjMCAwLTEtMi41LTMtMi41cy0zIDIuNS0zIDIuNWMtMS41IDMgMyAxMC41IDMgMTAuNSIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMTEuNSAzN2M1LjUgMy41IDE1LjUgMy41IDIxIDB2LTdzOS00LjUgNi0xMC41Yy00LTYuNS0xMy41LTMuNS0xNiA0VjI3di0zLjVjLTMuNS03LjUtMTMtMTAuNS0xNi00LTMgNiA1IDEwIDUgMTBWMzd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjUgMzBjNS41LTMgMTUuNS0zIDIxIDBtLTIxIDMuNWM1LjUtMyAxNS41LTMgMjEgMG0tMjEgMy41YzUuNS0zIDE1LjUtMyAyMSAwIi8+PC9nPjwvc3ZnPg==";
        imgKNB = new Image();
        imgKNB.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMiAxMGMxMC41IDEgMTYuNSA4IDE2IDI5SDE1YzAtOSAxMC02LjUgOC0yMSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0yNCAxOGMuMzggMi45MS01LjU1IDcuMzctOCA5LTMgMi0yLjgyIDQuMzQtNSA0LTEuMDQyLS45NCAxLjQxLTMuMDQgMC0zLTEgMCAuMTkgMS4yMy0xIDItMSAwLTQuMDAzIDEtNC00IDAtMiA2LTEyIDYtMTJzMS44OS0xLjkgMi0zLjVjLS43My0uOTk0LS41LTItLjUtMyAxLTEgMyAyLjUgMyAyLjVoMnMuNzgtMS45OTIgMi41LTNjMSAwIDEgMyAxIDMiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNOS41IDI1LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDEgMSAxIDB6bTUuNDMzLTkuNzVhLjUgMS41IDMwIDEgMS0uODY2LS41LjUgMS41IDMwIDEgMSAuODY2LjV6IiBmaWxsPSIjZWNlY2VjIiBzdHJva2U9IiNlY2VjZWMiLz48cGF0aCBkPSJNMjQuNTUgMTAuNGwtLjQ1IDEuNDUuNS4xNWMzLjE1IDEgNS42NSAyLjQ5IDcuOSA2Ljc1UzM1Ljc1IDI5LjA2IDM1LjI1IDM5bC0uMDUuNWgyLjI1bC4wNS0uNWMuNS0xMC4wNi0uODgtMTYuODUtMy4yNS0yMS4zNC0yLjM3LTQuNDktNS43OS02LjY0LTkuMTktNy4xNmwtLjUxLS4xeiIgZmlsbD0iI2VjZWNlYyIgc3Ryb2tlPSJub25lIi8+PC9nPjwvc3ZnPg==";
        imgKNW = new Image();
        imgKNW.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMiAxMGMxMC41IDEgMTYuNSA4IDE2IDI5SDE1YzAtOSAxMC02LjUgOC0yMSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNCAxOGMuMzggMi45MS01LjU1IDcuMzctOCA5LTMgMi0yLjgyIDQuMzQtNSA0LTEuMDQyLS45NCAxLjQxLTMuMDQgMC0zLTEgMCAuMTkgMS4yMy0xIDItMSAwLTQuMDAzIDEtNC00IDAtMiA2LTEyIDYtMTJzMS44OS0xLjkgMi0zLjVjLS43My0uOTk0LS41LTItLjUtMyAxLTEgMyAyLjUgMyAyLjVoMnMuNzgtMS45OTIgMi41LTNjMSAwIDEgMyAxIDMiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOS41IDI1LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDEgMSAxIDB6bTUuNDMzLTkuNzVhLjUgMS41IDMwIDEgMS0uODY2LS41LjUgMS41IDMwIDEgMSAuODY2LjV6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg==";
        imgRNB = new Image();
        imgRNB.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDM5aDI3di0zSDl2M3ptMy41LTdsMS41LTIuNWgxN2wxLjUgMi41aC0yMHptLS41IDR2LTRoMjF2NEgxMnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTE0IDI5LjV2LTEzaDE3djEzSDE0eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMTQgMTYuNUwxMSAxNGgyM2wtMyAyLjVIMTR6TTExIDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NUgxMXoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTEyIDM1LjVoMjFtLTIwLTRoMTltLTE4LTJoMTdtLTE3LTEzaDE3TTExIDE0aDIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNlY2VjZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjwvZz48L3N2Zz4=";
        imgRNW = new Image();
        imgRNW.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDM5aDI3di0zSDl2M3ptMy0zdi00aDIxdjRIMTJ6bS0xLTIyVjloNHYyaDVWOWg1djJoNVY5aDR2NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMzQgMTRsLTMgM0gxNGwtMy0zIi8+PHBhdGggZD0iTTMxIDE3djEyLjVIMTRWMTciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTMxIDI5LjVsMS41IDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGQ9Ik0xMSAxNGgyMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjwvZz48L3N2Zz4=";
        if (keyORnot == 1) {
            imgRW = new Image();
            imgRW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7fS5zdDN7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7fS5zdDR7ZmlsbDojM0VBRjRFO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjE4MjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LDM5aDI3di0zSDlWMzl6IE0xMiwzNnYtNGgyMXY0SDEyeiBNMTEsMTRWOWg0djJoNVY5aDV2Mmg1VjloNHY1Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM0LDE0bC0zLDNIMTRsLTMtMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMSwxN3YxMi41SDE0VjE3Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMxLDI5LjVsMS41LDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMSwxNGgyMyIvPjwvZz48cmVjdCB4PSIyOC44IiB5PSIyOCIgY2xhc3M9InN0NCIgd2lkdGg9IjEzLjgiIGhlaWdodD0iMTMuOCIvPjwvc3ZnPg==";
            imgKW = new Image();
            imgKW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntmaWxsOiMzRUFGNEU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMTgyMTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLDEwYzEwLjUsMSwxNi41LDgsMTYsMjlIMTVjMC05LDEwLTYuNSw4LTIxIi8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI0LDE4YzAuNCwyLjktNS41LDcuNC04LDljLTMsMi0yLjgsNC4zLTUsNGMtMS0wLjksMS40LTMsMC0zYy0xLDAsMC4yLDEuMi0xLDJjLTEsMC00LDEtNC00YzAtMiw2LTEyLDYtMTJzMS45LTEuOSwyLTMuNWMtMC43LTEtMC41LTItMC41LTNjMS0xLDMsMi41LDMsMi41aDJjMCwwLDAuOC0yLDIuNS0zYzEsMCwxLDMsMSwzIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTkuNSwyNS41QzkuNSwyNS44LDkuMywyNiw5LDI2cy0wLjUtMC4yLTAuNS0wLjVTOC43LDI1LDksMjVTOS41LDI1LjIsOS41LDI1LjV6IE0xNC45LDE1LjdjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xYy0wLjItMC4xLTAuMS0wLjgsMC4zLTEuNWMwLDAsMCwwLDAsMGMwLjQtMC43LDAuOS0xLjIsMS4yLTEuMUMxNS41LDE0LjMsMTUuNCwxNSwxNC45LDE1LjdDMTQuOSwxNS43LDE0LjksMTUuNywxNC45LDE1Ljd6Ii8+PHJlY3QgeD0iMjguOCIgeT0iMjgiIGNsYXNzPSJzdDIiIHdpZHRoPSIxMy44IiBoZWlnaHQ9IjEzLjgiLz48L2c+PC9zdmc+";
            imgRB = new Image();
            imgRB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qxe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7fS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRUNFQ0VDO3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Qze2ZpbGw6IzNFQUY0RTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4xODIxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9PC9zdHlsZT48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNOSwzOWgyN3YtM0g5VjM5eiBNMTIuNSwzMmwxLjUtMi41aDE3bDEuNSwyLjVIMTIuNXogTTEyLDM2di00aDIxdjRIMTJ6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LDI5LjV2LTEzaDE3djEzSDE0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNCwxNi41TDExLDE0aDIzbC0zLDIuNUgxNHogTTExLDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NUgxMXoiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTIsMzUuNWgyMSBNMTMsMzEuNWgxOSBNMTQsMjkuNWgxNyBNMTQsMTYuNWgxNyBNMTEsMTRoMjMiLz48L2c+PHJlY3QgeD0iMjguOCIgeT0iMjgiIGNsYXNzPSJzdDMiIHdpZHRoPSIxMy44IiBoZWlnaHQ9IjEzLjgiLz48L3N2Zz4=";
            imgKB = new Image();
            imgKB.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qxe2ZpbGw6I0VDRUNFQztzdHJva2U6I0VDRUNFQztzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntmaWxsOiNFQ0VDRUM7fS5zdDN7ZmlsbDojM0VBRjRFO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoxLjE4MjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMiwxMGMxMC41LDEsMTYuNSw4LDE2LDI5SDE1YzAtOSwxMC02LjUsOC0yMSIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNCwxOGMwLjQsMi45LTUuNSw3LjQtOCw5Yy0zLDItMi44LDQuMy01LDRjLTEtMC45LDEuNC0zLDAtM2MtMSwwLDAuMiwxLjItMSwyYy0xLDAtNCwxLTQtNGMwLTIsNi0xMiw2LTEyczEuOS0xLjksMi0zLjVjLTAuNy0xLTAuNS0yLTAuNS0zYzEtMSwzLDIuNSwzLDIuNWgyYzAsMCwwLjgtMiwyLjUtM2MxLDAsMSwzLDEsMyIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05LjUsMjUuNUM5LjUsMjUuOCw5LjMsMjYsOSwyNnMtMC41LTAuMi0wLjUtMC41UzguNywyNSw5LDI1UzkuNSwyNS4yLDkuNSwyNS41eiBNMTQuOSwxNS43Yy0wLjQsMC43LTAuOSwxLjItMS4yLDEuMWMtMC4yLTAuMS0wLjEtMC44LDAuMy0xLjVjMCwwLDAsMCwwLDBjMC40LTAuNywwLjktMS4yLDEuMi0xLjFDMTUuNSwxNC4zLDE1LjQsMTUsMTQuOSwxNS43QzE0LjksMTUuNywxNC45LDE1LjcsMTQuOSwxNS43eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNC41LDEwLjRsLTAuNSwxLjRsMC41LDAuMWMzLjEsMSw1LjYsMi41LDcuOSw2LjhzMy4zLDEwLjMsMi44LDIwLjJsMCwwLjVoMi4zbDAtMC41YzAuNS0xMC4xLTAuOS0xNi44LTMuMy0yMS4zcy01LjgtNi42LTkuMi03LjJDMjUuMSwxMC41LDI0LjYsMTAuNCwyNC41LDEwLjR6Ii8+PC9nPjxyZWN0IHg9IjI4LjgiIHk9IjI4IiBjbGFzcz0ic3QzIiB3aWR0aD0iMTMuOCIgaGVpZ2h0PSIxMy44Ii8+PC9zdmc+";
        } else {
            imgRW = imgRNW;
            imgRB = imgRNB;
            imgKW = imgKNW;
            imgKB = imgKNB;
        }
    } {
        /*
          var canvas = document.createElement('canvas'); //Create a canvas element
             canvas.style.width=window.innerWidth;
        canvas.style.height=window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position='absolute';
        canvas.style.left=0;
        canvas.style.top=0;
        canvas.style.zIndex=100000;
        canvas.style.pointerEvents='none'; //Make sure you can click 'through' the canvas
        document.body.appendChild(canvas); //Append canvas to body element
        var context = canvas.getContext('2d');
        */
        var canvas = document.createElement('canvas'); //Create a canvas element
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
        //  canvas.style.width='100%';
        //canvas.style.height='100%';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'absolute';
        canvas.style.left = 0;
        canvas.style.top = 0;
        canvas.style.zIndex = 100000;
        canvas.style.pointerEvents = 'none'; //Make sure you can click 'through' the canvas
        document.body.appendChild(canvas); //Append canvas to body element
        var context = canvas.getContext('2d');
        context.scale(1, 1);
        context.imageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.oImageSmoothingEnabled = false;
        //   context.webkitImageSmoothingEnabled = false;
        var canvas1 = document.createElement('canvas'); //Create a canvas element
        canvas1.style.width = window.innerWidth;
        canvas1.style.height = window.innerHeight;
        canvas1.width = window.innerWidth;
        canvas1.height = window.innerHeight;
        canvas1.style.position = 'absolute';
        canvas1.style.left = 0;
        canvas1.style.top = 0;
        canvas1.style.zIndex = 100000;
        canvas1.style.pointerEvents = 'none'; //Make sure you can click 'through' the canvas
        document.body.appendChild(canvas1); //Append canvas to body element
        var context1 = canvas1.getContext('2d');
        context1.scale(1, 1);
        context1.imageSmoothingEnabled = false;
        context1.webkitImageSmoothingEnabled = false;
        context1.mozImageSmoothingEnabled = false;
        context1.msImageSmoothingEnabled = false;
        context1.oImageSmoothingEnabled = false;
        /*
              var lichess = document.getElementsByClassName("round__side")[0];
              var newDiv = document.createElement("p");
          lichess.appendChild(newDiv);
         newDiv.id = "Score";
             newDiv.innerHTML = "Score";
        */
        var canvasS = document.createElement('canvas'); //Create a canvas element
        canvasS.style.width = window.innerWidth;
        canvasS.style.height = window.innerHeight;
        canvasS.width = window.innerWidth;
        canvasS.height = window.innerHeight;
        canvasS.style.position = 'absolute';
        canvasS.style.left = 0;
        canvasS.style.top = 0;
        canvasS.style.zIndex = 100001;
        canvasS.style.pointerEvents = 'none'; //Make sure you can click 'through' the canvas
        document.body.appendChild(canvasS); //Append canvas to body element
        // lichess.appendChild(canvasS); //Append canvas to body element
        var contextS = canvasS.getContext('2d');
        contextS.scale(1, 1);
        contextS.imageSmoothingEnabled = false;
        contextS.webkitImageSmoothingEnabled = false;
        contextS.mozImageSmoothingEnabled = false;
        contextS.msImageSmoothingEnabled = false;
        contextS.oImageSmoothingEnabled = false;
        var canvasT = document.createElement('canvas'); //Create a canvas element
        canvasT.style.width = window.innerWidth;
        canvasT.style.height = window.innerHeight;
        canvasT.width = window.innerWidth;
        canvasT.height = window.innerHeight;
        canvasT.style.position = 'absolute';
        canvasT.style.left = 0;
        canvasT.style.top = 0;
        canvasT.style.zIndex = 100001;
        canvasT.style.pointerEvents = 'none'; //Make sure you can click 'through' the canvas
        document.body.appendChild(canvasT); //Append canvas to body element
        // lichess.appendChild(canvasS); //Append canvas to body element
        var contextT = canvasT.getContext('2d');
        contextT.scale(1, 1);
        contextT.imageSmoothingEnabled = false;
        contextT.webkitImageSmoothingEnabled = false;
        contextT.mozImageSmoothingEnabled = false;
        contextT.msImageSmoothingEnabled = false;
        contextT.oImageSmoothingEnabled = false;
        var canvasAn = document.createElement('canvas'); //Create a canvas element
        /*canvasAn.style.width=w;
canvasAn.style.height=w;
canvasAn.width = w;
canvasAn.height = w;
canvasAn.style.position='absolute';
canvasAn.style.left=x0+"px";
canvasAn.style.top=y0+"px";*/
        canvasAn.style.width = window.innerWidth;
        canvasAn.style.height = window.innerHeight;
        canvasAn.width = window.innerWidth;
        canvasAn.height = window.innerHeight;
        canvasAn.style.position = 'absolute';
        canvasAn.style.left = 0;
        canvasAn.style.top = 0;
        canvasAn.style.zIndex = 100007;
        //  canvasCl.translate(-500, -200);
        canvasAn.style.pointerEvents = 'none'; //Make sure you can click 'through' the canvas
        document.body.appendChild(canvasAn); //Append canvas to body element
        var contextAn = canvasAn.getContext('2d');
        contextAn.scale(1, 1);
        contextAn.imageSmoothingEnabled = false;
        contextAn.webkitImageSmoothingEnabled = false;
        contextAn.mozImageSmoothingEnabled = false;
        contextAn.msImageSmoothingEnabled = false;
        contextAn.oImageSmoothingEnabled = false;
        /*
     var image = new Image();
image.onload = function() {
    context.drawImage(image, 15, 15);
};

image.src = "data:image/png;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7ZmlsbDojRkZGRkZGO3N0cm9rZTojOUUwRUMxO3N0cm9rZS13aWR0aDo1O30uc3Q3e2ZpbGw6I0ZGMDAwMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzOWgyN3YtM0g5VjM5eiBNMTIsMzZ2LTRoMjF2NEgxMnogTTExLDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNCwxNGwtMywzSDE0bC0zLTMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMzEsMTd2MTIuNUgxNFYxNyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMSwyOS41bDEuNSwyLjVoLTIwbDEuNS0yLjUiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTEsMTRoMjMiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyMi41LDQuMyA1LjMsMzkuNSAzOS44LDM5LjUgIi8+PHJlY3QgeD0iOSIgeT0iNS41IiBjbGFzcz0ic3Q2IiB3aWR0aD0iMjciIGhlaWdodD0iMzUiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNiIgY3k9IjM0LjUiIHI9IjguNSIvPjwvc3ZnPg==";
*/
        /*
        var board = document.querySelectorAll("cg-board")[0];
        var rect = board.getBoundingClientRect();
           var x0 = rect.left;
           var y0 = rect.top;
           var x1 = rect.width;
           var y1 = rect.height;
           var w = rect.width;
           var sqsize = w / 8;

          */
        // var board = document.querySelectorAll("cg-board")[0];
        // var rect = board.getBoundingClientRect();
        var canvasCl = document.createElement('canvas'); //Create a canvas element
        canvasCl.id = "canvaspoint";
        // canvasCl.style.cursor = "pointer";
        function canvasPointers() {
            canvasCl.style.width = w + (sqsize * 2);
            canvasCl.style.height = w + (sqsize * 2);
            canvasCl.width = w + (sqsize * 2);
            canvasCl.height = w + (sqsize * 2);
            canvasCl.style.position = 'absolute';
            canvasCl.style.left = x0 - sqsize + "px";
            canvasCl.style.top = y0 - sqsize + "px";
            canvasCl.style.zIndex = 100008;
            //  canvasCl.translate(-500, -200);
            //canvasCl.style.pointerEvents='none'; //Make sure you can click 'through' the canvas
            document.body.appendChild(canvasCl); //Append canvas to body element
            var contextCl = canvasCl.getContext('2d');
            contextCl.scale(1, 1);
            contextCl.imageSmoothingEnabled = false;
            contextCl.webkitImageSmoothingEnabled = false;
            contextCl.mozImageSmoothingEnabled = false;
            contextCl.msImageSmoothingEnabled = false;
            contextCl.oImageSmoothingEnabled = false;
        };
        canvasPointers();
        var img = new Image();
        img.onload = function() {
            //  context.drawImage(img, x0, y0, x1, y1);
            context.drawImage(img, x0, y0, w, w);
        }
        //img.src = "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        img.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOCA4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4IDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojQjU4ODYzO30uc3Qxe2ZpbGw6I0YwRDlCNTt9LnN0MntmaWxsOiM0OTJBMDA7c3Ryb2tlOiM4RTVEMzk7c3Ryb2tlLXdpZHRoOjUuMDAwMDAwZS0wMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO308L3N0eWxlPjxnIGlkPSJYTUxJRF8xXyI+PGc+PHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPjwvZz48L2c+PGc+PGc+PGc+PGcgaWQ9ImQiPjxyZWN0IGlkPSJlIiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PGc+PHJlY3QgaWQ9ImVfMV8iIHg9IjIiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L2c+PC9nPjxnIGlkPSJjIj48ZyBpZD0iZF8xXyI+PHJlY3QgaWQ9ImVfMl8iIHg9IjQiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48Zz48cmVjdCBpZD0iZV8zXyIgeD0iNiIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvZz48L2c+PC9nPjxnPjxnIGlkPSJiIj48ZyBpZD0iZF8yXyI+PHJlY3QgaWQ9ImVfNF8iIHg9IjEiIHk9IjEiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48Zz48cmVjdCBpZD0iZV81XyIgeD0iMyIgeT0iMSIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvZz48L2c+PGcgaWQ9ImNfMV8iPjxnIGlkPSJkXzNfIj48cmVjdCBpZD0iZV82XyIgeD0iNSIgeT0iMSIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxnPjxyZWN0IGlkPSJlXzdfIiB4PSI3IiB5PSIxIiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PC9nPjwvZz48L2c+PC9nPjxnPjxnPjxnPjxnIGlkPSJkXzRfIj48cmVjdCBpZD0iZV84XyIgeT0iMiIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxnPjxyZWN0IGlkPSJlXzlfIiB4PSIyIiB5PSIyIiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PC9nPjwvZz48ZyBpZD0iY18yXyI+PGcgaWQ9ImRfNV8iPjxyZWN0IGlkPSJlXzEwXyIgeD0iNCIgeT0iMiIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxnPjxyZWN0IGlkPSJlXzExXyIgeD0iNiIgeT0iMiIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvZz48L2c+PC9nPjxnIGlkPSJhIj48ZyBpZD0iYl8xXyI+PGcgaWQ9ImRfNl8iPjxyZWN0IGlkPSJlXzEyXyIgeD0iMSIgeT0iMyIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxnPjxyZWN0IGlkPSJlXzEzXyIgeD0iMyIgeT0iMyIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvZz48L2c+PGcgaWQ9ImNfM18iPjxnIGlkPSJkXzdfIj48cmVjdCBpZD0iZV8xNF8iIHg9IjUiIHk9IjMiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48Zz48cmVjdCBpZD0iZV8xNV8iIHg9IjciIHk9IjMiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L2c+PC9nPjwvZz48L2c+PC9nPjxnPjxnPjxnPjxnPjxnIGlkPSJkXzhfIj48cmVjdCBpZD0iZV8xNl8iIHk9IjQiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48Zz48cmVjdCBpZD0iZV8xN18iIHg9IjIiIHk9IjQiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L2c+PC9nPjxnIGlkPSJjXzRfIj48ZyBpZD0iZF85XyI+PHJlY3QgaWQ9ImVfMThfIiB4PSI0IiB5PSI0IiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PGc+PHJlY3QgaWQ9ImVfMTlfIiB4PSI2IiB5PSI0IiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PC9nPjwvZz48L2c+PGc+PGcgaWQ9ImJfMl8iPjxnIGlkPSJkXzEwXyI+PHJlY3QgaWQ9ImVfMjBfIiB4PSIxIiB5PSI1IiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PGc+PHJlY3QgaWQ9ImVfMjFfIiB4PSIzIiB5PSI1IiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PC9nPjwvZz48ZyBpZD0iY181XyI+PGcgaWQ9ImRfMTFfIj48cmVjdCBpZD0iZV8yMl8iIHg9IjUiIHk9IjUiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48Zz48cmVjdCBpZD0iZV8yM18iIHg9IjciIHk9IjUiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L2c+PC9nPjwvZz48L2c+PGc+PGc+PGc+PGcgaWQ9ImRfMTJfIj48cmVjdCBpZD0iZV8yNF8iIHk9IjYiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48Zz48cmVjdCBpZD0iZV8yNV8iIHg9IjIiIHk9IjYiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L2c+PC9nPjxnIGlkPSJjXzZfIj48ZyBpZD0iZF8xM18iPjxyZWN0IGlkPSJlXzI2XyIgeD0iNCIgeT0iNiIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxnPjxyZWN0IGlkPSJlXzI3XyIgeD0iNiIgeT0iNiIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvZz48L2c+PC9nPjxnIGlkPSJhXzFfIj48ZyBpZD0iYl8zXyI+PGcgaWQ9ImRfMTRfIj48cmVjdCBpZD0iZV8yOF8iIHg9IjEiIHk9IjciIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48Zz48cmVjdCBpZD0iZV8yOV8iIHg9IjMiIHk9IjciIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L2c+PC9nPjxnIGlkPSJjXzdfIj48ZyBpZD0iZF8xNV8iPjxyZWN0IGlkPSJlXzMwXyIgeD0iNSIgeT0iNyIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxnPjxyZWN0IGlkPSJlXzMxXyIgeD0iNyIgeT0iNyIgY2xhc3M9InN0MSIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIwLDEgOCwxIDgsMSAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjAsNyA4LDcgOCw3ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMCwzIDgsMyA4LDMgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIwLDUgOCw1IDgsNSAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjAsMiA4LDIgOCwyICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMCw2IDgsNiA4LDYgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIwLDQgOCw0IDgsNCAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQsOCA0LDAgNCwwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMSw4IDEsMCAxLDAgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIyLDggMiwwIDIsMCAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMsOCAzLDAgMywwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNSw4IDUsMCA1LDAgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI2LDggNiwwIDYsMCAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjcsOCA3LDAgNywwICIvPjwvc3ZnPg==";
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            img.src = "https://lichess1.org/assets/_Uf4SFP/images/board/metal-1024.jpg";
        }

        function DrawBase() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x0, y0, w, w);
        }
        /*
         context.beginPath();
         context.rect(rect.left,rect.top-sqsize,rect.width/5,sqsize-10);
          //  contextS.globalAlpha=(opacity)/100;
          context.fillStyle = '#F4E2B2';
               context.closePath();
           context.fill();
        */
        var numOFP = 0;
        var ArrX = [],
            ArrY = [],
            moveX, moveY, moverand, nn;
        var Bx, By, BPc;
        //var imgPW;
        var MDx, MDy, MUx, MUy;
        var MDSx, MDSy, MUSx, MUSy, MDSxF, MDSyF, MUSxF, MUSyF;
        var indicator = 0,
            notWmove = 0;
        var wrongCounter = 0
        var tryAgaincounter = 0
        drawScore();
        var checkTclick = 0,
            returnClick = 0;
        document.addEventListener('mousedown', function(event) {
            MDx = event.clientX;
            MDy = event.clientY;
            MDSx = MDx - x0;
            MDSy = MDy - y0;
            MDSxF = Math.ceil(MDSx / sqsize);
            MDSyF = 9 - Math.ceil(MDSy / sqsize);
            if (Animation == 1) {
                if (MDSxF == Bx && MDSyF == By) {
                    // console.log("this");
                    AnOn = 1;
                }
            }
            if (indicator == 6) {
                if (MDx >= refrX && MDy >= refrY && MDx <= refrX + sqsize && MDy <= refrY + sqsize) refresh();
                setTimeout(() => {
                    document.body.dispatchEvent(new KeyboardEvent('keypress', {
                        'key': 'a'
                    }));
                    indicator = 5;
                    drawScore();
                    Timer();
                    ShowPiece();
                    Keyb1 = 1;
                }, 30)
            }
        });
        document.addEventListener('mouseup', function(event) {
            if (Animation == 1) {
                //  console.log("this");
                AnOn = 0;
                contextAn.clearRect(0, 0, canvasAn.width, canvasAn.height);
            }
            if (TimeL > 0) {
                if (indicator == 0) {
                    // indicator = 5;
                    // drawScore();
                    // ShowPiece();
                    // Timer();
                } else {
                    notWmove = 0;
                    MUx = event.clientX;
                    MUy = event.clientY;
                    MUSx = MUx - x0;
                    MUSy = MUy - y0;
                    MUSxF = Math.ceil(MUSx / sqsize);
                    MUSyF = 9 - Math.ceil(MUSy / sqsize);
                    //console.log(MDSxF,MDSyF,MUSxF,MUSyF);
                    if (MDSxF == Bx && MDSyF == By && MUSxF == destX && MUSyF == destY) {
                        indicator = 1;
                        ShowPiece();
                        numOFP = numOFP + 1;
                        drawScore();
                    } else if (MDSxF != Bx || MDSyF != By) {
                        // console.log("wrong start");
                        indicator = 2; tryAgaincounter += 1
                        drawScore();
                    } else {
                        for (var i = 0; i < ArrX.length; i++) {
                            if (MUSxF == ArrX[i] && MUSyF == ArrY[i]) {
                                indicator = 3; wrongCounter += 1
                                
                                drawScore();
                                // console.log("wrong move");
                                ShowPiece();
                                notWmove = 1;
                                break;
                            }
                        }
                        if (notWmove == 0) {
                            indicator = 2; tryAgaincounter += 1
                            tryAgaincounter += 1
                            drawScore();
                            //console.log("wrong movement");
                        }
                    }
                }
            }
            // else {
            //  indicator = 6;
            //   drawScore();
            // }
        });
    }
    var Keyb1 = 0;
    var keys = [],
        keysT = [];
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (indicator == 0 && focusK == 0) {
            indicator = 5;
            drawScore();
            Timer();
            ShowPiece();
            Keyb1 = 1;
        }
        if (keyORnot == 1 && focusK == 0) {
            if (!keys.includes(event.key) && event.key != 'Control' && event.key != 'Alt') {
                keys.unshift(event.key);
                keysT.unshift(event.key);
                checkKP();
                //   console.log(keys);
                Keyb1 = 0;
            }
        }
    });
    document.addEventListener('keyup', function(event) {
        if (keyORnot == 1) {
            const key = event.key;
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] === event.key) {
                    keys.splice(i, 1);
                }
            }
            for (var j = 0; j < keysT.length; j++) {
                if (keysT[j] === event.key) {
                    keysT.splice(j, 1);
                }
            }
        }
    });
    var boardx, boardy, horiz, vertic, horiz2, vertic2;
    var horiz0, vertic0, cx, cy;
    var lastUpdateCall = null;
    canvasCl.addEventListener("mousemove", function(e) {
        //console.log("this");
        if (AnOn == 1) {
            cx = e.clientX;
            cy = e.clientY;
            if (lastUpdateCall) cancelAnimationFrame(lastUpdateCall);
            lastUpdateCall = requestAnimationFrame(function() { //save the requested frame so we can check next time if one was already requested
                Animate(); //all the function that handles the request
                lastUpdateCall = null;
            });
            //requestAnimationFrame(Animate);
            //    contextAn.clearRect(0, 0, canvasAn.width, canvasAn.height);
            // Animate();
        }
        if (keyORnot == 1) {
            cx = e.clientX;
            cy = e.clientY;
            boardx = cx - x0;
            boardy = cy - y0;
            horiz = Math.ceil(boardx / sqsize);
            vertic = 9 - Math.ceil(boardy / sqsize);
            if (horiz != horiz2 || vertic != vertic2) {
                keysT = keys.slice(0);
                horiz0 = horiz;
                vertic0 = vertic;
                checkKP();
            }
            horiz2 = horiz;
            vertic2 = vertic;
        }
    });
    var imgPW = new Image();

    function Animate() {
        // console.log("anim");
        contextAn.clearRect(0, 0, canvasAn.width, canvasAn.height);
        if (AnOn == 1) {
            contextAn.beginPath();
            //console.log(Bx,By);
            contextAn.drawImage(imgPW, cx - sqsize / 2, cy - sqsize / 2, sqsize, sqsize);
            //  console.log(imgPW);
            contextAn.closePath();
            /* contextAn.beginPath();
    contextAn.rect(cx,cy,sqsize,sqsize);
  contextAn.fillStyle = 'blue';
     contextAn.closePath();
    contextAn.fill();*/
        }
    }

    function checkKP() {
        if (keysT.length > 0 && TimeL > 0) {
            //console.log(whatP,horiz0,destX,vertic0,destY);
            if (keysT[0] == whatP && horiz0 == destX && vertic0 == destY) {
                indicator = 1;
                ShowPiece();
                numOFP = numOFP + 1;
                drawScore();
            } else if (keysT[0] != whatP) {
                if (Keyb1 == 1) {
                    indicator = 5;
                } else {
                    indicator = 2; tryAgaincounter += 1
                }
                drawScore();
            } else {
                for (var i = 0; i < ArrX.length; i++) {
                    if (horiz0 == ArrX[i] && vertic0 == ArrY[i]) {
                        indicator = 3; wrongCounter += 1
                        drawScore();
                        //  console.log("wrong move");
                        ShowPiece();
                        notWmove = 1;
                        break;
                    }
                }
                if (notWmove == 0) {
                    if (Keyb1 == 1) {
                        indicator = 5;
                    } else {
                        indicator = 2; tryAgaincounter += 1
                    }
                    drawScore();
                    //  console.log("wrong movement");
                }
            }
        }
    }

    function ShowPiece() {
        context1.clearRect(0, 0, canvas1.width, canvas1.height);
        Bx = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        By = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        BPc = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        //var imgPW = new Image();
        ArrX = [];
        ArrY = [];
        if (BPc == 1) //White bishop
        {
            imgPW = imgBW;
            Bishop();
            whatP = biK;
        }
        if (BPc == 2) //White queen
        {
            imgPW = imgQW;
            Queen();
            whatP = qK;
        }
        if (BPc == 3) //White king
        {
            imgPW = imgKiW;
            King();
            whatP = kingK;
        }
        if (BPc == 4) //White pawnW
        {
            imgPW = imgPaW;
            if (By == 1) By = 2;
            if (By == 8) By = 7;
            whatP = pFK;
            if (keyORnot == 0) {
                PawnST();
            } else {
                PawnW();
            }
        }
        if (BPc == 5) //White pawnL
        {
            imgPW = imgPaW;
            if (By == 1) By = 2;
            if (By == 8) By = 7;
            if (Bx == 1) Bx = 2;
            whatP = pLK;
            if (keyORnot == 0) {
                PawnST();
            } else {
                PawnL();
            }
        }
        if (BPc == 6) //White pawnR
        {
            imgPW = imgPaW;
            if (By == 1) By = 2;
            if (By == 8) By = 7;
            if (Bx == 8) Bx = 7;
            whatP = pRK;
            if (keyORnot == 0) {
                PawnST();
            } else {
                PawnR();
            }
        }
        if (BPc == 7) //White knightL
        {
            imgPW = imgKNW;
            Knight();
            whatP = knL;
        }
        //imgPW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzNCQUEwMDtzdHJva2Utd2lkdGg6MS44NzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDh7ZmlsbDojRkYwMDAwO308L3N0eWxlPjxnIGNsYXNzPSJzdDAiPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMiwxMGMxMC41LDEsMTYuNSw4LDE2LDI5SDE1YzAtOSwxMC02LjUsOC0yMSIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNCwxOGMwLjQsMi45LTUuNSw3LjQtOCw5Yy0zLDItMi44LDQuMy01LDRjLTEtMC45LDEuNC0zLDAtM2MtMSwwLDAuMiwxLjItMSwyYy0xLDAtNCwxLTQtNGMwLTIsNi0xMiw2LTEyczEuOS0xLjksMi0zLjVjLTAuNy0xLTAuNS0yLTAuNS0zYzEtMSwzLDIuNSwzLDIuNWgyYzAsMCwwLjgtMiwyLjUtM2MxLDAsMSwzLDEsMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05LjUsMjUuNUM5LjUsMjUuOCw5LjMsMjYsOSwyNnMtMC41LTAuMi0wLjUtMC41UzguNywyNSw5LDI1UzkuNSwyNS4yLDkuNSwyNS41eiBNMTQuOSwxNS43Yy0wLjQsMC43LTAuOSwxLjItMS4yLDEuMWMtMC4yLTAuMS0wLjEtMC44LDAuMy0xLjVsMCwwYzAuNC0wLjcsMC45LTEuMiwxLjItMS4xQzE1LjUsMTQuMywxNS40LDE1LDE0LjksMTUuN0wxNC45LDE1Ljd6Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTI0LjUsMTAuNEwyNCwxMS44bDAuNSwwLjFjMy4xLDEsNS42LDIuNSw3LjksNi44czMuMywxMC4zLDIuOCwyMC4ydjAuNWgyLjN2LTAuNWMwLjUtMTAuMS0wLjktMTYuOC0zLjMtMjEuM1MyOC40LDExLDI1LDEwLjRDMjUuMSwxMC41LDI0LjYsMTAuNCwyNC41LDEwLjR6Ii8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iNy4yLDguOSAzOC41LDguOSAzOC41LDQwLjQgMjIuMSw0MC40IDIyLjEsMjQgNy4yLDI0ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjUuOSw0MS4yIDM4LjIsNDEuMiAzOC4yLDUuMiA0LjIsNS4yIDQuMiwyMSAxMC4zLDIxIDEwLjMsMTUuNiAyMy42LDE1LjYgMjMuNiw0MS4yICIvPjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMjUuOSw0MCAzOC4yLDQwIDM4LjIsNiA0LjIsNiA0LjIsMjAuOSAxMC4zLDIwLjkgMTAuMywxNS44IDIzLjYsMTUuOCAyMy42LDQwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iNS40LDcuMyA1LjQsMTkuNSA5LjEsMTkuNSA5LjEsMTQuNyAyNC45LDE0LjcgMjQuOSwzOC44IDM3LjIsMzguOCAzNy4yLDguOSAzNy4yLDcuMyAiLz48Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSIzNiIgY3k9IjM0LjUiIHI9IjguNSIvPjwvc3ZnPg==";
        if (BPc == 8) //White RookL
        {
            imgPW = imgRNW;
            Rook();
            whatP = roL;
        }
        //imgPW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7ZmlsbDojRkZGRkZGO3N0cm9rZTojOUUwRUMxO3N0cm9rZS13aWR0aDo1O30uc3Q3e2ZpbGw6I0ZGMDAwMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzOWgyN3YtM0g5VjM5eiBNMTIsMzZ2LTRoMjF2NEgxMnogTTExLDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNCwxNGwtMywzSDE0bC0zLTMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMzEsMTd2MTIuNUgxNFYxNyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMSwyOS41bDEuNSwyLjVoLTIwbDEuNS0yLjUiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTEsMTRoMjMiLz48L2c+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIyMi41LDQuMyA1LjMsMzkuNSAzOS44LDM5LjUgIi8+PHJlY3QgeD0iOSIgeT0iNS41IiBjbGFzcz0ic3Q2IiB3aWR0aD0iMjciIGhlaWdodD0iMzUiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNiIgY3k9IjM0LjUiIHI9IjguNSIvPjwvc3ZnPg==";
        if (BPc == 9) //Black bishop
        {
            imgPW = imgBB;
            Bishop();
            whatP = biK;
        }
        if (BPc == 10) //Black queen
        {
            imgPW = imgQB;
            Queen();
            whatP = qK;
        }
        if (BPc == 11) //Black king
        {
            imgPW = imgKiB;
            King();
            whatP = kingK;
        }
        if (BPc == 12) //Black pawnW
        {
            imgPW = imgPaB;
            if (By == 1) By = 2;
            if (By == 8) By = 7;
            whatP = pFK;
            if (keyORnot == 0) {
                PawnST();
            } else {
                PawnW();
            }
        }
        if (BPc == 13) //Black pawnL
        {
            imgPW = imgPaB;
            if (By == 1) By = 2;
            if (By == 8) By = 7;
            if (Bx == 1) Bx = 2;
            whatP = pLK;
            if (keyORnot == 0) {
                PawnST();
            } else {
                PawnL();
            }
        }
        if (BPc == 14) //Black pawnR
        {
            imgPW = imgPaB;
            if (By == 1) By = 2;
            if (By == 8) By = 7;
            if (Bx == 8) Bx = 7;
            whatP = pRK;
            if (keyORnot == 0) {
                PawnST();
            } else {
                PawnR();
            }
        }
        if (BPc == 15) //Black KnightL
        {
            imgPW = imgKNB;
            Knight();
            whatP = knL;
        }
        //imgPW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntkaXNwbGF5OmlubGluZTtmaWxsOiNFQ0VDRUM7c3Ryb2tlOiNFQ0VDRUM7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDN7ZGlzcGxheTppbmxpbmU7ZmlsbDojRUNFQ0VDO30uc3Q0e2Rpc3BsYXk6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0NXtzdHJva2U6IzMxQTgwMDtzdHJva2Utd2lkdGg6My4yMDc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q2e2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzBEMjYwMDtzdHJva2Utd2lkdGg6MS4wNzA5O3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Q3e3N0cm9rZTojM0JBQTAwO3N0cm9rZS13aWR0aDoxLjg3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LnN0OHtmaWxsOiNGRjAwMDA7fTwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLjQsMzYuMWMtMTAuNS0xLTE2LjUtOC0xNi0yOWgyM2MwLDktMTAsNi41LTgsMjEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjAuNCwyOC4xYy0wLjQtMi45LDUuNS03LjQsOC05YzMtMiwyLjgtNC4zLDUtNGMxLDAuOS0xLjQsMywwLDNjMSwwLTAuMi0xLjIsMS0yYzEsMCw0LTEsNCw0YzAsMi02LDEyLTYsMTJzLTEuOSwxLjktMiwzLjVjMC43LDEsMC41LDIsMC41LDNjLTEsMS0zLTIuNS0zLTIuNWgtMmMwLDAtMC44LDItMi41LDNjLTEsMC0xLTMtMS0zIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTM0LjgsMjAuNmMwLTAuMywwLjItMC41LDAuNS0wLjVjMC4zLDAsMC41LDAuMiwwLjUsMC41cy0wLjIsMC41LTAuNSwwLjVDMzUsMjEuMSwzNC44LDIwLjksMzQuOCwyMC42eiBNMjkuNSwzMC40YzAuNC0wLjcsMC45LTEuMiwxLjItMS4xYzAuMiwwLjEsMC4xLDAuOC0wLjMsMS41bDAsMGMtMC40LDAuNy0wLjksMS4yLTEuMiwxLjFDMjguOSwzMS44LDI5LDMxLjEsMjkuNSwzMC40TDI5LjUsMzAuNHoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTkuOSwzNS43bDAuNS0xLjRsLTAuNS0wLjFjLTMuMS0xLTUuNi0yLjUtNy45LTYuOFM4LjYsMTcuMSw5LjEsNy4yVjYuN0g2Ljh2MC41QzYuMywxNy4zLDcuOCwyNCwxMC4xLDI4LjVzNS44LDYuNiw5LjIsNy4yQzE5LjMsMzUuNiwxOS44LDM1LjcsMTkuOSwzNS43eiIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjM3LjIsMzcuMiA1LjgsMzcuMiA1LjgsNS43IDIyLjMsNS43IDIyLjMsMjIuMSAzNy4yLDIyLjEgIi8+PHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIxOC41LDQuOSA2LjEsNC45IDYuMSw0MC45IDQwLjIsNDAuOSA0MC4yLDI1LjEgMzQsMjUuMSAzNCwzMC41IDIwLjgsMzAuNSAyMC44LDQuOSAiLz48cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjE4LjUsNi4xIDYuMSw2LjEgNi4xLDQwLjEgNDAuMSw0MC4xIDQwLjEsMjUuMiAzNCwyNS4yIDM0LDMwLjMgMjAuOCwzMC4zIDIwLjgsNi4xICIvPjxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMzguOSwzOC44IDM4LjksMjYuNiAzNS4zLDI2LjYgMzUuMywzMS40IDE5LjQsMzEuNCAxOS40LDcuMyA3LjIsNy4zIDcuMiwzNy4yIDcuMiwzOC44ICIvPjxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjM2LjUiIGN5PSIzNi41IiByPSI4LjUiLz48L3N2Zz4=";
        if (BPc == 16) //Black RookL
        {
            imgPW = imgRNB;
            Rook();
            whatP = roL;
        }
        if (BPc == 17) //Black KnightR
        {
            imgPW = imgKB;
            Knight();
            whatP = knR;
        }
        if (BPc == 18) //Black RookR
        {
            imgPW = imgRB;
            Rook();
            whatP = roR;
        }
        if (BPc == 19) //White knightR
        {
            imgPW = imgKW;
            Knight();
            whatP = knR;
        }
        if (BPc == 20) //White RookR
        {
            imgPW = imgRW;
            Rook();
            whatP = roR;
        }
        //imgPW.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2Rpc3BsYXk6bm9uZTt9LnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qze2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O30uc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Q1e2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGQzAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5zdDZ7c3Ryb2tlOiNDRDAwRkY7c3Ryb2tlLXdpZHRoOjIuMTE4O30uc3Q3e2ZpbGw6I0ZGMDAwMDt9PC9zdHlsZT48ZyBjbGFzcz0ic3QwIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzcuOCwzNlY5aC0zdjI3SDM3Ljh6IE0zNC44LDMzaC00VjEyaDRWMzN6IE0xMi44LDM0aC01di00aDJ2LTVoLTJ2LTVoMnYtNWgtMnYtNGg1Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTEyLjgsMTFsMywzdjE3bC0zLDMiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTUuOCwxNGgxMi41djE3SDE1LjgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjguMywxNGwyLjUtMS41djIwTDI4LjMsMzEiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTIuOCwzNFYxMSIvPjwvZz48cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjMuMSwyMi41IDM4LjMsMzkuOCAzOC4zLDUuMyAiLz48cmVjdCB4PSI0LjYiIHk9IjExIiBjbGFzcz0ic3Q2IiB3aWR0aD0iMzYiIGhlaWdodD0iMjMiLz48Y2lyY2xlIGNsYXNzPSJzdDciIGN4PSIzNi41IiBjeT0iMzYuNSIgcj0iOC41Ii8+PC9zdmc+";
        /*
                 if (BPc == 1) //White bishop
                 {
        Bishop();
                 }

                 if (BPc == 2) //White queen
                 {
        Queen();
                 }
                 if (BPc == 3) //White king
                 {
        King();
                 }
                 if (BPc == 4) //White pawnW
                 {

                     if (By == 1)
                             By = 2;
                     if (By == 8)
                             By = 7;
                     PawnW();
                 }
                 if (BPc == 5) //White pawnL
                 {

                                  if (By == 1)
                             By = 2;
                     if (By == 8)
                             By = 7;
                     if (Bx == 1)
                         Bx = 2;
                     PawnL();
                 }
                 if (BPc == 6) //White pawnR
                 {
                                  if (By == 1)
                             By = 2;
                     if (By == 8)
                             By = 7;
                     if (Bx == 8)
                         Bx = 7;
        PawnR();
                 }
                 if (BPc == 7) //White knightL
                 {
        Knight();
                 }
                 if (BPc == 8) //White knightR
                 {
        Knight();
                 }
                 if (BPc == 9) //White RookL
                 {
        Rook();
                 }
                 if (BPc == 10) //White RookR
                 {
        Rook();
                 }
                 if (BPc == 11) //Black bishop
                 {
        Bishop();
                 }
                 if (BPc == 12) //Black queen
                 {
        Queen();
                 }
                 if (BPc == 13) //Black king
                 {
        King();
                 }
                 if (BPc == 14) //Black pawnW
                 {

                                  if (By == 1)
                             By = 2;
                     if (By == 8)
                             By = 7;
          PawnW();
                 }
                 if (BPc == 15) //Black pawnL
                 {

                                  if (By == 1)
                             By = 2;
                     if (By == 8)
                             By = 7;
                     if (Bx == 1)
                         Bx = 2;
        PawnL();
                 }
                 if (BPc == 16) //Black pawnR
                 {
                                  if (By == 1)
                             By = 2;
                     if (By == 8)
                             By = 7;
                     if (Bx == 8)
                         Bx = 7;
        PawnR();
                 }
                 if (BPc == 17) //Black KnightL
                 {
        Knight();
                 }
                 if (BPc == 18) //Black KnightR
                 {
        Knight();
                 }
                 if (BPc == 19) //Black RookL
                 {
        Rook();
                 }
                 if (BPc == 20) //Black RookR
                 {
        Rook();
                 }

                 */
        context1.beginPath();
        //console.log(Bx,By);
        context1.drawImage(imgPW, (Bx - 1) * (sqsize) + x0, ((9 - By) - 1) * (sqsize) + y0, sqsize, sqsize);
        context1.closePath();
        //   console.log(BPc);
    }

    function DrawApiece() {
        context1.clearRect(0, 0, canvas1.width, canvas1.height);
        context1.beginPath();
        //console.log(Bx,By);
        context1.drawImage(imgPW, (Bx - 1) * (sqsize) + x0, ((9 - By) - 1) * (sqsize) + y0, sqsize, sqsize);
        context1.closePath();
    }
    var destX, destY;

    function drawDest(Dx, Dy) {
        context1.beginPath();
        context1.rect((Dx - 1) * (sqsize) + x0, ((9 - Dy) - 1) * (sqsize) + y0, sqsize, sqsize);
        destX = Dx;
        destY = Dy;
        context1.fillStyle = 'blue';
        context1.closePath();
        context1.fill();
    }
    var ImRefr = new Image();
    ImRefr.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojQzEwMEM2O308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MS4zLDQuOHYyMC41SDQwLjlsLTIuNCwwbDEuNy0xLjdsNi02Yy0wLjQtMC40LTAuOC0wLjctMS4yLTEuMWMtMC42LTAuNS0xLjItMC45LTEuOC0xLjNsMCwwYy0zLjEtMi02LjktMy4yLTEwLjktMy4yaDB2MGMtNS41LDAtMTAuNSwyLjItMTQuMSw1LjljLTMuNiwzLjYtNS45LDguNi01LjksMTQuMWgwdjBoMGMwLDUuNSwyLjIsMTAuNSw1LjksMTQuMWMzLjYsMy42LDguNiw1LjksMTQuMSw1Ljl2MGgwdjBjMS45LDAsMy44LTAuMyw1LjctMC44djBjMS0wLjMsMi0wLjcsMy0xLjJjNC45LTIuNCw4LjctNi43LDEwLjQtMTEuOWwwLjItMC43aDEyLjNsLTAuMiwxLjJsMCwwdjBjLTAuNCwyLTEsNC0xLjgsNS45djBjLTAuOCwxLjktMS44LDMuNi0yLjksNS4zQzUzLjEsNTguNCw0My4zLDY0LDMyLjIsNjRoMHYwYy04LjgsMC0xNi44LTMuNi0yMi42LTkuNHYwQzMuOCw0OC44LDAuMiw0MC44LDAuMiwzMmgwdjBoMGMwLTguOCwzLjYtMTYuOCw5LjQtMjIuNmwwLDBDMTUuNCwzLjYsMjMuNCwwLDMyLjIsMHYwaDB2MGM0LjUsMCw4LjksMSwxMi44LDIuN2MwLjYsMC4zLDEuMywwLjYsMS45LDAuOWMyLjksMS41LDUuNSwzLjQsNy43LDUuNmw1LTVsMS43LTEuN1Y0LjhMNjEuMyw0Ljh6Ii8+PC9zdmc+";
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        ImRefr.src = "https://i.imgur.com/56oVq5C.png";
    }
    var refrX, refrY;
    //function drawScore(Scr) {
    function drawScore(Scr) {
        if (indicator == 0) {
            contextS.clearRect(0, 0, canvasS.width, canvasS.height);
            contextS.beginPath();
            contextS.rect(x0 + w / 4, y0 - sqsize, w / 2, sqsize - sqsize / 6);
            // contextS.fillStyle = '#00769F';
            contextS.fillStyle = 'white';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.rect(x0 + w / 4 + 2, y0 - sqsize + 2, w / 2 - 4, sqsize - sqsize / 6 - 4);
            //  contextS.globalAlpha=(opacity)/100;
            // contextS.fillStyle = '#6BB7EF';
            contextS.fillStyle = '#003E6B';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.font = sqsize / 2.9 + "px Verdana";
            //contextS.fillStyle = '#540066';
            contextS.fillStyle = 'white';
            contextS.textAlign = "center";
            contextS.fillText("Press any key to start", x0 + w / 2, y0 - sqsize / 2 + sqsize / 12);
            contextS.closePath();
        }
        if (indicator == 1) {
            contextS.clearRect(0, 0, canvasS.width, canvasS.height);
            contextS.beginPath();
            contextS.rect(x0 + w / 4, y0 - sqsize, w / 2, sqsize - sqsize / 6);
            // contextS.fillStyle = '#00AA12';
            contextS.fillStyle = '#white';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.rect(x0 + w / 4 + 2, y0 - sqsize + 2, w / 2 - 4, sqsize - sqsize / 6 - 4);
            contextS.fillStyle = '#1F8E00';
            // contextS.fillStyle = '#135800';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.font = sqsize / 3 + "px Verdana";
            contextS.fillStyle = 'white';
            contextS.textAlign = "center";
            contextS.fillText("Excellent!", x0 + w / 2, y0 - sqsize / 2 + sqsize / 12);
            contextS.closePath();
        }
        if (indicator == 2) {
            contextS.clearRect(0, 0, canvasS.width, canvasS.height);
            contextS.beginPath();
            contextS.rect(x0 + w / 4, y0 - sqsize, w / 2, sqsize - sqsize / 6);
            // contextS.fillStyle = '#BC6900';
            contextS.fillStyle = 'white';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.rect(x0 + w / 4 + 2, y0 - sqsize + 2, w / 2 - 4, sqsize - sqsize / 6 - 4);
            //  contextS.globalAlpha=(opacity)/100;
            //contextS.fillStyle = '#9B6900';
            contextS.fillStyle = '#DA9400';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.font = sqsize / 3 + "px Verdana";
            contextS.fillStyle = 'white';
            contextS.textAlign = "center";
            contextS.fillText("Try again", x0 + w / 2, y0 - sqsize / 2 + sqsize / 12);
            contextS.closePath();
        }
        if (indicator == 3) {
            contextS.clearRect(0, 0, canvasS.width, canvasS.height);
            contextS.beginPath();
            contextS.rect(x0 + w / 4, y0 - sqsize, w / 2, sqsize - sqsize / 6);
            //  contextS.fillStyle = '#971400';
            contextS.fillStyle = 'white';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.rect(x0 + w / 4 + 2, y0 - sqsize + 2, w / 2 - 4, sqsize - sqsize / 6 - 4);
            //  contextS.globalAlpha=(opacity)/100;
            contextS.fillStyle = '#C81B00';
            //   contextS.fillStyle = '#6F0F00';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.font = sqsize / 3 + "px Verdana";
            contextS.fillStyle = 'white';
            contextS.textAlign = "center";
            contextS.fillText("Wrong", x0 + w / 2, y0 - sqsize / 2 + sqsize / 12);
            contextS.closePath();
        }
        if (indicator == 5) {
            contextS.clearRect(0, 0, canvasS.width, canvasS.height);
            contextS.beginPath();
            contextS.rect(x0 + w / 4, y0 - sqsize, w / 2, sqsize - sqsize / 6);
            // contextS.fillStyle = '#96A000';
            contextS.fillStyle = 'white';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.rect(x0 + w / 4 + 2, y0 - sqsize + 2, w / 2 - 4, sqsize - sqsize / 6 - 4);
            //  contextS.globalAlpha=(opacity)/100;
            contextS.fillStyle = '#ADB900';
            // contextS.fillStyle = '#7C8500';
            contextS.closePath();
            contextS.fill();
            contextS.beginPath();
            contextS.font = sqsize / 3 + "px Verdana";
            contextS.fillStyle = 'white';
            contextS.textAlign = "center";
            contextS.fillText("Make moves", x0 + w / 2, y0 - sqsize / 2 + sqsize / 12);
            contextS.closePath();
        }
        if (indicator == 6) {
            // contextS.clearRect(0, 0, canvasS.width, canvasS.height);
            contextS.beginPath();
            contextS.rect(x0 + w / 4 - 5, y0 - sqsize - 10, w / 2 + 10, sqsize - sqsize / 8 + 10);
            //  contextS.globalAlpha=(opacity)/100;
            contextS.fillStyle = 'Black';
            contextS.closePath();
            contextS.fill();
            /*
                contextS.beginPath();
            contextS.font = sqsize/2+"px Verdana";
                contextS.fillStyle = 'purple';
                contextS.textAlign = "center";
            contextS.fillText("Time        is out", x0+w/1.95,y0-sqsize/2+sqsize/12);
                 contextS.closePath();
                     */
            contextS.beginPath();
            //console.log(Bx,By);
            refrX = x0 + w / 2 - sqsize / 2;
            refrY = y0 - sqsize * 1.2;
            contextS.drawImage(ImRefr, refrX, refrY, sqsize, sqsize);
            contextS.closePath();
        }
        contextS.beginPath();
        contextS.font = sqsize + "px Arial";
        contextS.fillStyle = 'white';
        contextS.textAlign = "right";
        score = numOFP.toString() + "(" + tryAgaincounter.toString() + "/" + wrongCounter.toString() + ")"
        contextS.fillText(score, x0 + w+100, y0 - sqsize / 4);
        contextS.closePath();
    }
    //drawScore();
    function refresh() {
        TimeL = 30;
        numOFP = 0;
        indicator = 0;
        drawScore();
        drawTime(TimeL);
        context1.clearRect(0, 0, canvasS.width, canvasS.height);
        Bx = 0;
        wrongCounter = 0
        tryAgaincounter = 0
    }
    var TimeL = 30;
    drawTime(30);

    function Timer() {
        drawTime(TimeL);
        var timerGO = setInterval(function() {
            TimeL = (TimeL - 0.1).toFixed(1);
            if (TimeL <= 0) {
                clearInterval(timerGO);
                indicator = 6;
                //  refresh();
                drawScore();
            }
            drawTime(TimeL);
        }, 100);
    }

    function drawTime(TimeL) {
        contextT.clearRect(0, 0, canvasT.width, canvasT.height);
        contextT.beginPath();
        contextT.font = sqsize + "px Arial";
        contextT.fillStyle = 'white';
        contextT.textAlign = "left";
        contextT.fillText(TimeL, x0, y0 - sqsize / 4);
        contextT.closePath();
    }

    function Bishop() {
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX < 8) && (moveY < 8)) {
            moveX = moveX + 1;
            ArrX.push(moveX);
            moveY = moveY + 1;
            ArrY.push(moveY);
            nn = nn + 1;
            //console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX < 8) && (moveY > 1)) {
            moveX = moveX + 1;
            ArrX.push(moveX);
            moveY = moveY - 1;
            ArrY.push(moveY);
            nn = nn + 1;
            //  console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX > 1) && (moveY > 1)) {
            moveX = moveX - 1;
            ArrX.push(moveX);
            moveY = moveY - 1;
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX > 1) && (moveY < 8)) {
            moveX = moveX - 1;
            ArrX.push(moveX);
            moveY = moveY + 1;
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        var moverand = Math.floor(Math.random() * (ArrX.length - 1 + 1)) + 1;
        //  console.log(ArrX,ArrY,ArrX[moverand-1],ArrY[moverand-1],nn,moverand);
        drawDest(ArrX[moverand - 1], ArrY[moverand - 1]);
    }
    var cn = 0;

    function Queen() {
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX < 8) && (moveY < 8)) {
            moveX = moveX + 1;
            ArrX.push(moveX);
            moveY = moveY + 1;
            ArrY.push(moveY);
            nn = nn + 1;
            //console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX < 8) && (moveY > 1)) {
            moveX = moveX + 1;
            ArrX.push(moveX);
            moveY = moveY - 1;
            ArrY.push(moveY);
            nn = nn + 1;
            //   console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX > 1) && (moveY > 1)) {
            moveX = moveX - 1;
            ArrX.push(moveX);
            moveY = moveY - 1;
            ArrY.push(moveY);
            nn = nn + 1;
            //   console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while ((moveX > 1) && (moveY < 8)) {
            moveX = moveX - 1;
            ArrX.push(moveX);
            moveY = moveY + 1;
            ArrY.push(moveY);
            nn = nn + 1;
            //   console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveX > 1) {
            moveX = moveX - 1;
            ArrX.push(moveX);
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveX < 8) {
            moveX = moveX + 1;
            ArrX.push(moveX);
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveY > 1) {
            ArrX.push(moveX);
            moveY = moveY - 1;
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveY < 8) {
            ArrX.push(moveX);
            moveY = moveY + 1;
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        var moverand = Math.floor(Math.random() * (ArrX.length - 1 + 1)) + 1;
        // console.log(ArrX,ArrY,ArrX[moverand-1],ArrY[moverand-1],nn,moverand);
        drawDest(ArrX[moverand - 1], ArrY[moverand - 1]);
    };

    function King() {
        moveX = Bx + 1;
        moveY = By + 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx + 0;
        moveY = By + 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx - 1;
        moveY = By + 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx - 1;
        moveY = By;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx - 1;
        moveY = By - 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx;
        moveY = By - 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx + 1;
        moveY = By - 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx + 1;
        moveY = By;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        var moverand = Math.floor(Math.random() * (ArrX.length - 1 + 1)) + 1;
        // console.log(ArrX,ArrY,ArrX[moverand-1],ArrY[moverand-1],nn,moverand);
        drawDest(ArrX[moverand - 1], ArrY[moverand - 1]);
    };

    function PawnST() {
        ArrX.push(Bx);
        ArrY.push(By + 1);
        if (By == 2) {
            ArrX.push(Bx);
            ArrY.push(By + 2);
        }
        if (Bx < 8) {
            ArrX.push(Bx + 1);
            ArrY.push(By + 1);
        }
        if (Bx > 1) {
            ArrX.push(Bx - 1);
            ArrY.push(By + 1);
        }
        var moverand = Math.floor(Math.random() * (ArrX.length - 1 + 1)) + 1;
        console.log(ArrX, ArrY, ArrX[moverand - 1], ArrY[moverand - 1], nn, moverand);
        drawDest(ArrX[moverand - 1], ArrY[moverand - 1]);
    }

    function PawnW() {
        if (By != 2) {
            if (By == 8) By = 7;
            console.log(Bx, By);
            drawDest(Bx, By + 1);
            moverand = 30;
            ArrX[0] = Bx;
            ArrY[0] = By + 1;
        }
        if (By == 2) {
            var pnum = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            console.log(pnum);
            if (pnum > 2 || pnum < 1) pnum = 1;
            drawDest(Bx, By + pnum);
        }
    };

    function PawnL() {
        moveX = Bx - 1;
        if (moveX > 0) {
            drawDest(Bx - 1, By + 1);
            ArrX[0] = Bx - 1;
            ArrY[0] = By + 1;
        }
    };

    function PawnR() {
        moveX = Bx + 1;
        if (moveX < 9) {
            drawDest(Bx + 1, By + 1);
            ArrX[0] = Bx + 1;
            ArrY[0] = By + 1;
        }
    };

    function Knight() {
        moveX = Bx;
        moveY = By;
        moveX = Bx + 2;
        moveY = By + 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx + 1;
        moveY = By + 2;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx - 1;
        moveY = By + 2;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx - 2;
        moveY = By + 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx - 2;
        moveY = By - 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx - 1;
        moveY = By - 2;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx + 1;
        moveY = By - 2;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        moveX = Bx + 2;
        moveY = By - 1;
        if (moveX < 9 && moveX > 0 && moveY < 9 && moveY > 0) {
            ArrX.push(moveX);
            ArrY.push(moveY);
        }
        var moverand = Math.floor(Math.random() * (ArrX.length - 1 + 1)) + 1;
        //  console.log(ArrX,ArrY,ArrX[moverand-1],ArrY[moverand-1],nn,moverand);
        drawDest(ArrX[moverand - 1], ArrY[moverand - 1]);
    };

    function Rook() {
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveX > 1) {
            moveX = moveX - 1;
            ArrX.push(moveX);
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveX < 8) {
            moveX = moveX + 1;
            ArrX.push(moveX);
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveY > 1) {
            ArrX.push(moveX);
            moveY = moveY - 1;
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        while (moveY < 8) {
            ArrX.push(moveX);
            moveY = moveY + 1;
            ArrY.push(moveY);
            nn = nn + 1;
            // console.log(moveX,moveY);
            if (nn == 20) break;
        }
        moveX = Bx;
        moveY = By;
        nn = 0;
        var moverand = Math.floor(Math.random() * (ArrX.length - 1 + 1)) + 1;
        // console.log(ArrX,ArrY,ArrX[moverand-1],ArrY[moverand-1],nn,moverand);
        drawDest(ArrX[moverand - 1], ArrY[moverand - 1]);
    };
}, 100);