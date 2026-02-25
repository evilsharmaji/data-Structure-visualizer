let currentStructure = null;

/* ===== STRUCTURE INFO ===== */

const structureInfo = {

array:{
code:`insert(i,x)
 shift elements
 arr[i]=x`,
time:"Access O(1), Insert O(n)",
space:"O(n)"
},

stack:{
code:`push(x)
 add to top

pop()
 remove top`,
time:"O(1)",
space:"O(n)"
},

queue:{
code:`enqueue(x)
 add rear

dequeue()
 remove front`,
time:"O(1)",
space:"O(n)"
},

linkedlist:{
code:`insert(x)
 create node
 attach

delete(x)
 adjust links`,
time:"O(n)",
space:"O(n)"
},

hash:{
code:`insert(key)
 index = hash(key)
 place bucket`,
time:"Average O(1)",
space:"O(n)"
},

bst:{
code:`insert(x)
 compare root
 go left/right`,
time:"O(log n)",
space:"O(n)"
}

};

/* ===== UPDATE PANELS ===== */

function updateAnalysis(type){

const info = structureInfo[type];

document.getElementById("codeBlock").textContent = info.code;

document.getElementById("complexity").innerHTML =
`<h3>Complexity</h3>
<p>Time: ${info.time}</p>
<p>Space: ${info.space}</p>`;
}

/* ===== VISUAL ENGINE ===== */

class Engine{
constructor(){
this.data=[];
this.canvas=document.getElementById("canvas");
this.history=document.getElementById("history");
}

render(){
this.canvas.innerHTML="";
this.data.forEach(v=>{
const n=document.createElement("div");
n.className="node";
n.textContent=v;
this.canvas.appendChild(n);
});
}

record(msg){
const d=document.createElement("div");
d.textContent=msg;
this.history.appendChild(d);
}

insert(v){
this.data.push(v);
this.record("Insert "+v);
this.render();
}

remove(){
if(this.data.length){
this.record("Delete "+this.data[this.data.length-1]);
this.data.pop();
this.render();
}
}

search(v){
this.record(this.data.includes(v)?"Found":"Not Found");
}
}

const engine = new Engine();

/* ===== CONTROLS ===== */

function loadStructure(type){
currentStructure=type;
engine.data=[];
engine.render();
updateAnalysis(type);
}

function insert(){
const v=document.getElementById("value").value;
if(v) engine.insert(v);
}

function remove(){ engine.remove(); }

function search(){
const v=document.getElementById("value").value;
engine.search(v);
}