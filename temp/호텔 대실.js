function solution(book_time) {

    const bookings = book_time.map(([start, end]) => {
        const [sh, sm] = start.split(':');
        const [eh, em] = end.split(':');

        return [sh * 60 + +sm, eh * 60 + +em];
    });

    bookings.sort((a, b) => a[0] - b[0]);

    const rooms = [];
    for (const [start, end] of bookings) {
        if (!rooms.length) {
            rooms.push(end);
            continue;
        }

        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] + 10 <= start) {
                rooms[i] = end;
                break;
            }else if(i == rooms.length - 1){
                rooms.push(end);
                break;
            }
        }
    }

    return rooms.length;
}