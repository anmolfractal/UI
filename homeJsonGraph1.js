d3.json('http://54.191.87.44:8088/jmx?qry=Hadoop:service=ResourceManager,name=QueueMetrics,q0=root,q1=default', function (data) {
    // Since its a csv file we need to format the data a bit.

    //Clean projectsJson data
    var fData = data;
    console.log(data);
       var  submitted = data['beans'][0]['AppsSubmitted']
       var  pending = data['beans'][0]['AppsPending']
       var  completed = data['beans'][0]['AppsCompleted']
        var  running = data['beans'][0]['AppsRunning']
    

    var filterData = [];
var innerJson ={}

innerJson["AppsSubmitted"]= submitted;
innerJson["AppsPending"]= pending;
innerJson["AppsCompleted"]= completed;
innerJson["AppsRunning"]= running;


console.log(innerJson);
yui = innerJson;
console.log(yui);

filterData[0]=yui;

    console.log(filterData);


    });
























/*            var selectedMeasure = "Openness";
            var selectedSubMeasures = {}
            for(i=0;i<person1.children.length;i++) {
               if(selectedMeasure === person1.children[i].name) {
                 for(x=0;x<person1.children[i].children.length;x++) {
                   var item = person1.children[i].children[x]
                   selectedSubMeasures[item.name.replace(' ', '_').replace('-', '_').toLowerCase()] = item.percentage
               }
           }
       }
       console.log(selectedMeasure);
       console.log(selectedSubMeasures);
*/
