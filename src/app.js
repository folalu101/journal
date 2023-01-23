
    // constructor declaration
    export class Entry {
        constructor(title, body) {
        this.title = title;
        this.body = body;
        };
    };
  
    // Method to return the number of words in the entry
    // export function wordCount() {
    //   return this.body.split(" ").length;
    // };
    export function wordCounter(text) {
        // to check for empty string
        if (text.trim().length === 0){
            return 0;
        }
        let counter = 0;
        const word = text.split(" ");
        word.forEach(function(x) {
            // logis to check for number
            if (!Number(x)){
    
          counter++;
        }
        });
        return counter;
    };
    
    // Method to return the number of vowels in the entry
    export function vowelCount() {
      const vowels = "aeiouAEIOU";
      let count = 0;
      for (let x of this.body) {
        if (vowels.includes(x)) {
          count++;
        }
      }
      return count;
    };
  
    // Method to return the number of consonants in the entry
    export function  consonantCount() {
      const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
      let count = 0;
      for (let x of this.body) {
        if (consonants.includes(x)) {
          count++;
        }
      }
      return count;
    };
  
    // Method to return the first sentence of the entry
    export function getTeaser() {
      const article = this.body.split(" ")[0];
      const writeUp = article.split(" ");
      if (writeUp.length > 8) {
        return writeUp.slice(0, 8).join(" ") + "...";
      } else {
        return article;
      }
    };
 
  