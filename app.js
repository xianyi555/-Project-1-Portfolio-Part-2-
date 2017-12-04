 console.log("app.js linked");

 $(document).ready(function() {
 	
    let data = [
    {
    	city: "San Francisco",
    	avePrice: 1200000,
    	description: "The transportation is more convenient and the best",
        image: "https://activerain-store.s3.amazonaws.com/image_store/uploads/4/7/1/0/6/ar127171703160174.jpg"
    },
    {   city: "San Jose",
        avePrice: 1050000,
        description: "There are more opportunities for technology industry",
        image: "https://i.pinimg.com/originals/be/89/a3/be89a3a3fb1e59e93635f97909a7954c.jpg"

    },
    {   city: "San leandro",
        avePrice: 550000,
        description: "There are a lot of shopping certers around the city, and the cumminities are more peaceful",
        image: "https://i.pinimg.com/originals/be/89/a3/be89a3a3fb1e59e93635f97909a7954c.jpg"
    }]


      for (var i = 0;i < data.length; i++) {
      let cityData = data[i].city;
      let avePriceData = data[i].avePrice;
      let descriptionData = data[i].description;
      let imageData = data[i].image;
      $("#append").append(`<ul><li>City: ${data[i].city}</li>  <li>Average Price: ${data[i].avePrice}</li>  <li>Description: ${data[i].description}</li>  <li><a href="${data[i].image}">Link</a></li></ul>`)
    }
	
 } )