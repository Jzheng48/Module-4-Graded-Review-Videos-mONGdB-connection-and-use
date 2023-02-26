exports.getData= (req, res) => 
   {
    const data = {
        course: 'IFT598',
        Grade: 'A',
        Date: '01/01/1990'
    }
    res.send(`Hello World from grade GET ${JSON.stringify(data)}`)
   }
exports.postData = (req, res) => res.send('Hello World from grade POST')
exports.putData = (req, res) => res.send('Hello World from grade POST')
exports.deleteData = (req, res) => res.send('Hello World from grade DELETE')