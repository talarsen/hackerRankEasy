
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
  let area;
  // Write your code here
  
  return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getArea(length, width) {
  //fail fast
  if(length === 0 || width === 0){
    return "Please enter a number greater than 0."
  }
  if(length === "" || width === ""){
    return "Length or width is an empty string, please enter a number."
  }
    let area;
     area = length * width
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
  //fail fast
  if(length === 0 || width === 0){
    return "Please enter a number greater than 0."
  }
  if(length === "" || width === ""){
    return "Length or width is an empty string, please enter a number."
  }
  let perimeter;
  perimeter = 2 * ( length + width);
  return perimeter;
}

console.log(getArea(5, 2));
console.log(getPerimeter(5, 2));