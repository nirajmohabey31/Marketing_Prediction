// function getPLAN_MONTHValue() {
//     var uiPLAN_MONTH = document.getElementsByName("uiPLAN_MONTH");
//     for(var i in uiPLAN_MONTH) {
//       if(uiPLAN_MONTH[i].checked) {
//           return parseInt(i)+1;
//       }
//     }
//     return -1; // Invalid Value
//   }
  
//   function getTARGET_IN_EAValue() {
//     var uiTARGET_IN_EA = document.getElementsByName("uiTARGET_IN_EA");
//     for(var i in uiTARGET_IN_EA) {
//       if(uiTARGET_IN_EA[i].checked) {
//           return parseInt(i)+1;
//       }
//     }
//     return -1; // Invalid Value
//   }
  
  function onClickedpredicttarget() {
    console.log("predicted target clicked");
    var PROD_CD = document.getElementById("uiPROD_CD");
    console.log(PROD_CD.value);
    var SLSMAN_CD = document.getElementById("uiSLSMAN_CD");
    console.log(SLSMAN_CD.value);
    var Month = getPLAN_MONTHValue();
    var Target = getTARGET_IN_EAValue();
    var predi = document.getElementById('uipredict');
    console.log(predi);
    var url = "http://127.0.0.1:5000/predict";

    $.post(url, {
        product: PROD_CD.value,
        salesman: SLSMAN_CD.value,
        Month: Month,
        Target_IN_EA: parseFloat(Target.value),
    },function(data, status) {
        console.log(data.predi);
        estPrice.innerHTML = "<h2>" + data.predi.toString() + " Lakh</h2>";
        console.log(status);
    });
  }

function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/product_code"; 
    $.get(url,function(data, status) {
        console.log("got response for product_code request");
        if(data) {
            var PROD_CD = data.PROD_CD;
            var uiPROD_CD = document.getElementById("uiPROD_CD");
            $('#uiPROD_CD').empty();
            for(var i in PROD_CD) {
                var opt = new Option(PROD_CD[i]);
                $('#uiPROD_CD').append(opt);
            }
        }
    });


    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/salesman_code"; 
    $.get(url,function(data, status) {
        console.log("got response for salesman_code request");
        if(data) {
            var SLSMAN_CD = data.SLSMAN_CD;
            var uiSLSMAN_CD = document.getElementById("uiSLSMAN_CD");
            $('#uiSLSMAN_CD').empty();
            for(var i in SLSMAN_CD) {
                var opt = new Option(SLSMAN_CD[i]);
                $('#uiSLSMAN_CD').append(opt);
            }
        }
    });      

  }
  
  window.onload = onPageLoad;