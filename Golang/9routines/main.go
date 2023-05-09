package main

import (
	"fmt"
	"net/http"
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

	fmt.Println(<-c)
}

func checkSite(site string, c chan string) {
	_, err := http.Get(site)
	if err != nil {
		fmt.Println(site, "might be down!")
		c <- "Might be down I think"
		return
	}

	fmt.Println(site, "is up!")
	c <- "Yup it's up"
}
