import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  fullName: string= ''
  total: number = 0

  constructor(private route: ActivatedRoute, private router: Router) { 
    
       if (this.router.getCurrentNavigation() ) {
        this.total = this.router.getCurrentNavigation()?.extras?.state?.total
        this.fullName = this.router.getCurrentNavigation()?.extras?.state?.fullName
      }
  }

  ngOnInit(): void {

  }

}
