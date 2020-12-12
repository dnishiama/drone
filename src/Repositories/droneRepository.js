var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "./src/Database/drones.sqlite"

let db = new sqlite3.Database('../Database/drones.sqlite', (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE drones (
            id integer PRIMARY KEY AUTOINCREMENT, 
            customer_image text,
            customer_name text, 
            customer_address text, 
            battery integer, 
            max_speed number, 
            average_speed number,
            status text, 
            current_fly integer)`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = "INSERT INTO drones "+
                            "(customer_image, customer_name, customer_address, battery, max_speed, average_speed, status, current_fly) "+
                            "VALUES (?,?,?,?,?,?,?,?)"   
                
                for(let i=1; i < 11; i++){
                    db.run(insert, ["https://robohash.org/"+i, "Customer "+i, "Rua "+i+", Aquarius", 95, 50.2, 22.5, "Success"])
                }
                for(let i=11; i < 21; i++){
                    db.run(insert, ["https://robohash.org/"+i, "Customer "+i, "Rua "+i+", Aquarius", 95, 50.2, 22.5, "Fail"])
                }
                for(let i=21; i < 31; i++){
                    db.run(insert, ["https://robohash.org/"+i, "Customer "+i, "Rua "+i+", Aquarius", 95, 50.2, 22.5, "Flying"])
                }
                for(let i=31; i < 41; i++){
                    db.run(insert, ["https://robohash.org/"+i, "Customer "+i, "Rua "+i+", Aquarius", 95, 50.2, 22.5, "Delayed"])
                }
                for(let i=41; i < 51; i++){
                    db.run(insert, ["https://robohash.org/"+i, "Customer "+i, "Rua "+i+", Aquarius", 95, 50.2, 22.5, "Offline"])
                }
            }
        });  
    }
});


module.exports = db