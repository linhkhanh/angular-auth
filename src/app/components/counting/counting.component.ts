import { Component, OnInit, Input } from '@angular/core';
import { CountingService } from '../../services/counting.service';
import { ANumber } from '../../model/ANumber';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  numbers: ANumber[];
  @Input() isLoggedIn;

  constructor(private countingService: CountingService) { }

  ngOnInit(): void {
    this.countingService.getNumbers().subscribe(numbers => {
      this.numbers = numbers  
    })
  }

  increaseCount(num:ANumber) {
    num.count = num.count + 1;
    this.countingService.updateNumber(num)
  }

  reset(num:ANumber) {
    num.count = 0;
    this.countingService.updateNumber(num)
  }
  decreaseCount(num:ANumber) {
    num.count = num.count - 1;
    if(num.count < 0) num.count = 0;
    this.countingService.updateNumber(num);
  }

  delete(num:ANumber) {
    this.countingService.deleteNumber(num)
  }
}
