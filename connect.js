const spawn = require('child_process').spawn

var pyspawn = spawn(
    'python', ['./recommendation.py', 'Engineering Drawing']
  );

pyspawn.stdout.on('data',(data)=>{
    result=''
    result += data.toString();
var buf = JSON.stringify(data);
//   var temp = JSON.parse(buf.toString());
  console.log('buffer ',buf)
  // return res.json({status:"ok",})
})

pyspawn.stdout.on('end', () => {
    try {
        // If JSON handle the data
        console.log(JSON.parse(result));
      } catch (e) {
        // Otherwise treat as a log entry
        console.log(result);
      }
});