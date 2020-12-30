

document.getElementById("tinhTien").addEventListener("click",function(){
    var soKm = document.getElementById("soKm").value;
    // console.log(soKm);
    var thoiGianCho = document.getElementById("thoiGianCho").value;
    // console.log(thoiGianCho);
    var soTien ;
    // lấy id của raido button  
    var loaiXe = $('input[name=selector]:checked').attr('id');;
    if(soKm === ""  ||  thoiGianCho === "" ){
        document.getElementById("divThanhTien").style.display = "none";
        alert ("Vui lòng nhập thông tin !");    
    }
    else {
        var soKm = parseFloat(soKm);
        var thoiGianCho = parseFloat(thoiGianCho);
        switch(loaiXe){
            case "uberX": {
               
                if(( soKm < 1 && soKm >= 0) && thoiGianCho >= 0 ){
                     soTien = (soKm * 8000) + (thoiGianCho * 2000) ;
                }
                else if ((soKm >= 1 && soKm <= 20) && thoiGianCho >= 0 ){
                     soTien = (soKm * 12000) + (thoiGianCho * 2000) ;
                }
                else if ((soKm > 20) && thoiGianCho >= 0 ){
                    soTien = (soKm * 10000) + (thoiGianCho * 2000) ;
               }
            } break;
            case "uberSUV": {
              
                if(( soKm < 1 && soKm >= 0) && thoiGianCho >= 0 ){
                     soTien = (soKm * 9000) + (thoiGianCho * 3000) ;
                }
                else if ((soKm >= 1 && soKm <= 20) && thoiGianCho >= 0 ){
                     soTien = (soKm * 14000) + (thoiGianCho * 3000) ;
                }
                else if ((soKm > 20) && thoiGianCho >= 0 ){
                    soTien = (soKm * 12000) + (thoiGianCho * 3000) ;
               }
            } break;
            case "uberBlack": {
               
                if(( soKm < 1 && soKm >= 0) && thoiGianCho >= 0 ){
                     soTien = (soKm * 10000) + (thoiGianCho * 4000) ;
                }
                else if ((soKm >= 1 && soKm <= 20) && thoiGianCho >= 0 ){
                     soTien = (soKm * 16000) + (thoiGianCho * 4000) ;
                }
                else if ((soKm > 20) && thoiGianCho >= 0 ){
                    soTien = (soKm * 14000) + (thoiGianCho * 4000) ;
               }
            } break;
        }
        document.getElementById("divThanhTien").style.display = "block";
        document.getElementById("xuatTien").innerHTML = soTien;
    }
    // console.log(loaiXe);
    // dùng swich case để xử lý bài toán
   
    // console.log(soTien);
   
});


