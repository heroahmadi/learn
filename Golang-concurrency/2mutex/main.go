package main

import (
	"fmt"
	"sync"
)

var msg string
var wg sync.WaitGroup

func updateMessage(message string, m *sync.Mutex) {
	defer wg.Done()

	m.Lock()
	msg = message
	m.Unlock()
}

// run with 'go run -race' to test race condition
func main() {
	msg = "Hello world"

	var mutex sync.Mutex

	wg.Add(2)
	updateMessage("Hello, universe", &mutex)
	updateMessage("Hello, cosmos", &mutex)
	wg.Wait()

	fmt.Println(msg)
}
