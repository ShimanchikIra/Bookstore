import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() nameCompany: string;

  constructor() { }

  ngOnInit() {
  }

  // let header = $(".header_top");
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > header.height() && header.hasClass('header_top')) {
  //     header.removeClass('header_top').addClass('header_fixed');
  //   } else if ($(this).scrollTop() <= header.height() && header.hasClass('header_fixed')) {
  //     header.removeClass("header_fixed").addClass('header_top');
  //   }
  // });

}
