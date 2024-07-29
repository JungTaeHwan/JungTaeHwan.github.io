function solution(plans) {

    const newPlans = plans.map(([name, start, time]) => {
        const [h, m] = start.split(':').map(Number);

        return [name, h * 60 + m, +time];
    });

    newPlans.sort((a, b) => b[1] - a[1]);

    const stack = [];
  
    while (newPlans.length) {
      const [name, time, count] = newPlans.pop();
  
      stack.forEach((val, idx) => {
        if (time < val[1]) {
            stack[idx][1] += count;
        }
      });

      stack.push([name, time + count]);
    }
  
    return stack.sort((a, b) => a[1] - b[1]).map(([val]) => val);
}