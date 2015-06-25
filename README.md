[![npm page](https://nodei.co/npm/dbk-affiliatewindow.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/dbk-affiliatewindow)

# node-affiliatewindow
AffiliateWindow Affiliate Network Reports

##Installation
```
	npm install dbk-affiliatewindow
```
##Usage

```
	var $config = {
		PublisherId: 123456, // your Publisher ID
		AffiliateApiPassword: '48-char-lenght-hash',
		ProductServeAPIPassword: "32-char-length-hash" // ( V3 MD5 )
	}
	var $affw = require('dbk-affiliatewindow').Affiliate($config)

	$affw.getTransactionList({
		dStartDate: '2015-06-01T00:00:00',
		dEndDate:   '2015-06-25T23:59:59',
		sDateType: 'transaction'
	}, function(err,data) {
		console.log(err,data)
	})
```