const env = (() => {
	const ENV = {
		baseURL: ''
	}
	
	switch (process.env.NODE_ENV) {
		case 'development':
			ENV.baseURL = `http://test.666.com`;
			ENV.baseEquipmentURL = `http://test.666.com`;
			ENV.www = `www`;
			break
			
		default:
			ENV.baseURL = process.env.API_ENV === 'dev' ? `http://test.666.com` : `http://666.com`;
			ENV.baseEquipmentURL = process.env.API_ENV === 'dev' ? `http://test.666.com` : `http://666.com`;
			ENV.www = process.env.API_ENV === 'dev' ? `www` : `www7`;
			
			break
	}
	
	return ENV
})()

export default env
