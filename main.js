console.log(API_KEY)

fetch(
    `https://api.api-ninjas.com/v1/nutrition?query=${newIceCream}&X-Api-Key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // the code for the HTML file goes in here
    });

    {
        "name": "rocky road",
        "calories": 318.9,
        "serving_size_g": 100,
        "fat_total_g": 22.2,
        "fat_saturated_g": 11.2,
        "protein_g": 5.6,
        "sodium_mg": 67,
        "potassium_mg": 148,
        "cholesterol_mg": 53,
        "carbohydrates_total_g": 27,
        "fiber_g": 1.3,
        "sugar_g": 23.8
    }