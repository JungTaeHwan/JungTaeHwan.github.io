학생1 = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
학생2 = [2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5]
학생3 = [3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2]

answer = [3,3,1,1,1,1,2,3,4,5]

stu = [학생1, 학생2, 학생3]

result=[]
check = 0

for i in range(len(stu)):
    for j in range(len(answer)):
        if stu[i][j] == answer[j]:
            check += 1
    result.append(check)
    check = 0        

print(result)
