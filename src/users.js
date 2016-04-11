import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client'; // imports HttpClient from Aurelia's Fetch plugin
import 'fetch'; // polyfill

@inject(HttpClient)
export class Users {
  heading = 'Github Users';
  users = [];

  // HttpClient from inject decorator passes an instance of HttpClient directly to this constructor so we can use its methods to setup API calls
  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  // Aurelia's router enforces a lifecycle on view-models whenever routes change.
  // View-models can hook into various parts of the lifecycle to control flow into and out of the route. When your route is ready to activate the router will call the activate hook, if present.
  activate() {
    // HttpClient API's always return promises, so you can chain thens
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
      /*
        for synatax reminder on arrow syntax of ES6
        .then( function(response) { return response.json() } )
      */
  }
}
