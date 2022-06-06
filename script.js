document.getElementById("final").style.display = "none";
setTimeout(loaded, 5000)
var fails = 0

function failadd() {
    fails++
    console.log("Fail Added!")
}

function fail() {
    document.getElementById('button11').innerHTML = '<h2 style="padding-bottom: 10px; text-align: center;" id="a10">Is solar renewable?</h2><div class="d-grid gap-2" style="padding-left: 50px; padding-right: 50px;" id="a9"><button class="btn btn-primary" type="button" onclick="go1()" id="a11">Yes ✅</button><button class="btn btn-primary" onclick="fail1()" type="button" id="a12">No ❌</button></div>'
    // document.getElementById("jsfail").style.display = "block";
    // document.getElementById("jsgood").style.display = "none";
    failadd()
    document.getElementById("q1").style.display = "none";
    const element = document.getElementById('q10');
    element.remove(); // Removes the div with the 'div-02' id
    const element11 = document.getElementById('q11');
    element11.remove(); // Removes the div with the 'div-02' id
    const element2 = document.getElementById('q12');
    element2.remove(); // Removes the div with the 'div-02' id
    const element3 = document.getElementById('q13');
    element3.remove(); // Removes the div with the 'div-02' id
    const element4 = document.getElementById('q14');
    element4.remove(); // Removes the div with the 'div-02' id
}

function loaded() {
    document.getElementById("loadeds").style.display = "none";
}

function go() {
    document.getElementById('button11').innerHTML = '<h2 style="padding-bottom: 10px; text-align: center;" id="a10">Is solar renewable?</h2><div class="d-grid gap-2" style="padding-left: 50px; padding-right: 50px;" id="a9"><button class="btn btn-primary" type="button" onclick="go1()" id="a11">Yes ✅</button><button class="btn btn-primary" onclick="fail1()" type="button" id="a12">No ❌</button></div>'
    // document.getElementById("jsfail").style.display = "block";
    // document.getElementById("jsgood").style.display = "none";
    document.getElementById("q1").style.display = "none";
    const element = document.getElementById('q10');
    element.remove(); // Removes the div with the 'div-02' id
    const element11 = document.getElementById('q11');
    element11.remove(); // Removes the div with the 'div-02' id
    const element2 = document.getElementById('q12');
    element2.remove(); // Removes the div with the 'div-02' id
    const element3 = document.getElementById('q13');
    element3.remove(); // Removes the div with the 'div-02' id
    const element4 = document.getElementById('q14');
    element4.remove(); // Removes the div with the 'div-02' id
}

function oncloses() {
    document.getElementById("final").style.display = "none";
}

function go1() {
    document.getElementById('button12').innerHTML = '<h2 style="padding-bottom: 10px; text-align: center;" id="b10">Solar works perfectly at night with no issues.</h2><div class="d-grid gap-2" style="padding-left: 50px; padding-right: 50px;" id="b9"><button class="btn btn-primary" type="button" onclick="fail2()" id="b11">True ✅</button><button class="btn btn-primary" onclick="go2()" type="button" id="b12">False ❌</button></div>'
    const element = document.getElementById('a9');
    element.remove(); // Removes the div with the 'div-02' id
    const element1 = document.getElementById('a10');
    element1.remove(); // Removes the div with the 'div-02' id
    const element2 = document.getElementById('a11');
    element2.remove(); // Removes the div with the 'div-02' id
    const element3 = document.getElementById('a12');
    element3.remove(); // Removes the div with the 'div-02' id
    const element4 = document.getElementById('button11');
    element4.remove() // Removes the div with the 'div-02' id
}

function fail1() {
    failadd()
    document.getElementById('button12').innerHTML = '<h2 style="padding-bottom: 10px; text-align: center;" id="b10">Solar works perfectly at night with no issues.</h2><div class="d-grid gap-2" style="padding-left: 50px; padding-right: 50px;" id="b9"><button class="btn btn-primary" type="button" onclick="fail2()" id="b11">True ✅</button><button class="btn btn-primary" onclick="go2()" type="button" id="b12">False ❌</button></div>'
    const element = document.getElementById('a9');
    element.remove(); // Removes the div with the 'div-02' id
    const element1 = document.getElementById('a10');
    element1.remove(); // Removes the div with the 'div-02' id
    const element2 = document.getElementById('a11');
    element2.remove(); // Removes the div with the 'div-02' id
    const element3 = document.getElementById('a12');
    element3.remove(); // Removes the div with the 'div-02' id
    const element4 = document.getElementById('button11');
    element4.remove() // Removes the div with the 'div-02' id
}

function go2() {
    scores = 3 - fails + "/3"
    document.getElementById("final").style.display = "block";
    document.getElementById('button13').innerHTML = '<h1 style="text-align: center;">Your score is: ' + scores + '</h1>'
    const element = document.getElementById('b9');
    element.remove(); // Removes the div with the 'div-02' id
    const element1 = document.getElementById('b10');
    element1.remove(); // Removes the div with the 'div-02' id
    const element2 = document.getElementById('b11');
    element2.remove(); // Removes the div with the 'div-02' id
    const element3 = document.getElementById('b12');
    element3.remove(); // Removes the div with the 'div-02' id
    const element4 = document.getElementById('button12');
    element4.remove() // Removes the div with the 'div-02' id
}

function fail2() {
    failadd()
    scores = 3 - fails + "/3"
    document.getElementById("final").style.display = "block";
    document.getElementById('button13').innerHTML = '<h1 style="text-align: center;">Your score is: ' + scores + '</h1>'
    const element = document.getElementById('b9');
    element.remove(); // Removes the div with the 'div-02' id
    const element1 = document.getElementById('b10');
    element1.remove(); // Removes the div with the 'div-02' id
    const element2 = document.getElementById('b11');
    element2.remove(); // Removes the div with the 'div-02' id
    const element3 = document.getElementById('b12');
    element3.remove(); // Removes the div with the 'div-02' id
    const element4 = document.getElementById('button12');
    element4.remove() // Removes the div with the 'div-02' id
}
