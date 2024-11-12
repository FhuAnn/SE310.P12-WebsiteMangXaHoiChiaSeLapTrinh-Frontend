export function timeAgo(createdAt) {
    const now = new Date();
    const seconds = Math.floor((now - new Date(createdAt)) / 1000);

    const intervals = [
        { label: 'năm', seconds: 31536000 },
        { label: 'tháng', seconds: 2592000 },
        { label: 'ngày', seconds: 86400 },
        { label: 'giờ', seconds: 3600 },
        { label: 'phút', seconds: 60 },
        { label: 'giây', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count > 0) {
            return `${count} ${interval.label}${count > 1 ? '' : ''} trước`;
        }
    }

    return 'Vừa xong';
}