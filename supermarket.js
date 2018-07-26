function queueTime(customers, n) {
    let totalTime = 0;
    while (customers.length > 0) {
        if (n > customers.length) {
            for (let i = 0; i < customers.length; i++) {
                customers[i]--;
            }
        } else {
            for (let i = 0; i < n; i++) {
                customers[i]--;
            }
        }
        totalTime++;
        customers = customers.filter(customer => customer !== 0);
    }
    return totalTime;
}
console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);