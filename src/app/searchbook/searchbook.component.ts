import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private api: ApiService) { }

  bookName = ""
  search = () => {
   
    let data = {
      "bookName": this.bookName
    }
    console.log(data)
    this.api.SearchBook(data).subscribe((data) => {
      this.data = data
      console.log(data)
      
          
    }
    )
  }

  data: any = []
  ngOnInit(): void {
  }
        
}

