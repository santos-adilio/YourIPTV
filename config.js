var env = process.env.NODE_ENV ? 'remote':'local';

var config = {
    addon: 'started',
}

switch (env) {
    //Public server build.
    case 'remote':
		config.port = process.env.PORT
        config.local = "https://your-iptv.vercel.app/"
        break;

    //Local sever build.
    case 'local':
		config.port = 3164
        config.local = "http://127.0.0.1:" + config.port;
        break;
}

module.exports = config;
