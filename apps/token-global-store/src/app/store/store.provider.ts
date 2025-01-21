import { inject, InjectionToken, Provider, signal } from '@angular/core';

const token = new InjectionToken('COUNTER', {
  factory: () => signal<number>(0),
  providedIn: 'root'
});

export const injectState = () => {
  return inject(token);
};

export const provideState = (value = 0): Provider => {
  return {
    provide: token,
    useFactory: () => signal<number>(value),
  };
};
