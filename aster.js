//
$(window).ajaxComplete( function() {
	for ( let i = 0; i < document.getElementsByClassName("row").length; i++ ) {
		if ( document.getElementsByClassName("row")[i].cells[1].innerText.indexOf("Сложный инцидент") !== -1  && document.getElementsByClassName("row")[i].cells[1].innerText >= "Сложный инцидент (00:10:00)" ) {
			document.getElementsByClassName("row")[i].setAttribute("style", "background: #f1bf4e2b; border-bottom: 1px solid #f1b4095e;") 
		} else {
			if (document.getElementsByClassName("row")[i].getAttribute("style") == "background: #f1bf4e2b; border-bottom: 1px solid #f1b4095e;" ) {
				document.getElementsByClassName("row")[i].removeAttribute("style")
			}
        }

		if ( ( document.getElementsByClassName("row")[i].cells[2].innerText !== "[+2]" && document.getElementsByClassName("row")[i].cells[2].innerText !== "[+1]" ) && document.getElementsByClassName("row")[i].cells[1].innerText.indexOf("Почта") !== -1 ) {
			document.getElementsByClassName("row")[i].cells[1].setAttribute("style", "background: url(https://image.ibb.co/gwKFh9/2135799_64.png) 121px 5px no-repeat; background-size: 14px;") 
		} else {
			if (document.getElementsByClassName("row")[i].cells[1].getAttribute("style") == "background: url(https://image.ibb.co/gwKFh9/2135799_64.png) 121px 5px no-repeat; background-size: 14px;" ) {
				document.getElementsByClassName("row")[i].cells[1].removeAttribute("style")
			}
        }

		if ( ( document.getElementsByClassName("row")[i].cells[2].innerText === "[+2]" || document.getElementsByClassName("row")[i].cells[2].innerText === "[+1]" || document.getElementsByClassName("row")[i].cells[2].innerText === "[–1]" || document.getElementsByClassName("row")[i].cells[2].innerText === "[–2]" ) && document.getElementsByClassName("row")[i].cells[1].innerText == "ожидание" ) {
			document.getElementsByClassName("row")[i].cells[1].setAttribute("style", "opacity: 0.3");
		}
		else  {
			if (document.getElementsByClassName("row")[i].cells[1].getAttribute("style") == "opacity: 0.3" ) {
				document.getElementsByClassName("row")[i].cells[1].removeAttribute("style") }
		}
	}
})


var ultoolbar = $(".toolbar");
$(window).ajaxComplete( function() {
	var elements = $("#agents_queues .tab:first-of-type .row") || [];
	elements = [].slice.apply(elements);

	elements.forEach(function (element, i) {
		element.addEventListener("click", function () {
			if ( $(".toolbar").length == 0 ) {
				ultoolbar.insertAfter(element) 
			} else {
				$(".toolbar").insertAfter(element); 
			}
		})
	})
})

window.onload = Notification.requestPermission();
var notificationCounter = 0;
$(window).ajaxComplete( function() {
	if ( $("#calls .row .duration").length != 0 ) {
		if ( $("#calls .row .duration")[0].innerHTML > "0:00:30" && $("#calls .row .duration").length > $("#agents_queues .tab:first-of-type .ringing").length && notificationCounter == 0 ) {
			var notification = new Notification("Звонков в очереди: " + ( $("#calls .row .duration").length - $("#agents_queues .tab:first-of-type .ringing").length ), {body: "Время выводить консультантов.", icon: "https://cdn1.savepice.ru/uploads/2018/8/23/e591704995f02414c9f875eac0148150-full.png"});
			notificationCounter++
		}
	} else { 
	notificationCounter = 0 
	}
})


$(document).ready( function createArrow() {
	$("#header").append("<img width='20px' title='Телефон супервизора' class='arrow' src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png'>");
	$( ".arrow" ).click(function() {
		$(".header").toggleClass("slide")
	})
})