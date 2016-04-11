export class App {
  // configureRouter callback
  configureRouter(config, router) {
    config.title = 'Aurelia Demo';
    config.map([
      //route => actual url route
      //name => used in code to generate url for route
      //moduleId => path to component to render
      //nav => true if you want to generate UI components and add to nav model
      //title => optional parameter to set document title
      { route: ['', 'welcome'],
        name: 'welcome',
        moduleId: './welcome',
        nav: true,
        title:'Welcome' },

      { route: 'todo',
        name: 'todo',
        moduleId: './todo',
        nav: true,
        title:'Todo' },

      { route: 'users',
        name: 'users',
        moduleId: './users',
        nav: true,
        title:'Github Users' }
    ]);

    this.router = router;
  }
}
