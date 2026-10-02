import os from 'node:os';
import process from 'node:process';

export function GET() {
  try {
    const uptime = process.uptime();
    const uptimeHours = Math.floor(uptime / 3600);
    const uptimeMinutes = Math.floor((uptime % 3600) / 60);
    const totalMem = os.totalmem() / (1024 * 1024 * 1024);
    const usedMem = totalMem - os.freemem() / (1024 * 1024 * 1024);

    return Response.json({
      ok: true,
      status: 200,
      success: true,
      statusText: `ok`,
      title: `Driver Dreamer`,
      message: `API Server Connected`,
      datetime: new Date().toLocaleString(),
      stats: {
        cpuLoad: os.loadavg()[0].toFixed(2),
        uptime: `${uptimeHours} hours, ${uptimeMinutes} minutes`,
        memoryUsage: `${usedMem.toFixed(2)} GB of ${totalMem.toFixed(2)} GB`,
      },
      ...(process.env.NODE_ENV === `development` && { routes: [`/api`, `/api/cars`] }),
    });
  } catch {
    return Response.json({ error: `Server is in Error State` }, { status: 500 });
  }
}
