import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addlib',
  templateUrl: './addlib.component.html',
  styleUrls: ['./addlib.component.css']
})
export class AddlibComponent implements OnInit {

  constructor(private api:ApiService) { }
  bookName = ""
  authorName = ""
  language = ""
  pubyear = ""

  readValues = () => {
    let data = {
      "bookName": this.bookName,
      "authorName": this.authorName,
      "pubyear":this.pubyear,
      "language": this.language
      
    }
    console.log(data)
    this.api.addBooks(data).subscribe((res: any) => {
      console.log(res)
    
        
      }
    )
    alert("Successfully added")
    this.bookName = ""
    this.authorName = ""
    this.pubyear = ""
    this.language = ""
  
  }
  ngOnInit(): void {
  }

}
