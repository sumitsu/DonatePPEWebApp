/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-button/paper-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class DonatePPEWebApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: flex;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .page {
          @apply --layout-flex;
          flex: 0 1 auto;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
        iron-pages {
          @apply --layout-flex;
          flex: 1 1 auto;
          display: flex;
          overflow: auto;
          flex-direction: column;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-header-layout fullbleed>
        <app-header slot="header" effects="waterfall" condenses reveals>
          <app-toolbar>
            <div main-title="">#GetMePPE: Connecting Donors to Providers</div>
          </app-toolbar>
        </app-header>

        <div class="page">
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <ppewa-initpage name="initpage"></ppewa-initpage>
            <ppewa-provider1 name="provider1"></ppewa-provider1>
            <ppewa-donor1 name="donor1"></ppewa-donor1>
            <ppewa-404 name="404"></ppewa-404>
          </iron-pages>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'initpage';
    } else if (['initpage', 'provider1', 'donor1'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'initpage':
        import('./ppewa-initpage.js');
        break;
      case 'provider1':
        import('./ppewa-provider1.js');
        break;
      case 'donor1':
        import('./ppewa-donor1.js');
        break;
      case '404':
        import('./ppewa-404.js');
        break;
    }
  }
}

window.customElements.define('ppewa-home', DonatePPEWebApp);
