package main

import (
	"fmt"
	"net/http"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello world")
	switch r.URL.Path {
	case "/":
		fmt.Fprint(w, "Hello world")
	case "/test":
		fmt.Fprint(w, "This is a test")
	default:
		fmt.Fprint(w, "Not found!")
	}
}

func main() {
	http.HandleFunc("/", helloWorld)
	http.ListenAndServe("", nil)
}
