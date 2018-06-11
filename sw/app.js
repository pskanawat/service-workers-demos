/* API call*/
fetch("http://demo1853299.mockable.io/products").
	then(res=>res.json()).
	then(data => console.log("Data: ", data));