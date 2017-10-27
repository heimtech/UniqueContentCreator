import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: String = 'Content Creator Deutsch';
  template: String;
  result: String;

  // Constructor
  constructor() {

  }

  replaceChapters(pChapters:String[], groupOfChapters:number) {

  let absaetzeRestructured = [];


  for(var absatzKey in pChapters) {

    let absatz = pChapters[absatzKey];

    let lRandomNumber = this.getRandomInt(0, pChapters.length - 1);

    if (typeof absaetzeRestructured[lRandomNumber] !== 'undefined') {


      for(var i=0; i < pChapters.length; i++) {

        if (typeof absaetzeRestructured[i] == 'undefined') {
          absaetzeRestructured[i] = absatz;
          break;
        }

      }


    } else {
      absaetzeRestructured[lRandomNumber] = absatz;
    }



  }
  return absaetzeRestructured;

}



  calculateNewText() {
    let lTemplateContent = this.template;

    let absaetze = lTemplateContent.split("\n\n\n");
    let absaetzeRestructured = this.replaceChapters(absaetze, 1);

    for (let singleAbsatzKey in absaetzeRestructured) {

      let singleAbsatz = absaetzeRestructured[singleAbsatzKey];

      let modifiedChapter = this.modifyChapter(singleAbsatz);

      absaetzeRestructured[singleAbsatzKey] = modifiedChapter;





    }


    let joinedContent = absaetzeRestructured.join("\n\n\n");
    this.result = joinedContent;

  }

  modifyChapter(pAbsatz:String) {

    let sentenceArray = pAbsatz.split(".");
    let reorderSentences = this.replaceChapters(sentenceArray, 3);

    let lNewChapterContent = reorderSentences.join(".");

    let amountOfWords = this.countWords(lNewChapterContent);

    var lAmountOfRequests = 10;

    for (let i=0; i < (amountOfWords/3); i++ ) {


    }

    return lNewChapterContent;

  }


  countWords(str:String) {
  return str.trim().split(/\s+/).length;
}



  getRandomInt(min:any, max:any) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

}



