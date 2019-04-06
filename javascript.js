function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function calculate() {
    document.getElementById("thongbao").innerHTML="";
    document.getElementById("kq").value ="";
    if(document.getElementById("so1").value=="" || document.getElementById("so2").value=="")
    {
        // alert("Chưa điền số.");
        document.getElementById("thongbao").innerHTML="Mời nhập số";
        return;
        // break;
    } 
    var a = parseFloat(document.getElementById("so1").value);
    var b = parseFloat(document.getElementById("so2").value);
    if(isNaN(document.getElementById("so1").value-a)||isNaN(document.getElementById("so2").value-b))
    {
        document.getElementById("thongbao").innerHTML="Kí tự nhập vào không phải số";
        return;
    }
    var cacpheptinh=document.getElementsByName("toantu");
    var len=cacpheptinh.length;
    var pt="no choice";

    for (let i = 0; i < len; i++) {
        if(cacpheptinh[i].checked)
            pt=cacpheptinh[i].value;
        
    }
    // alert(pt);
    switch (pt) {
        case "Cộng":
            document.getElementById("kq").value = add(a, b);
            break;
        case "Trừ":
            document.getElementById("kq").value = sub(a, b);
            break;
        case "Nhân":
            document.getElementById("kq").value = mul(a, b);
            break;
        case "Chia":
            document.getElementById("kq").value = div(a, b);
            break;
        default:
            document.getElementById("thongbao").innerHTML="Mời nhập phép toán";
            break;
    }
}