export default function parseDate(tdate: string) {
    const created: any = new Date(Date.parse(tdate));
    const now: any = new Date();
    const diff = Math.floor((now - created) / 1000);
    if (diff <= 1) {
      return '지금막';
    }
    if (diff < 20) {
      return diff + '초 전';
    }
    if (diff < 40) {
      return '30초 전';
    }
    if (diff <= 90) {
      return '1분 전';
    }
    if (diff <= 3540) {
      return Math.round(diff / 60) + '분 전';
    }
    if (diff <= 5400) {
      return '1시간 전';
    }
    if (diff <= 86400) {
      return Math.round(diff / 3600) + '시간 전';
    }
    if (diff <= 129600) {
      return '하루 전';
    }
    if (diff < 604800) {
      return Math.round(diff / 86400) + '일 전';
    }
    if (diff <= 777600) {
      return '일 주일 전';
    }
    const month = created.toLocaleDateString('default', { month: 'long' });
    return `on ${month} ${created.getDate()}`;
  }