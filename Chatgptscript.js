javascript:(function(){
    var c = document.createElement('div');
    c.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#2e2e2e;color:white;z-index:10000;font-family:sans-serif';

    var s = document.createElement('div');
    s.style = 'width:250px;height:100%;background:#ff5e5e;padding:20px;float:left';
    var t = document.createElement('h1');
    t.innerText = 'car axle v9';
    s.appendChild(t);

    var m = ['games','exploits','scripts','pocket browser','console','client / tab cloak','credits'];
    var ul = document.createElement('ul');
    ul.style = 'list-style:none;padding:0';
    m.forEach(function(i){
        var li = document.createElement('li');
        li.style = 'margin-bottom:10px';
        var a = document.createElement('a');
        a.href = '#';
        a.style = 'color:white;text-decoration:none;font-size:18px';
        a.innerText = i;
        li.appendChild(a);
        ul.appendChild(li);
    });
    s.appendChild(ul);
    c.appendChild(s);

    var mc = document.createElement('div');
    mc.style = 'margin-left:270px;padding:20px';
    var h = document.createElement('div');
    h.style = 'background:#333;padding:10px 20px;display:flex;justify-content:space-between;align-items:center';
    var ht = document.createElement('h2');
    ht.innerText = 'scripts';
    var p = document.createElement('p');
    p.innerText = 'yoooo (change description)';
    var controls = document.createElement('div');
    controls.style = 'display:flex;gap:10px';

    var close = document.createElement('div');
    close.style = 'width:20px;height:20px;background:white;border-radius:3px;cursor:pointer';
    close.innerText = '×';
    close.style.textAlign = 'center';
    close.onclick = function() { document.body.removeChild(c); localStorage.setItem('guiVisible', 'false'); };

    var minimize = document.createElement('div');
    minimize.style = 'width:20px;height:20px;background:white;border-radius:3px;cursor:pointer';
    minimize.innerText = '−';
    minimize.style.textAlign = 'center';
    minimize.onclick = function() { mc.style.display = (mc.style.display === 'none') ? 'block' : 'none'; };

    controls.appendChild(minimize);
    controls.appendChild(close);
    h.appendChild(ht);
    h.appendChild(p);
    h.appendChild(controls);
    mc.appendChild(h);

    var consoleSection = document.createElement('div');
    consoleSection.style = 'background:#444;padding:20px;border-radius:10px;display:none';
    var consoleTitle = document.createElement('h3');
    consoleTitle.innerText = 'Console';
    consoleSection.appendChild(consoleTitle);
    
    var consoleInput = document.createElement('input');
    consoleInput.style = 'width:80%;padding:10px;border-radius:5px;margin-bottom:10px;border:none;background:#333;color:white';
    consoleInput.placeholder = 'Enter JavaScript code here...';
    consoleSection.appendChild(consoleInput);
    
    var executeButton = document.createElement('button');
    executeButton.innerText = 'Execute';
    executeButton.style = 'padding:10px;border-radius:5px;background:#ff5e5e;color:white;border:none;margin-left:10px';
    executeButton.onclick = function() {
        try { eval(consoleInput.value); } 
        catch (e) { alert("Error: " + e.message); }
    };
    consoleSection.appendChild(executeButton);
    mc.appendChild(consoleSection);

    var sl = document.createElement('div');
    sl.style = 'background:#444;padding:20px;border-radius:10px';
    var st = document.createElement('h3');
    st.innerText = 'Available Scripts';
    sl.appendChild(st);
    var sc = [
        {name:'Google Snake', url:'javascript:req=new XMLHttpRequest();req.open("GET","https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeMouseMode/main/mouse.js");req.onload=function(){(1,eval)(this.responseText);};req.send();'},
        {name:'Blooket Gui', url:'https://raw.githubusercontent.com/ZenozYTx/Randomtest/refs/heads/main/Random'},
        {name:'Run Custom Script', url:'https://raw.githubusercontent.com/ZenozYTx/Randomtest/refs/heads/main/Chatgptscript.js'}
    ];
    sc.forEach(function(si) {
        var sitem = document.createElement('div');
        sitem.style = 'background:#555;padding:10px;margin-bottom:10px;border-radius:5px';
        sitem.innerText = si.name;
        sitem.onclick = function() {
            eval(si.url);
        };
        sl.appendChild(sitem);
    });
    mc.appendChild(sl);
    c.appendChild(mc);
    document.body.appendChild(c);
    
    if (localStorage.getItem('guiVisible') !== 'false') {
        document.body.appendChild(c);
    }

    c.addEventListener('click', function(e) {
        if (e.target === c) {
            document.body.removeChild(c);
            localStorage.setItem('guiVisible', 'false'); // Store state when GUI is closed
        }
    });

    document.querySelectorAll('a').forEach(function(a, index) {
        a.onclick = function() {
            if (index === 4) { // Console button
                consoleSection.style.display = (consoleSection.style.display === 'none') ? 'block' : 'none';
            }
        };
    });
})();
