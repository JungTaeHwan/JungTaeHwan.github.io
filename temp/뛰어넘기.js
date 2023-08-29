let prior = 3,  before= 2, answer = 0;

for (let i = 0; i < n - 2; i++) {
    answer = prior + before;
    before = prior;
    prior = answer;
}

return answer;