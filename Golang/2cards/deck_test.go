package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	actualDeck := newDeck()

	if len(actualDeck) != 16 {
		t.Errorf("Expected deck length of 16, but got %v", len(actualDeck))
	}
}

func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {
	os.Remove("_decktesting")

	deck := newDeck()
	deck.saveToFile("_decktesting")

	loadedDeck := newDeckFromFile("_decktesting")

	if len(loadedDeck) != 16 {
		t.Errorf("Excpected 16 cards in deck, but got %v", len(loadedDeck))
	}

	os.Remove("_decktesting")
}
