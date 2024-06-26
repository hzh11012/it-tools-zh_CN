import { formatDuration } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function formatMsDuration(duration: number) {
  const ms = Math.floor(duration % 1000);
  const secs = Math.floor(((duration - ms) / 1000) % 60);
  const mins = Math.floor((((duration - ms) / 1000 - secs) / 60) % 60);
  const hrs = Math.floor((((duration - ms) / 1000 - secs) / 60 - mins) / 60);

  return (
    formatDuration({
      hours: hrs,
      minutes: mins,
      seconds: secs,
    }, { locale: zhCN }) + (ms > 0 ? ` ${ms} 毫秒` : '')
  );
}
