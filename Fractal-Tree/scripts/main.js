var canvas = document.getElementById("canvas");
var cox = canvas.getContext("2d");
var width = canvas.width = window.visualViewport.width ;
var height =  canvas.height = window.visualViewport.height - Number(document.getElementById("inputs").offsetHeight)*2;
var user_angle = document.getElementById("user-angle");
var user_trunk = document.getElementById("user-trank");
var user_limit = document.getElementById("user-limit");
var user_color = document.getElementById("user-color");
var user_download = document.getElementById("download");
var p0 = {
    x: width/2,
    y: height
}

var p1 = {
    x: width/2,
    y: 0
}

var Angle = user_angle.value*(Math.PI / 180);
var trunk = Number(user_trunk.value);
cox.fillStyle = "whitesmoke";
cox.fillRect(0, 0, canvas.width, canvas.height);
cox.lineWidth = 1.5;
tree(p0 , p1 , user_limit.value)

function tree(p0 , p1 , limit){
    var dx = p1.x - p0.x
    var dy = p1.y - p0.y
    var dist = Math.sqrt((dx * dx) + (dy * dy));
    var angle = Math.atan2(dy, dx);
    var branchLength = dist * (1- trunk)


    var pa = {
        x: p0.x + dx * trunk,
        y: p0.y + dy * trunk,
    }

    var pb = {
        x: pa.x + Math.cos(angle + Angle) * branchLength,
        y: pa.y + Math.sin(angle + Angle) * branchLength,
    }
    var pc = {
        x: pa.x + Math.cos(angle - Angle) * branchLength,
        y: pa.y + Math.sin(angle - Angle) * branchLength,
    }
    cox.strokeStyle = user_color.value;
    cox.beginPath();
    cox.moveTo(p0.x , p0.y);
    cox.lineTo(pa.x,pa.y);
    cox.stroke();

    if(limit <= 0){
        cox.beginPath();
        cox.moveTo(pb.x , pb.y);
        cox.lineTo(pa.x,pa.y);
        cox.lineTo(pc.x,pc.y)
        cox.stroke();
    }else{
        tree(pa, pc , limit -1);
        tree(pa,pb , limit - 1);
    }
}

var changed_values = ()=>{
    cox.fillStyle = "whitesmoke";
    cox.fillRect(0, 0, canvas.width, canvas.height);

    Angle = user_angle.value*(Math.PI / 180);
    trunk = Number(user_trunk.value);

    tree(p0 , p1 , user_limit.value)
}

user_angle.onchange = user_limit.onchange = user_trunk.onchange =user_color.onchange = changed_values;

user_download.onclick = ()=>{
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}
