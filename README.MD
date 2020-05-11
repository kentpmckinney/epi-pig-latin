<!-- Category: Epicodus;HTML/CSS/JS -->

# Pig Latin Translator
https://github.com/kentpmckinney/epi-pig-latin

##### Author: Kent McKinney - [GitHub](https://github.com/kentpmckinney)
##### Copyright &copy; 2020 Kent McKinney
### Description:

``Translates an English phrase to its Pig Latin equivalent``

### Setup Instructions:
    1. Download a copy of the source code from GitHub from https://github.com/kentpmckinney/epi-pig-latin
    2. Navigate to the location of the downloaded source files
    3. Run the file "index.html" in a web browser

### Changelog:


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
