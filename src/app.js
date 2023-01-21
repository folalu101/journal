class Entry {
    constructor(title, body) {
      this.title = title;
      this.body = body;
    }
  
    // Method to return the number of words in the entry
    wordCount() {
      return this.body.split(" ").length;
    }
  
    // Method to return the number of vowels in the entry
    vowelCount() {
      const vowels = "aeiouAEIOU";
      let count = 0;
      for (let char of this.body) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    }
  
    // Method to return the number of consonants in the entry
    consonantCount() {
      const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
      let count = 0;
      for (let x of this.body) {
        if (consonants.includes(x)) {
          count++;
        }
      }
      return count;
    }
  
    // Method to return the first sentence of the entry
    getTeaser() {
      const sentence = this.body.split(". ")[0];
      const words = sentence.split(" ");
      if (words.length > 8) {
        return words.slice(0, 8).join(" ") + "...";
      } else {
        return sentence;
      }
    }
  }
  