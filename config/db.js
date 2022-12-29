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