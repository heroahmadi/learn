package main

import (
	"fmt"
	"net/http"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello world")
}

func main() {
	http.HandleFunc("/", helloWorld)
	http.ListenAndServe("", nil)
}
