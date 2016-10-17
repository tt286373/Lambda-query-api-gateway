'use strict';

console.log('Loading function');
var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = (event, context, callback) => {
  
    
    let yy=parseInt(event.yy);
    let mm=parseInt(event.mm);
    let dd=parseInt(event.dd);
    let hh=parseInt(event.hh);
    let male=parseInt(event.male);
    let purple=parseInt(event.purple);
    
    var params = {
        TableName : "roomscore",
        KeyConditionExpression: "earthid = :earthid AND iid = :iid",
        ExpressionAttributeValues: {
            ":earthid": {"N": "1"},
            ":iid": {"N": "1"}
        }
    };
     let ss= "";
     let ss2= "";
     let code="";
    ddb.query(params, function(err, data) {
    if (err) console.log(err); // an error occurred
    else 
    {
        console.log(data); // successful response
      
        ss=  JSON.stringify(data);
        ss2= JSON.parse(ss);
        
        // callback(null, ss2); 
    }
});
   
    var obj = { "name": "一個物件" };    
    var str = JSON.stringify(obj);   
    ss2=JSON.parse(str);
  
    
    callback(null, ss2);  
   
};
