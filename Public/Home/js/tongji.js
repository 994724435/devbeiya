//百度统计
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F5dd192c493a8ddd50217f61393478f3f' type='text/javascript'%3E%3C/script%3E"));

//51.la统计
//document.write('<a href="http://www.51.la/?18866278" target="_blank" title="51.La &#x7F51;&#x7AD9;&#x6D41;&#x91CF;&#x7EDF;&#x8BA1;&#x7CFB;&#x7EDF;"><img alt="51.La &#x7F51;&#x7AD9;&#x6D41;&#x91CF;&#x7EDF;&#x8BA1;&#x7CFB;&#x7EDF;" src="http://icon.51.la/icon_0.gif" style="border:none" /></a>\n');
var a6278tf = "51la"; var a6278pu = ""; var a6278pf = "51la"; var a6278su = window.location; var a6278sf = document.referrer; var a6278of = ""; var a6278op = ""; var a6278ops = 1; var a6278ot = 1; var a6278d = new Date(); var a6278color = ""; if (navigator.appName == "Netscape") { a6278color = screen.pixelDepth; } else { a6278color = screen.colorDepth; }
try { a6278tf = top.document.referrer; } catch (e) { }
try { a6278pu = window.parent.location; } catch (e) { }
try { a6278pf = window.parent.document.referrer; } catch (e) { }
try { a6278ops = document.cookie.match(new RegExp("(^| )a6278_pages=([^;]*)(;|$)")); a6278ops = (a6278ops == null) ? 1 : (parseInt(unescape((a6278ops)[2])) + 1); var a6278oe = new Date(); a6278oe.setTime(a6278oe.getTime() + 60 * 60 * 1000); document.cookie = "a6278_pages=" + a6278ops + ";path=/;expires=" + a6278oe.toGMTString(); a6278ot = document.cookie.match(new RegExp("(^| )a6278_times=([^;]*)(;|$)")); if (a6278ot == null) { a6278ot = 1; } else { a6278ot = parseInt(unescape((a6278ot)[2])); a6278ot = (a6278ops == 1) ? (a6278ot + 1) : (a6278ot); } a6278oe.setTime(a6278oe.getTime() + 365 * 24 * 60 * 60 * 1000); document.cookie = "a6278_times=" + a6278ot + ";path=/;expires=" + a6278oe.toGMTString(); } catch (e) { }
try { if (document.cookie == "") { a6278ops = -1; a6278ot = -1; } } catch (e) { }
a6278of = a6278sf; if (a6278pf !== "51la") { a6278of = a6278pf; } if (a6278tf !== "51la") { a6278of = a6278tf; } a6278op = a6278pu; try { lainframe } catch (e) { a6278op = a6278su; }
a6278src = 'http://web.51.la:82/go.asp?svid=18&id=18866278&tpages=' + a6278ops + '&ttimes=' + a6278ot + '&tzone=' + (0 - a6278d.getTimezoneOffset() / 60) + '&tcolor=' + a6278color + '&sSize=' + screen.width + ',' + screen.height + '&referrer=' + escape(a6278of) + '&vpage=' + escape(a6278op) + '&vvtime=' + a6278d.getTime();
setTimeout('a6278img = new Image;a6278img.src=a6278src;', 0);