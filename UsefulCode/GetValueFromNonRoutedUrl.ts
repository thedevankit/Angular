// @ts-nocheck
function userAccountActivate(){
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
      while (this.route.firstChild) {
        this.route = this.route.firstChild
      }
      this.route.params.subscribe(params => {
        // console.log(event);
          console.log(params.activationToken);
      });
    }
    });
  }
