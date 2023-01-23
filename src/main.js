import {wordCount, vowelCount, consonantCount, getTeaser} from './src/app.js'
import './css/app.css';

$(document).ready(function() {
    $('#form-entry').submit(function(event) {
      event.preventDefault();
      const entryTitle = $('#entry-title').val();
      const entryBody = $('#entry-body').val();
      const journal = new Journal(entryTitle, entryBody );
      const result = journal.checkType();
      $('#result').append("<h3>" + result + "</h3>");
    });
  });