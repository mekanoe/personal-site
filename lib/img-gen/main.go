package main

//go:generate go-bindata ./SourceHanSansJ

import (
	"image"
	"image/draw"
	_ "image/png"
	"log"
	"os"
	"path/filepath"
	"sync"

	"golang.org/x/image/font/opentype"
)



func hashcode(s string) int32 {
	hash := int32(0)

	if len(s) == 0 {
		return hash
	}

	for char := range s {
		hash = ((hash << 5) - hash) + int32(char)
	}

	return hash
}

func setupImage(img image.Image) *image.RGBA {
	o := image.NewRGBA(img.Bounds())
	bb := o.Bounds()
	draw.Draw(o, bb, img, bb.Min, draw.Over)

	return o
}

func main() {
	baseImgPath := os.Args[1]
	parsables := os.Args[2]

	file, err := os.Open(baseImgPath)
	if err != nil {
		log.Panicln(err)
	}

	baseImg, _, err := image.Decode(file)
	if err != nil {
		log.Panicln(err)
	}

	fonts := map[string]font.Face{}
	

	filesToDo, err := filepath.Glob(parsables)
	if err != nil {
		log.Panicln(err)
	}

	var wg sync.WaitGroup
	wg.Add(len(filesToDo))
	for f := range filesToDo {

	}
}
