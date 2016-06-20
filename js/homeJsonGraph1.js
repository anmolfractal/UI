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
var innerJson1 ={}
var innerJson2 ={}
var innerJson3 ={}
var innerJson4 ={}

innerJson1["Status"]= "submitted";
innerJson1["Value"]= submitted;
/*olly = innerJson1;
console.log(olly);
*/
innerJson2["Status"]= "pending";
innerJson2["Value"]= pending;

innerJson3["Status"]= "completed";
innerJson3["Value"]= completed;

innerJson4["Status"]= "running";
innerJson4["Value"]= running;

filterData[0] = innerJson1;
filterData[1] = innerJson2;
filterData[2] = innerJson3;
filterData[3] = innerJson4;

console.log(filterData);

    });
