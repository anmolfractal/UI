d3.xml("./charts/test.xml", "application/xml", function(xml) {
 var submitted = xml.getElementsByTagName("appsSubmitted");
 var completed = xml.getElementsByTagName("appsCompleted");
 var pending = xml.getElementsByTagName("appsPending");
 var running = xml.getElementsByTagName("appsRunning");
 var failed = xml.getElementsByTagName("appsFailed");
 var killed = xml.getElementsByTagName("appsKilled");
 
 var submitted1 = submitted[0]['textContent'];
 var completed1 = completed[0]['textContent'];
 var pending1 = pending[0]['textContent'];
 var running1 = running[0]['textContent'];
 var failed1 = failed[0]['textContent'];
 var killed1 = killed[0]['textContent'];
  var filterData2 = [];
  var innerJson2 ={}
innerJson2["Submitted"]= submitted1;
innerJson2["Completed"]= completed1;
innerJson2["Pending"]= pending1;
innerJson2["Running"]= running1;
innerJson2["Failed"]= failed1;
innerJson2["Killed"]= killed1;


console.log(innerJson2);

filterData2[0]=innerJson2;

console.log(filterData2);





});