const colorsBadge = [
	{element: "poison", color: "#b97fc9"}, {element: "grass",  color: "#0c5e0c"}, 
	{element: "electric", color: "#b4c00c"}, {element: "psychic", color: "#6822aa"}, 
	{element: "flying", color: "#0ec5c5"}, {element: "water", color: "#3194d6"}, 
	{element: "steel", color: "#81868a"}, {element: "normal", color: "#d89e5c"}, 
	{element: "ice", color: "#4686b1"}, {element: "ground", color: "#583212"}, 
	{element: "fire", color: "#f5390a"}, {element: "dragon", color: "#1bca6a"}, 
	{element: "bug", color: "#ca6009"}, {element: "fairy", color: "#f381d1"}, 
	{element: "fighting", color: "#dd101a"}, {element: "rock", color: "#976236"}, 
	{element: "ghost", color: "rgba(4, 17, 80, .65)"}, {element: "dark", color: "#000000"}
];

export const compareColorElement = element => {
	const colorFound = colorsBadge.find(elementColor => element === elementColor.element && elementColor.color)

	return colorFound.color;
}