import { LightningElement } from "lwc";
import "./flems"




export default class App extends LightningElement {
  codeMirrowInitalised = false;
  myView;
  renderedCallback() {
    if (this.codeMirrowInitalised) {
      return;
    }
    this.codeMirrowInitalised = true;
    this.initializeCodeMirrow();
  }

  initializeCodeMirrow(){
    const playground = this.template.querySelector('div.playground');
        Flems(playground, {
      files: [{
          name: 'app.js',
          content: 'm.render(\n\tdocument.body,\n\tm("h1", "Hello world")\n)'
      }]
  });
     //playground.appendChild(this.myView.dom)   
  }
}