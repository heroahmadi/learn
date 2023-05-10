package main

import (
	"strings"
	"sync"
	"testing"
)

func Test_updateMessage(t *testing.T) {
	var wg sync.WaitGroup

	wg.Add(1)

	go updateMessage("epsilon", &wg)

	wg.Wait()
	if !strings.Contains(msg, "epsilon") {
		t.Errorf("Expected to find epsilon")
	}
}
