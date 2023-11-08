function solution(new_id){
	new_id = new_id
			.toLowerCase()
			.replace(/[^a-z0-9_.-]/g, '')
			.replace(/\.+/g, '.')
			.replace(/^\.|\.$/g, '')
			.replace(/^$/, 'a');

	if(!new_id){
		new_id = 'a';
	}

	new_id = new_id
			.slice(0,15)
			.replace(/\.$/g, '');

	return new_id.padEnd(3, new_id.slice(-1));
}