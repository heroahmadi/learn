package main

import "fmt"

// Create a new type of 'deck'
// which is a slice of strings

// In OOP perspective, this is equivalent to class 'Deck' extends []string
type deck []string

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}
