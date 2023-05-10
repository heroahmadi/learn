package main

import (
	"fmt"
	"sync"
)

func printSomething(something string, wg *sync.WaitGroup) {
	defer wg.Done()

	fmt.Println(something)
}

func main() {
	var wg sync.WaitGroup

	words := []string{
		"alpha",
		"beta",
		"gamma",
		"delta",
		"pi",
		"zeta",
		"eta",
		"theta",
		"epsilon",
	}

	wg.Add(len(words))

	for i, x := range words {
		go printSomething(fmt.Sprintf("%d: %s", i, x), &wg)
	}

	wg.Wait()

	wg.Add(1)
	printSomething("Something printed on main func", &wg)

}
