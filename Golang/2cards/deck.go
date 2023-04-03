package main

import "fmt"

// Create a new type of 'deck'
// which is a slice of strings

// In OOP perspective, this is equivalent to class 'Deck' extends []string
type deck []string

// Similar with constructor in OOP
func newDeck() deck {
	cards := deck{}

	cardSuites := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}

	for _, suit := range cardSuites {
		for _, value := range cardValues {
			cards = append(cards, value+" of "+suit)
		}
	}

	return cards
}

// Receiver function
// in OOP perspective, this is similar to method in a class
// in go convention, we don't use 'this' or 'self'
func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}
