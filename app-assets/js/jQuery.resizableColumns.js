!function(i){i.fn.resizableColumns=function(){var t=!1,n=0,e=i(this),s=i(this).find("thead").first();s.find("th").each(function(){i(this).css("position","relative"),i(this).is(":not(:last-child)")&&i(this).is(":not(.no-resize)")&&i(this).nextAll("th.no-resize").length<i(this).nextAll("th").length&&i(this).append("<div class='resizer' style='position:absolute;top:0px;right:-3px;bottom:0px;width:6px;z-index:999;background:transparent;cursor:col-resize'></div>")}),i(document).mouseup(function(i){s.find("th").removeClass("resizing"),t=!1,i.stopPropagation()}),e.find(".resizer").mousedown(function(e){0==e.button&&(s.find("th").removeClass("resizing"),i(s).find("tr:first-child th:nth-child("+(i(this).closest("th").index()+1)+") .resizer").closest("th").addClass("resizing"),n=e.pageX,t=!0),e.stopPropagation()}).click(function(i){return!1}),e.mousemove(function(i){if(t){var e=s.find("th.resizing .resizer");if(1==e.length){var o=s.find("th.resizing + th");o.hasClass("no-resize")&&(o=o.next("th:not(.no-resize)"));var r=(i.pageX||0)-n,h=e.closest("th").innerWidth()+r,a=o.innerWidth()-r;0!=n&&0!=r&&h>50&&a>50&&(e.closest("th").innerWidth(h),n=i.pageX,o.innerWidth(a))}}})}}(jQuery);