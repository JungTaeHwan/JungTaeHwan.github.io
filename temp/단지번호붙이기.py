num = int(input())  # 7
tempArr = [list(map(int, input())) for _ in range(num)]  # 0과 1 의 문자열 7번
list = []

moveX = [-1, 1, 0, 0]
moveY = [0, 0, -1, 1]

count = 0
result = 0


def dfs(x, y):
    if not (x >= 0 and x < num) or not (y >= 0 and y < num):
        return False

    if tempArr[x][y] == 1:
        global count
        count += 1
        tempArr[x][y] = 0
        for i in range(4):
            newX = x + moveX[i]
            newY = y + moveY[i]
            dfs(newX, newY)
        return True

    return False


for i in range(num):
    for j in range(num):
        if dfs(i, j):
            list.append(count)
            result += 1
            count = 0

list.sort()
print(result)
for i in range(len(list)):
    print(list[i])
