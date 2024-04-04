solution = lambda k, dungeons: max([solution(k - u, dungeons[:i] + dungeons[i+1:]) + 1 for i, (m, u) in enumerate(dungeons) if k >= m] or [0])

def solution(k, dungeons):
    if not dungeons or k <= 0:
        return 0
    
    max_clearance = 0
    
    for i, (condition, Fatigue) in enumerate(dungeons):
        if k >= condition:
            clearance = solution(k - Fatigue, dungeons[:i] + dungeons[i+1:]) + 1
            max_clearance = max(max_clearance, clearance)
    
    return max_clearance


from itertools import permutations

def solution(k, dungeons):
    answer = 0
 
    for p in permutations(dungeons, len(dungeons)):
        tmp = k
        cnt = 0 

        for need, spend in p:
            if tmp >= need:
                tmp -= spend
                cnt += 1
        answer = max(answer, cnt)
    return answer