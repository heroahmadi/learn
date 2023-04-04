package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
	"time"
)

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

// Multiple return value, slice splitting
func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}

// type conversion
func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

// output
func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}

// input
func newDeckFromFile(filename string) deck {
	byteString, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println("Error: ", err)
		os.Exit(1)
	}

	myString := strings.Split(string(byteString), ",")
	return deck(myString)
}

func (d deck) shuffle() {
	rand.Seed(time.Now().UnixNano())

	for i := range d {
		newPosition := rand.Intn(len(d) - 1)
		d[i], d[newPosition] = d[newPosition], d[i]
	}
}
