import { useState, useEffect } from 'react';

export default function useJsonData(filePath) {
	const [data, setData] = useState(null);

	useEffect(() => {
		const loadJsonFile = async () => {
		    const response = await fetch(filePath);
		    if (!response.ok) {
		      throw new Error(`Loading public/ folder file error! status: ${response.status}`);
		    }
		    const jsonData = await response.json();
		    setData(jsonData);
		};
	  	loadJsonFile();
	}, []);

 	return data;
}
