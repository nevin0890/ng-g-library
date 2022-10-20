import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlib',
  templateUrl: './viewlib.component.html',
  styleUrls: ['./viewlib.component.css']
})
export class ViewlibComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }

  fetchData = () => {
    this.myapi.viewBooks().subscribe(
      (data) => {
        this.libraryData = data
      }
    )
  }
  
  
  deleteBook = (id: any) => {
    let data = {
      "id": id
    }

    this.myapi.deletebook(data).subscribe(
      (res) => {
        alert("Successfully deleted")
    
        this.fetchData()
      }
    )
  }

  libraryData: any = []

  ngOnInit(): void {
  }

}
