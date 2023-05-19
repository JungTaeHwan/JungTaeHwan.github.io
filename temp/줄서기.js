		// n!가지에서 k번째를 구하기
		function getTurn(n, k){
			let temp = [];
			const data = [];

			function factor(num) {
				let result = 1;

				for (let i = 1; i <= num; i++) {
					result = result * i;
				}

				return result;
			}

			for (let i = 1; i <= n; i++) {
				temp.push(i);

				if(i == n) k = k - 1;
			}

			while(temp.length > 0){
				let quot = Math.floor(k / factor(n - 1));

				data.push(temp[quot]);

				temp = temp.filter(item => item != temp[quot]);

				k = k % factor(n - 1);

				n -= 1;
			}

			return data;
		}