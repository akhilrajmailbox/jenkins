;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-templates.js' */
// This file was automatically generated from main_view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.fileView = function(opt_data, opt_ignored) {
  return '<div id="cp-header" class="aui-group"></div><div id="cp-body" class="aui-group"></div><div id="cp-footer"></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileView.soyTemplateName = 'FileViewer.Templates.fileView';
}


FileViewer.Templates.titleContainer = function(opt_data, opt_ignored) {
  return '<span class="' + soy.$$escapeHtml(opt_data.iconClass) + ' size-24 cp-file-icon"></span>' + soy.$$escapeHtml(opt_data.title);
};
if (goog.DEBUG) {
  FileViewer.Templates.titleContainer.soyTemplateName = 'FileViewer.Templates.titleContainer';
}


FileViewer.Templates.controlDownloadButton = function(opt_data, opt_ignored) {
  return '<a role="button" tabindex="55" id="cp-control-panel-download" href="' + soy.$$escapeHtml(opt_data.src) + '" title="' + soy.$$escapeHtml("Download") + '" class="cp-icon" target="_blank" download>' + soy.$$escapeHtml("Download") + '</a>';
};
if (goog.DEBUG) {
  FileViewer.Templates.controlDownloadButton.soyTemplateName = 'FileViewer.Templates.controlDownloadButton';
}


FileViewer.Templates.controlCloseButton = function(opt_data, opt_ignored) {
  return '<button role="button" tabindex="60" id="cp-control-panel-close" href="#" title="' + soy.$$escapeHtml("Close") + '" class="cp-icon">' + soy.$$escapeHtml("Close") + '</button>';
};
if (goog.DEBUG) {
  FileViewer.Templates.controlCloseButton.soyTemplateName = 'FileViewer.Templates.controlCloseButton';
}


FileViewer.Templates.moreButton = function(opt_data, opt_ignored) {
  return '<button role="button" tabindex="50" id="cp-control-panel-more" aria-owns="cp-more-menu" aria-haspopup="true" class="cp-icon aui-dropdown2-trigger aui-dropdown2-trigger-arrowless" title="' + soy.$$escapeHtml("More") + '">' + soy.$$escapeHtml("More") + '</button><div id="cp-more-menu" class="aui-dropdown2 aui-style-default" data-fv-allow-focus><ul class="aui-list-truncate"></ul></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.moreButton.soyTemplateName = 'FileViewer.Templates.moreButton';
}


FileViewer.Templates.moreMenuItem = function(opt_data, opt_ignored) {
  return '<li><a href="#">' + soy.$$escapeHtml(opt_data.text) + '</a></li>';
};
if (goog.DEBUG) {
  FileViewer.Templates.moreMenuItem.soyTemplateName = 'FileViewer.Templates.moreMenuItem';
}


FileViewer.Templates.fileComments = function(opt_data, opt_ignored) {
  return '<div id="cp-comments"/>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileComments.soyTemplateName = 'FileViewer.Templates.fileComments';
}


FileViewer.Templates.fileBodySpinner = function(opt_data, opt_ignored) {
  return '<div class="cp-spinner"></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileBodySpinner.soyTemplateName = 'FileViewer.Templates.fileBodySpinner';
}


FileViewer.Templates.fileBodyArrows = function(opt_data, opt_ignored) {
  return '<button class="cp-nav" id="cp-nav-left" tabindex=20 disabled-title="' + soy.$$escapeHtml("You\'re viewing the least recent file") + '">' + soy.$$escapeHtml("Go to the previous file") + '</button><button class="cp-nav" id="cp-nav-right" tabindex=20  disabled-title="' + soy.$$escapeHtml("You\'re viewing the most recent file") + '">' + soy.$$escapeHtml("Go to the next file") + '</button>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileBodyArrows.soyTemplateName = 'FileViewer.Templates.fileBodyArrows';
}
// This file was automatically generated from unknown-file-type-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.unknownFileTypeViewer = function(opt_data, opt_ignored) {
  return '<div id="cp-unknown-file-type-view"><span class="file-icon size-96 ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span><p class="title">' + soy.$$escapeHtml("Ouch! We can\'t preview this file type.") + '<br>' + soy.$$escapeHtml("Try downloading the file to view it.") + '</p><a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.src) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.unknownFileTypeViewer.soyTemplateName = 'FileViewer.Templates.unknownFileTypeViewer';
}
// This file was automatically generated from layers.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.displayError = function(opt_data, opt_ignored) {
  return '<div id="cp-error-message">' + ((opt_data.icon) ? '<span class="file-icon size-96 ' + soy.$$escapeHtml(opt_data.icon) + '"></span>' : '<span class="file-icon size-96 cp-unknown-file-type-icon"></span>') + '<p class="title">' + soy.$$escapeHtml(opt_data.title) + '</p><p class="message">' + soy.$$escapeHtml(opt_data.message) + '</p>' + ((opt_data.srcBrowser) ? '<a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.srcBrowser) + '" target="_blank"><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Open in browser") + '</a>' : '') + ((opt_data.srcDownload) ? '<a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.srcDownload) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a>' : '') + '</div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.displayError.soyTemplateName = 'FileViewer.Templates.displayError';
}


FileViewer.Templates.passwordLayer = function(opt_data, opt_ignored) {
  return '<div id="cp-preview-password"><span class="cp-password-lock-icon"></span><div class="cp-password-base"><p class="title">' + soy.$$escapeHtml(opt_data.prompt) + '</p><input tabindex="5" type="password" name="password" class="cp-password-input" placeholder="' + soy.$$escapeHtml("Password") + '" autocomplete="off"><button tabindex="10" class="aui-button cp-password-button">' + soy.$$escapeHtml("OK") + '</button></div><div class="cp-password-fullscreen"><p class="title">' + soy.$$escapeHtml("This file is password protected.") + '</p><p class="message">' + soy.$$escapeHtml("Due to technical reasons you have to leave presentation mode to enter the password.") + '</p></div></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.passwordLayer.soyTemplateName = 'FileViewer.Templates.passwordLayer';
}


FileViewer.Templates.waitingMessage = function(opt_data, opt_ignored) {
  return '<div id="cp-waiting-message"><span class="file-icon size-96 cp-waiting-message-spinner"></span><p class="title">' + soy.$$escapeHtml(opt_data.header) + '</p><p class="message">' + soy.$$escapeHtml(opt_data.message) + '</p><a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.src) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.waitingMessage.soyTemplateName = 'FileViewer.Templates.waitingMessage';
}


FileViewer.Templates.toolbar = function(opt_data, opt_ignored) {
  var output = '<div class="cp-toolbar">';
  var actionList55 = opt_data.actions;
  var actionListLen55 = actionList55.length;
  for (var actionIndex55 = 0; actionIndex55 < actionListLen55; actionIndex55++) {
    var actionData55 = actionList55[actionIndex55];
    output += '<button tabindex="' + soy.$$escapeHtml(actionIndex55 + 10) + '" class="' + soy.$$escapeHtml(actionData55.className) + ' cp-icon" title="' + soy.$$escapeHtml(actionData55.title) + '">' + soy.$$escapeHtml(actionData55.title) + '</button>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  FileViewer.Templates.toolbar.soyTemplateName = 'FileViewer.Templates.toolbar';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer.js' */
(function () {
    'use strict';

// holds module definitions used for setup and dependency tracking
var _modules = {};

// defines a new module with the given dependencies and factory function
var define = function (name, dependencies, factoryFn) {
    _modules[name] = {
      deps: dependencies,
      factory: factoryFn,
      value: null
    };
};

// recursively require module and its dependencies
// caches the results so that every module is instantiated only once
var require = function (name, mocks) {
    var module = require._normalizeMocks(mocks)[name] || _modules[name];
    if (!module) { throw new Error('module not found ' + name); }
    if (!module.value) {
      module.value = module.factory.apply(null, module.deps.map(function (name) {
        return require(name, mocks);
      }));
    }
    return module.value;
};

require._normalizeMocks = function (mocks) {
  if (!mocks) { return {}; }
  var normalizedMocks = {};
  Object.keys(mocks).forEach(function (key) {
    normalizedMocks[key] = {
      deps: [],
      factory: function () { return mocks[key]; },
      value: null
    };
  });
  return normalizedMocks;
};

// define FileViewer dependencies
define('jquery',     [], function () { return jQuery;   });
define('underscore', [], function () { return _;        });
define('backbone',   [], function () { return Backbone; });
define('ajs',        [], function () { return AJS;      });

define('3d-view-provider', [
  'jquery'
], function (
  $
) {
  'use strict';

  /**
   * Returns a video viewer.
   * @returns {Promise}
   */
  var threeDViewProvider = function () {
    return $.Deferred().resolve(require('3d-view'));
  };

  return threeDViewProvider;
});
define('Analytics', ['underscore'], function (_) {
  'use strict';

  /**
   * Augments data and forwards them to a configured analytics backend.
   *
   * An analytics backend is just a function that accepts a key and a data
   * object. It is also responsible for filtering incoming data.
   *
   * For all data send, this module fetches current file and view state
   * and adds them to the data. The added keys are
   * - fileType
   * - fileId (hashed version of the file src)
   * - fileState (value of view state)
   *
   * @param analyticsBackend
   * @param fileViewer
   * @param hasher
   * @returns {Analytics}
   * @constructor
   */
  var Analytics = function (backend, fileViewer, hasher) {
    this._backend = backend;
    this._fileViewer = fileViewer;
    this._hasher = hasher;
  };

  /**
   * Forwards an analytics event to the configured backend.
   * @param {string} key
   * @param {Object} data
   */
  Analytics.prototype.send = function (key, data) {
    if (!this._backend) { return; }
    var file = this._fileViewer.getCurrentFile();
    var attributes = (file && file.attributes) || {};
    var augmentedData = _.extend({
      fileType: attributes.type,
      fileId: this._hasher(attributes.src || ''),
      fileState: this._fileViewer.getView().getViewState()
    }, data);
    this._backend(key, augmentedData);
  };

  /**
   * Returns a partially applied analytics function for use inside of
   * promise handlers.
   * @param {string} key
   * @param {object} data
   * @returns {function}
   */
  Analytics.prototype.fn = function (key, data) {
    return this.send.bind(this, key, data);
  };

  return Analytics;
});

define('ArrowLayer', [
  'backbone', 'template-store-singleton'
], function (
  Backbone, templateStore
) {
  'use strict';

  var AJS = window.AJS;

  /**
   * Controls to switch between multiple files in a collection.
   * @constructor
   */
  var ArrowLayer = Backbone.View.extend({

    className: 'cp-arrow-layer',

    events: {
      'click #cp-nav-left:not(.disabled)': 'gotoPrevious',
      'click #cp-nav-right:not(.disabled)': 'gotoNext'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this.listenTo(this._fileViewer._fileState.collection, 'add reset', this.checkAndHideNavigation);
      this._visibleArrows = false;
      this._updateElements();
    },

    render: function () {
      this.$el.html(templateStore.get('fileBodyArrows')()).hide();
      this._updateElements();
      this.checkAndHideNavigation();

      return this;
    },

    /**
     * Show next file in collection.
     */
    gotoNext: function () {
      this._fileViewer.showFileNext().always(
        this._fileViewer.analytics.fn('files.fileviewer-web.next', {
          actionType: 'button',
          mode: this._fileViewer.getMode()
        })
      );
    },

    /**
     * Show previous file in collection.
     */
    gotoPrevious: function () {
      this._fileViewer.showFilePrev().always(
        this._fileViewer.analytics.fn('files.fileviewer-web.prev', {
          actionType: 'button',
          mode: this._fileViewer.getMode()
        })
      );
    },

    /**
     * Enable disabled navigation arrow again and remove tooltip
     */
    enableArrow: function ($arrow) {
      $arrow.removeClass('disabled');
      $arrow.removeAttr('original-title');
    },

    /**
     * Disable navigation arrow and add tooltip
     * @param  {Object} options
     * @param  {Object} options.arrow
     * @param  {String} options.tooltipText
     * @param  {String} options.tooltipGravity
     */
    disableArrow: function (options) {
      options.arrow.addClass('disabled');
      options.arrow.attr('original-title', options.tooltipText);
      options.arrow.tooltip({ gravity: options.tooltipGravity });
    },

    /**
     * Returns true if either the left or right navigation arrow is shown
     * @return {Boolean}
     */
    showsArrow: function () {
      return this._visibleArrows;
    },

    /**
     * Check if controls should appear.
     * If there's only a single file in the collection, we don't show them.
     */
    checkAndHideNavigation: function () {
      if (this._fileViewer._fileState.collection.length <= 1) {
        this._visibleArrows = false;
        return this.$arrows.hide();
      }
      this.$arrows.show();
      this._visibleArrows = true;
      if (this._fileViewer.getConfig().enableListLoop) {
        return;
      }
      if (this._fileViewer.isShowingLastFile()) {
        this.disableArrow({
          arrow: this.$arrowRight,
          tooltipText: "You\'re viewing the most recent file",
          tooltipGravity: 'e'
        });
      } else if (this._fileViewer.isShowingFirstFile()) {
        this.disableArrow({
          arrow: this.$arrowLeft,
          tooltipText: "You\'re viewing the least recent file",
          tooltipGravity: 'w'
        });
      }
    },

    _updateElements: function () {
      this.$arrows = this.$el.find('.cp-nav');
      this.$arrowLeft = this.$el.find('#cp-nav-left');
      this.$arrowRight = this.$el.find('#cp-nav-right');
    }

  });

  return ArrowLayer;
});

define('assert',
  [],
  function () {

    /**
     * Throws an error if given predicate is falsy.
     *
     * @param {*} predicate
     * @param {string} description Used for the error message.
     */
    var assert = function (predicate, description) {
      description = description || 'untruthy value';

      if (!predicate) {
        throw new Error('Assertion failed: ' + description);
      }
    };

    return assert;
  }
);

define('asset-module-backend', [], function () {
  'use strict';

  return function (fileViewer) {

    /**
     * Assumes that all modules are included as static assets and therefore
     * already loaded. Uses FileViewer.getConfig().assets for the
     * module configuration.
     *
     * @param {String} moduleName
     * @return {Promise}
     */

    return function (moduleName) {
      if (moduleName === 'pdf-config') {
        return fileViewer.getConfig().assets['pdf-config'] || {};
      }
    };
  };

});
define('baseMode', ['jquery', 'keyboard'], function ($, keyboard) {
  'use strict';

  var AJS = window.AJS;

  var baseMode = {

    activateHook: function (mainView) {
      mainView.$el.on('click #cp-file-body', mainView._onClickToBackground.bind(mainView));
      var $arrowLayer = mainView.fileContentView.getLayerForName('arrows').$el;
      $arrowLayer.toggle(this.showsArrowLayer);
    },

    deactivateHook: function (mainView) {
      mainView.$el.off('click #cp-file-body');
    },

    setup: function (mainView, viewer) {
      viewer && viewer.$el.on('click.contentView', viewer._clickedBackgroundToClose.bind(viewer));
      $(document).on('keydown.modeKeys', this._handleKeys.bind(mainView));
    },

    teardown: function (mainView, viewer) {
      viewer && viewer.$el.off('click.contentView');
      $(document).off('keydown.modeKeys');
    },

    showsArrowLayer: true,

    _handleKeys: function (e) {
      var contentView, viewer;

      if (this.fileContentView.isLayerInitialized('content')) {
        contentView = this.fileContentView.getLayerForName('content');
        viewer = contentView.getAttachedViewer();
      }

      if (!viewer || !(e.ctrlKey || e.metaKey)) { return; }

      if (
        e.which === keyboard.keys.PLUS ||
        e.which === keyboard.keys.PLUS_NUMPAD ||
        e.which === keyboard.keys.PLUS_FF
      ) {
        if (viewer.zoomIn) {
          this._fileViewer.analytics.send('files.fileviewer-web.file.zoomin', {
            actionType: 'hotkey'
          });
          viewer.zoomIn();
        }
        e.preventDefault();
      }

      if (
        e.which === keyboard.keys.MINUS ||
        e.which === keyboard.keys.MINUS_NUMPAD ||
        e.which === keyboard.keys.MINUS_FF
      ) {
        if (viewer.zoomOut) {
          this._fileViewer.analytics.send('files.fileviewer-web.file.zoomout', {
            actionType: 'hotkey'
          });
          viewer.zoomOut();
        }
        e.preventDefault();
      }

    },

    toolbarActions: [
      {
        title: "Zoom out",
        className: 'cp-toolbar-minus',
        predicate: function () {
          return this._viewer && this._viewer.zoomOut;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomOut) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomout', {
              actionType: 'button'
            });
            this._viewer.zoomOut();
          }
        }
      },
      {
        title: "Zoom in",
        className: 'cp-toolbar-plus',
        predicate: function () {
          return this._viewer && this._viewer.zoomIn;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomIn) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomin', {
              actionType: 'button'
            });
            this._viewer.zoomIn();
          }
        }
      },
      {
        title: "Fit to page",
        className: 'cp-toolbar-fit',
        predicate: function () {
          return this._viewer && this._viewer.zoomFit;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomFit) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomfit', {
              actionType: 'button'
            });
            this._viewer.zoomFit();
          }
        }
      },
      {
        title: "Start Presentation",
        className: 'cp-toolbar-presentation',
        predicate: function () {
          return this._viewer && this._fileViewer.getConfig().enablePresentationMode;
        },
        handler: function () {
          this._fileViewer.analytics.send('files.fileviewer-web.presentation.enter');
          this._fileViewer.changeMode('PRESENTATION');
        }
      }
    ]
  };

  return baseMode;
});

define('BaseViewer', [
  'jquery', 'underscore', 'backbone'
], function ($, _, Backbone) {
  'use strict';

  /**
   * Base class for viewers.
   * @constructor
   */
  var BaseViewer = Backbone.View.extend({

    // Event listeners specific to this view namespaced to prevent collisions with its children.

    contentViewEvents: {
      'click.contentView': '_clickedBackgroundToClose',
      'mousedown.contentView': '_mousedownContentView'
    },

    // Merge events with children's event object to bind all event handlers

    initialize: function (options) {
      this.events = _.extend(this.events || {}, this.contentViewEvents);

      this._fileViewer = options.fileViewer;
      this._previewSrc = options.previewSrc;
      this._mousedownBackground = null;
    },

    teardown: function () {},

    // Listen to clicks to the background and eventually close the fileViewer.
    //
    // A viewer can specify getBackground if their background element isn't their contents

    _mousedownContentView: function (e) {
      var $background = this.getBackground ? this.getBackground() : this.$el;
      this._mousedownBackground = $(e.target).is($background);
    },

    _clickedBackgroundToClose: function (e) {
      // @TODO: Remove after cleaning modes setup, hooks etc.
      var mode = this._fileViewer._view._modes[this._fileViewer._view._mode];
      if (mode.disableClickBackgroundCloses) {
        return;
      }
      var $background = this.getBackground ? this.getBackground() : this.$el;
      if (this._mousedownBackground && $(e.target).is($background)) {
        this._fileViewer.analytics.send('files.fileviewer-web.closed', {
          actionType: 'element'
        });
        this._fileViewer.close();
      }
    },

    // This function is called whenever the viewport of the viewer changes size,
    // e.g. when a panel is opened or closed. Overwrite this function if you want
    // custom behaviour.
    handleResize: function () {}

  });

  return BaseViewer;
});

define('CloseButton', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var CloseButton = Backbone.View.extend({

    className: 'fv-close-button',

    events: {
      'click': '_close'
    },

    tagName: 'span',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
    },

    render: function () {
      this.$el.html(templateStore.get('controlCloseButton')());

      this.$('button').tooltip({ gravity: 'n' });

      return this;
    },

    _close: function (e) {
      e.preventDefault();
      this._fileViewer.analytics.send('files.fileviewer-web.closed', {
        actionType: 'button'
      });
      this._fileViewer.close();
    }
  });

  return CloseButton;
});

define('Commands', ['jquery', 'ajs', 'file'], function ($, AJS, File) {
  'use strict';

  // helper for $.reject()
  var rejectWithError = function (msg) {
    return new $.Deferred().reject(
      new Error(msg)
    ).promise();
  };

  /**
   * A couple of commands used by the MainView.showFile() method. It's intend is to break
   * up the long method into smaller, more testable pieces.
   * @module
   */
  var Commands = {};

  /**
   * A command that looks-up a viewer for a file.
   * @constructor
   * @param {File} originalFile
   * @param {ViewerRegistry} viewerRegistry
   */
  Commands.LookupViewer = function (originalFile, viewerRegistry) {
    this._originalFile = originalFile;
    this._viewerRegistry = viewerRegistry;
  };

  /**
   * Execute this command.
   * @param {string} previewSrc
   * @param {string} previewType
   * @param {object} overwrites
   * @returns {Promise<Viewer, string, File>} promises the viewer to use, the previewSrc and the converted file.
   */
  Commands.LookupViewer.prototype.execute = function (previewSrc, previewType, overwrites) {
    var convertedFile = new File(this._originalFile.toJSON());

    convertedFile.set(overwrites);

    convertedFile.set('type', previewType);
    convertedFile.set('src', previewSrc);

    var loadViewer = this._viewerRegistry.get(previewType);

    if (!loadViewer) {
      return rejectWithError("There is not viewer for this file type.");
    }
    var dfd = $.Deferred();
    loadViewer().then(function (Viewer) {
      dfd.resolve(Viewer, previewSrc, convertedFile);
    }).fail( function () {
      dfd.fail(arguments);
    });

    return dfd.promise();
  };

  return Commands;
});

define('defaultConfig', [], function () {
  /**
   * FileViwers configuration options:
   *
   * - appendTo {DOMNode} [$('body')] - DOM Element to append to
   * - files {Array} - An array of file objects
   * - commentService {Object} - Comments service
   * - templateBackend {Function} - Provides templates for a given name
   * - moduleBackend {Function} - Provides modules for a given name
   * - pdfTransportFactory {Function} - cb(currentFile):Promise<PDFTransport>
   * - enableListLoop {Boolean} [true] - Allow to navigate from end to start of file list and v.v.
   * - enablePresentationMode {Boolean} [true] - Allow switching to presentation mode
   * - preloadImagesAfterCurrent {Number} [2] - Files after current to preload if they are images.
   * - preloadImagesBeforeCurrent {Number} [0] - Files before current to preload if they are images.
   * - videoDefaultQualityHd {Boolean} [true] - By default play HD content if available
   * - customStorage {Object} [null] - Custom storage object with setItem, getItem, removeItem methods
   *
   * @exports defaultConfig
   */
  return {
    enableListLoop: true,
    enablePresentationMode: true,
    preloadImagesAfterCurrent: 2,
    preloadImagesBeforeCurrent: 0,
    videoDefaultQualityHd: true,
    customStorage: null,
    viewers: ['image', 'document', 'video', '3d'],
    embedded: false
  };
});

define('constants-dictionary', [
  'assert'
], function (
  assert
) {
  'use strict';

  /**
   * A constants dictionary is a dictionary where you can only define a
   * given name once.
   */
  var ConstantsDictionary = function () {
    this._valuesByName = {};
    this._names = [];
  };

  /**
   * Define a name with the given value.
   * @param {string} name The name that is being defined.
   * @param {*} value Any value, even undefined.
   * @throws Error if name is already defined.
   */
  ConstantsDictionary.prototype.define = function (name, value) {
    assert(!this.isDefined(name), 'name is unique');
    this._valuesByName[name] = value;
    this._names.push(name);
  };

  /**
   * Lookup a name with the given value.
   * @param {string} name The name to lookup.
   * @throws Error if name is not yet defined.
   */
  ConstantsDictionary.prototype.lookup = function (name) {
    assert(this.isDefined(name), 'name is defined');
    return this._valuesByName[name];
  };

  /**
   * Check if a name is defined.
   * @param {string} name The name to check.
   * @return {boolean}
   */
  ConstantsDictionary.prototype.isDefined = function (name) {
    return name in this._valuesByName;
  };

  /**
   * Lists all definitions in the order they were defined. Returns an array of objects
   * with name and value properties.
   * @return {Array}
   */
  ConstantsDictionary.prototype.list = function () {
    return this._names.map(function (name) {
      return {
        name: name,
        value: this._valuesByName[name]
      };
    }, this);
  };

  return ConstantsDictionary;
});
define('djb2', [], function () {

  var toCharCode = function (str) { return str.charCodeAt(0); };
  var updateHash = function (prev, curr) { return ((prev << 5) + prev) + curr; };

  /**
   * Create a djb2 hash from the given string.
   * Based on this module https://github.com/wearefractal/djb2.
   * @param {String} str
   * @returns {Number}
   */
  var djb2 = function (str) {
    return str.split('').map(toCharCode).reduce(updateHash, 5381);
  };

  return djb2;
});
define('DownloadButton', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var DownloadButton = Backbone.View.extend({

    tagName: 'span',

    events: {
      'click': '_triggerAnalytics'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._model = this._fileViewer.getCurrentFile();
    },

    render: function () {
      this.$el.html(templateStore.get('controlDownloadButton')({
        src: this._model.get('srcDownload') || this._model.get('src')
      }));

      this.$('a').tooltip({ gravity: 'n' });

      return this;
    },

    _triggerAnalytics: function () {
      this._fileViewer.trigger('fv.download');
      this._fileViewer.analytics.send('files.fileviewer-web.file.download', {
        actionType: 'button'
      });
    }

  }, {
    isDownloadable: function (fileViewer) {
      var file = fileViewer.getCurrentFile();
      return file && file.get('downloadable');
    }
  });

  return DownloadButton;
});

define('ErrorLayer', [
  'ajs', 'backbone', 'template-store-singleton'
], function (AJS, Backbone, templateStore) {
  'use strict';

  var ErrorLayer = Backbone.View.extend({

    className: 'cp-error-layer',

    initialize: function () {
      this.$el.hide();
    },

    showErrorMessage: function (err, file) {
      var title, description, icon, srcDownload, srcBrowser;
      title = err.title || "Ouch! We can\'t preview this file.";
      description = err.description || err.toString();
      icon = err.icon || false;
      srcBrowser = err.browser ? file.get('src') : false;
      srcDownload = err.download ? file.get('srcDownload') || file.get('src') : false;
      this.$el.show().html(templateStore.get('displayError')({
        title: title,
        message: description,
        icon: icon,
        srcBrowser: srcBrowser,
        srcDownload: srcDownload
      }));
    }

  });

  return ErrorLayer;
});

define('file-state',
  [
    'backbone'
  ],
  function (
    Backbone
    ) {
    'use strict';

    var FileState = Backbone.Model.extend({

      defaults: {
        currentFileIndex: -1,
        isNewFileUploaded: false
      },

      setCollection: function (collection) {
        this.collection = collection;
      },

      setNext: function () {
        var currentFileIndex = this.get('currentFileIndex');
        if (currentFileIndex < (this.collection.length - 1)) {
          this.set({currentFileIndex: this.get('currentFileIndex') + 1});
        } else {
          this.set({currentFileIndex: 0});
        }
      },

      setPrev: function () {
        var currentFileIndex = this.get('currentFileIndex');
        if (currentFileIndex > 0) {
          this.set({currentFileIndex: this.get('currentFileIndex') - 1});
        } else {
          this.set({currentFileIndex: this.collection.length - 1});
        }
      },

      setNoCurrent: function () {
        this.set({ currentFileIndex: -1 });
      },

      setCurrentFileIndex: function (index) {
        if ((index > -1) && (index < this.collection.length)) {
          return this.set({currentFileIndex: index});
        }
      },

      setCurrentWithCID: function (cid) {
        return this.setCurrentFileIndex(this.collection.getIndexWithCID(cid));
      },

      getCurrent: function () {
        var current = this.collection.at(this.get('currentFileIndex'));
        return current || null;
      },

      selectWhere: function (selector) {
        if (selector) {
          var selected = this.collection.findWhere(selector);
          if (selected) {
            this.setCurrentWithCID(selected.cid);
          }
        } else if (this.collection.length >= 1) {
          this.setCurrentFileIndex(0);
        }
      },

      replaceCurrent: function (file) {
        var idx = this.get('currentFileIndex');
        this.collection.remove(this.collection.at(idx));
        this.collection.add(file, {at: idx});
      },

      setCurrentWithQuery: function (query) {
        var file = this.collection.findWhere(query);

        if (file) {
          this.setCurrentWithCID(file.cid);
        } else {
          this.setNoCurrent();
        }
      }

    });

    return FileState;
  });

define('file-types', [
],
  function (
    ) {
    'use strict';

    var browserSupportedImageTypes = [
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/web',
      'image/bmp'
    ];

    var browserSupportedMultimediaTypes = [
      'video/mp4',
      'video/m4v',
      'video/youtube',
      'audio/mp3',
      'audio/mpeg'
    ];

    var toLowerType = function (type) {
      return type && type.toLowerCase() || '';
    };

    var fileTypes = {
      isPDF: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/pdf';
      },

      isText: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'text/plain';
      },

      isCode: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'text/java'
          || lowerType === 'text/css'
          || lowerType === 'text/html'
          || lowerType === 'text/javascript'
          || lowerType === 'text/xml';
      },

      isMultimedia: function (type) {
        var lowerType = toLowerType(type);
        return /^video\/.*/i.test(type)
          || /^audio\/.*/i.test(type)
          || lowerType === 'application/x-shockwave-flash'
          || lowerType === 'application/vnd.rn-realmedia'
          || lowerType === 'application/x-oleobject';
      },

      isArchive: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/zip'
          || lowerType === 'application/java-archive';
      },

      isImage: function (type) {
        return /^image\/.*/i.test(type);
      },

      isVideo: function (type) {
        var lowerType = toLowerType(type);
        return /^video\/.*/i.test(type) || lowerType === 'video';
      },

      isAudio: function (type) {
        var lowerType = toLowerType(type);
        return /^audio\/.*/i.test(type) || lowerType === 'audio';
      },

      isYoutube: function (type) {
        var lowerType = toLowerType(type);
        return 'video/youtube' === lowerType;
      },

      isImageBrowserSupported: function (type) {
        return browserSupportedImageTypes.indexOf(type.toLowerCase()) !== -1;
      },

      isMultimediaBrowserSupported: function (type) {
        return browserSupportedMultimediaTypes.indexOf(type.toLowerCase()) !== -1;
      },

      isWordProcessing: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/msword'
          || /^application\/vnd.ms-word.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.wordprocessingml.*/i.test(type);
      },

      isSpreadsheet: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/msexcel'
          || /^application\/vnd.ms-excel.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.spreadsheet.*/i.test(type);
      },

      isPresentation: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/mspowerpoint'
          || /^application\/vnd.ms-powerpoint.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.presentationml.*/i.test(type);
      },

      is3D: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/x-sea';
      },

      matchAll: function () { return true; }
    };

    return fileTypes;
  });

define('file-viewer', [
  'jquery',
  'underscore',
  'backbone',
  'assert',
  'constants-dictionary',
  'MainView',
  'file-state',
  'files',
  'file',
  'soy-template-backend',
  'asset-module-backend',
  'template-store-singleton',
  'module-store-singleton',
  'viewer-registry',
  'file-types',
  'defaultConfig',
  'storage',
  'image-view-provider',
  'pdf-view-provider',
  'video-view-provider',
  '3d-view-provider',
  'unknown-file-type-view-provider',
  'Analytics',
  'djb2'
],
function (
  $,
  _,
  Backbone,
  assert,
  ConstantsDictionary,
  MainView,
  FileState,
  Files,
  File,
  soyTemplateBackend,
  assetModuleBackend,
  templateStore,
  moduleStore,
  ViewerRegistry,
  fileTypes,
  defaultConfig,
  Storage,
  imageViewProvider,
  pdfViewProvider,
  videoViewProvider,
  threeDViewProvider,
  unknownFileTypeViewProvider,
  Analytics,
  djb2
) {
  'use strict';

  /**
   * Core API to integrate FileViewer into a project.
   *
   * @class
   * @alias FileViewer
   * @param {Object} config
   * @throws {Error} if config is invalid
   */
  var FileViewer = function (config) {
    config = _.defaults(config || {}, defaultConfig);
    config.appendTo = config.appendTo || $('body');
    FileViewer._instanceCount += 1;
    config.instanceId = FileViewer._instanceCount;

    templateStore.useBackend(config.templateBackend || soyTemplateBackend(this));
    moduleStore.useBackend(config.moduleBackend || assetModuleBackend(this));
    
    this._config = config;
    this._properties = new Backbone.Model();

    this._fileState = new FileState();
    this._viewerRegistry = new ViewerRegistry();
    this._analytics = new Analytics(config.analyticsBackend, this, djb2);

    if (config.viewers.indexOf('image') !== -1) {
      this._viewerRegistry.register(fileTypes.isImageBrowserSupported, imageViewProvider, 0);
    }
    if (config.viewers.indexOf('document') !== -1) {
      this._viewerRegistry.register(fileTypes.isPDF, pdfViewProvider, 0);
    }
    if (config.viewers.indexOf('video') !== -1) {
      this._viewerRegistry.register(fileTypes.isMultimediaBrowserSupported, videoViewProvider, 0);
    }
    if (config.viewers.indexOf('3d') !== -1) {
      this._viewerRegistry.register(fileTypes.is3D, threeDViewProvider, 0);
    }

    // set fallback viewer
    this._viewerRegistry.register(fileTypes.matchAll, unknownFileTypeViewProvider, 100);

    this._files = new Files(config.files || [], {
      service: config.commentService
    });
    this._fileState.setCollection(this._files);

    this._view = new MainView({
      model: new Backbone.Model({
        fileViewer: this,
        instanceId: config.instanceId,
        embedded: config.embedded
      })
    });

    this._isOpen = false;

    this._storage = new Storage(this.getConfig().customStorage, 'fileViewer.');

    FileViewer._plugins.list()
      .map(function (definition) { return definition.value; })
      .forEach(function (plugin) { plugin(this); }, this);
  };

  // internal nondecreasing counter
  FileViewer._instanceCount = 0;

  // privately expose available modules for debugging purposes
  // _modules is defined support/require.js
  /* eslint-disable no-undef */
  FileViewer._modules = _modules;
  /* eslint-enable no-undef*/

  // keeps track of registered plugins
  FileViewer._plugins = new ConstantsDictionary();

  /**
   * Current version of this build.
   *
   * @type {String}
   */
  FileViewer.VERSION = '1.4.6'; // replaced during build

  /**
   * Define a new module for the use with FileViewer.require().
   *
   * Be careful with the naming, because module names can be overwritten.
   *
   * @method
   * @param {String} moduleName
   * @param {Array} dependencies
   * @param {Function} factory
   */
  FileViewer.define = define;

  /**
   * Require a previously defined module by name.
   *
   * @method
   * @param {String} moduleName
   * @returns {*}
   */
  FileViewer.require = require;

  /**
   * Register a new plugin for use with FileViewer.
   *
   * @param {String} name
   * @param {Function} plugin
   * @throws {Error} if plugin is invalid or name already exists.
   */
  FileViewer.registerPlugin = function (name, plugin) {
    assert(this.isPlugin(plugin), 'is a plugin');
    this._plugins.define(name, plugin);
  };

  /**
   * Returns if a plugin is enabled for use with FileViewer.
   *
   * @param {String} name
   */
  FileViewer.isPluginEnabled = function (name) {
    return this._plugins.isDefined(name);
  };

  /**
   * Gets a plugin registered for use with FileViewer.
   *
   * @param {String} name
   * @throws {Error} if plugin is invalid or name does not already exists.
   */
  FileViewer.getPlugin = function (name) {
    return this._plugins.lookup(name);
  };

  /**
   * Checks if the given object is a valid plugin.
   *
   * @param {*} potentialPlugin
   * @returns {Boolean}
   */
  FileViewer.isPlugin = function (potentialPlugin) {
    return _.isFunction(potentialPlugin);
  };

  /**
   * Support .on(), .off() and .trigger().
   */
  _.extend(FileViewer.prototype, Backbone.Events);

  /**
   * Instance of the analytics module, use this to send analytics from your plugins.
   */
  Object.defineProperty(FileViewer.prototype, 'analytics', {
    get: function () { return this._analytics; }
  });

  /**
   * The instance of FileViewer was opened.
   *
   * @event FileViewer~'fv.open'
   */

  /**
   * Open this instance of FileViewer by appending it to the configured element. This needs to be called
   * before showing a file.
   *
   * When a fileQuery object is passed in, this file is shown and a special analytics event is triggered.
   * When you want to record, where this interaction is comming from, pass in
   * an additional analyticsSource
   *
   * @param {Object} [fileQuery]
   * @param {String} [analyticsSource]
   * @fires {FileViewer~'fv.open'}
   */
  FileViewer.prototype.open = function (fileQuery, analyticsSource) {
    this._view.render().show().$el.appendTo(this._config.appendTo);
    this._view.delegateEvents();

    this._isOpen = true;
    this.trigger('fv.open');

    if (fileQuery) {
      this.showFileWithQuery(fileQuery).always(
        this.analytics.fn('files.fileviewer-web.opened', {source: analyticsSource})
      );
    }
  };

  /**
   * The instance of FileViewer was closed.
   *
   * @event FileViewer~'fv.close'
   */

  /**
   * Shut down this instance of FileViewer by removing it from the configured element. Reset current file.
   *
   * @fires {FileViewer~'fv.close'}
   */
  FileViewer.prototype.close = function () {
    this._view._currentFile = null;
    this._view.undelegateEvents();
    this._view
      .hide()
      .$el.remove();

    this._isOpen = false;
    this.trigger('fv.close');
  };

  /**
   * Check if FileViewer is currently open.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isOpen = function () {
    return this._isOpen;
  };

  /**
   * The current file was changed and is about to be shown.
   *
   * @event FileViewer~'fv.changeFile'
   */

  /**
   * The current file has been rendered successfully.
   *
   * @event FileViewer~'fv.showFile'
   */

  /**
   * The current file has **not** been rendered successfully.
   *
   * @event FileViewer~'fv.showFileError'
   */

  /**
   * Show file that matches the given attribute query.
   *
   * A query is basically a set of values for certain keys that you want to match on. To match the file with id='a'
   * and src='test'.
   *
   *     {
   *     id: 'a',
   *     src: 'test'
   *     }
   *
   * @param {Object} query
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFileWithQuery = function (query) {
    this._fileState.setCurrentWithQuery(query);
    var file = this._fileState.getCurrent();
    return this.showFile(file);
  };

  /**
   * Show the next file in the collection.
   *
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFileNext = function () {
    if (this.isShowingLastFile() && !this.getConfig().enableListLoop) {
      return $.when();
    }
    this._fileState.setNext();
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * Show the previous file in the collection.
   *
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFilePrev = function () {
    if (this.isShowingFirstFile() && !this.getConfig().enableListLoop) {
      return $.when();
    }
    this._fileState.setPrev();
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * FileViewer#setFiles() was called.
   * @event FileViewer~'fv.setFiles'
   */

  /**
   * Set both the list of files as well as the current file.
   *
   * Ensures that the updated current file is shown if the viewer is open. Viewer caching might prevent a full
   * re-render.
   *
   * If no query is given or the query doesn't match a file in the collection, the current file is set to `null`,
   * causing an error message to be shown if the viewer is open.
   *
   * @param {Array.<Object>} newFiles
   * @param {Object} [nextFileQuery=null]
   * @fires {FileViewer~'fv.setFiles'}
   */
  FileViewer.prototype.setFiles = function (newFiles, nextFileQuery) {
    this._files.reset(newFiles);
    this._fileState.setCurrentWithQuery(nextFileQuery);

    this.trigger('fv.setFiles');

    if (this.isOpen()) {
      this.showFile(this._fileState.getCurrent());
    }
  };

  /**
   * Returns the file being shown in this viewer.
   *
   * @returns {Object} the file being shown
   */
  FileViewer.prototype.getCurrent = function () {
    var currentFile = this._view.getCurrentFile();
    return currentFile && currentFile.toJSON();
  };

  /**
   * Returns the file being shown in this viewer as a backbone model.
   *
   * **Note**: This method is deprecated, because it exposes a backbone model. See #getCurrent() instead.
   *
   * @returns {File} the file being shown
   * @deprecated
   */
  FileViewer.prototype.getCurrentFile = function () {
    return this._view.getCurrentFile();
  };

  /**
   * Returns the current files collection.
   *
   * @returns {Array.<Object>}
   */
  FileViewer.prototype.getFiles = function () {
    return this._files.toJSON();
  };

  /**
   * Check if current file is the first one in the files collection.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isShowingFirstFile = function () {
    return this._fileState.attributes.currentFileIndex === 0;
  };

  /**
   * Check if current file is the last one in the files collection.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isShowingLastFile = function () {
    return this._fileState.collection.length ===
      this._fileState.attributes.currentFileIndex + 1;
  };

  /**
   * The view mode was changed.
   *
   * @event FileViewer~'fv.changeMode'
   */

  /**
   * Change current view mode to the given mode.
   *
   * @param {String} mode - either 'BASE' or 'PRESENTATION'
   * @fires {FileViewer~'fv.changeMode'}
   */
  FileViewer.prototype.changeMode = function (mode) {
    this._view.setupMode(mode);
    this.trigger('fv.changeMode', mode);
  };

  /**
   * Return the current mode.
   *
   * @returns {String}
   */
  FileViewer.prototype.getMode = function () {
    return this._view.getMode();
  };

  /**
   * Check if FileViewer is in the given mode.
   *
   * @param {String} mode - either 'BASE' or 'PRESENTATION'
   * @returns {Boolean}
   */
  FileViewer.prototype.isInMode = function (mode) {
    return this._view.isInMode(mode);
  };

  /**
   * A file action was called.
   *
   * @callback FileViewer~fileActionCallback
   * @param {File} file
   */

  /**
   * Add a file action to the viewer.
   *
   * Actions can be registered asynchronously, and are reset when the user navigates to a new file.
   *
   * Commonly, a plugin will listen to the change file event and register a file action
   * conditionally for the displayed file. If a file action shares a key with a file
   * action that currently exists, addFileAction will replace the old action with the
   * new action.
   *
   * @param {Object} opts
   * @param {String} opts.key - a unique identifier for the file action
   * @param {String} opts.text - the text display in the menu item
   * @param {FileViewer~fileActionCallback} opts.callback - a callback to be called when the menu item is selected
   * @throws Error if config is invalid or if no file is currently being viewed
   */
  FileViewer.prototype.addFileAction = function (opts) {
    assert(opts.key, 'has key');
    assert(opts.text, 'has text');
    assert(opts.callback, 'has a callback');
    this._view.fileControlsView.getLayerForName('moreButton').addFileAction(opts);
  };

  /**
   * Remove a file action from the viewer based on the key sent in the parameter.
   *
   * @param {Object} opts
   * @param {String} opts.key - a unique identifier for the file action you want to remove
   * @throws {Error} if no key is provided or if no file is currently being viewed
   */
  FileViewer.prototype.removeFileAction = function (opts) {
    assert(opts.key, 'has key');
    this._view.fileControlsView.getLayerForName('moreButton').removeFileAction(opts);
  };

  /**
   * Check if the FileViewer supports native rendering of a given content type.
   *
   * @param {String} contentType the content type to check if supported
   * @returns {Boolean}
   */
  FileViewer.prototype.supports = function (contentType) {
    var previewer = this._viewerRegistry.get(contentType);
    return previewer && previewer !== unknownFileTypeViewProvider;
  };

  /**
   * Allows non-core code to get and set their own values on an instance of FileViewer.
   *
   * @param {String} key
   * @param {*} value
   */
  FileViewer.prototype.set = function (key, value) {
    this._properties.set(key, value);
  };

  /**
   * Access plugin level properties.
   *
   * @param {String} key
   * @returns {*}
   */
  FileViewer.prototype.get = function (key) {
    return this._properties.get(key);
  };

  /**
   * Returns the specified config.
   *
   * @returns {Object}
   */
  FileViewer.prototype.getConfig = function () {
    return this._config;
  };

  /**
   * Returns the central view of FileViewer.
   *
   * @returns {MainView}
   */
  FileViewer.prototype.getView = function () {
    return this._view;
  };

  /**
   * Returns key-value storage of FileViewer.
   *
   * @returns {Object}
   */
  FileViewer.prototype.getStorage = function () {
    return this._storage;
  };

  /**
   * **DEPRECATED** Show the given file.
   *
   * **Carefull**: This method doesn't set the current file from the collection and thus allows to set a file that
   * is not in the files array, thus causing buggy behaviour with next/prev file.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {File} file
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFile = function (file) {
    return this._showFile(file);
  };

  /**
   * **DEPRECATED** Show the file matching the given backbone object id.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} cid
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithCID = function (cid) {
    this._fileState.setCurrentWithCID(cid);
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * **DEPRECATED** Show the file matching the given id.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} id
   * @param {String} [ownerId]
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithId = function (id, ownerId) {
    var fileQuery = { id: id };

    if (ownerId) { fileQuery.ownerId = ownerId; }

    return this.showFileWithQuery(fileQuery);
  };

  /**
   * **DEPRECATED** Show file with matching src.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} src
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithSrc = function (src) {
    var fileQuery = { src: src };

    return this.showFileWithQuery(fileQuery);
  };

  /**
   * **DEPRECATED** Show the first file matching the given selector. If selector is falsy, the first file in the
   * collection is shown.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {Object} selector
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWhere = function (selector) {
    this._fileState.selectWhere(selector);
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * **DEPRECATED** Maps a file to some value which is used for strict equality checks (`===`).
   *
   * @callback FileViewer~updateFilesMapFn
   * @param {Object} file
   * @returns {*}
   * @deprecated
   */

  /**
   * **DEPRECATED** FileViewer#updateFiles() was called.
   *
   * @event FileViewer~'fv.updateFiles'
   * @deprecated
   */

  /**
   * **DEPRECATED** Update the files collection without updating the view state.
   *
   * **Carefull**: A call to `updateFiles()` neither changes the file currently shown nor causes a re-rendering. This
   * can cause state and view to get out of sync and is likely to introduce bugs. Therefore, this method should no
   * longer be used. See FileViewer#setFiles() instead.
   *
   * This method operates in two modes based on it's input.
   *
   * When invoked with nothing but `files`, the existing file collection is simply replaced with the new one.
   *
   * When an optional `mapFn` function is given, the behaviour changes drastically. Each file in the given `files`
   * array is compared with the already existing ones using `mapFn`.
   *
   * - If a file existed before, but isn't matched by a new file, it won't be updated, but stays in the collection.
   * - If a file existed before and is matched by a new file, it is updated and stays in the collection.
   * - If a file didn't exist before, it is appended to the collection
   *
   * @param {Array.<Object>} files
   * @param {FileViewer~updateFilesMapFn} [mapFn]
   * @returns {Array.<Object>}
   * @fires {FileViewer~'fv.updateFiles'}
   * @deprecated
   */
  FileViewer.prototype.updateFiles = function (files, mapFn) {
    if (!(mapFn && _.isFunction(mapFn))) {
      this._files.reset(files);
    } else {
      var newModels = _.chain(files)
        .map(function (file) {
          var matchedModel = this._files.find(function (collectionModel) {
            return mapFn(collectionModel.toJSON()) === mapFn(file);
          });
          if (matchedModel) {
            matchedModel.set(file);
          } else {
            return new File(file);
          }
        }.bind(this))
        .compact()
        .value();

      this._files.add(newModels, {silent: true});
      this._files.trigger('reset', this._files);
    }

    this.trigger('fv.updateFiles');

    return this._files.toJSON();
  };

  // shows the given backbone file model, triggers an event and returns a promise
  // @todo should resolve with a json description of the passed-in file
  FileViewer.prototype._showFile = function (file) {
    assert(this._isOpen, 'FileViewer is open');
    var triggerEvent = function (event) {
      return function () {
        this.trigger(event, file);
      }.bind(this);
    }.bind(this);
    this.trigger('fv.changeFile', file);
    return this._view.showFile(file)
      .done(triggerEvent('fv.showFile'))
      .fail(triggerEvent('fv.showFileError'));
  };

  return FileViewer;
});

define('file',
  [
    'backbone'
  ],
  function (
    Backbone
    ) {
    'use strict';

    var File = Backbone.Model.extend({
      defaults: {
        src: '',
        type: '',
        thumbnail: '',
        poster: '',
        title: '',
        downloadable: true
      }
    });

    return File;
  });

define('files',
  [
    'backbone',
    'underscore',
    'file'
  ],
  function (
    Backbone,
    _,
    File) {

    'use strict';

    var Files = Backbone.Collection.extend({
      model: File,

      getIndexWithCID: function (cid) {
        return this.indexOf(this.get({cid: cid}));
      }
    });

    return Files;

  });

define('focus-manager-factory', ['assert', 'focus-manager-noop', 'focus-manager-impl'], function (assert, NoopFocusManager, FocusManager) {
  'use strict';

  /**
   * Transparent wrapper around FocusManager API that conditionally switches implementations.
   * @constructor
   * @param {jQuery} $el - The outmost element within focus will be trapped
   */
  var FocusManagerFactory = function ($el) {
    this.__element = $el;
  };

  FocusManagerFactory.prototype.create = function (embedded) {
    var ctor = embedded ? NoopFocusManager : FocusManager;
    return new ctor(this.__element);
  };

  return FocusManagerFactory;
});

define('focus-manager-impl', ['assert'], function (assert) {
  'use strict';

  var hasFocusOverride = function (element) {
    if (!element || !element.hasAttribute) { return false; }
    return element.hasAttribute('data-fv-allow-focus') || hasFocusOverride(element.parentElement);
  };

  /**
   * Trap focus for overlays and dialogs to enable proper keyboard navigation.
   * @constructor
   * @param {jQuery} $el - The outmost element within focus will be trapped
   */
  var FocusManager = function ($el) {
    assert($el, 'the first parameter to new FocusManager is a jQuery element');
    this.$container = $el;
    this._handler = this._focusHandler.bind(this);
  };

  /**
   * Trap element focus inside container element.
   */
  FocusManager.prototype.trapFocus = function () {
    this._unfocusParentPage();
    document.addEventListener('focus', this._handler, true);
  };

  /**
   * Stop trapping element focus inside container element.
   */
  FocusManager.prototype.releaseFocus = function () {
    document.removeEventListener('focus', this._handler, true);
    this._restoreFocus();
  };

  // Focus event handler.
  // On focus instantly blur the element if it is not a child of container
  // and set focus back to the container element.
  FocusManager.prototype._focusHandler = function (event) {
    if (
      !hasFocusOverride(event.target) &&
      this.$container &&
      !this.$container[0].contains(event.target)
    ) {
      event.stopPropagation();
      document.activeElement.blur();
      this.$container.attr('tabindex', 1);
      this.$container.focus();
    }
  };

  // Store active DOM element, unfocus it and then focus the container.
  FocusManager.prototype._unfocusParentPage = function () {
    this._originalActiveElement = document.activeElement;
    this._originalActiveElement.blur();
    this.$container.attr('tabindex', 1);
    this.$container.focus();
  };

  // Restore focus to the stored original active element.
  FocusManager.prototype._restoreFocus = function () {
    if (this._originalActiveElement) {
      this._originalActiveElement.focus();
    }
  };

  return FocusManager;
});

define('focus-manager-noop', [], function () {
  'use strict';
  
  var noop = function () {};

  var NoopFocusManager = function ($el) {};

  NoopFocusManager.prototype.trapFocus = noop;

  NoopFocusManager.prototype.releaseFocus = noop;

  return NoopFocusManager;
});
define('icon-utils', [
  'file-types'
],
function (fileTypes) {
  'use strict';

  var iconUtils = {
    getCssClass: function (type) {
      var iconClass = 'cp-unknown-file-type-icon';
      if (fileTypes.isImage(type)) {
        iconClass = 'cp-image-icon';
      } else if (fileTypes.isPDF(type)) {
        iconClass = 'cp-pdf-icon';
      } else if (fileTypes.isWordProcessing(type)) {
        iconClass = 'cp-document-icon';
      } else if (fileTypes.isSpreadsheet(type)) {
        iconClass = 'cp-spreadsheet-icon';
      } else if (fileTypes.isPresentation(type)) {
        iconClass = 'cp-presentation-icon';
      } else if (fileTypes.isText(type)) {
        iconClass = 'cp-text-icon';
      } else if (fileTypes.isCode(type)) {
        iconClass = 'cp-code-icon';
      } else if (fileTypes.isMultimedia(type)) {
        iconClass = 'cp-multimedia-icon';
      } else if (fileTypes.isArchive(type)) {
        iconClass = 'cp-archive-icon';
      }
      return iconClass;
    }
  };
  return iconUtils;
});

define('image-view-provider', [
  'jquery',
  'file'
], function (
  $,
  File
) {
  'use strict';

  /**
   * Returns an image viewer.
   * @returns {Promise}
   */
  var imageViewProvider = function () {
    return $.Deferred().resolve(require('image-view'));
  };

  return imageViewProvider;
});
define('instance-manager',
  ['jquery'],
  function ($) {
    'use strict';

    /**
     * Ensures that there's only a single instance at the same time.
     * Accepts a createFn that is invoked and whose return value is
     * used as the instance.
     * @constructor
     * @param {Function} createFn
     * @param {Function} destroyFn
     */
    var InstanceManager = function (createFn, destroyFn) {
      this._createFn = createFn;
      this._destroyFn = destroyFn;
      this._instance = null;
      this._destroyDeferred = null;
    };

    /**
     * Promise a new instance. Resolves as soon as the previous one
     * is destroyed.
     * @return {Promise<Object>}
     */
    InstanceManager.prototype.create = function () {
      var args = arguments;
      var d = new $.Deferred();
      var destroyPromise = (this._destroyDeferred && this._destroyDeferred.promise()) || $.when();

      destroyPromise.then(function () {
        this._destroyDeferred = new $.Deferred();
        this._instance = this._createFn.apply(this._createFn, args);
        d.resolve(this._instance);
      }.bind(this));

      return d.promise();
    };

    /**
     * Destroy the current instance and unlock instance creation.
     */
    InstanceManager.prototype.destroy = function () {
      if (!this._destroyDeferred) {
        return;
      }
      this._destroyFn(this._instance);
      this._destroyDeferred.resolve();
    };

    return InstanceManager;

  }
);

define('keyboard', [], function () {
  var keys = {
    F: 70,
    G: 71,
    P: 80,
    RETURN: 13,
    ESCAPE: 27,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    PLUS: 187,
    MINUS: 189,
    PLUS_NUMPAD: 107,
    MINUS_NUMPAD: 109,
    PLUS_FF: 61,
    MINUS_FF: 173,
    SPACE: 32,
    ENTER: 13,
    TAB: 9
  };

  var createConditionalKeyHandler = function (fn) {
    return function (event) {
      var targetTagName = event.target.tagName && event.target.tagName.toUpperCase();

      // To not interfere with input elements we only invoke the
      // event handling method if the event target is not INPUT or TEXTAREA
      if (targetTagName !== 'INPUT' && targetTagName !== 'TEXTAREA') {
        return fn.call(this, event);
      }

      // Pressing ESCAPE while in input fields blurs input fields
      if (event.which === keys.ESCAPE) {
        event.target.blur();
      }
    };
  };

  return {
    keys: keys,
    createConditionalKeyHandler: createConditionalKeyHandler
  };
});

define('layer-container-view', [
  'underscore',
  'backbone',
  'assert',
  'constants-dictionary'
], function (
  _,
  Backbone,
  assert,
  ConstantsDictionary
) {
  'use strict';

  // utility functions for working with layers

  var invoke = function (fn) {
    return fn();
  };

  var pick = function (property, obj) {
    return obj[property];
  };

  var pickBoundFn = function (property, obj) {
    return _.isFunction(obj[property]) && obj[property].bind(obj);
  };

  /**
   * This view manages a collection of views which can be registered with a
   * given name. This view manages the lifecycle of its subviews.
   *
   * Subviews are always the View objects themselves, not instances of them.
   *
   * Subviews have two different states: ADDED and INITIALIZED. Whenever a
   * view is registered, it starts in state ADDED and stays there until
   * #initializeLayers() is called. Then it moves to INITIALIZED and stays
   * there until #teardownLayers() is called.
   *
   * When #render() is called on the collection, only INITIALIZED subviews are
   * rendered. Subviews can provide a teardown method that will be called
   * once the view is removed.
   *
   * Optionally, you can register subviews with a predicate to tell which
   * filetypes they support. It is invoked whenever the subviews are
   * initialized.
   */
  var FileContentLayerView = Backbone.View.extend({

    /**
     * @constructor
     * @param {object} options
     */
    initialize: function (options) {
      this._layerViewsByName = new ConstantsDictionary();
      this._layerViewRegistrations = [];
      this._layers = null;
      this._fileViewer = options.fileViewer;
    },

    /**
     * Checks if a layer with the given name exists.
     * @param {string} name
     * @return {bool}
     */
    hasLayerView: function (name) {
      return this._layerViewsByName.isDefined(name);
    },

    /**
     * Adds a view as a layer with a certain, unique name. Accepts an
     * options object as third parameter.
     *
     * Keys in options:
     *  - {function} [predicate] invoked at construction
     *  - {int} [weight=0] sorts layers at construction
     *
     * @param {string} name
     * @param {Backbone.View} LayerView
     * @param {object} [options]
     * @throws Error if name is already used.
     */
    addLayerView: function (name, LayerView, options) {
      assert(!this.hasLayerView(name), 'name is unique');

      options = _.extend({
        predicate: function () { return true; },
        weight: 0
      }, options);

      this._layerViewsByName.define(name, LayerView);
      this._layerViewRegistrations.push({
        LayerView: LayerView,
        name: name,
        predicate: options.predicate,
        weight: options.weight
      });
    },

    /**
     * Checks wether layers are currently initialized.
     * @return {bool}
     */
    areLayersInitialized: function () {
      return this._layers !== null;
    },

    /**
     * Return the number of initialized layers (after applying the predicate)/
     * @return {Integer}
     */
    countInitializedLayers: function () {
      return (this._layers || []).length;
    },

    /**
     * Initializes all currently registered layers.
     * @fires initializeLayers
     * @throws Error if layers are already initialized
     */
    initializeLayers: function () {
      this.initializeLayerSubset(_.map(this._layerViewRegistrations, function (item) { return item.name; }));
    },

    /**
     * Initializes the given registered layers.
     * @param {Array} names
     * @fires initializeLayers
     * @throws Error if layers are already initialized
     */
    initializeLayerSubset: function (names) {
      assert(!this.areLayersInitialized(), 'layers are uninitialized');

      this._layers = this._layerViewRegistrations
                .filter(function (registration) {
                  var isInSubset = (names.indexOf(registration.name) !== -1);
                  return isInSubset && registration.predicate(this._fileViewer);
                }, this)
                .map(function (registration) {
                  var view = new registration.LayerView({
                    contentLayerView: this,
                    fileViewer: this._fileViewer
                  });
                  return {
                    view: view,
                    name: registration.name,
                    weight: registration.weight
                  };
                }, this);

      // sort by weight using the stable _.sortBy function to keep
      // registration order for same weights
      this._layers = _.sortBy(this._layers, function (layer) {
        return layer.weight * -1;
      });

      this.trigger('initializeLayers');

      this.render();
    },

    /**
     * Tears initialized layers down and removes them.
     * Won't throw if layers are not initialized.
     * @fires teardownLayers
     */
    teardownLayers: function () {
      if (this.areLayersInitialized()) {
        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'teardown'))
              .filter(_.isFunction)
              .forEach(invoke);

        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'remove'))
              .filter(_.isFunction)
              .forEach(invoke);

        this._layers = null;
      }

      this.trigger('teardownLayers');

      this.render();
    },

    /**
     * Utitily method. Calls teardownLayers() followed by initializeLayers().
     */
    reinitializeLayers: function () {
      this.teardownLayers();
      this.initializeLayers();
    },

    /**
     * Checks wether a layer with the given name is currently initialized.
     * @param {string} name
     * @return {bool}
     */
    isLayerInitialized: function (name) {
      if (!this.areLayersInitialized()) { return false; }

      return _.find(this._layers, function (layer) {
        return layer.name === name;
      }) ? true : false;
    },

    /**
     * Returns the instanciated LayerView object for the given name.
     * @param {string} name Name of the registered LayerView.
     * @return {layerView}
     * @throws {Error} if layer is not initialized
     */
    getLayerForName: function (name) {
      assert(this.areLayersInitialized(), 'layers are initialized');
      assert(this.hasLayerView(name), 'layer is defined');

      var layer = _.find(this._layers, function (layer) {
        return layer.name === name;
      });

      assert(layer, 'layer is initialized');

      return layer.view;
    },

    /**
     * Renders initialized layers.
     * Won't throw if layers are not initialized.
     * @fires renderLayers
     */
    render: function () {
      this.$el.empty();

      if (this.areLayersInitialized()) {
        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'render'))
              .forEach(invoke);

        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pick, '$el'))
              .forEach(function ($layer) {
                this.$el.append($layer);
              }, this);
      }

      this.trigger('renderLayers');

      return this;
    }

  });

  return FileContentLayerView;
});
define('MainView',
  [
    'ajs',
    'backbone',
    'underscore',
    'jquery',
    'focus-manager-factory',
    'files',
    'file',
    'TitleView',
    'DownloadButton',
    'CloseButton',
    'MoreButton',
    'ViewerLayer',
    'panel-container-view',
    'layer-container-view',
    'ErrorLayer',
    'WaitingLayer',
    'PasswordLayer',
    'ArrowLayer',
    'ToolbarLayer',
    'SpinnerLayer',
    'template-store-singleton',
    'keyboard',
    'baseMode',
    'presentationMode',
    'Commands'
  ],
  function (
    AJS,
    Backbone,
    _,
    $,
    FocusManagerFactory,
    Files,
    File,
    TitleView,
    DownloadButton,
    CloseButton,
    MoreButton,
    ViewerLayer,
    PanelContainerView,
    LayerContainerView,
    ErrorLayer,
    WaitingLayer,
    PasswordLayer,
    ArrowLayer,
    ToolbarLayer,
    SpinnerLayer,
    templateStore,
    keyboard,
    baseMode,
    presentationMode,
    Commands
  ) {
    'use strict';

    var rejectWithError = function (msg) {
      return new $.Deferred().reject(
        new Error(msg)
      ).promise();
    };

    /**
     * Core view of FileViewer.
     * @constructor
     * @param {Object} params
     */
    var MainView = Backbone.View.extend({

      attributes: function () {
        return {
          'id': 'cp-container-' + this.model.get('instanceId'),
          'data-embedded': this.model.get('embedded'),
          'role': 'dialog',
          'aria-labelledby': 'cp-title-container'
        };
      },

      initialize: function (params) {
        var options = _.extend({}, params);

        this._fileViewer = options.model.get('fileViewer');
        this._currentFile = null;
        this._viewState = null;
        this._focusManager = new FocusManagerFactory(this.$el).create(this.model.get('embedded'));

        this.fileTitleView = new PanelContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-title-container',
          className: 'aui-item'
        });

        this.fileControlsView = new LayerContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-file-controls',
          className: 'aui-item'
        });

        this.fileMetaView = new LayerContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-meta'
        });

        this.fileSinkView = new PanelContainerView({
          id: 'cp-sink',
          collection: this._fileViewer._fileState.collection,
          fileViewer: this._fileViewer
        });

        this.fileSidebarView = new PanelContainerView({
          id: 'cp-sidebar',
          fileViewer: this._fileViewer,
          collection: this._fileViewer._fileState.collection
        });

        this.fileContentView = new LayerContainerView({
          id: 'cp-file-body',
          fileViewer: this._fileViewer
        });

        this.fileTitleView.addPanelView('title', TitleView);
        this.fileControlsView.addLayerView('downloadButton', DownloadButton, {
          weight: 10,
          predicate: DownloadButton.isDownloadable
        });
        this.fileControlsView.addLayerView('moreButton', MoreButton);
        this.fileControlsView.addLayerView('closeButton', CloseButton);
        this.fileContentView.addLayerView('content', ViewerLayer);
        this.fileContentView.addLayerView('error', ErrorLayer);
        this.fileContentView.addLayerView('password', PasswordLayer);
        this.fileContentView.addLayerView('toolbar', ToolbarLayer);
        this.fileContentView.addLayerView('waiting', WaitingLayer);
        this.fileContentView.addLayerView('spinner', SpinnerLayer);
        this.fileContentView.addLayerView('arrows', ArrowLayer);

        this.listenTo(this.fileSidebarView, 'togglePanel', this._updateContentWidth);
        this.listenTo(this.fileSinkView, 'togglePanel', this._updateContentHeight);

        this._navigationKeyLockCount = 0;
        this._showFileChain = $.when();

        this._mode = 'BASE';
        this._modes = {
          'BASE': baseMode,
          'PRESENTATION': presentationMode
        };

        this._fixTooltipCleanup();
      },

      /**
       * Show.
       * @return {MainView} this
       */
      show: function () {
        this.$el.show();
        $(this._fileViewer._config.appendTo).addClass('no-scroll');

        // Blur focussed state for mouse users
        this.$el.on('mouseup mousedown', 'a', function (e) {
          this.blur();
        });
        this.$el.on('mouseup mousedown', 'button', function (e) {
          this.blur();
        });

        $(document).on('keydown.disableDefaultKeys', this._disableKeyboardShortcuts.bind(this));
        $(document).on('keydown.navKeys', keyboard.createConditionalKeyHandler(
          this._handleNavigationKeys.bind(this)
        ));

        return this;
      },

      /**
       * Hide.
       * @return {MainView} this
       */
      hide: function () {
        this.$el.hide();
        $(this._fileViewer._config.appendTo).removeClass('no-scroll');

        $(document).off('keydown.disableDefaultKeys');
        $(document).off('keydown.navKeys');
        $(document).off('keydown.modeKeys');

        this._deactivateModeHook();
        this._modes[this._mode].teardown(this);
        this._teardownAll();

        return this;
      },

      /**
       * Render.
       * @return {MainView} this
       */
      render: function () {
        this.$el.empty().append(templateStore.get('fileView')());

        this.$header = this.$('#cp-header');
        this.$body = this.$('#cp-body');
        this.$footer = this.$('#cp-footer');

        this.$title = this.fileTitleView.render().$el.appendTo(this.$header);
        this.$controls = this.fileControlsView.render().$el.appendTo(this.$header);

        this.$content = this.fileContentView.render().$el.appendTo(this.$body);
        this.$sidebar = this.fileSidebarView.render().$el.appendTo(this.$body);

        this.$meta = this.fileMetaView.render().$el.appendTo(this.$footer);
        this.$sink = this.fileSinkView.render().$el.appendTo(this.$footer);

        this.$el.on('click', 'a[href="#"]', function (e) {
          e.preventDefault();
        });

        this._focusManager.trapFocus();

        return this;
      },

      /**
       * MainView is starting to show the content of a new file.
       *
       * If the file src and type didn't change, this event won't be triggered.
       * If the file doesn't exist, this evemt won't be triggered as well.
       *
       * @event MainView~'fv.fileChange'
       */

      /**
       * Internal event to allow people to stop what they are doing when
       * the user already switched to the next file.
       *
       * @event MainView~'cancelShow'
       */

      /**
       * Show the given file. If one of the following conditions is true
       *
       *   1. file is invalid
       *   2. no viewer for that fileType is registered
       *   3. the viewer code can't be loaded
       *   4. the viewer couldn't be created
       *
       * then the returned promise is rejected. In that case, fileView changes
       * state and displays the error internally.
       *
       * When the new file and the current file have the same src and type attributes,
       * this method will not perform a re-rendering.
       *
       * @param {File} file
       * @return {Promise.<File>} the given file
       * @fires {MainView~'fv.fileChange'}
       * @fires {MainView~'cancelShow'}
       */
      showFile: function (file) {
        var needsToRerenderContent = !this.fileContentView.isLayerInitialized('content') || MainView._needsToRerenderContent(this._currentFile, file);

        if (MainView._filesWillRenderTheSame(this._currentFile, file)) {
          return MainView._skipRenderingOf(file);
        }

        var contentView, toolbarView, spinnerView, waitingView, errorView;

        var lookupViewerCommand = new Commands.LookupViewer(file, this._fileViewer._viewerRegistry);

        // allow people to shut down themselves
        this.trigger('cancelShow');

        var fileViewed = new $.Deferred();

        this._showFileChain.pipe(function () {
          var fileHandled = new $.Deferred();

          var p = $.when().pipe(function validateFile () {

            this._currentFile = file;
            this._viewState = null;
            var validationResult;

            if (file) {
              if (needsToRerenderContent) {
                this.trigger('fv.fileChange', file);
                this._reinitializeAllSubviews();
              } else {
                this._reinitializeNonContentSubviews();
              }

              contentView = this.fileContentView.getLayerForName('content');
              toolbarView = this.fileContentView.getLayerForName('toolbar');
              spinnerView = this.fileContentView.getLayerForName('spinner');
              waitingView = this.fileContentView.getLayerForName('waiting');
            } else {
              this._viewState = 'fileNotFound';
              this._reinitializeCoreSubviews();
              validationResult = rejectWithError("The file does not exist.");
            }
            errorView = this.fileContentView.getLayerForName('error');
            this._deactivateModeHook();
            this._activateModeHook();

            if (this && this._fileViewer && this._fileViewer.lastFocusId) {
              $('#' + this._fileViewer.lastFocusId).focus();
            }

            return validationResult;
          }.bind(this));

          if (needsToRerenderContent) {
            p = p.pipe(function getConverted () {
              var isPreviewGenerated = this._fileViewer.getConfig().isPreviewGenerated;
              var generatePreview = this._fileViewer.getConfig().generatePreview;

              spinnerView.startSpin();

              if (this._fileViewer.supports(file.get('type'))) {
                return $.when(file.get('src'), file.get('type'));
              }

              if (!(isPreviewGenerated && generatePreview)) {
                return $.when(file.get('src'), file.get('type'));
              }

              return isPreviewGenerated(file).pipe(function (isGenerated, source, type, overwrites) {
                if (isGenerated) {
                  return $.when(source, type, overwrites);
                }

                spinnerView.stopSpin();
                waitingView.showMessage(
                  file,
                  "Your preview is on its way!",
                  "In a hurry? You can download the original right now."
                );

                return generatePreview(file).always(function () {
                  waitingView.clearMessage();
                  spinnerView.startSpin();
                });
              });

            }.bind(this))
            .pipe(lookupViewerCommand.execute.bind(lookupViewerCommand))
            .pipe(function createViewer (Viewer, previewSrc, convertedFile) {

              var readyDeferred = new $.Deferred();
              var view = new Viewer({
                previewSrc: previewSrc,
                model: new File(convertedFile.toJSON()),
                fileViewer: this._fileViewer
              });

              view.once('viewerReady', function () {
                this._viewState = 'success';
                toolbarView.setViewer(view);
                this.setupMode(this._mode);
                readyDeferred.resolve(file);
              }.bind(this));
              view.once('viewerFail', function (err) {
                this._viewState = 'viewerError';
                readyDeferred.reject(err);
                this.setupMode(this._mode);
              }.bind(this));

              contentView.attachViewer(view);

              view.render();

              return readyDeferred.promise();

            }.bind(this))
            .always(function () {
              spinnerView && spinnerView.stopSpin();
              waitingView && waitingView.clearMessage();
            }.bind(this))
            .fail(function (err) {
              fileViewed.reject(err);
              if (err !== 'cancelled') {
                errorView.showErrorMessage(err, file);
              }
            }.bind(this));
          }

          p.done(function () {
            fileViewed.resolve(file);
          })
          .always(function () {
            fileHandled.resolve();
          }.bind(this));

          return fileHandled.promise();
        }.bind(this));

        return fileViewed.promise();
      },

      /**
       * Return the currently shown file.
       * @returns {null|File} the file being shown
       */
      getCurrentFile: function () {
        return this._currentFile;
      },

      /**
       * Return the current view state.
       * Can be any of the following
       * loading, fileNotFound, viewerError, success
       * @returns {String}
       */
      getViewState: function () {
        return this._viewState || 'loading';
      },

      _reinitializeAllSubviews: function () {
        if (!this.fileTitleView.isAnyPanelInitialized()) {
          this.fileTitleView.initializePanel();
        }
        this.fileTitleView.reinitializePanel();

        this.fileControlsView.reinitializeLayers();
        this.fileContentView.reinitializeLayers();
        this.fileSidebarView.reinitializePanel();
        this.fileMetaView.reinitializeLayers();
        this.fileSinkView.reinitializePanel();

        this._updateMetaBannerHeight();
      },

      _reinitializeNonContentSubviews: function () {
        if (!this.fileTitleView.isAnyPanelInitialized()) {
          this.fileTitleView.initializePanel();
        }
        this.fileTitleView.reinitializePanel();

        this.fileControlsView.reinitializeLayers();
        this.fileSidebarView.reinitializePanel();
        this.fileMetaView.reinitializeLayers();
        this.fileSinkView.reinitializePanel();

        this._updateMetaBannerHeight();
      },

      _reinitializeCoreSubviews: function () {
        this._teardownAll();

        this.fileControlsView.initializeLayerSubset(['closeButton']);
        this.fileContentView.initializeLayerSubset(['arrows', 'error']);
      },

      _teardownAll: function () {
        this.fileTitleView.teardownPanel();
        this.fileSidebarView.teardownPanel();
        this.fileSinkView.teardownPanel();
        this.fileMetaView.teardownLayers();
        this.fileControlsView.teardownLayers();
        this.fileContentView.teardownLayers();
        this._focusManager.releaseFocus();
      },

      _handleNavigationKeys: function (e) {
        var numFiles = this._fileViewer._files.length;
        var usedModifierKey = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;

        if (e.which === keyboard.keys.ESCAPE && !this.isNavigationLocked()) {
          e.preventDefault();
          this._fileViewer.analytics.send('files.fileviewer-web.closed', {
            actionType: 'hotkey'
          });
          this._fileViewer.close();
        } else if (
          !usedModifierKey &&
          !this.isNavigationLocked() &&
          numFiles > 1 &&
          e.which === keyboard.keys.ARROW_RIGHT
        ) {
          e.preventDefault();
          this._fileViewer.showFileNext().always(
            this._fileViewer.analytics.fn('files.fileviewer-web.next', {
              actionType: 'hotkey',
              mode: this._fileViewer.getMode()
            })
          );
        } else if (
          !usedModifierKey &&
          !this.isNavigationLocked() &&
          numFiles > 1 &&
          e.which === keyboard.keys.ARROW_LEFT
        ) {
          e.preventDefault();
          this._fileViewer.showFilePrev().always(
            this._fileViewer.analytics.fn('files.fileviewer-web.prev', {
              actionType: 'hotkey',
              mode: this._fileViewer.getMode()
            })
          );
        }
      },

      /**
       * Lock navigation keys. Navigation keys will be disabled until all
       * locks are removed again with unlockNavigationKeys.
       */
      lockNavigationKeys: function () {
        this._navigationKeyLockCount += 1;
      },

      /**
       * Unlock navigation keys.
       */
      unlockNavigationKeys: function () {
        if (this._navigationKeyLockCount >= 1) {
          this._navigationKeyLockCount -= 1;
        }
      },

      /**
       * Checks if the navigation is locked.
       */
      isNavigationLocked: function () {
        return this._navigationKeyLockCount !== 0;
      },

      _disableKeyboardShortcuts: function (e) {
        if (e.ctrlKey || e.metaKey) {
          switch (e.which) {
            case keyboard.keys.F:
            case keyboard.keys.G:
              // disable search keyboard shortcut
              e.preventDefault();
              break;
            case keyboard.keys.P:
              // disable print keyboard shortcut
              e.preventDefault();
              break;
          }
        }
      },

      _onClickToBackground: function (e) {
        // @TODO: Remove after cleaning modes setup, hooks etc.
        var mode = this._fileViewer._view._modes[this._fileViewer._view._mode];
        if (mode.disableClickBackgroundCloses) {
          return;
        }
        var backgroundLayers = [
          'cp-error-layer',
          'cp-waiting-layer',
          'cp-password-layer'
        ];
        if (backgroundLayers.indexOf(e.target.className) >= 0) {
          this._fileViewer.analytics.send('files.fileviewer-web.closed', {
            actionType: 'element'
          });
          this._fileViewer.close();
        }
      },

      _updateContentWidth: function (panelId, isExpanded) {
        this.$content && this.$content.toggleClass('narrow', isExpanded);
        this._resizeActiveViewer();
      },

      _updateContentHeight: function (panelId, isExpanded) {
        this.$content && this.$content.toggleClass('short', isExpanded);
        this.$sidebar && this.$sidebar.toggleClass('short', isExpanded);
        this._resizeActiveViewer();
      },

      _updateMetaBannerHeight: function () {
        var showsMetaView = this.fileMetaView.countInitializedLayers() > 0;
        this.fileContentView.$el.toggleClass('meta-banner', showsMetaView);
        this.fileSidebarView.$el.toggleClass('meta-banner', showsMetaView);
      },

      _resizeActiveViewer: function () {
        if (this.fileContentView.isLayerInitialized('content')) {
          var contentView = this.fileContentView.getLayerForName('content');
          var viewer = contentView.getAttachedViewer();
          if (viewer) { viewer.handleResize(); }
        }
      },

      // aui tooltips (tipsy) are appended to body. A tooltip will thus stay alive
      // if the trigger element is removed. In here, we clean them up manually
      // whenever a file changes or the whole viewer is closed.
      _fixTooltipCleanup: function () {
        var removeAllTooltips = function () { $('.tipsy').remove(); };
        this._fileViewer.on('fv.changeFile', removeAllTooltips);
        this._fileViewer.on('fv.close', removeAllTooltips);
      },

      /**
       * Return the current mode.
       * @returns {string}
       */
      getMode: function () {
        return this._mode || '';
      },

      /**
       * Check if FileView is in the given mode.
       * @param {string} mode either 'BASE' or 'PRESENTATION'
       * @returns {boolean}
       */
      isInMode: function (mode) {
        return this._mode === mode;
      },

      /**
       * Change current view mode to the given mode.
       * @param {string} mode either 'BASE' or 'PRESENTATION'
       */
      setupMode: function (mode) {
        var toolbar = this.fileContentView.getLayerForName('toolbar');
        var viewer = toolbar._viewer;
        var $arrowLayer = this.fileContentView.getLayerForName('arrows').$el;

        var lastMode = this._mode;
        var isModeChanged = (lastMode !== mode);

        var modeObj = this._modes[mode];
        var lastModeObj = this._modes[lastMode];

        if (isModeChanged) {
          this._deactivateModeHook();
          this._mode = mode;
          this._activateModeHook();
        } else {
          this._mode = mode;
        }

        $(document).off('keydown.modeKeys');
        lastModeObj.teardown(this, viewer, isModeChanged);
        modeObj.setup(this, viewer);

        // update arrow layer
        $arrowLayer.toggle(modeObj.showsArrowLayer);

        // update toolbar actions
        toolbar.setActions(modeObj.toolbarActions);
        toolbar.render();

        // notify viewer
        if (viewer && viewer.setupMode) {
          viewer.setupMode(mode, isModeChanged);
        }
      },

      _activateModeHook: function () {
        var mode = this._modes[this._mode];
        if (mode.activateHook) {
          mode.activateHook(this);
        }
      },

      _deactivateModeHook: function () {
        var mode = this._modes[this._mode];
        if (mode.deactivateHook) {
          mode.deactivateHook(this);
        }
      },

      updatePaginationButtons: function () {
        if (this.isInMode('PRESENTATION')) {
          var toolbar = this.fileContentView.getLayerForName('toolbar');
          if (!toolbar._viewer) {
            return;
          }

          var $toolbarPrevPage = toolbar.$el.find('.cp-toolbar-prev-page');
          var $toolbarNextPage = toolbar.$el.find('.cp-toolbar-next-page');

          $toolbarPrevPage.toggleClass('inactive', false);
          $toolbarNextPage.toggleClass('inactive', false);

          if (!(toolbar._viewer.hasPreviousPage() || toolbar._viewer.hasNextPage())) {
            $toolbarPrevPage.hide();
            $toolbarNextPage.hide();
          } else if (!toolbar._viewer.hasPreviousPage()) {
            $toolbarPrevPage.toggleClass('inactive', true);
          } else if (!toolbar._viewer.hasNextPage()) {
            $toolbarNextPage.toggleClass('inactive', true);
          }
        }
      }
    });

    MainView._filesWillRenderTheSame = function (fileA, fileB) {
      if (!fileA || !fileB) { return false; }
      return _.isEqual(fileA.attributes, fileB.attributes);
    };

    MainView._needsToRerenderContent = function (fileA, fileB) {
      if (!fileA || !fileB) { return true; }
      var didTypeChange = fileA.get('type') !== fileB.get('type');
      var didSrcChange = fileA.get('src') !== fileB.get('src');
      var didThumbChange = fileA.get('thumbnail') !== fileB.get('thumbnail');
      return didTypeChange || didSrcChange || didThumbChange;
    };

    MainView._skipRenderingOf = function (file) {
      return $.when(file);
    };

    return MainView;
  });

define('module-store-singleton', [
  'module-store'
], function (
  ModuleStore
) {
  'use strict';

  /**
   * Global module store. This simplifies development until FileViewer core
   * stabilizes, the plugin interface is ready and the view hierarchy is
   * clear.
   *
   * @todo remove singleton
   */
  return new ModuleStore();
});
define('module-store', [
  'assert',
  'jquery',
  'underscore'
], function (
  assert,
  $,
  _
) {
  'use strict';

  /**
   * Provides modules by asking a previously configured backend.
   *
   * As modules can be loaded async, a promise is always returned.
   *
   * A backend is a function that accepts a module path and returns the
   * matched module. If no module is found, it returns undefined.
   *
   * @constructor
   */
  var ModuleStore = function () {
    this._backend = null;
  };

  /**
   * Checks if backend is a valid backend.
   * @param {*} backend
   * @return {bool}
   */
  ModuleStore.validBackend = function (backend) {
    return _.isFunction(backend);
  };

  /**
   * Asks its backend for the given modulePath and returns a promise.
   * @param {string} modulePath
   * @return {Promise}
   * @throws {Error} if backend is invalid
   */
  ModuleStore.prototype.get = function (modulePath) {
    assert(ModuleStore.validBackend(this._backend), 'backend is valid');
    return $.when(this._backend(modulePath));
  };

  /**
   * Sets a backend for this module store.
   * @param {function} backend
   * @throws {Error} if backend is invalid
   */
  ModuleStore.prototype.useBackend = function (backend) {
    assert(ModuleStore.validBackend(backend), 'backend is valid');
    this._backend = backend;
  };

  return ModuleStore;
});
define('MoreButton', [
  'jquery', 'underscore', 'backbone', 'template-store-singleton'
], function ($, _, Backbone, templateStore) {
  'use strict';

  var MoreButton = Backbone.View.extend({

    tagName: 'span',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._fileActions = [];
    },

    render: function () {
      this.$el.html(templateStore.get('moreButton')());
      var $dropdown = this.$el.find('#cp-more-menu'),
        $menu = $dropdown.find('ul');

      // prevent the tooltip from showing when the menu is open
      $dropdown.on({
        'aui-dropdown2-show': function () {
          this.$('button').tipsy('disable');
        }.bind(this),
        'aui-dropdown2-hide': function () {
          this.$('button').tipsy('enable');
        }.bind(this)
      });

      var currentFile = this._fileViewer._fileState.getCurrent();

      this.$('button').tooltip({ gravity: 'n' });
      if (this._fileActions.length) {
        this._fileActions.forEach(function (item) {
          var $item = $(templateStore.get('moreMenuItem')({text: item.text}));
          $item.click(function (e) {
            e.preventDefault();
            item.callback(currentFile);
          });
          $menu.append($item);
        });
        this._show();
      } else {
        this._hide();
      }

      return this;
    },

    addFileAction: function (opts) {
      var match = _.findWhere(this._fileActions, {key: opts.key});

      if (match) {
        // overwrite the properties of the old action with the new ones
        _.extend(match, {
          key: opts.key,
          text: opts.text,
          callback: opts.callback
        });
      } else {
        this._fileActions.push({
          key: opts.key,
          text: opts.text,
          callback: opts.callback
        });
      }

      this.render();
    },

    removeFileAction: function (action) {
      var index = _.indexOf(this._fileActions, action);
      this._fileActions.splice(index, 1);

      this.render();
    },

    _show: function () {
      this.$el.css('display', 'inline');
    },

    _hide: function () {
      this.$el.css('display', 'none');
    }
  });

  return MoreButton;
});

define('panel-container-view', [
  'backbone',
  'assert',
  'constants-dictionary'
], function (
  Backbone,
  assert,
  ConstantsDictionary
) {
  'use strict';

  var PanelContainerView = Backbone.View.extend({

    className: 'panel-view',

    /**
     * @constructor
     * @param {object} options
     */
    initialize: function (options) {
      this._panelViewsByName = new ConstantsDictionary();
      this._currentPanel = null;
      this._currentPanelName = null;
      this._lastAddedPanelName = null;
      this._fileViewer = options.fileViewer;
    },

    /**
     * Checks if a panel with the given name exists.
     * @param {string} name
     * @return {bool}
     */
    hasPanelView: function (name) {
      return this._panelViewsByName.isDefined(name);
    },

    /**
     * Adds a View as a panel with a certain, unique name.
     * @param {string} name
     * @param {Backbone.View} PanelView
     * @throws Error if name is already used.
     */
    addPanelView: function (name, PanelView) {
      this._panelViewsByName.define(name, PanelView);
      this._lastAddedPanelName = name;
    },

    /**
     * Checks wether any panel is currently initialized.
     * @return {bool}
     */
    isAnyPanelInitialized: function () {
      return this.$el.is('.expanded');
    },

    /**
     * Checks wether a panel with the given name is currently initialized.
     * @param {string} name
     * @return {bool}
     */
    isPanelInitialized: function (name) {
      return this._currentPanelName === name;
    },

    /**
     * Initializes the panel with the given name. Then re-renders itself.
     * @param name {String} name of the panel to be initialized. If empty, then use the last added (using addPanelView) panel.
     * @fires initializePanel(panelName)
     * @fires togglePanel(panelName, isInitialized)
     * @throws Error if a panel is already initialized or the panel doesn't exist
     */
    initializePanel: function (name) {
      name = name || this._lastAddedPanelName;
      assert(this.isAnyPanelInitialized() === false, 'no panel is initialized');
      assert(this.hasPanelView(name) === true, 'panel exists');

      var PanelView = this._panelViewsByName.lookup(name);

      this._currentPanelName = name;
      this._currentPanel = new PanelView({
        collection: this.collection,
        fileViewer: this._fileViewer,
        panelView: this
      });

      this.$el.toggleClass('expanded', true);

      this.trigger('initializePanel', this._currentPanelName);
      this.trigger('togglePanel', this._currentPanelName, true);

      this.render();
    },

    /**
     * Tears the initialized panel down and removes it. Then re-renders itself.
     * Won't throw if there's no initialized panel.
     * @fires togglePanel(panelName, isInitialized)
     * @fires teardownPanel(panelName)
     */
    teardownPanel: function () {
      if (this._currentPanel) {
        if (this._currentPanel.teardown) {
          this._currentPanel.teardown();
        }
        this._currentPanel.remove();
      }

      this.$el.toggleClass('expanded', false);

      this.trigger('togglePanel', this._currentPanelName, false);
      this.trigger('teardownPanel', this._currentPanelName);

      this._currentPanelName = null;
      this._currentPanel = null;

      this.render();
    },

    /**
     * Utility method. Recreates the current PanelView (if there is one).
     */
    reinitializePanel: function () {
      if (!this.isAnyPanelInitialized()) { return; }

      var previousPanel = this.getInitializedPanelName();
      this.teardownPanel();
      this.initializePanel(previousPanel);
    },

    /**
     * Returns the name of the instanciated PanelView.
     * @return {string} panelName
     * @throws {Error} if no panel is initialized
     */
    getInitializedPanelName: function () {
      assert(this.isAnyPanelInitialized(), 'a panel is initialized');
      return this._currentPanelName;
    },

    /**
     * Returns the instanciated PanelView.
     * @return {PanelView}
     * @throws {Error} if no panel is initialized
     */
    getInitializedPanel: function () {
      return this._currentPanel;
    },

    /**
     * Renders the initialized panel.
     * Won't throw if no panel is initialized.
     * @fires renderPanel(panelName)
     */
    render: function () {
      this.$el.empty();

      if (this.isAnyPanelInitialized()) {
        this._currentPanel.render();
        this._currentPanel.$el.appendTo(this.$el);
      }
      this.trigger('renderPanel', this._currentPanelName);

      return this;
    }

  });

  return PanelContainerView;
});
define('PasswordLayer', [
  'ajs',
  'backbone',
  'jquery',
  'keyboard',
  'template-store-singleton'
], function (
  AJS,
  Backbone,
  $,
  keyboard,
  templateStore
) {
  'use strict';

  var pdfjsPasswordResponses = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };

  var fullscreenEvents = [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange'
  ].join(' ');

  var isFullscreen = function () {
    return (document.fullscreenElement ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenElement);
  };

  var PasswordLayer = Backbone.View.extend({

    className: 'cp-password-layer',

    events: {
      'keydown .cp-password-input': '_handleKeyDown',
      'click .cp-password-button': '_handleClick',
      'focus .cp-password-input': '_lockNavigation',
      'blur .cp-password-input': '_unlockNavigation'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this.$el.hide();
    },

    teardown: function () {
      $(document).off(fullscreenEvents, this.updatePasswordLayer.bind(this));
    },

    /**
     * Show the password input layer
     * @param  {Number}   reason     Reason PDFJS why needs the password
     * @param  {Callback} updatePassword
     */
    showPasswordInput: function (reason, updatePassword) {
      $(document).on(fullscreenEvents, this.updatePasswordLayer.bind(this));
      this.updatePassword = updatePassword;
      this._fileViewer._view.fileContentView.getLayerForName('spinner').stopSpin();
      this.$el.show().html(templateStore.get('passwordLayer')({
        prompt: this._getPromptTitle(reason)
      }));
      this.updatePasswordLayer();
      this._showToolbar();
    },

    hidePasswordInput: function () {
      $(document).off(fullscreenEvents, this.updatePasswordLayer.bind(this));
      this.$el.empty();
      this.$el.hide();
    },

    /**
     * Update the passwordLayer depending on fullsccren/no fullscreen
     * Safari/Firefox can't handle keyboard inputs in fullscreen
     */
    updatePasswordLayer: function () {
      if (isFullscreen()) {
        this.$el.find('.cp-password-base').hide();
        this.$el.find('.cp-password-fullscreen').show();
      } else {
        this.$el.find('.cp-password-fullscreen').hide();
        this.$el.find('.cp-password-base').show();
      }
    },

    /**
     * Get i18n string for password prompt based on reason
     * @param  {Number} reason Reason PDFJS why needs the password
     * @return {String}
     */
    _getPromptTitle: function (reason) {
      var title = "Please enter the password to view this file.";
      if (reason === pdfjsPasswordResponses.INCORRECT_PASSWORD) {
        title = "Invalid password. Please try again.";
      }
      return title;
    },

    /**
     * Show passwordLayer and toolbar
     */
    _showToolbar: function () {
      var view  = this._fileViewer._view;
      var toolbar = view.fileContentView.getLayerForName('toolbar');
      var mode  = view._modes[view._mode];
      toolbar.setActions(mode.toolbarActions);
      toolbar.render();
    },

    /**
     * Check if password was given and call `updatePassword()`
     */
    _updatePassword: function () {
      var password = this.$el.find('.cp-password-input').val();
      if (password && password.length > 0) {
        this.hidePasswordInput();
        this.updatePassword(password);
      }
    },

    /**
     * Lock navigation keys
     */
    _lockNavigation: function () {
      this._fileViewer._view._navigationKeyLockCount++;
    },

    /**
     * Unlock navigation keys
     */
    _unlockNavigation: function () {
      this._fileViewer._view._navigationKeyLockCount--;
    },

    _handleClick: function (ev) {
      ev.preventDefault();
      this._updatePassword();
    },

    _handleKeyDown: function (ev) {
      if (ev.which === keyboard.keys.RETURN) {
        ev.preventDefault();
        return this._updatePassword();
      }
      if (ev.which === keyboard.keys.ESCAPE) {
        ev.preventDefault();
        return this._fileViewer.close();
      }
    }

  });

  return PasswordLayer;
});

define('pdf-view-provider', [
  'jquery',
  'file',
  'module-store-singleton'
], function (
  $,
  File,
  moduleStore
) {
  'use strict';

  var asyncViewerResource = null,
    asyncConfigResource = null;

  /**
   * Returns a pdf viewer.
   * @returns {Promise}
   */
  var pdfViewProvider = function () {
    if (!asyncViewerResource) {
      asyncViewerResource = moduleStore.get('pdf-viewer');
    }
    if (!asyncConfigResource) {
      asyncConfigResource = moduleStore.get('pdf-config');
    }

    var viewerInstance = $.Deferred();

    $.when(asyncViewerResource, asyncConfigResource).done(function (viewer, config) {
      var PDFViewer = require('pdf-view');

      // FIL-1811: Use UMD for loading PDFJS
      var PDFJS = window.PDFJS;
      PDFJS.workerSrc = config.workerSrc;
      PDFJS.cMapUrl = config.cMapUrl;

      viewerInstance.resolve(PDFViewer);
    });

    return viewerInstance.promise();
  };

  return pdfViewProvider;
});

define('presentationMode', ['jquery', 'keyboard'], function ($, keyboard) {
  'use strict';

  var AJS = window.AJS;

  var requestFullscreen = function () {
    var fullscreenContainer = $('#cp-file-body')[0];

    if (fullscreenContainer.requestFullscreen) {
      fullscreenContainer.requestFullscreen();
    } else if (fullscreenContainer.mozRequestFullScreen) {
      fullscreenContainer.mozRequestFullScreen();
    } else if (fullscreenContainer.webkitRequestFullScreen) {
      fullscreenContainer.webkitRequestFullScreen();
    } else if (fullscreenContainer.msRequestFullscreen) {
      fullscreenContainer.msRequestFullscreen();
    }
  };

  var cancelFullscreen = function () {
    if (document.cancelFullscreen) {
      document.cancelFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  var isFullscreen = function () {
    return (document.fullscreenElement ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenElement);
  };

  var onFullscreenChange = function (e) {
    // if user click Esc to exit fullscreen instead of clicking 'exit presentation' button
    // then change view mode to 'BASE'
    if (!isFullscreen() && !this.isInMode('BASE')) {
      this._fileViewer.analytics.send('files.fileviewer-web.presentation.exit', {
        actionType: 'hotkey'
      });
      this._fileViewer.changeMode('BASE');
    }
  };

  var presentationMode = {

    activateHook: function (mainView) {
      $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange',
        onFullscreenChange.bind(mainView));
      var $arrowLayer = mainView.fileContentView.getLayerForName('arrows').$el;
      $arrowLayer.toggle(this.showsArrowLayer);
    },

    deactivateHook: function (mainView) {
      $(document).off('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange',
        onFullscreenChange.bind(mainView));
    },

    setup: function (mainView, viewer) {
      this._originalScrollTop = $('body').scrollTop();
      $('#cp-file-body').addClass('presentation');
      $(document).on('keydown.modeKeys', this._handleKeys.bind(mainView));

      if (!isFullscreen()) { requestFullscreen(); }
    },

    teardown: function (mainView, viewer, isModeChanged) {
      $('#cp-file-body').removeClass('presentation');
      $(document).off('keydown.modeKeys');

      if (isModeChanged && isFullscreen()) { cancelFullscreen(); }
      // this is to fix an issue on Chrome that
      // when entering and exiting fullscreen mode, the document body got scrolled up
      $('body').scrollTop(this._originalScrollTop);
    },

    disableClickBackgroundCloses: true,

    showsArrowLayer: false,

    _handleKeys: function (e) {
      e.preventDefault();
      var contentView, viewer;

      if (this.fileContentView.isLayerInitialized('content')) {
        contentView = this.fileContentView.getLayerForName('content');
        viewer = contentView.getAttachedViewer();
      }
      if (!viewer) { return; }
      if (e.ctrlKey || e.metaKey) {
        return;
      }

      switch (e.which) {
        case keyboard.keys.ARROW_UP:
          if (viewer.goToPreviousPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pageprev', {
              actionType: 'hotkey'
            });
            viewer.goToPreviousPage();
            this.updatePaginationButtons();
          }
          return;
        case keyboard.keys.ARROW_DOWN:
          if (viewer.goToNextPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pagenext', {
              actionType: 'hotkey'
            });
            viewer.goToNextPage();
            this.updatePaginationButtons();
          }
          return;
      }

    },

    toolbarActions: [
      {
        title: "Previous page",
        className: 'cp-toolbar-prev-page',
        predicate: function () { return this._viewer && this._viewer.goToPreviousPage; },
        handler: function () {
          if (this._viewer && this._viewer.goToPreviousPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pageprev', {
              actionType: 'button'
            });
            this._viewer.goToPreviousPage();
            this._fileViewer.getView().updatePaginationButtons();
          }
        }
      },
      {
        title: "Exit Presentation",
        className: 'cp-toolbar-presentation-exit',
        handler: function () {
          this._fileViewer.analytics.send('files.fileviewer-web.presentation.exit', {
            actionType: 'button'
          });
          this._fileViewer.changeMode('BASE');
        }
      },
      {
        title: "Next page",
        className: 'cp-toolbar-next-page',
        predicate: function () { return this._viewer && this._viewer.goToNextPage; },
        handler: function () {
          if (this._viewer && this._viewer.goToNextPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pagenext', {
              actionType: 'button'
            });
            this._viewer.goToNextPage();
            this._fileViewer.getView().updatePaginationButtons();
          }
        }
      }
    ]
  };

  return presentationMode;
});

define('soy-template-backend', [], function () {
  'use strict';

  /* global FileViewer */
  // FileViewer is defined in support/wrapper-plugin-footer.js

  // Returns a value from a nested object, example:
  // obj = { a: { b: { c: 'x' } } }
  // getNestedProperty(obj, 'a.b.c') -> 'x'
  var getNestedProperty = function (obj, prop) {
    var levels = prop.split('.');
    var i;
    for (i = 0; i < levels.length; i++) {
      obj = obj[levels[i]];
    }
    return obj;
  };

  return function (fileViewer) {
    /**
     * Picks the specified template url from the auto-generated template object.
     * @param {string} templateUrl
     * @return {function}
     */
    return function (templateUrl) {
      return getNestedProperty(FileViewer.Templates, templateUrl);
    };
  };
});

define('SpinnerLayer', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  // Spinner rendering
  var SPINNER_SIZE = 'large';
  var SPINNER_STYLE = {
    color: '#fff',
    zIndex: 'auto'
  };

  /**
   * Loading spinner in the middle of the file content.
   * @constructor
   */
  var SpinnerLayer = Backbone.View.extend({

    className: 'cp-spinner-layer',

    initialize: function () {
      this._updateElements();
    },

    render: function () {
      this.$el.html(templateStore.get('fileBodySpinner')());
      this._updateElements();
      return this;
    },

    /**
     * Instruct the spinner to start.
     */
    startSpin: function () {
      this.$spinner.spin(SPINNER_SIZE, SPINNER_STYLE);
    },

    /**
     * Instruct the spinner to stop.
     */
    stopSpin: function () {
      this.$spinner.spin(false);
    },

    _updateElements: function () {
      this.$spinner = this.$el.find('.cp-spinner');
    }

  });

  return SpinnerLayer;
});
define('storage', ['assert'], function (assert) {
  'use strict';

  /**
   * Universal key-value store using localStorage or
   * optionally a `customStorage` object can be passed in.
   * @constructor
   * @param {Object} customStorage - Object with setItem, getItem, removeItem methods.
   * @param {Function} customStorage.setItem - Custom set method
   * @param {Function} customStorage.getItem - Custom get method
   * @param {Function} customStorage.removeItem - Custom remove method
   * @param {String} namespace - Namespace to prefix storage keys with
   */
  var Storage = function (customStorage, namespace) {
    this._namespace = namespace || '';
    this._storage = this._getStorage(customStorage);
  };

  /**
   * Return corresponding value to given key.
   * - can store arbitrary json structs for certain values
   *   (not any value, functions won't work for example)
   * - for better performance, try to have more keys and less structs
   *   (cause big structs are slow)
   * @param  {String} key
   * @return {*}
   */
  Storage.prototype.getItem = function (key) {
    var storageValue;
    key = this._namespace + key.toString();
    storageValue = new StorageValue();
    storageValue.fromJSON(this._storage.getItem(key));
    if (storageValue.isExpired()) {
      this._storage.removeItem(key);
      return;
    }
    return storageValue.value;
  };

  /**
   * Store given value for with given key.
   * @param {String} key
   * @param {*}    value
   * @param {Number} expiry - Expire n milliseconds from now
   */
  Storage.prototype.setItem = function (key, value, expiry) {
    key = this._namespace + key.toString();
    this._storage.setItem(
      key,
      new StorageValue(value, expiry).toJSON()
    );
  };

  /**
   * Remove storage entry for key.
   * @param {String} key
   */
  Storage.prototype.removeItem = function (key) {
    key = this._namespace + key.toString();
    this._storage.removeItem(key);
  };

  // Check if window.localStorage is available.
  Storage.prototype._hasLocalStorage = function () {
    var test = this._namespace + 'hasLocalStorage';

    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Return the proper storage object.
  Storage.prototype._getStorage = function (customStorage) {
    if (customStorage) {
      assert(
      typeof customStorage.setItem === 'function',
      'Storage custom.setItem is a function'
      );
      assert(
      typeof customStorage.getItem === 'function',
      'Storage custom.getItem is a function'
      );
      assert(
      typeof customStorage.removeItem === 'function',
      'Storage custom.removeItem is a function'
      );
      return customStorage;
    } else if (this._hasLocalStorage()) {
      return Storage.localStorage;
    }
    return Storage.noStorage;
  };

  Storage.noStorage = {
    setItem: function () {},
    getItem: function () {},
    removeItem: function () {}
  };

  Storage.localStorage = {
    setItem: function (key, value) {
      window.localStorage.setItem(key, value);
    },

    getItem: function (key) {
      return window.localStorage.getItem(key);
    },

    removeItem: function (key) {
      window.localStorage.removeItem(key);
    }
  };

  /**
   * StorageValue
   * @param {*}    value
   * @param {Number} expiry - Expire n milliseconds from now
   */
  var StorageValue = Storage.StorageValue = function (value, expiry) {
    this.value  = value;
    this._setExpiry(expiry);
  };

  StorageValue.prototype._setExpiry = function (expiry) {
    if (parseInt(expiry)) {
      this.expiry = Date.now() + expiry;
    } else {
      this.expiry = null;
    }
  };

  /**
   * Checks if the expiry time is in the past
   * @return {Boolean}
   */
  StorageValue.prototype.isExpired = function () {
    return this.expiry && Date.now() > this.expiry;
  };

  /**
   * Sets StorageValue properties from a JSON string.
   * @param  {String} stringifiedJson
   */
  StorageValue.prototype.fromJSON = function (stringifiedJson) {
    var json;
    stringifiedJson = stringifiedJson || '{}';
    json = JSON.parse(stringifiedJson);
    this.value = json.value;
    this.expiry = json.expiry;
  };

  /**
   * Return JSON string
   * @return {String}
   */
  StorageValue.prototype.toJSON = function () {
    return JSON.stringify({
      value: this.value,
      expiry: this.expiry || undefined
    });
  };

  return Storage;
});

define('template-store-singleton', [
  'template-store'
], function (
  TemplateStore
) {
  'use strict';

  /**
   * Global template store. This simplifies development until FileViewer core
   * stabilizes, the plugin interface is ready and the view hierarchy is
   * clear.
   *
   * @todo remove singleton
   */
  return new TemplateStore();
});
define('template-store', [
  'assert',
  'underscore'
], function (
  assert,
  _
) {
  'use strict';

  /**
   * Provides templates by asking a previously configured backend.
   *
   * A backend is a function that accepts a template path and returns the
   * matched template. If no template is found, it returns undefined.
   *
   * @constructor
   */
  var TemplateStore = function () {
    this._backend = null;
  };

  /**
   * Checks if backend is a valid backend.
   * @param {*} backend
   * @return {bool}
   */
  TemplateStore.validBackend = function (backend) {
    return _.isFunction(backend);
  };

  /**
   * Asks its backend for the given templateUrl.
   * @param {string} templateUrl
   * @return {*}
   * @throws {Error} if backend is invalid
   */
  TemplateStore.prototype.get = function (templateUrl) {
    assert(TemplateStore.validBackend(this._backend), 'backend is valid');
    return this._backend(templateUrl);
  };

  /**
   * Sets a backend for this template store.
   * @param {function} backend
   * @throws {Error} if backend is invalid
   */
  TemplateStore.prototype.useBackend = function (backend) {
    assert(TemplateStore.validBackend(backend), 'backend is valid');
    this._backend = backend;
  };

  return TemplateStore;
});
define('TitleView', [
  'backbone', 'icon-utils', 'template-store-singleton'
], function (Backbone, iconUtils, templateStore) {
  'use strict';

  var TitleView = Backbone.View.extend({

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
    },

    render: function () {
      var model = this._fileViewer.getCurrentFile();
      if (!model) { return; }

      this.$el.html(templateStore.get('titleContainer')({
        title: model.get('title'),
        iconClass: iconUtils.getCssClass(model.get('type'))
      }));

      return this;
    }

  });

  return TitleView;
});
define('ToolbarLayer', [
  'jquery',
  'underscore',
  'backbone',
  'template-store-singleton',
  'keyboard'
], function (
  $,
  _,
  Backbone,
  templateStore,
  keyboard
) {
  'use strict';

  // Amount of time to wait before hiding the controls when the mouse stops moving (in ms).
  var HIDE_CONTROLS_TIMEOUT = 500;

  // Amount of time between checking if the mouse is still moving (in ms).
  // Should be smaller than HIDE_CONTROLS_TIMEOUT to prevent flickering (in ms).
  var THROTTLE_MOUSEMOVE = HIDE_CONTROLS_TIMEOUT - 100;

  // Toolbar animation durations (in ms).
  var HIDE_ANIMATION_DURATION = 400;
  var SHOW_ANIMATION_DURATION = 100;

  /**
   * Showing a toolbar in the lower part of the viewer.
   * @constructor
   */
  var ToolbarLayer = Backbone.View.extend({

    className: 'cp-toolbar-layer',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._viewer = null;
      this._toggleControlsTimeout = null;
      this._actions = [];

      $('#cp-file-body').on('mousemove.toolbarLayer', this._showControlsOnMove.bind(this));
      $(document).on('keydown.tabToNavigate', this._tabToNavigate.bind(this));
    },

    teardown: function () {
      $(document).off('keydown.tabToNavigate');
      $('#cp-file-body').off('mousemove.toolbarLayer');
    },

    render: function () {
      this.$el.html(templateStore.get('toolbar')({
        actions: this._actions
      }));
      this.$el.find('button').tooltip({gravity: 's', aria: true});
      this.$toolbar = this.$('.cp-toolbar');

      var listeners = {};
      this._actions.forEach(function (action) {
        listeners['click .' + action.className] = action.handler;

        if (action.predicate && !action.predicate.call(this)) {
          this.$toolbar.find('.' + action.className).hide();
        }
      }, this);
      this.delegateEvents(listeners);

      this.$toolbar.css('margin-left', -this.$toolbar.width() / 2);

      this.$toolbar.on('click', 'a[href=\'#\']', function (e) {
        e.preventDefault();
      });

      return this;
    },

    setActions: function (actions) {
      this._actions = actions;
      this.render();
    },

    getActions: function () {
      return this._actions;
    },

    setViewer: function (viewer) {
      this._viewer = viewer;
      this.render();
    },

    _tabToNavigate: function (event) {
      if (event.which === keyboard.keys.TAB) {
        this._showControlsOnMove.call(this);
      }
    },

    // Show / hide controls based on mouse movements:
    // - Show the controls when the mouse is moving over the content view.
    // - Hide the controls after a short delay when the mouse stops moving.
    // - Keep the controls open if the mouse is hovering over them.

    _showControlsOnMove : _.throttle(function () {
      if (!this.$toolbar) { return; }

      this.$toolbar.fadeTo(SHOW_ANIMATION_DURATION, 1);
      clearTimeout(this._toggleControlsTimeout);
      this._toggleControlsTimeout = this._setHideTimer();

    }, THROTTLE_MOUSEMOVE),

    _setHideTimer: function () {
      return setTimeout(function () {
        if (this.$toolbar.is(':hover')) { return; }
        if (this.$toolbar.has(':focus').length) { return; }

        this.$toolbar.find('button').each(this._removeTooltipForElement);

        this.$toolbar.fadeTo(HIDE_ANIMATION_DURATION, 0);
      }.bind(this), HIDE_CONTROLS_TIMEOUT);
    },

    _removeTooltipForElement: function (pos, el) {
      var tipsyId = $(el).attr('aria-describedby');
      if (tipsyId) { $('#' + tipsyId).fadeOut(); }
    }

  });

  return ToolbarLayer;
});

define('unknown-file-type-view-provider', [
  'jquery',
  'unknown-file-type-view'
],
function (
  $,
  UnknownFileTypeView
) {
  'use strict';

  var unknownFileTypeViewProvider = function () {
    return $.Deferred().resolve(UnknownFileTypeView);
  };

  return unknownFileTypeViewProvider;
});
define('unknown-file-type-view', [
  'ajs',
  'BaseViewer',
  'template-store-singleton',
  'icon-utils',
  'jquery'
],
function (
  AJS,
  BaseViewer,
  templateStore,
  iconUtils,
  $
) {
  'use strict';

  var UnknownFileTypeView = BaseViewer.extend({

    id: 'cp-unknown-file-type-view-wrapper',

    events: {
      'click .download-button': '_handleDownloadButton'
    },

    initialize: function () {
      BaseViewer.prototype.initialize.apply(this, arguments);
    },

    teardown: function () {
      this.off();
      this.remove();
    },

    render: function () {
      this.$el.html(templateStore.get('unknownFileTypeViewer')({
        iconClass: iconUtils.getCssClass(this.model.get('type')),
        src: this.model.get('srcDownload') || this.model.get('src')
      }));

      var fileView = this._fileViewer.getView();

      // kill sidebar view.
      if (fileView.fileSidebarView.isAnyPanelInitialized()) {
        fileView.fileSidebarView.teardownPanel();
      }

      this.trigger('viewerReady');

      return this;
    },

    setupMode: function (mode) {
      if (mode === 'BASE') {
        $('.cp-toolbar-layer').hide();
      }
    },

    _handleDownloadButton: function () {
      this._fileViewer.trigger('fv.download');
      this._triggerAnalytics();
    },

    _triggerAnalytics: function () {
      this._fileViewer.analytics.send('files.fileviewer-web.file.download', {
        actionType: 'cta'
      });
    }

  });

  return UnknownFileTypeView;
});

define('url', [], function () {
  'use strict';
  return {
    /**
     * Adds an objects keys and values as query parameters to an given URL.
     * @param {string} [url]
     * @param {object} [param]
     * @return {string}
     */
    addQueryParamToUrl: function (url, param) {
      param = param || {};
      url = url.split('?');
      var queryArray = url[1] && url[1].split('&');
      queryArray = queryArray || [];
      Object.keys(param).forEach(function (key, val) {
        queryArray.push(key + '=' + param[key]);
      });
      if (queryArray.length === 0) {
        return url[0];
      }
      return url[0] + '?' + queryArray.join('&');
    },
    parseQueryString: function (query) {
      var parts = query.split('&');
      var params = {};
      for (var i = 0, ii = parts.length; i < ii; ++i) {
        var param = parts[i].split('=');
        var key = param[0].toLowerCase();
        var value = param.length > 1 ? param[1] : null;
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }
      return params;
    }
  };
});

define('video-view-provider', [
  'jquery',
  'file'
], function (
  $,
  File
) {
  'use strict';

  /**
   * Returns a video viewer.
   * @returns {Promise}
   */
  var videoViewProvider = function () {
    return $.Deferred().resolve(require('video-view'));
  };

  return videoViewProvider;
});
define('viewer-registry',
  [
    'underscore',
    'assert'
  ],
  function (
    _,
    assert
  ) {
    'use strict';

    var createMatchFn = function (expected) {
      return function (current) {
        return current === expected;
      };
    };

    /**
     * ViewerRegistry is responsible for mapping file types to content viewers.
     *
     * When FileViewer is asked to view a file, it uses the file's type and asks
     * its ViewerRegistry for the proper viewer. In addition, ViewerRegistry is
     * exposed to the outside world. Therefore viewers and plugins can register
     * themself without touching FileViwer core.
     *
     * A viewer is a backbone view and is registered via a function that wraps this
     * view into a promise.
     *
     * Multiple viewers for the same filetype are weighted and can thus be overriden.
     * The default weight is 10 with a lower weight meaning higher priority.
     */
    var ViewerRegistry = function () {
      this._handlers = [];
    };

    /**
     * Checks for a valid viewer (is a function).
     *
     * @param {*} previewer
     * @return {boolean}
     */
    ViewerRegistry.isValidPreviewer = function (previewer) {
      return _.isFunction(previewer);
    };

    /**
     * Checks for a valid weight (a number).
     *
     * @param {*} weight
     * @return {boolean}
     */
    ViewerRegistry.isValidWeight = function (weight) {
      return typeof weight === 'number' && !isNaN(weight);
    };

    /**
     * Register a new viewer for a given filetype with an optional weight.
     *
     * fileType can either be a string which is then directly matched or a
     * predicate function that get's handed the current file type and then
     * can return true / false.
     *
     * @param {string|function} fileType
     * @param {function} previewer
     * @param {integer} [weight=10]
     * @thors {Error}
     */
    ViewerRegistry.prototype.register = function (fileType, previewer, weight) {
      var matchesFileType = typeof fileType === 'function' ? fileType : createMatchFn(fileType);

      weight = weight || 10;

      assert(ViewerRegistry.isValidPreviewer(previewer), 'previewer is valid');
      assert(ViewerRegistry.isValidWeight(weight), 'weight is valid');

      this._handlers.push({
        matchesFileType: matchesFileType,
        previewer: previewer,
        weight: weight
      });

      this._updateWeighting();
    };

    /**
     * Get the viewer with the lowest weight for the given fileType.
     *
     * Returns undefined if no viewer is found.
     *
     * @param {string} fileType
     * @return {object} previewer
     */
    ViewerRegistry.prototype.get = function (fileType) {
      var handler = _.find(this._handlers, function (handler) {
        return handler.matchesFileType(fileType);
      });

      return handler && handler.previewer;
    };

    ViewerRegistry.prototype._updateWeighting = function () {
      // Sorts handlers by weight - needs to be called after a new handler is inserted.
      this._handlers = _.sortBy(this._handlers, function (handler) {
        return handler.weight;
      });
    };

    return ViewerRegistry;
  }
);

define('ViewerLayer', [
  'backbone'
], function (Backbone) {
  'use strict';

  var ViewerLayer = Backbone.View.extend({

    className: 'cp-viewer-layer',

    initialize: function (options) {
      this._viewer = null;
    },

    attachViewer: function (viewer) {
      this._viewer = viewer;
      this.$el.prepend(viewer.$el);
    },

    getAttachedViewer: function () {
      return this._viewer;
    },

    teardown: function () {
      if (this._viewer) {
        if (this._viewer.teardown) {
          this._viewer.teardown();
        }
        this._viewer.$el.remove();
      }
    }
  });

  return ViewerLayer;
});

define('WaitingLayer', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var WaitingLayer = Backbone.View.extend({

    className: 'cp-waiting-layer',

    initialize: function () {
      this.$el.hide();
    },

    showMessage: function (file, header, message) {
      this.$el.show().html(templateStore.get('waitingMessage')({
        src: file.get('srcDownload') || file.get('src'),
        header: header,
        message: message
      }));
      this.$el.find('.cp-waiting-message-spinner').spin('large', {
        color: '#fff',
        zIndex: 'auto'
      });
    },

    clearMessage: function () {
      this.$el.find('.cp-waiting-message-spinner').spin(false);
      this.$el.hide();
    }

  });

  return WaitingLayer;
});

    // assemble core module by injecting all dependencies
    var FileViewer = require('file-viewer');

    FileViewer.Templates = window.FileViewer.Templates;

    // export FileViewer using CommonJS, AMD and the window object
    if (typeof module !== "undefined" && module.exports) {
        module.exports = FileViewer;
    }

    if (window.define) {
        window.define(
            'FileViewer',
            ['jquery', 'underscore', 'backbone', 'ajs'],
            function () { return FileViewer; }
        );
    }

    window.FileViewer = FileViewer;

}());;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-image-templates.js' */
// This file was automatically generated from image-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.previewBody = function(opt_data, opt_ignored) {
  return '<div class="cp-scale-info" /><div class="cp-image-container" /><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.previewBody.soyTemplateName = 'FileViewer.Templates.previewBody';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-image.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('image-view',
  [
    'ajs',
    'backbone',
    'underscore',
    'jquery',
    'file',
    'BaseViewer',
    'template-store-singleton'
  ], function (
    AJS,
    Backbone,
    _,
    $,
    File,
    BaseViewer,
    templateStore
  ) {
    'use strict';

    var ImageView = BaseViewer.extend({

      id: 'cp-image-preview',

      tagName: 'div',

      initialize: function () {
        BaseViewer.prototype.initialize.apply(this, arguments);
        this.bindPanEvents();
        this.PIXELATE_THRESHOLD = 2;
        this.MIN_HEIGHT = 100;
        this.ZOOM_IN_FACTOR = 1.25;
        this.ZOOM_OUT_FACTOR = 0.80;
        this._isFitWidth = false;
        this._isFitHeight = false;
      },

      renderAnnotations: function (PinsView) {
        var current = this._fileViewer.getCurrentFile();
        var annotations = current.get('annotations');
        if (current && PinsView) {
          this.pinsView = new PinsView({
            fileViewer: this._fileViewer,
            container: this.$el.find('.cp-image-container'),
            collection: annotations
          });
          this.pinsView.render();
        }

        annotations.on('selected', function (item) {
          var $pin, positionTop, positionLeft;
          if (!item) { return; }

          $pin = this.$el.find('span.cp-active-annotation.selected');
          if (!$pin.length) { return; }

          positionTop = $pin.position().top - (this.$el.height() / 2);
          positionLeft = $pin.position().left - (this.$el.width() / 2);

          this.$el.animate({
            'scrollTop': positionTop,
            'scrollLeft': positionLeft
          });

        }.bind(this));
      },

      bindPanEvents: function () {
        var previous = {x: 0, y: 0},
          view = this;

        var scroll = function (e) {
          var $el = view.$el;
          $el.scrollLeft($el.scrollLeft() + previous.x - e.clientX);
          $el.scrollTop($el.scrollTop() + previous.y - e.clientY);
          previous = { x: e.clientX, y: e.clientY };
          e.preventDefault();
        };

        var unpan = function (e) {
          view.$el.off('mousemove', '#cp-img', scroll);
          view.$image.removeClass('panning');
          e.preventDefault();
        };

        var pan = function (e) {
          $(window).one('mouseup', unpan);
          view.$el.on('mousemove', '#cp-img', scroll);
          view.$image.addClass('panning');
          previous = { x: e.clientX, y: e.clientY };
          e.preventDefault();
        };

        this.$el.on('mousedown', '#cp-img', pan);
      },

      handleResize: function () {
        this._forceRescale();
      },

      _forceRescale: function () {
        if (this._isFitHeight) {
          this.zoomHeight();
        } else if (this._isFitWidth) {
          this.zoomWidth();
        }
      },

      // Set size of the images container to the image size.
      // This is a workaround for `HC-11712 as` it's
      // original fix `e31eac8ac51` caused a new issue: `FIL-555`.
      _fixContainerSize: function () {
        var $container = this.$el.find('.cp-image-container');
        var $image = this.$el.find('#cp-img');
        $container.width($image.width());
        $container.height($image.height());
      },

      // Returns `true` if the original image is either wider
      // or higher than current viewport.
      _isImageBiggerThanViewport: function () {
        return this._isImageWiderThanViewport() ||
             this._isImageHigherThanViewport();
      },

      // Returns `true` if original image is wider than current viewport.
      _isImageWiderThanViewport: function () {
        var viewportWidth = this.$el.width();
        return this.imageWidth > viewportWidth;
      },

      // Returns `true` if original image is higher than current viewport.
      _isImageHigherThanViewport: function () {
        var viewportHeight = this.$el.height();
        return this.imageHeight > viewportHeight;
      },

      _isZoomedToPageFit: function () {
        return this.$el.width() === this.$image.width() ||
             this.$el.height() === this.$image.height();
      },

      _stopFit: function () {
        this._isFitWidth  = false;
        this._isFitHeight = false;
      },

      _showScaleInfo: function (scale) {
        if (this._rescaleForFullScreen) { return; }
        var scalePercentage = Math.round(parseInt(scale * 100, 10));
        var $scaleInfo = this.$el.find('.cp-scale-info');
        $scaleInfo.text(scalePercentage + '%');
        $scaleInfo
          .stop(true, true)
          .fadeIn(50)
          .delay(400)
          .fadeOut(100);
      },

      /**
       * Scale the image up by factor set in `this.ZOOM_IN_FACTOR`
       */
      zoomIn: function () {
        var scaleFactor = (this.$image.width() / this.imageWidth) * this.ZOOM_IN_FACTOR;
        this._stopFit();
        this.changeScale(scaleFactor);
      },

      /**
       * Scale the image down by factor set in `this.ZOOM_OUT_FACTOR`
       */
      zoomOut: function () {
        var scaleFactor = (this.$image.width() / this.imageWidth) * this.ZOOM_OUT_FACTOR;
        this._stopFit();
        this.changeScale(scaleFactor);
      },

      /**
       * If the image is already fit to viewports width then rescale to
       * best fit or else scale to width.
       */
      zoomFit: function () {
        if (this._isZoomedToPageFit()) {
          this.zoomActual();
        } else {
          this.zoomAuto(true);
        }
      },

      /**
       * Scale image to fit into the viewport but don't resize the image
       * over its original dimensions.
       * @param  {Boolean} force - Force best fit even if image is smaller than viewport
       */
      zoomAuto: function (force) {
        if (this._isImageBiggerThanViewport() || force) {
          this._zoomPageFit();
        } else {
          this.zoomActual();
        }
      },

      _zoomPageFit: function () {
        var viewportWidth  = this.$el.width();
        var viewportHeight = this.$el.height();

        if ((viewportWidth / this.imageWidth) > (viewportHeight / this.imageHeight)) {
          this.zoomHeight();
        } else {
          this.zoomWidth();
        }
      },

      /**
       * Scale the image so it fits to the viewports width.
       */
      zoomWidth: function () {
        var viewportWidth = this.$el.width();
        var scaleFactor   = viewportWidth / this.imageWidth;
        this.changeScale(scaleFactor);
        this._stopFit();
        this._isFitWidth = true;
      },

      /**
       * Scale the image so it fits to the viewports height.
       */
      zoomHeight: function () {
        var viewportHeight = this.$el.height();
        var scaleFactor = viewportHeight / this.imageHeight;
        this.changeScale(scaleFactor);
        this._stopFit();
        this._isFitHeight = true;
      },

      /**
       * Scale the image to its original size.
       */
      zoomActual: function () {
        this._stopFit();
        this.changeScale(1);
      },

      /**
       * Change the images scale and re-center it in viewport.
       * @param  {Number} scale - Factor by which to scale the image
       */
      changeScale: function (scale) {
        var viewportWidth = this.$el.width();
        var viewportHeight = this.$el.height();

        var oldWidth = this.$image.width();
        var oldHeight = this.$image.height();
        var containerPosition = this.$el.find('.cp-image-container').position();

        //find the position of the pixel in the centre of the viewport
        var oldPixelCentreWidth = (viewportWidth/2) + Math.abs(containerPosition.left);
        var oldPixelCentreHeight = (viewportHeight/2) + Math.abs(containerPosition.top);

        this.$image.css('width', this.imageWidth * scale);
        this.$image.css('height', this.imageHeight * scale);

        //calculate the new pixel centre after the image has been scaled
        var newPixelCentreWidth = (oldPixelCentreWidth/oldWidth) * this.$image.width();
        var newPixelCentreHeight = (oldPixelCentreHeight/oldHeight) * this.$image.height();

        //move the scrollbar to the new pixel and then center the viewport on it
        this.$el.scrollLeft(newPixelCentreWidth - (viewportWidth/2));
        this.$el.scrollTop(newPixelCentreHeight - (viewportHeight/2));

        this.makePannable();
        this.pixelateIfScaleOverThreshold(scale);
        this._fixContainerSize();
        this._showScaleInfo(scale);
      },

      pixelateIfScaleOverThreshold: function (scale) {
        this.$image.toggleClass(
          'pixelate',
          scale >= this.PIXELATE_THRESHOLD
        );
      },

      makePannable: function () {
        if ((this.$el.width() < this.$image.width()) || (this.$el.height() < this.$image.height())) {
          this.$image.addClass('pannable');
        } else {
          this.$image.removeClass('pannable');
        }
      },

      teardown: function () {
        BaseViewer.prototype.teardown.apply(this);
        $(window).off('resize.cp-repaint');
        this.pinsView && this.pinsView.remove().off();
      },

      getBackground: function () {
        return this.$el.add('.cp-image-container');
      },

      render: function () {
        this.$el.html(templateStore.get('previewBody')());

        this.addImage();

        $(window).on('resize.cp-repaint', _.throttle(this._forceRescale.bind(this), 250));

        return this;
      },

      addImage: function () {
        // This extra work makes the image size the same as the viewport size.
        var $img = $('<img/>')
          .attr('id', 'cp-img')
          .attr('src', this._previewSrc)
          .attr('alt', this.model.get('title'));
        $img.off('load');

        $img.on('load', _.partial(this.scaleAndAppendImage, this));
        $img.on('load', function () {
          this.trigger('viewerReady');
        }.bind(this));
        $img.on('error', function () {
          var err = new Error('Image failed loading');
          err.title = "Ouch! We can\'t load the image.";
          err.description = this.model.get('src');
          err.icon = 'cp-image-icon';
          this.trigger('viewerFail', err);
        }.bind(this));

        $img.on('click', function () {
          document.activeElement.blur();
        });
      },

      scaleAndAppendImage: function (view) {
        var $image = $(this);

        view.imageHeight = this.height;
        view.imageWidth = this.width;
        view.$image = $image;

        $image.css('display', 'none'); // For the fade in.

        var $imageContainer = view.$el.find('.cp-image-container');
        $imageContainer.append(view.$image);
        $imageContainer.addClass('cp-annotatable');

        // Ensure the whole image is displayed by fitting to the larger side.
        view.zoomAuto();
        view.$image.fadeIn(200);

        view.trigger('cp.imageAppended');
      },

      setupMode: function (mode, isModeChanged) {
        if (isModeChanged) {
          clearInterval(this._fullScreenInProgress);
          this.scaleGraduallyToFit();
        }
      },

      scaleGraduallyToFit: function () {
        // When browser change to fullscreen mode, the screen size is changed many times.
        // Here we scale 10 times every 100ms to make the page scaling to full screen smoothly
        var times = 0;
        this._rescaleForFullScreen = true;
        this._fullScreenInProgress = setInterval(function () {
          times++;
          if (times === 11) {
            clearInterval(this._fullScreenInProgress);
            this._rescaleForFullScreen = false;
            this.zoomAuto();
          }
          this.zoomAuto();
        }.bind(this), 100);
      }

    });

    return ImageView;
  });

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-minimode-templates.js' */
// This file was automatically generated from minimode.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.minimodeBanner = function(opt_data, opt_ignored) {
  return '<div id="cp-info"><a tabindex="100" href="#" id="cp-files-label" aria-label="' + soy.$$escapeHtml("Show all files") + '"><span class="cp-files-collapser up">' + soy.$$escapeHtml("Show all files") + '</span><span class="cp-files-collapser down hidden">' + soy.$$escapeHtml("Hide all files") + '</span>' + aui.icons.icon({useIconFont: true, size: 'small', icon: 'arrows-up', accessibilityText: "Show all files", extraClasses: 'cp-files-collapser up'}) + aui.icons.icon({useIconFont: true, size: 'small', icon: 'arrows-down', accessibilityText: "Hide all files", extraClasses: 'cp-files-collapser down hidden'}) + '</a></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.minimodeBanner.soyTemplateName = 'FileViewer.Templates.minimodeBanner';
}


FileViewer.Templates.minimode = function(opt_data, opt_ignored) {
  return '<ol id="cp-thumbnails"/>';
};
if (goog.DEBUG) {
  FileViewer.Templates.minimode.soyTemplateName = 'FileViewer.Templates.minimode';
}


FileViewer.Templates.thumbnail = function(opt_data, opt_ignored) {
  return '<figure role="group" class="cp-thumbnail-group"><div class="cp-thumbnail-img"><a href="#" class="cp-thumbnail-img-container size-48 ' + soy.$$escapeHtml(opt_data.iconClass) + ' has-thumbnail"><img src="' + soy.$$escapeHtml(opt_data.thumbnailSrc) + '" alt="' + soy.$$escapeHtml(AJS.format("View a larger version of {0}",opt_data.title)) + '" /></a></div><figcaption class="cp-thumbnail-title" aria-label="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</figcaption></figure>';
};
if (goog.DEBUG) {
  FileViewer.Templates.thumbnail.soyTemplateName = 'FileViewer.Templates.thumbnail';
}


FileViewer.Templates.placeholderThumbnail = function(opt_data, opt_ignored) {
  return '<figure role="group" class="cp-thumbnail-group"><div class="cp-thumbnail-img"><a href="#" class="cp-thumbnail-img-container size-48 ' + soy.$$escapeHtml(opt_data.iconClass) + '"></a></div><figcaption class="cp-thumbnail-title" aria-label="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</figcaption></figure>';
};
if (goog.DEBUG) {
  FileViewer.Templates.placeholderThumbnail.soyTemplateName = 'FileViewer.Templates.placeholderThumbnail';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-minimode.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('minimode/MinimodePanel',
  [
    'jquery',
    'ajs',
    'backbone',
    'minimode/ThumbnailView',
    'template-store-singleton'
  ],
  function (
    $,
    AJS,
    Backbone,
    FileThumbnailView,
    templateStore
  ) {
    'use strict';

    var FileMinimodeView = Backbone.View.extend({

      id: 'cp-footer-minimode',

      initialize: function (options) {
        this.subviews = [];
        this._fileViewer = options.fileViewer;
        this._panelView = options.panelView;
        this.listenTo(this.collection, 'add reset', this.render);
        this.listenTo(this._panelView, 'renderPanel', this._forceChromeRepaint);
        this.listenTo(this._panelView, 'renderPanel', this.scrollToSelected);
        this.$minimode = $(templateStore.get('minimode')());
        this.$minimode.appendTo(this.$el);
      },

      closeOldSubviews: function () {
        while (this.subviews.length > 0) {
          var view = this.subviews.pop();
          view.remove();
          view.unbind();
        }
      },

      render: function () {
        this.closeOldSubviews();

        this.collection.each(function (model) {
          var view = new FileThumbnailView({
            model: model,
            fileViewer: this._fileViewer,
            panelView: this._panelView
          });
          this.subviews.push(view);
          $(view.render().el).appendTo(this.$minimode);
        }, this);

        return this;
      },

      scrollToSelected: function () {
        var file = this._fileViewer.getCurrentFile();
        this.subviews.forEach(function (view) {
          if (view.model === file) {
            var topPos = view.$el.get(0).offsetTop - 59;
            if ((topPos) && this.$el.scrollTop !== topPos) {
              this.$el.find('#cp-thumbnails').scrollTop(topPos);
            }
          }
        }.bind(this));
      },

      _forceChromeRepaint: function () {
        // Chrome doesn't respect the 100% height on images once the container is resized.
        var $img = $('#cp-img');
        if ($img.length) {
          var $preview = $img.closest('#cp-image-preview'),
            left = $preview.scrollLeft(),
            top = $preview.scrollTop();
          $img.css('display', 'none').height();
          $img.css('display', 'inline-block');
          $preview.scrollLeft(left);
          $preview.scrollTop(top);
        }
      }

    });

    return FileMinimodeView;
  }
);

define('minimode/minimodePlugin', [
  'minimode/MinimodeToggle',
  'minimode/MinimodePanel'
], function (
  MinimodeToggle,
  MinimodePanel
) {
  'use strict';

  var minimodePlugin = function (fileViewer) {
    var fileView = fileViewer.getView();
    var sinkView = fileView.fileSinkView;
    var metaView = fileView.fileMetaView;

    if (!fileViewer.getConfig().enableMiniMode) {
      return;
    }

    metaView.addLayerView('minimodeToggle', MinimodeToggle, {
      predicate: MinimodeToggle.predicate
    });
    sinkView.addPanelView('minimode', MinimodePanel);
  };

  return minimodePlugin;
});
define('minimode/MinimodeToggle', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var MinimodeToggle = Backbone.View.extend({

    events: {
      'click #cp-files-label': '_toggleMinimode'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._sinkView = this._fileViewer.getView().fileSinkView;
    },

    render: function () {
      this.$el.html(templateStore.get('minimodeBanner')());
      this._setShowAllFilesVisible();
      return this;
    },

    _toggleMinimode: function (event) {
      event.preventDefault();

      var analytics = this._fileViewer.analytics;

      if (this._sinkView.isPanelInitialized('minimode')) {
        this._sinkView.teardownPanel('minimode');
        analytics.send('files.fileviewer-web.minimode.closed');
      } else {
        this._sinkView.initializePanel('minimode');
        analytics.send('files.fileviewer-web.minimode.opened');
      }

      this._setShowAllFilesVisible();
    },

    _setShowAllFilesVisible: function () {
      var visible = this._sinkView.isPanelInitialized('minimode');
      this.$('.cp-files-collapser.up').toggleClass('hidden', visible);
      this.$('.cp-files-collapser.down').toggleClass('hidden', !visible);
    }

  }, {

    predicate: function (fileViewer) {
      return fileViewer._fileState.collection.length > 1;
    }

  });

  return MinimodeToggle;
});

define('minimode/ThumbnailView',
  [
    'ajs',
    'backbone',
    'jquery',
    'underscore',
    'file-types',
    'icon-utils',
    'template-store-singleton'
  ],
  function (
    AJS,
    Backbone,
    $,
    _,
    fileTypes,
    iconUtils,
    templateStore
  ) {
    'use strict';

    var ThumbnailView = Backbone.View.extend({

      className: 'cp-thumbnail',

      tagName: 'li',

      events: {
        'click' : 'jumpToFile'
      },

      initialize: function (options) {
        this._fileViewer = options.fileViewer;
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(options.panelView, 'renderPanel', this.setSelected);
      },

      jumpToFile: function (event) {
        event.preventDefault();

        this._fileViewer.showFileWithCID(this.model.cid)
        .then(function () {
          var contentView = this._fileViewer.getView().fileContentView;
          var currentViewer;
          if (contentView.isLayerInitialized('content')) {
            currentViewer = contentView.getLayerForName('content')._viewer;
            currentViewer && currentViewer.play && currentViewer.play();
          }
        }.bind(this))
        .always(
          this._fileViewer.analytics.fn('files.fileviewer-web.minimode.thumbnail.clicked')
        );
      },

      setSelected: function () {
        // this may not be the same as file being shown, e.g., a different version of file is shown
        var file = this._fileViewer._fileState.getCurrent();
        if (file === this.model) {
          this.$el.addClass('selected');
        } else if (this.$el.hasClass('selected')) {
          this.$el.removeClass('selected');
        }
      },

      onThumbLoadError: function (ev) {
        var el = $(ev.target);
        el.parent().removeClass('has-thumbnail');
        el.remove();
      },

      render: function () {
        var type = this.model.get('type'),
          thumbnailSrc = this.model.get('thumbnail'),
          isImage = fileTypes.isImage(type);

        var generateThumbnail = this._fileViewer.getConfig().generateThumbnail;

        var $thumbnail = $(templateStore.get('placeholderThumbnail')({
          iconClass: iconUtils.getCssClass(type),
          title: this.model.get('title')
        }));

        this.$el.empty().append($thumbnail);

        if (thumbnailSrc && generateThumbnail) {
          generateThumbnail(this.model).done(function (thumbSrc) {
            $thumbnail.replaceWith(templateStore.get('thumbnail')({
              iconClass: iconUtils.getCssClass(type),
              thumbnailSrc: thumbSrc,
              title: this.model.get('title')
            }));
            this.$el.find('img').error(this.onThumbLoadError);
          }.bind(this));
        } else if (isImage || thumbnailSrc) {
          $thumbnail.replaceWith(templateStore.get('thumbnail')({
            iconClass: iconUtils.getCssClass(type),
            thumbnailSrc: thumbnailSrc || this.model.get('src'),
            title: this.model.get('title')
          }));
          this.$el.find('img').error(this.onThumbLoadError);
        }

        return this;
      }

    });

    return ThumbnailView;
  });

(function () {
  'use strict';
  var FileViewer = require('file-viewer');
  var minimodePlugin = require('minimode/minimodePlugin');
  FileViewer.registerPlugin('minimode', minimodePlugin);
}());

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = '/module-backend/asynchronous.js' */
define("jira/fileviewer/module-backend/asynchronous",["wrm/require","jira/jquery/deferred","jquery","wrm/context-path"],function(wrmRequire,Deferred,$,wrmContextPath){var PATH_REGEXP=/(.+[\/])[^\/]+/;return function(modulePath){var WRM_MAPPING={"pdf-viewer":"wr!com.atlassian.jira.jira-fileviewer-plugin:fileviewer-pdf"};var WORKER_JS_RESOURCE_NAME="com.atlassian.jira.jira-fileviewer-plugin:fileviewer-pdf-worker";function getPdfConfig(){var dfd=new Deferred();$.ajax({url:wrmContextPath()+"/rest/webResources/1.0/resources",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({r:[WORKER_JS_RESOURCE_NAME],c:[],xc:[],xr:[]})}).done(function(data){var workerSrc=data.resources[0].url;var cMapUrl=workerSrc.match(PATH_REGEXP)[1]+"bcmaps/";dfd.resolve({workerSrc:workerSrc,cMapUrl:cMapUrl})}).fail(dfd.reject.bind(dfd));return dfd.promise()}if(WRM_MAPPING[modulePath]){return wrmRequire(WRM_MAPPING[modulePath])}else{if(modulePath==="pdf-config"){return getPdfConfig()}}}});;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = '/module-backend/analytics.js' */
define("jira/fileviewer/module-backend/analytics",["jira/analytics"],function(analytics){return function(key,data){analytics.send({name:key,data:data})}});;