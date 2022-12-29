let config = require('./config/db.js');
let tediousPromise = require('tedious-promises');
let ConnectionPool = require('tedious-connection-pool');
let pool = new ConnectionPool(config.pool, config.connect);
tediousPromise.setConnectionPool(pool);
let TYPES = require('tedious').TYPES;

console.log('Vai executar!')

let qry = "exec dbo.teste_bruno_santos @nome, @sobrenome, @email, @cod_nome, @cod_sobrenome, @cod_email";
		return tediousPromise.sql(qry)
		.parameter('nome', TYPES.VarChar, "teste nome")
        .parameter('sobrenome', TYPES.VarChar, "teste nome")
        .parameter('email', TYPES.VarChar, "teste nome")
        .parameter('cod_nome', TYPES.BigInt, 401)
        .parameter('cod_sobrenome', TYPES.BigInt, 1365)
        .parameter('cod_email', TYPES.BigInt, 1469)
		.execute()
		.then(results => {
			if (results.length > 0) {
				return {error: null, data: results[0], exists: true};
			}
			return {error: null, data: {}, exists: false};
		})
		.fail(err => {
			return {error: err, data: {}, exists: false};
		});

const teste = 'n#401#s#1365#e#1469#'

teste.includes('#')

const nova = teste.split('#')
const codNome = nova [1]

console.log(codNome)
console.log(JSON.stringify(nova))


module.exports = {
	connect: {
    	userName: 'user_trial',
    	password: '7412LIVE!@#$&*()',
    	server: 'virtual2.febracorp.org.br',
		options: {
			database: 'CONTOSO',
			encrypt: true
		}    	
    },
    pool: { // see tedious-connection-pool documentation
	    min: 2,
	    max: 4,
	    log: true
	}
};