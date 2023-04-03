package main

import "fmt"

func main() {
	// variables()
	arrayAndSlices()
	// usingCustomType()
}

func variables() {
	// var card string = "Ace of spades"
	// alternative variable initialization above:
	card := "Ace of spades"
	// assign new value after initialization
	card = "Five of diamonds"
	// assign new value from function
	card = newCard()

	fmt.Println(card)
}

func arrayAndSlices() {
	// Array: static (fixed) size
	// Slice: dynamic size

	// initializing slice
	// cards := []string{"Ace of diamonds", newCard()}
	cards := newDeck()
	hand, remaining := deal(cards, 5)
	hand.print()
	remaining.print()

	// looping through the element, i = zero based index
	// for i, card := range cards {
	// 	fmt.Println(i, card)
	// }
}

func usingCustomType() {
	// customTypeCards := deck{"Ace of diamonds", newCard()}
	// customTypeCards.print()

}

func newCard() string {
	return "Five of diamonds"
}
