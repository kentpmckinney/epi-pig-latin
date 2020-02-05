
### Specs

<!-- | Spec | Input | Output |
| :-------------     | :------------- | :------------- | -->

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