import { Component, OnInit } from '@angular/core';
import { CountingService } from '../../services/counting.service';
import { ANumber } from '../../model/ANumber';

@Component({
  selector: 'app-add-number',
  templateUrl: './add-number.component.html',
  styleUrls: ['./add-number.component.css']
})
export class AddNumberComponent implements OnInit {
  newNumber: ANumber = {
    count: 0
  }
 
  constructor(private countingService: CountingService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.newNumber.count) {
      this.newNumber.count = +this.newNumber.count;
      this.countingService.addNumber(this.newNumber);
      this.newNumber.count = 0
    }
  }
}
