package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	links := []string{
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://golang.org",
		"http://amazon.com",
	}

	// create channel of type string
	c := make(chan string)

	for _, link := range links {
		// spawn go routine to run a function
		// note: assigning routine without channel might cause main program
		// to exit first
		go checkSite(link, c)
	}

	// for i := 0; i < len(links); i++ {
	// 	fmt.Println(<-c)
	// }

	// for l := range c {
	// 	go checkSite(l, c)
	// }

	for l := range c {
		go func(link string) {
			time.Sleep(5 * time.Second)
			checkSite(link, c)
		}(l)
	}
}

func checkSite(site string, c chan string) {
	_, err := http.Get(site)
	if err != nil {
		fmt.Println(site, "might be down!")
		c <- site
		return
	}

	fmt.Println(site, "is up!")
	c <- site
}
