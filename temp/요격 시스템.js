// [[1, 4], [3, 7], [4, 5], [4, 8], [5, 12], [10, 14], [11, 13]]
// start: 1 end: 4     missile: 1
// start: 3 end: 4     missile: 1
// start: 4 end: 5     missile: 2
// start: 4 end: 5     missile: 2
// start: 5 end: 12     missile: 3
// start: 10 end: 12     missile: 3
// start: 11 end: 12     missile: 3

// [[11, 13], [10, 14], [5, 12], [4, 5], [4, 8], [3, 7], [1, 4]]
// start: 11 end: 13     missile: 1
// start: 11 end: 13     missile: 1
// start: 11 end: 12     missile: 1
// start: 4 end: 5     missile: 2
// start: 4 end: 5     missile: 2
// start: 4 end: 5     missile: 2
// start: 1 end: 4     missile: 3


function solution(targets){
    targets.sort((a,b) => b[0] - a[0]);

    let start, end;

    return targets.reduce((missile, [s, e], idx) => {
        if (!idx) {
            start = s;
            end = e;
            missile++;
        } else {
            if (e > start) {
                end = Math.min(end, e);
            } else if (s < end && s >= start) {
                start = Math.max(start, s);
            } else {
                start = s;
                end = e;
                missile++;
            }
        }

        return missile;
    }, 0)
}


function solution(targets) {
    targets.sort((a, b) => a[1] - b[1]);

    let count = 0, prevEnd = 0;

    for (const [start, end] of targets) {
        if (start >= prevEnd) {
            count++;
            prevEnd = end;
        }
    }

    return count;
}


// heap 구현

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] > this.heap[index][1]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let smallestIndex = index;

            if (leftIndex < this.heap.length && this.heap[leftIndex][1] < this.heap[smallestIndex][1]) {
                smallestIndex = leftIndex;
            }

            if (rightIndex < this.heap.length && this.heap[rightIndex][1] < this.heap[smallestIndex][1]) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex !== index) {
                this.swap(smallestIndex, index);
                index = smallestIndex;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size() {
        return this.heap.length;
    }
}

function solution(targets) {
    const heap = new MinHeap();
    let count = 0;
    let prevEnd = -Infinity;

    for (const [start, end] of targets) {
        heap.push([start, end]);
    }

    while (heap.size() > 0) {
        const [start, end] = heap.pop();
        if (start >= prevEnd) {
            count++;
            prevEnd = end;
        }
    }

    return count;
}


function solution(targets){
    targets.sort((a,b) => b[0] - a[0]);

    let start = Infinity;

    return targets.reduce((missile, [s, e]) => {
        if (e > start) return missile;

        if (s >= start) {
            start = Math.max(start, s);
        } else {
            start = s;
            missile++;
        }

        return missile;
    }, 0)
}


function solution(targets){
    targets.sort((a,b) => b[0] - a[0]);

    let start = Infinity;

    return targets.reduce((missile, [s, e]) => {
        if (e > start || s >= start) {
            start = Math.max(start, s);
        } else {
            start = s;
            missile++;
        }

        return missile;
    }, 0)
}