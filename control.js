function v1(){
    /*background-color: rgb(0, 255, 21,0.2);
    border:1px solid rgb(0, 255, 21); */

	   document.getElementById("proceso_item12").style.background="rgb(0, 255, 21,0.5)";

       proceso_item12_p.innerText="ON";
       document.getElementById("proceso_item12_p").style.background="rgb(0, 255, 21,0.2)";

}

function v2(){

	   document.getElementById("proceso_item22").style.background="rgb(0, 255, 21,0.2)";

       proceso_item22_p.innerText="ON";
       document.getElementById("proceso_item22_p").style.background="rgb(0, 255, 21,0.2)";

}

function v3(){

    document.getElementById("proceso_item24").style.background="rgb(0, 255, 21,0.2)";

    proceso_item24_p.innerText="ON";
    document.getElementById("proceso_item24_p").style.background="rgb(0, 255, 21,0.2)";

}

function v4(){

    document.getElementById("proceso_item26").style.background="rgb(0, 255, 21,0.2)";

    proceso_item26_p.innerText="ON";
    document.getElementById("proceso_item26_p").style.background="rgb(0, 255, 21,0.2)";

}

function v5(){

    document.getElementById("proceso_item28").style.background="rgb(0, 255, 21,0.2)";

    proceso_item28_p.innerText="ON";
    document.getElementById("proceso_item28_p").style.background="rgb(0, 255, 21,0.2)";

}

function v6(){

    document.getElementById("proceso_item31").style.background="rgb(0, 255, 21,0.2)";

    proceso_item31_p.innerText="ON";
    document.getElementById("proceso_item31_p").style.background="rgb(0, 255, 21,0.2)";

}


function v7(){

    document.getElementById("proceso_item32").style.background="rgb(0, 255, 21,0.2)";

    proceso_item32_p.innerText="ON";
    document.getElementById("proceso_item32_p").style.background="rgb(0, 255, 21,0.2)";

}


function b1(){
    document.getElementById("proceso_item21").style.background="rgb(0, 255, 21,0.2)";

    proceso_item21_p.innerText="ON";
    document.getElementById("proceso_item21_p").style.background="rgb(0, 255, 21,0.2)";

}

function b2(){
    document.getElementById("proceso_item25").style.background="rgb(0, 255, 21,0.2)";

    proceso_item25_p.innerText="ON";
    document.getElementById("proceso_item25_p").style.background="rgb(0, 255, 21,0.2)";

}









function paro(){/*
    background-color: rgba(255, 0, 0, .2) ;
    border:1px solid rgb(255, 0, 0);*/
    document.getElementById("proceso_item12").style.background="rgba(255, 0, 0, .2)";
    document.getElementById("proceso_item12_p").style.background="rgba(255, 0, 0, .2)";
    proceso_item12_p.innerText="OFF";

    document.getElementById("proceso_item22").style.background="rgba(255, 0, 0, .2)";
    document.getElementById("proceso_item22_p").style.background="rgba(255, 0, 0, .2)";
    proceso_item22_p.innerText="OFF";

    document.getElementById("proceso_item24").style.background="rgba(255, 0, 0, .2)";
    document.getElementById("proceso_item24_p").style.background="rgba(255, 0, 0, .2)";
    proceso_item24_p.innerText="OFF";

    document.getElementById("proceso_item26").style.background="rgba(255, 0, 0, .2)";
    document.getElementById("proceso_item26_p").style.background="rgba(255, 0, 0, .2)";
    proceso_item26_p.innerText="OFF";

    document.getElementById("proceso_item28").style.background="rgba(255, 0, 0, .2)";
    document.getElementById("proceso_item28_p").style.background="rgba(255, 0, 0, .2)";
    proceso_item28_p.innerText="OFF";

    document.getElementById("proceso_item31").style.background="rgba(255, 0, 0, .2)";
    document.getElementById("proceso_item31_p").style.background="rgba(255, 0, 0, .2)";
    proceso_item31_p.innerText="OFF";

    document.getElementById("proceso_item32").style.background="rgba(255, 0, 0, .2)";
    document.getElementById("proceso_item32_p").style.background="rgba(255, 0, 0, .2)";
    proceso_item32_p.innerText="OFF";

}


function marcha(){
    proceso_item12_p.innerText="OFF";
    proceso_item22_p.innerText="OFF";
    proceso_item24_p.innerText="OFF";
    proceso_item26_p.innerText="OFF";
    proceso_item28_p.innerText="OFF";
    proceso_item31_p.innerText="OFF";
    proceso_item32_p.innerText="OFF";
    proceso_item21_p.innerText="OFF";
    proceso_item25_p.innerText="OFF";
}


function setpoint1(){
    const s=document.getElementById("s1");
    const sV=s.value;
    setpoint1_p.innerText=sV;

}

function setpoint2(){
    const s=document.getElementById("s2");
    const sV=s.value;
    setpoint2_p.innerText=sV;

}

function setpoint3(){
    const s=document.getElementById("s3");
    const sV=s.value;
    setpoint3_p.innerText=sV;

}