

document.getElementById("tinhTien").addEventListener("click", function () {

     // console.log(loaiXe);
     // dùng swich case để xử lý bài toán

     // console.log(soTien);
     TinhTien();

});

function TinhTien() {
     var soKm = document.getElementById("soKm").value;
     // console.log(soKm);
     var thoiGianCho = document.getElementById("thoiGianCho").value;
     // console.log(thoiGianCho);
     var soTien;
     // lấy id của raido button  
     var loaiXe = $('input[name=selector]:checked').attr('id');;
     if (soKm === "" || thoiGianCho === "") {
          document.getElementById("divThanhTien").style.display = "none";
          alert("Vui lòng nhập thông tin !");
     }
     else {
          var soKm = parseFloat(soKm);
          var thoiGianCho = parseFloat(thoiGianCho);
          switch (loaiXe) {
               case "uberX": {

                    if ((soKm <= 1 && soKm >= 0) && thoiGianCho >= 0) {
                         soTien = soKm * 8000 + (thoiGianCho * 2000);
                    }
                    else if ((soKm > 1 && soKm <= 20) && thoiGianCho >= 0) {
                         soTien = 1 * 8000 + (soKm - 1) * 12000 + thoiGianCho * 2000;
                    }
                    else if ((soKm > 20) && thoiGianCho >= 0) {
                         soTien = 1 * 8000 + 20 * 12000 + (soKm - 21) * 10000 + (thoiGianCho * 2000);
                    }
               } break;
               case "uberSUV": {

                    if ((soKm <= 1 && soKm >= 0) && thoiGianCho >= 0) {
                         soTien = soKm * 9000 + (thoiGianCho * 3000);
                    }
                    else if ((soKm > 1 && soKm <= 20) && thoiGianCho >= 0) {
                         soTien = 1 * 9000 + (soKm - 1) * 14000 + thoiGianCho * 3000;
                    }
                    else if ((soKm > 20) && thoiGianCho >= 0) {
                         soTien = 1 * 9000 + 20 * 12000 + (soKm - 21) * 12000 + (thoiGianCho * 3000);
                    }
               } break;
               case "uberBlack": {
                    if ((soKm <= 1 && soKm >= 0) && thoiGianCho >= 0) {
                         soTien = soKm * 10000 + (thoiGianCho * 4000);
                    }
                    else if ((soKm > 1 && soKm <= 20) && thoiGianCho >= 0) {
                         soTien = 1 * 10000 + (soKm - 1) * 16000 + thoiGianCho * 4000;
                    }
                    else if ((soKm > 20) && thoiGianCho >= 0) {
                         soTien = 1 * 10000 + 20 * 16000 + (soKm - 21) * 14000 + (thoiGianCho * 4000);
                    }
               } break;
          }
          document.getElementById("divThanhTien").style.display = "block";
     }
     return tien = document.getElementById("xuatTien").innerHTML = soTien;

}
function vali() {
     var soKm = document.getElementById("soKm").value;
     // console.log(soKm);
     var thoiGianCho = document.getElementById("thoiGianCho").value;
     if (soKm === "" || thoiGianCho === "") {
          document.getElementById("divThanhTien").style.display = "none";
          alert("Vui lòng nhập thông tin !");
     }
}
document.getElementById("in").addEventListener("click", function () {

     var soKm = document.getElementById("soKm").value;
     // console.log(soKm);
     var thoiGianCho = document.getElementById("thoiGianCho").value;
     (soKm == "" || thoiGianCho == "") ? (vali()) : (taoBang());
});
function taoBang() {
     // TinhTien();
     var soKm = document.getElementById("soKm").value;
     // console.log(soKm);
     var thoiGianCho = document.getElementById("thoiGianCho").value;
     // console.log(thoiGianCho);
     var soTien;
     // lấy id của raido button  
     var loaiXe = $('input[name=selector]:checked').attr('id');;
     // foreach
     // callback function có 2 tham số 
     // item đại diện cho từng phần tử
     // i từ số chỉ mục
     // getEle("tableDanhSach").innerHTML = "";
     // tạo dòng
     var tagTR1 = document.createElement("tr");


     var tagTD_LoaiXe = document.createElement("td");
     var tagTD_SoKm = document.createElement("td");
     var tagTD_TG = document.createElement("td");

     var tagTD_DonGia = document.createElement("td");
     var tagTD_SoTien = document.createElement("td");
     tagTD_SoTien.style.background = "#6ee46e";  // gán content
     tagTD_LoaiXe.innerHTML = loaiXe;
     tagTD_SoKm.innerHTML = soKm + " km";
     tagTD_TG.innerHTML = thoiGianCho + " phút";



     // if (loaiXe == "uberX" && soKm <= 1) {
     // }
     // else if (loaiXe == "uberSUV") {
     //      tagTD_DonGia.innerHTML = "10000";

     // }
     // else {
     //      tagTD_DonGia.innerHTML = "14000";
     // }

     switch (loaiXe) {
          case "uberX": {

               if ((soKm <= 1 && soKm >= 0) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "8000" + " đ";

                    tagTD_SoTien.innerHTML = soTien = soKm * 8000 + (thoiGianCho * 2000) + " đ";
               }
               else if ((soKm > 1 && soKm <= 20) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "12000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = 1 * 8000 + (soKm - 1) * 12000 + thoiGianCho * 2000 + " đ";

               }
               else if ((soKm > 20) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "10000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = 1 * 8000 + 20 * 12000 + (soKm - 21) * 10000 + (thoiGianCho * 2000) + " đ";

               }
          } break;
          case "uberSUV": {

               if ((soKm <= 1 && soKm >= 0) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "9000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = soKm * 9000 + (thoiGianCho * 3000) + " đ";

               }
               else if ((soKm > 1 && soKm <= 20) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "14000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = 1 * 9000 + (soKm - 1) * 14000 + thoiGianCho * 3000 + " đ";

               }
               else if ((soKm > 20) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "12000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = 1 * 9000 + 20 * 14000 + (soKm - 21) * 12000 + (thoiGianCho * 3000) + " đ";

               }
          } break;
          case "uberBlack": {
               if ((soKm <= 1 && soKm >= 0) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "10000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = 1 * 10000 + (soKm - 1) * 16000 + thoiGianCho * 4000 + " đ";
                    tagTD_SoTien.innerHTML = soTien = soKm * 10000 + (thoiGianCho * 4000);

               }
               else if ((soKm > 1 && soKm <= 20) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "16000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = 1 * 10000 + (soKm - 1) * 16000 + thoiGianCho * 4000 + " đ";

               }
               else if ((soKm > 20) && thoiGianCho >= 0) {
                    tagTD_DonGia.innerHTML = "14000" + " đ";
                    tagTD_SoTien.innerHTML = soTien = 1 * 10000 + 20 * 16000 + (soKm - 21) * 14000 + (thoiGianCho * 4000) + " đ";

               }
          } break;
     }
     // appened 5 cột vào dòng 
     tagTR1.appendChild(tagTD_LoaiXe);
     tagTR1.appendChild(tagTD_SoKm);
     tagTR1.appendChild(tagTD_TG);
     tagTR1.appendChild(tagTD_DonGia);
     tagTR1.appendChild(tagTD_SoTien);




     // appened dòng vào tbody

     document.getElementById("inhoadon").appendChild(tagTR1);



}

