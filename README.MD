<!-- Category: Epicodus;HTML/CSS/JS -->
# Pig Latin Translator

Translates an English phrase to Pig Latin

https://github.com/kentpmckinney/epi-pig-latin

## Previewing this Project

This project is hosted at: https://kentpmckinney.github.io/epi-pig-latin

## Working with the Source Code

The following instructions explain how to set up a development environment for this project on MacOS. Steps will differ depending on the operating system.

### Prerequisites

The following software must be installed and properly configured on the target machine. 

```
An updated web browser (Internet Explorer is not compatible)
```
```
Git (optional but recommended)
```

### Setting up a Development Environment

1. Download a copy of the source code from: https://github.com/kentpmckinney/fcc-memory-game
   or clone using the repository link: https://github.com/kentpmckinney/fcc-memory-game.git
2. Navigate to the folder location of the source files in Finder or in the Terminal
3. Launch a web browser so that it opens index.html

## Deployment

Source files are deployable as-is

## Technologies Used

* JavaScript
* HTML
* CSS

## Authors

Kent McKinney - [GitHub](https://github.com/kentpmckinney) - [LinkedIn](https://www.linkedin.com/in/kentpmckinney/)

### Copyright &copy; 2020 Kent P. McKinney

## Acknowledgments

https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/leap-year-pig-latin

### Specifications:

* Program preserves spaces
* Program preserves non-alphabetical chars
* Recognizes single letter words
* **Adds "ay" to single letter words beginning with a vowel**
    * Input: i
    * Output: iay

* Recognize multiple letter words

* If word begins with vowel, add "way" to end
    * Input: own
    * Output: ownway
    
    * "Y" is always a vowel, unless it starts a word

* If word begins with a consonnt, program searches for first vowel
    * Splits the word up until the index of the first vowel (leaves vowel in place)
    * Adds the chopped off letters to the end
    * Then add "ay" to the end of the word
    * If "y" is at the beginning, it is a consonant
