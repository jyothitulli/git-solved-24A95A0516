/**
 * System Monitoring Script - DevOps Simulator
 * Supports both Production and Development environments.
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000, // 1 minute
    alertThreshold: 80,
    debugMode: false,
    metricsEndpoint: 'http://localhost:8080/metrics'
  },
  development: {
    interval: 5000, // 5 seconds
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true,
    metricsEndpoint: 'http://localhost:3000/mock-metrics'
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log(`DevOps Simulator - Monitor v${ENV === 'production' ? '1.0' : '2.0-beta'}`);
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Simulated checks
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');

  if (config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
  }

  console.log('System Status: HEALTHY');
}

// Start monitoring
console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);

// Run first check immediately
checkSystemHealth();
