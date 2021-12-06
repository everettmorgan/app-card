import { createApp, App as CreateApp } from 'vue';
import App from './App';

let app: CreateApp;

export function init(opts: { container: any, props: any }) {
  app = createApp(App, opts.props);
  app.mount(opts.container);
}

export function clean() {
  app.unmount();
}

if (process.env.NODE_ENV === 'development') {
  createApp(App, {
    name: 'AudioEye',
    rating: '4.5',
    availablePlan: 'Free plan',
    learnMore: 'https://google.com',
    logo: 'https://via.placeholder.com/150',
    desc: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }).mount('#app');
}
