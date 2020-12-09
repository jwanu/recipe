export const search = async (query) => {
    const result = await 
}

//1. 쿼리 값으로 리스트 불러오기
`https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=20${API_KEY}`


/**레시피 상세 페이지에 사용할 것들 */
//ID로 레시피 상세정보 불러오기
`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true${API_KEY}`
//ID로 레시피 유사 레시피 불러오기 (넘버는 불러오는 갯수)
`https://api.spoonacular.com/recipes/${id}/similar?number=8${API_KEY}`
//ID로 사용장비 불러오기
`https://api.spoonacular.com/recipes/${id}/equipmentWidget.json`;
//ID - RECIPE PRICE BREAKDOWN
`https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json`
//ID - GET RECIPE INGREDIENTS
//`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`
//ID - Recipe Instructions
//`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`

//4. 랜덤레시피 가져오기 ( 태그사용가능 )
`https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert${API_KEY}`

//5. 쿼리에 따른 자동완성  기능
`https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick${API_KEY}`