import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  link;
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    this.link=args
    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value),);
  }

  private stylize(text: string): string {
    let stylizedText: string = '';
    if (text && text.length > 0) {
      for (let t of text.split(" ")) {
        if (t.startsWith("@") && t.length>1)
          stylizedText += `<a href="${this.link}" target="_blank">${t}</a> `;
        else
          stylizedText += t + " ";
      }
      return stylizedText;
    }
    else return text;
  }
}
