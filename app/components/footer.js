import Component from '@glimmer/component';

export default class FooterComponent extends Component {
  get currentYear() {
    let date =  new Date();
    return date.getFullYear();
  }
}
