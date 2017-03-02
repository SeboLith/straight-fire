const cluster = require("cluster");
const stopSignals = [
	"SIGHUP", "SIGINT", "SIGQUIT", "SIGILL", "SIGTRAP", "SIGABRT",
	"SIGBUS", "SIGFPE", "SIGUSR1", "SIGSEGV", "SIGUSR2", "SIGTERM"
];
const production = ( process.env.NODE_ENV === "production" );

let stopping = false;

cluster.on("disconnect", (worker) => {
	if (production) {
		if (!stopping) {
			cluster.fork();
		} else {
			process.exit(1);
		}
	}
});

if (cluster.isMaster) {

	const workerCount = process.env.NODE_CLUSTER_WORKERS || require('os').cpus().length;

	console.log(`Starting ${workerCount} workers...`);

	for (let i = 0; i < workerCount; i++) {
		cluster.fork();
	}

	cluster.on('online', (worker) => {
		console.log('Worker ' + worker.process.pid + ' is online');
	});

	if (production) {
		stopSignals.forEach((signal) => {
			process.on(signal, () => {
				console.log(`Got ${signal}, stopping workers...`);
				stopping = true;
				cluster.disconnect( () => {
					console.log("All workers stopped, exiting.");
					process.exit(0);
				});
			});
		});
	}
} else
	(production ?
	require('./server') :
	require('./dev-server'));