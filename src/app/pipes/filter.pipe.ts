import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;
  searchText = searchText.toLowerCase();
  return items.filter( it => {
        return (it.volumeInfo.title.toLowerCase().includes(searchText) 
            || this.isTextExistInList(it.volumeInfo.authors, searchText));
      });
     }

     private isTextExistInList (list : string[], text : string) : boolean{
         if(list){
            if(list.find( item => item.toLowerCase().includes(text))){
                return true;
            }
         }
        return false;
     }

     
  }