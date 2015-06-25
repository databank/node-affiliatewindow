var soap = require('soap')
var DBK_WSDL_AFFILIATEWINDOW_AFFILIATE = 'http://api.affiliatewindow.com/v4/AffiliateService?wsdl'
Affiliate = function($config) {
	this.config = $config
}
Affiliate.prototype.createClient = function(cb) {
	var $this = this
	soap.createClient(DBK_WSDL_AFFILIATEWINDOW_AFFILIATE, function(err, client) {
		if (err)
			cb(err)
		
		client.addSoapHeader({
			'UserAuthentication': {
				iId: $this.config.api_username,
				sPassword: $this.config.api_password,
				sType: 'affiliate',
				sApiKey: $this.config.api_key
			},
		})
		cb( null, client )
	})
}

Affiliate.prototype.getTransactionList = function( params, cb ) {
	this.createClient(function(err,client) {
		if (err)
			return cb(err)
		
		client.getTransactionList(params, function( err, result ) {
			if (err)
				return cb(err)

			if (!result.hasOwnProperty('getTransactionListReturn'))
				return cb({errorMessage: 'Invalid result', result: result })
			
			if (!result.getTransactionListReturn.hasOwnProperty('Transaction'))
				return cb({errorMessage: 'Invalid result', result: result })
			
			cb(null,result.getTransactionListReturn.Transaction )
		})
	})
}
module.exports =  {
	Affiliate: function($config) {
		return new Affiliate($config)
	}
}