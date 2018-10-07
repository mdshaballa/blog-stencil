import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
<div>
<header> 
<nav id='cssmenu'>
<section class="logo"><a href="/">BLOG</a></section>
<section id="head-mobile"></section>
<section class="button"></section>
<ul>
<li class='active'>
<a href='/HOME'>HOME</a></li>
<li><a href='/New-Page'>NEW PAGE</a></li>
</ul>
</nav>
</header> 
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='first-component' exact={true} />
              <stencil-route url='/New-Page' component='new-page' />
              <stencil-route url='/HOME' component='first-component' />
              <stencil-route url='/detail/:id' component='my-detail' />
              <stencil-route url='/editfle/:id' component='edit-fle' />
              <stencil-route url='/suprimerfle/:id' component='suprimer-fle' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
