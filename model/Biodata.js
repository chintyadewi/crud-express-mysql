const con=require('../config/db')

module.exports = {
    get(callback) {
        con.query(`select * from biodata`, callback)
    },
    getById(id, callback) {
        con.query(`select * from biodata where id_biodata="${id}"`, callback)
    },
    create(data, callback) {
        con.query(`insert into biodata(nama, alamat) values ("${data.nama}", "${data.alamat}")`, callback)
    },
    update(id, data, callback){
        con.query(`update biodata set nama="${data.nama}", alamat="${data.alamat}" 
    where id_biodata="${id}"`,callback)
    },
    destroy(id, callback) {
        con.query(`delete from biodata where id_biodata="${id}"`, callback)
    }
}