let dishes = [
    {"dishName": "vegetable curry", "cookTime": "15 minutes", "veganFriendly": "yes"},
    {"dishName": "steak", "cookTime": "9 minutes", "veganFriendly": "no"},
    {"dishName": "tofu soup", "cookTime": "12 minutes", "veganFriendly": "yes"}
    ]


console.log(dishes.dishName);

    function turnOnStove (food, callback) {

        var i = 0;
        while (i < 10) {
          food = dishes[i]
          i++; // same as i = i + 1;
        }

        console.log(dishes.dishName)

        }


  //





turnOnStove(dishes, function(cookingInfo){
	console.log(cookingInfo.msg); // prints: All 3 of your dishes are being cooked
  console.log(cookingInfo.secondsToCook()); // vegetable curry will take 900 seconds
  console.log(cookingInfo.veganFriendlyDishes) // [veg curry, tofu soup]
});