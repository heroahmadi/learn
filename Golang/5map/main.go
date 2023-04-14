package main

import "fmt"

func main() {
	// declareMap()
	iterateMap()
}

func declareMap() {
	// 1st way to declare
	// colors := map[string]string{
	// 	"red":   "#ff0000",
	// 	"green": "#4bf745",
	// }

	// 2nd way to declare
	// var colors map[string]string

	// 3rd way
	colors := make(map[string]string)
	colors["white"] = "#ffffff"

	fmt.Println(colors)
}

func iterateMap() {
	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#4bf745",
	}

	for color, hex := range colors {
		fmt.Println("Hex code for", color, "is", hex)
	}
}
