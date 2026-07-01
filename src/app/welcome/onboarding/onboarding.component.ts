import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, IonContent, IonButton],
})
export class OnboardingComponent {
  @ViewChild('onboardingSwiper') swiperRef!: ElementRef;

  constructor(private router: Router) {}

  onNextClick() {
    const swiper = this.swiperRef.nativeElement.swiper;

    if (swiper.isEnd) {
      this.goToRegister();
    } else {
      swiper.slideNext();
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goBack() {
    this.router.navigate(['/welcome']);
  }
}
